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
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import Ground from "./Ground";
import {
  Bloom,
  EffectComposer,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";
import { random } from "maath";

function Model(props) {
  const { scene } = useGLTF("/earth-transformed.glb");
  return <primitive object={scene} {...props} />;
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 24),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

function Stars(props) {
  const ref = useRef();
  const numPoints = 8000;

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(numPoints), { radius: 100 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, 10, 0]}>
      <Points ref={ref} positions={sphere} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={[1.2, 4.9, 10.2]}
          size={0.3}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Experience = () => {
  const earth = useTexture("/earth.jpg");
  return (
    <>
      <group position={[0, -1, 0]}>
        {/* <Moon rotation={[0, Math.PI, 0]} position={[0, 0, 8]} /> */}
        {/* <Center>
          <GodModel
            rotation={[0, Math.PI, 0]}
            position={[0, -60, -40]}
            scale={10}
          />
        </Center> */}
        {/* <Float floatIntensity={1.25} speed={2}> */}
        {/* <mesh receiveShadow castShadow position={[30, 0, 8]}>
            <sphereGeometry args={[4, 128, 64]} />
            <meshStandardMaterial
              emissive="#A162F1"
              emissiveIntensity={2.5}
              toneMapped={false}
              color="#A162F1"
            />
          </mesh> */}
        {/* </Float> */}

        {/* <mesh receiveShadow castShadow position={[0, 10, 8]}>
          <sphereGeometry args={[4, 128, 64]} />
          <meshStandardMaterial
            emissive="#0000FF"
            emissiveIntensity={2.5}
            toneMapped={false}
            color="#03ADDF"
          />
        </mesh> */}

        {/* <mesh receiveShadow castShadow position={[0, -10, 8]}>
          <sphereGeometry args={[4, 128, 64]} />
          <meshStandardMaterial
            emissive="#04B500"
            emissiveIntensity={2.5}
            toneMapped={false}
            color="#04B500"
          />
        </mesh>
        {/* <mesh receiveShadow castShadow position={[0, -30, 8]}>
          <sphereGeometry args={[4, 128, 64]} />
          <meshStandardMaterial
            emissive="#FFC800"
            emissiveIntensity={2.5}
            toneMapped={false}
            color="#FFC800"
          />
        </mesh>
        <mesh receiveShadow castShadow position={[0, -50, 8]}>
          <sphereGeometry args={[4, 128, 64]} />
          <meshStandardMaterial
            emissive="#FB6B01"
            emissiveIntensity={2.5}
            toneMapped={false}
            color="#FB6B01"
          />
        </mesh> */}

        {/* <mesh receiveShadow castShadow position={[0, -20, 8]}>
          <sphereGeometry args={[64, 128, 64]} />
          <meshStandardMaterial map={earth} />
        </mesh> */}
        {/* <mesh receiveShadow castShadow position={[15, 15, 0]}>
            <torusGeometry args={[3, 0.3, 128, 64]} />
            <meshStandardMaterial
              emissive="#ff00ff"
              emissiveIntensity={2.5}
              toneMapped={false}
              color="#ff00ff"
            />
          </mesh>
          <mesh receiveShadow castShadow position={[-15, 15, 0]}>
            <torusGeometry args={[3, 0.3, 128, 64]} />
            <meshStandardMaterial
              emissive="#ff00ff"
              emissiveIntensity={2.5}
              toneMapped={false}
              color="#ff00ff"
            />
          </mesh> */}
        {/* <MovingPoints /> */}
        <Stars />
        <EffectComposer>
          {/* <N8AO aoRadius={1} intensity={2} /> */}
          {/* <TiltShift2 blur={0.5} /> */}
          <Bloom mipmapBlur luminanceThreshold={0.5} />
        </EffectComposer>
        {/* <Ground /> */}
      </group>
      <ambientLight intensity={3.5} />
      <spotLight position={[-30, 10, 0]} intensity={2.7} />
      <directionalLight position={[-10, 0, -10]} intensity={2.3} />
      <Intro />
    </>
  );
};

export default Experience;
