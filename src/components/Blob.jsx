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
        displaceRef.current.strength,
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
          color={"#ffffff"}
          lighting={"physical"}
          transmission={1.2}
          roughness={0}
          thickness={0}
        >
          <Depth
            near={-0.5854}
            far={0.16619999999932}
            colorA={"#ffffff"}
            colorB={"#ffffff"}
          />
          <Displace ref={displaceRef} strength={0} scale={2} />
        </LayerMaterial>
      </Sphere>
    </group>
  );
}
