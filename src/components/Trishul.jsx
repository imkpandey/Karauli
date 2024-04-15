import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { easing } from "maath";
import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { lerp } from "three/src/math/MathUtils.js";

export function Trishul(props) {
  const { nodes, materials } = useGLTF("/trishul-transformed.glb");
  const ref = useRef();
  const scroll = useScroll();
  const [emissive, setEmissive] = useState(1.5);

  const targetPosition = new THREE.Vector3(0, -10, -150);
  let animationStarted = false;
  const animationDuration = 10;
  let animationStartTime;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, ref);

    return () => ctx.revert();
  }, [scroll.offset]);

  useFrame((state, delta) => {
    ref.current.rotation.z += delta;

    if (scroll.offset > 0.92) {
      setEmissive(50.5);
    } else {
      setEmissive(1.5);
    }

    if (scroll.offset < 0.87) {
      ref.current.position.y = -800;
    }

    if (scroll.offset > 0.87 && !animationStarted) {
      animationStarted = true;
      animationStartTime = state.clock.elapsedTime;
    }

    if (animationStarted) {
      const elapsedTime = state.clock.elapsedTime - animationStartTime;

      const progress = Math.min(elapsedTime / animationDuration, 1);

      ref.current.position.lerp(targetPosition, progress);

      if (progress === 1) {
        animationStarted = false;
        animationStartTime = undefined;
      }
    }
  });

  return (
    <group ref={ref} position={(0, -800, 0)} {...props} dispose={null}>
      <mesh geometry={nodes.model_0.geometry} material={nodes.model_0.material}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#FF5733"
          emissiveIntensity={emissive}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/trishul-transformed.glb");
