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
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import Ground from "./Ground";
import {
  Bloom,
  EffectComposer,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";
import { easing, random } from "maath";
import tunnel from "tunnel-rat";
import Planets from "./Planets";
import Orbs from "./Orbs";
import { Scene } from "./Scene";

function Model(props) {
  const { scene } = useGLTF("/earth-transformed.glb");
  return <primitive object={scene} {...props} />;
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 4, 1 + state.mouse.y, 25),
      0.04
    );
    state.camera.lookAt(0, 0, 0);
  });
}

const MiniStars = () => {
  const ref = useRef();
  const numPoints = 8000;

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(numPoints), { radius: 1000 })
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
          size={0.35}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

function Stars(props) {
  const ref = useRef();
  const numPoints = 8000;

  const [sphere] = useState(
    () => random.inSphere(new Float32Array(numPoints), { radius: 1500 })
    // random.inBox(new Float32Array(numPoints), { sides: [100, 200, 100] })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, 10, -200]}>
      <Points ref={ref} positions={sphere} frustumCulled={true} {...props}>
        <PointMaterial color={[4.2, 4.9, 10.2]} size={0.75} />
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

    if (scroll.offset > 0.5) {
      ref.current.position.z = 2000 * scroll.offset;
      starsRef.current.position.z = -2000;
    } else {
      starsRef.current.position.z = 0;
    }

    // if (scroll.offset > 0.52 && scroll.offset < 0.7) {
    //   state.scene.background = new THREE.Color("#ffffff");
    // } else {
    //   state.scene.background = new THREE.Color("#000000");
    // }

    // if (scroll.offset > 0.25 && scroll.offset < 0.5) {
    //   ref.current.position.z = 2000 * scroll.offset;
    // }

    // if (scroll.offset > 0.2 && scroll.offset < 0.5) {
    //   ref.current.position.z = 3000 * scroll.offset;
    // }
  });

  return (
    <>
      <group ref={ref} position={[0, 5, 0]}>
        {/* <group position={[0, 0, -20]}>
          <mesh receiveShadow castShadow position={[20, 0, -20]}>
            <sphereGeometry args={[4, 128, 64]} />
            <meshStandardMaterial
              emissive="#A162F1"
              emissiveIntensity={2.5}
              toneMapped={false}
              color="#A162F1"
            />
          </mesh>
          <mesh receiveShadow castShadow position={[10, 15, -20]}>
            <sphereGeometry args={[4, 128, 64]} />
            <meshStandardMaterial
              emissive="#A162F1"
              emissiveIntensity={2.5}
              toneMapped={false}
              color="#A162F1"
            />
          </mesh>
          <mesh receiveShadow castShadow position={[-10, 15, -20]}>
            <sphereGeometry args={[4, 128, 64]} />
            <meshStandardMaterial
              emissive="#A162F1"
              emissiveIntensity={2.5}
              toneMapped={false}
              color="#A162F1"
            />
          </mesh>
          <mesh receiveShadow castShadow position={[-20, 0, -20]}>
            <sphereGeometry args={[4, 128, 64]} />
            <meshStandardMaterial
              emissive="#A162F1"
              emissiveIntensity={2.5}
              toneMapped={false}
              color="#A162F1"
            />
          </mesh>
          <mesh receiveShadow castShadow position={[10, -15, -20]}>
            <sphereGeometry args={[4, 128, 64]} />
            <meshStandardMaterial
              emissive="#A162F1"
              emissiveIntensity={2.5}
              toneMapped={false}
              color="#A162F1"
            />
          </mesh>
          <mesh receiveShadow castShadow position={[-10, -15, -20]}>
            <sphereGeometry args={[4, 128, 64]} />
            <meshStandardMaterial
              emissive="#A162F1"
              emissiveIntensity={2.5}
              toneMapped={false}
              color="#A162F1"
            />
          </mesh>
        </group> */}

        {/* <MovingPoints /> */}
        <group position={[0, 1, -500]}>
          <group ref={starsRef} position={[0, 0, -200]}>
            <Stars />
            <MiniStars />
          </group>
          <Planets />
          <ambientLight intensity={Math.PI} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <EffectComposer>
            {/* <N8AO aoRadius={1} intensity={2} /> */}
            {/* <TiltShift2 blur={0.5} /> */}
            <Bloom mipmapBlur luminanceThreshold={1} />
          </EffectComposer>
        </group>
        <Ground />
        <group position={[0, 0, -1500]}>
          <Orbs />
        </group>
      </group>
      <Intro />
    </>
  );
};

export default Experience;
