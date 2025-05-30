import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

function CanvasLoader() {
	const { progress } = useProgress();

	return (
		<Html
			as="div"
			center
			className=" flex justify-center items-center w-full h-full flex-col z-30"
		>
			<span className="canvas-loader z-30 text-white"></span>
			<p className="text-[14px] text-white font-bold mt-10 z-30">
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
}

export function PreLoader() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		// More realistic loading simulation
		const duration = 500; // 500ms total duration (matching _app.js)
		const interval = 10; // Update every 10ms
		const increment = 100 / (duration / interval);
		
		const timer = setInterval(() => {
			setProgress((prev) => {
				const next = prev + increment;
				if (next >= 100) {
					clearInterval(timer);
					return 100;
				}
				return next;
			});
		}, interval);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="w-[100svw] h-[100svh] overflow-hidden bg-bgPrimaryLight dark:bg-bgPrimaryDark z-40 fixed top-0 left-0 flex flex-col justify-center items-center gap-8">
			<div className="loader md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
				<div className="loader_cube loader_cube--color"></div>
				<div className="loader_cube loader_cube--glowing"></div>
				<span className="loader-span"></span>
			</div>
			<div className="flex flex-col items-center gap-2">
				<h1 className="text-2xl text-ctnPrimaryLight dark:text-ctnPrimaryDark font-semibold">
					{Math.round(progress)}%
				</h1>
				<p className="text-sm text-gray-500 dark:text-gray-400">Loading Portfolio...</p>
			</div>
		</div>
	);
}

export default CanvasLoader;
