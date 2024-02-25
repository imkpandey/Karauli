/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import { Suspense, useLayoutEffect, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function App() {
  const appRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tlIntro = gsap.timeline({ delay: 1 });

      tlIntro.fromTo(
        ".text-block",
        {
          scale: 0.8,
        },
        {
          top: -65,
          scale: 1,
          duration: 5,
          ease: "power4.out",
        }
      );
    }, appRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={appRef} className="app">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/earth-alpha.webm" type="video/webm" />
        </video>
      </div>
      <div className="video-two-container">
        <video autoPlay loop muted>
          <source src="/shiv.webm" type="video/webm" />
        </video>
      </div>
      {/* <div className="img-container">
        <img src="/shiva-bg.jpg" alt="texture" />
      </div> */}
      <div className="overlay"></div>
      <div className="hero-heading">
        <div className="text-block">
          <div className="text-small">
            <p>
              Welcome To <br /> KARAULI SHANKAR
            </p>
          </div>
          <h1 className="text-heading">MAHADEV DHAM</h1>
        </div>
      </div>
      <Canvas gl={{ alpha: true }} camera={{ position: [0, 10, 60], fov: 60 }}>
        <OrbitControls makeDefault />
        {/* <color attach="background" args={["black"]} /> */}
        {/* <fog attach="fog" args={["black", 15, 20]} /> */}
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
