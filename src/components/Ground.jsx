import {
  Cloud,
  MeshReflectorMaterial,
  Text,
  useGLTF,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function EarthModel(props) {
  const { nodes, materials } = useGLTF("/earth-model-transformed.glb");
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 10;
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        geometry={nodes.Sphere001_1.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        geometry={nodes.Sphere001_2.geometry}
        material={materials["Material.005"]}
      />
    </group>
  );
}

function Ground() {
  const shiva = useVideoTexture("/alpha-shiv.webm");
  const earth = useVideoTexture("/earth-alpha.webm");
  return (
    <>
      {/* <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry attach="geometry" args={[50, 150]} />
        <MeshReflectorMaterial
          attach="material"
          color="#a0a0a0"
          blur={[200, 100]}
          resolution={512}
          mirror={0.8}
          mixBlur={1}
          mixStrength={1}
          metalness={0.95}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
        />
      </mesh> */}
      <mesh position={[10, -20, -180]}>
        <planeGeometry attach="geometry" args={[450, 300]} />
        <meshStandardMaterial map={shiva} transparent />
      </mesh>
      <Text
        // font="../assets/fonts/Gilroy-SemiBold.ttf"
        fontSize={6}
        position={[-2, 18, -40]}
      >
        Welcome To
      </Text>
      <Text
        // font="../assets/fonts/Gilroy-SemiBold.ttf"
        fontSize={6}
        position={[0, 10, -40]}
      >
        Karauli Shankar
      </Text>
      <Text
        // font="../assets/fonts/Gilroy-SemiBold.ttf"
        fontSize={15}
        position={[0, -10, -40]}
      >
        M A H A D E V &nbsp; D H A M
      </Text>
      <mesh position={[0, -10, -58]}>
        <planeGeometry attach="geometry" args={[300, 180]} />
        <meshStandardMaterial map={earth} transparent />
      </mesh>
      {/* <EarthModel position={[0, -50, -40]} scale={40} /> */}
    </>
  );
}

export default Ground;
