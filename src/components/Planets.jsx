import {
  Cloud,
  MeshReflectorMaterial,
  Text,
  useScroll,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Planets() {
  const scroll = useScroll();
  const meshOneRef = useRef();
  const meshTwoRef = useRef();

  useFrame((state, delta) => {
    // For moving in the x-axis between offsets 0.22 and 0.5
    if (scroll.offset >= 0.22 && scroll.offset <= 0.5) {
      const newX1 = THREE.MathUtils.lerp(
        -70,
        0,
        (scroll.offset - 0.22) / (0.5 - 0.22)
      );
      const newX2 = THREE.MathUtils.lerp(
        70,
        0,
        (scroll.offset - 0.22) / (0.5 - 0.22)
      );

      meshOneRef.current.position.x = newX1;
      meshTwoRef.current.position.x = newX2;
    }

    // For moving in the z-axis when the offset is greater than 0.5
    if (scroll.offset >= 0.5) {
      // Calculate a base value for Z movement to ensure it starts moving from where it left off
      const baseZ1 = THREE.MathUtils.lerp(
        -120.1,
        -120.1 + 0.5 * 10,
        (0.5 - 0.22) / (0.5 - 0.22)
      );
      const baseZ2 = THREE.MathUtils.lerp(
        -120,
        -120 + 0.5 * 10,
        (0.5 - 0.22) / (0.5 - 0.22)
      );

      // Adjust the Z position based on the scroll offset, starting from the base position
      const newZ1 = baseZ1 + (scroll.offset - 0.5) * 10;
      const newZ2 = baseZ2 + (scroll.offset - 0.5) * 10;

      meshOneRef.current.position.z = newZ1;
      meshTwoRef.current.position.z = newZ2;
    } else if (scroll.offset < 0.5) {
      // Reset the Z position if we scroll back before the 0.5 offset
      // This ensures that moving backwards also reverses the Z movement
      const resetZ1 = -120.1; // Initial Z position for meshOne
      const resetZ2 = -120; // Initial Z position for meshTwo

      meshOneRef.current.position.z = resetZ1;
      meshTwoRef.current.position.z = resetZ2;
    }
  });

  return (
    <>
      <group scale={8}>
        <mesh ref={meshOneRef} position={[-300, 0, -100.1]}>
          <sphereGeometry args={[16, 128]} />
          <meshStandardMaterial
            toneMapped={false}
            color="#ffffff"
            emissive="#1da1f2"
            emissiveIntensity={10.25}
          />
        </mesh>
        <mesh ref={meshTwoRef} position={[300, 0, -100]}>
          <sphereGeometry args={[16, 128]} />
          <meshStandardMaterial
            toneMapped={false}
            color="#ffffff"
            emissive="#E25822"
            emissiveIntensity={10.25}
          />
        </mesh>
      </group>
    </>
  );
}

export default Planets;
