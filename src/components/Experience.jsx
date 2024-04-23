/* eslint-disable react/no-unknown-property */
import {
  Float,
  PointMaterial,
  Points,
  useGLTF,
  useTexture,
  Sparkles,
  Point,
  useAnimations,
  Center,
  useScroll,
  Html,
  Text,
  Line,
  Environment,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import Ground from "./Ground";
import {
  Autofocus,
  Bloom,
  DepthOfField,
  EffectComposer,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";
import { easing, random } from "maath";
import tunnel from "tunnel-rat";
import Planets from "./Planets";
import Orbs from "./Orbs";
import { Scene } from "./Scene";
import Blob from "./Blob";
import { Trishul } from "./Trishul";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Model(props) {
  const { scene } = useGLTF("/earth-transformed.glb");
  return <primitive object={scene} {...props} />;
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 2, 1.5 + state.mouse.y, 25),
      0.04
    );
    state.camera.lookAt(0, 0, 0);
  });
}

const MiniStars = () => {
  const ref = useRef();
  const numPoints = 4000;

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(numPoints), { radius: 800 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, 10, -200]}>
      <Points ref={ref} positions={sphere} frustumCulled={true}>
        <PointMaterial
          transparent
          color={[7.2, 4.9, 10.2]}
          size={2.35}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

function Stars(props) {
  const ref = useRef();
  const numPoints = 1500;

  const [sphere] = useState(
    () => random.inSphere(new Float32Array(numPoints), { radius: 2000 })
    // random.inBox(new Float32Array(numPoints), { sides: [100, 200, 100] })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, 10, -200]}>
      <Points ref={ref} positions={sphere} frustumCulled={true} {...props}>
        <PointMaterial color={[4.2, 4.9, 10.2]} size={2.75} />
      </Points>
    </group>
  );
}

const Experience = () => {
  const earth = useTexture("/earth.jpg");
  const ref = useRef();
  const scroll = useScroll();
  const starsRef = useRef();

  useFrame((state, delta) => {
    if (scroll.offset > 0 && scroll.offset < 0.4) {
      ref.current.position.z = 2000 * scroll.offset;
    }

    if (scroll.offset > 0.5 && scroll.offset < 0.85) {
      ref.current.position.z = 2500 * scroll.offset;
      starsRef.current.position.z = -2000;
    }

    // else if (scroll.offset > 0.55 && scroll.offset < 0.6) {
    //   ref.current.position.z = 2500 * scroll.offset;
    // }
    else if (scroll.offset > 0.85) {
      starsRef.current.position.z = -2000;
    } else {
      starsRef.current.position.z = 0;
    }
  });

  return (
    <>
      <group ref={ref} position={[0, 5, 0]}>
        {/* <MovingPoints /> */}
        <group position={[0, 1, -600]}>
          <group ref={starsRef} position={[0, 0, -200]}>
            <Stars />
            {/* <MiniStars /> */}
          </group>
          <Planets />
          <ambientLight intensity={Math.PI} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <EffectComposer>
            {/* <DepthOfField
              focusDistance={0.1} // where to focus
              focalLength={0.1} // focal length
              bokehScale={1} // bokeh size
            /> */}
            {/* <N8AO aoRadius={1} intensity={2} /> */}
            {/* <TiltShift2 blur={0.1} /> */}
            <Bloom mipmapBlur luminanceThreshold={1} />
          </EffectComposer>
        </group>
        <Ground />
        <Orbs />
      </group>
      <Intro />
    </>
  );
};

export default Experience;
