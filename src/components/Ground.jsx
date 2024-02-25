import { Cloud, MeshReflectorMaterial, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Ground() {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  const galaxy = useTexture("/shiv-bg-two.png");
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
      <mesh rotation={[0, 0, 0]} position={[0, 5, 0]} scale={0.8}>
        <planeGeometry attach="geometry" args={[40, 30]} />
        <meshStandardMaterial map={galaxy} transparent />
      </mesh>
    </>
  );
}

export default Ground;
