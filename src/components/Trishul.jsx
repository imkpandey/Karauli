import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import * as THREE from "three";

export function Trishul(props) {
  const { nodes, materials } = useGLTF("/trishul-transformed.glb");
  const ref = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    ref.current.rotation.z += delta;
    if (scroll.offset > 0.85) {
      const newY1 = THREE.MathUtils.lerp(-20, -10, scroll.offset * 1.2);

      ref.current.position.y = newY1;
      ref.current.position.z = 270;
    } else {
      ref.current.position.y = -300;
    }
  });

  return (
    <group ref={ref} position={(0, -300, 0)} {...props} dispose={null}>
      <mesh geometry={nodes.model_0.geometry} material={nodes.model_0.material}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#7DF9FF"
          emissiveIntensity={1.5}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/trishul-transformed.glb");
