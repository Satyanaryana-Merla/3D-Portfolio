import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Publications,
  Statistics,
  Tech,
  Works,
} from "@/components";
import Services from "@/components/Services";
import UpArrow from "./../public/assets/icons/up-arrow.svg";

// Lazy load heavy 3D components
const HeroBackground = dynamic(() => import("@/components/HeroBackground"), {
  ssr: false,
  loading: () => <div className="absolute top-0 w-full h-[100svh] bg-gradient-to-b from-opacity-[6.33%] dark:from-[#322d6d] from-[#b0afb1] to-opacity-[39.13%] dark:to-[#663182] to-[#51afda]" />
});

const EarthContainer = dynamic(() => import("@/components/EarthContainer"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />
});

const PlayerContainer = dynamic(() => import("@/components/PlayerContainer"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />
});

const StarsCanvas = dynamic(() => import("@/components").then(mod => mod.StarsCanvas), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

function App({ loading }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <main className="relative z-0 w-full h-full">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <HeroBackground />
        <Hero loading={loading} isMobile={isMobile} />
      </div>
      <section className="relative z-0 flex md:flex-row flex-col-reverse w-full h-full overflow-hidden">
        <About />
        {!isMobile && <PlayerContainer isMobile={isMobile} />}
      </section>
      <Services />
      <Statistics />
      <Experience />
      <Tech />
      <Works />
      <Publications />
      {/* <Feedbacks /> */}
      <section className="relative z-0 flex md:flex-row justify-between flex-col-reverse w-full h-full overflow-x-hidden sm:p-8 p-2 pb-8">
        <Contact />
        <EarthContainer isMobile={isMobile} />
        <StarsCanvas />
      </section>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="fixed md:w-10 md:h-10 h-8 w-8 p-2 bottom-8 md:right-10 right-8 text-center text-secondary backdrop-filter backdrop-blur-xl bg-opacity-20 bg-tertiary rounded-lg hover:scale-110 transition-all duration-300"
      >
        <UpArrow />
      </button>
    </main>
  );
}

export default App;
