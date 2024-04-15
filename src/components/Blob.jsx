import { MarchingCube, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Depth, Displace, Fresnel, LayerMaterial } from "lamina";
import { useMemo, useRef } from "react";
import { MathUtils, Mesh, Vector3 } from "three";
import * as THREE from "three";

export default function Blob({ color, vec = new THREE.Vector3(), ...props }) {
  const ref = useRef();
  const api = useRef();
  const rand = useMemo(() => Math.random(), []);
  const strength = useRef(0);
  const displaceRef = useRef();

  useFrame(({ clock }, dt) => {
    ref.current.position.y = Math.sin(clock.elapsedTime + rand * 100) * 0.05;

    if (displaceRef.current.strength !== strength.current) {
      displaceRef.current.strength = MathUtils.lerp(
        displaceRef.current.strength, //
        strength.current,
        0.1
      );
    }

    if (strength.current > 0) {
      displaceRef.current.offset.x += 0.3 * dt;
    }
  });

  return (
    <group {...props}>
      <Sphere
        castShadow
        onPointerEnter={() => (strength.current = 0.8)}
        onPointerLeave={() => (strength.current = 0)}
        ref={ref}
        args={[1.2, 128, 128]}
      >
        <LayerMaterial
          color={"white"}
          lighting={"physical"}
          transmission={0.995}
          roughness={0}
          thickness={2}
        >
          {/* <Depth
            near={0.4854}
            far={0.76619999999932}
            origin={[-0.4920000000000004, 0.4250000000000003, 0]}
            colorA={"#e9f2f8"}
            colorB={"#c3dcec"}
          /> */}
          <Displace ref={displaceRef} strength={0} scale={2} />
        </LayerMaterial>
      </Sphere>
      {/* <Pointer /> */}
    </group>
  );
}
