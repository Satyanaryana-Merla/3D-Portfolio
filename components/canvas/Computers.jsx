import {
  Preload,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../Loader";
import ComputerModel from "./models/ComputerModel";

function Computers({ isMobile }) {
  const { nodes, materials } = useGLTF("/models/desktop_pc/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <ambientLight intensity={0.4} />
      <spotLight intensity={0.8} position={[0, 1.5, 0.7]} angle={0.12} />
      <PerspectiveCamera makeDefault position={[0, 0, -8]} fov={30} />
      {!isMobile && (
        <>
          <pointLight intensity={1.5} position={[1, 1.3, 0]} color={"#804dee"} />
          <pointLight intensity={1.5} position={[-1, 1.3, 1]} color={"#804dee"} />
        </>
      )}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
        enablePan={false}
        autoRotateSpeed={isMobile ? 2 : 4}
        autoRotate={false}
        makeDefault
      />
      <ComputerModel
        nodes={nodes}
        materials={materials}
        scale={isMobile ? 0.45 : 0.35}
        position={isMobile ? [-0.75, -0.7, 0] : [-0.5, -0.5, 0]}
        rotation={[-0.01, 1.6, -0.1]}
      />
    </>
  );
}

function ComputersCanvas({ isMobile }) {
  const [dpr, setDpr] = useState([1, 1]);

  useEffect(() => {
    // Use lower DPR for mobile devices
    setDpr(isMobile ? [1, 1] : [1, 2]);
  }, [isMobile]);

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        powerPreference: "high-performance",
        antialias: !isMobile,
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
      className="cursor-pointer"
      frameloop="demand"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

// Preload the model
useGLTF.preload("/models/desktop_pc/scene.gltf");

export default ComputersCanvas;
