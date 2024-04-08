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
        onPointerEnter={() => (strength.current = 0.3)}
        onPointerLeave={() => (strength.current = 0.05)}
        ref={ref}
        args={[1.2, 128, 128]}
      >
        <LayerMaterial
          color={"black"}
          lighting={"physical"}
          transmission={1}
          roughness={0}
          thickness={1}
        >
          {/* <Depth
              near={0.4854}
              far={0.7661999999999932}
              origin={[-0.4920000000000004, 0.4250000000000003, 0]}
              colorA={"#fec5da"}
              colorB={"#d6e7f2"}
            /> */}
          <Displace ref={displaceRef} strength={0.1} scale={2} />
        </LayerMaterial>
      </Sphere>
      {/* <Pointer /> */}
    </group>
  );
}
