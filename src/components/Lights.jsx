import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Lights = () => {
  const meshRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (!scene.userData.refs) scene.userData.refs = {};
    scene.userData.refs.lightMesh = meshRef;
  }, [scene.userData]);

  useEffect(() => {
    meshRef.current.lookAt(0, 0, 0);
  }, []);

  return (
    <>
      <ambientLight intensity={3} />
      <mesh ref={meshRef} position={[0, 3, -5]}>
        <circleGeometry args={[10, 64]} />
        <meshBasicMaterial color={"#ffffff"} side={THREE.DoubleSide} />
        <pointLight color={"#ffffff"} intensity={1} />
      </mesh>
    </>
  );
};

export default Lights;
