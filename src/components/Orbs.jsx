import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Cloud,
  OrbitControls,
  Sky,
  Float,
  Instances,
  Clouds,
  useScroll,
  Center,
  Text,
  MeshTransmissionMaterial,
  MeshDistortMaterial,
  MeshRefractionMaterial,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { easing, random } from "maath";
import { useRef } from "react";
import { Trishul } from "./Trishul";
import Blob from "./Blob";
import { lerp } from "three/src/math/MathUtils.js";

function Orbs() {
  const box = random.inBox(new Float32Array(100), { sides: [100, 100, 100] });
  const spherical = random.inSphere(new Float32Array(1200), { radius: 10 });
  const { width, height } = useThree((state) => state.viewport);
  const scroll = useScroll();

  const orbsRef = useRef();
  const innerOrbsRef = useRef();
  const outerOrbsRef = useRef();
  const textOneRef = useRef();
  const textTwoRef = useRef();
  const textThreeRef = useRef();
  const textFourRef = useRef();
  const textFiveRef = useRef();
  const textSixRef = useRef();
  const textSevenRef = useRef();
  const textEightRef = useRef();
  const textNineRef = useRef();
  const textTenRef = useRef();
  const textElevenRef = useRef();
  const textTwelveRef = useRef();

  const targetPosition = new THREE.Vector3(0, -150, -170);
  const targetRotation = new THREE.Euler(Math.PI / 2, 0, 0);

  let animationStarted = false;
  const animationDuration = 3;
  let animationStartTime;

  useFrame((state, delta) => {
    if (scroll.offset > 0.8 && scroll.offset < 0.87) {
      outerOrbsRef.current.position.z = -50;
    }
    if (scroll.offset > 0.8) {
      orbsRef.current.position.z = -2000;
      textOneRef.current.fontSize = 0;
      textTwoRef.current.fontSize = 0;
      textThreeRef.current.fontSize = 0;
      textFourRef.current.fontSize = 0;
      textFiveRef.current.fontSize = 0;
      textSixRef.current.fontSize = 0;
      textSevenRef.current.fontSize = 0;
      textEightRef.current.fontSize = 0;
      textNineRef.current.fontSize = 0;
      textTenRef.current.fontSize = 0;
      textElevenRef.current.fontSize = 0;
      textTwelveRef.current.fontSize = 0;

      // outerOrbsRef.current.rotation.x = Math.PI / 2;
      // outerOrbsRef.current.position.z = -50;
      // outerOrbsRef.current.rotation.z += delta / 2;
      outerOrbsRef.current.scale.set(0.5, 0.5, 0.5);
      innerOrbsRef.current.visible = false;
    } else {
      orbsRef.current.position.z = -1550;
      textOneRef.current.fontSize = 10;
      textTwoRef.current.fontSize = 10;
      textThreeRef.current.fontSize = 10;
      textFourRef.current.fontSize = 10;
      textFiveRef.current.fontSize = 10;
      textSixRef.current.fontSize = 10;
      textSevenRef.current.fontSize = 10;
      textEightRef.current.fontSize = 10;
      textNineRef.current.fontSize = 10;
      textTenRef.current.fontSize = 10;
      textElevenRef.current.fontSize = 10;
      textTwelveRef.current.fontSize = 10;
      outerOrbsRef.current.rotation.x = 0;
      outerOrbsRef.current.position.x = 0;
      outerOrbsRef.current.position.y = 0;
      outerOrbsRef.current.rotation.z = Math.PI;
      innerOrbsRef.current.visible = true;
    }

    if (scroll.offset > 0.89 && !animationStarted) {
      animationStarted = true;
      animationStartTime = state.clock.elapsedTime;
    }

    if (animationStarted) {
      const elapsedTime = state.clock.elapsedTime - animationStartTime;

      const progress = Math.min(elapsedTime / animationDuration, 1);

      outerOrbsRef.current.rotation.z += delta / 2;

      outerOrbsRef.current.position.lerp(targetPosition, progress);
      outerOrbsRef.current.rotation.x = lerp(
        outerOrbsRef.current.rotation.x,
        targetRotation.x,
        progress
      );

      if (progress === 1) {
        animationStarted = false;
        animationStartTime = undefined;
      }
    }
  });

  return (
    <>
      {/* <group position={[0, 0, -100]} rotation={[0, Math.PI / 2, 0]}>
        <Clouds scale={0.5} limit={spherical.length}>
          <Cloud
            segments={spherical.length}
            seed={1}
            volume={100}
            growth={200}
            smallestVolume={0.5}
            color="#000000"
            bounds={[150, 550, 900]}
            opacity={0.7}
            speed={0.2}
            concentrate="inside"
            //   distribute={(cloud, index) => ({
            //     point: {
            //       x: spherical[index * 3 + 0],
            //       y: spherical[index * 3 + 1],
            //       z: spherical[index * 3 + 2],
            //     },
            //   })}
          />
        </Clouds>
      </group> */}

      {/* <Clouds
        renderOrder={1000}
        scale={2}
        limit={positions.length}
        material={THREE.MeshLambertMaterial}
      >
        <Float floatIntensity={4} rotationIntensity={4}>
          <Cloud
            ref={suz}
            scale={1}
            position={[20, -15, -40]}
            segments={positions.length}
            seed={1}
            volume={2}
            growth={2}
            bounds={10}
            opacity={0.1}
            speed={0.2}
            concentrate="random"
            color="salmon"
            distribute={(cloud, index) => ({
              point: {
                x: positions[index * 3 + 0],
                y: positions[index * 3 + 1],
                z: positions[index * 3 + 2],
              },
              volume: Math.random(),
            })}
          >
            <pointLight decay={1} intensity={100} distance={19} />
          </Cloud>
        </Float>
      </Clouds> */}
      <group ref={orbsRef} position={[0, -10, -1550]}>
        <group ref={innerOrbsRef}>
          <Blob position={[0, 80, -50]} scale={10} />
          <Text
            ref={textOneRef}
            fontSize={5}
            position={[0, 105, -50]}
            font="Gilroy-Medium.ttf"
          >
            Depression
          </Text>
          <Blob position={[-80, 20, -50]} scale={10} />
          <Text
            ref={textTwoRef}
            fontSize={5}
            position={[-120, 20, -50]}
            font="Gilroy-Medium.ttf"
          >
            Anxiety
          </Text>
          <Blob position={[80, 20, -50]} scale={10} />
          <Text
            ref={textThreeRef}
            fontSize={5}
            position={[120, 20, -50]}
            font="Gilroy-Medium.ttf"
          >
            Stress
          </Text>
          <Blob position={[-50, -60, -50]} scale={10} />
          <Text
            ref={textFourRef}
            fontSize={5}
            position={[-100, -55, -50]}
            font="Gilroy-Medium.ttf"
          >
            Delusional
          </Text>
          <Text
            ref={textElevenRef}
            fontSize={5}
            position={[-100, -68, -50]}
            font="Gilroy-Medium.ttf"
          >
            Thoughts
          </Text>
          <Blob position={[50, -60, -50]} scale={10} />
          <Text
            ref={textFiveRef}
            fontSize={5}
            position={[100, -55, -50]}
            font="Gilroy-Medium.ttf"
          >
            Intrusive
          </Text>
          <Text
            ref={textTwelveRef}
            fontSize={2}
            position={[100, -68, -50]}
            font="Gilroy-Medium.ttf"
          >
            Thoughts
          </Text>
        </group>

        <group ref={outerOrbsRef} rotation={[0, 0, Math.PI]}>
          <Blob position={[0, 80, -300]} scale={10} />
          <Text
            ref={textSixRef}
            fontSize={10}
            position={[0, 60, -300]}
            font="Gilroy-Medium.ttf"
            rotation={[0, 0, Math.PI]}
          >
            Paranormal Thoughts
          </Text>
          <Blob position={[-80, 20, -300]} scale={10} />
          <Text
            ref={textSevenRef}
            fontSize={10}
            position={[-80, 0, -300]}
            font="Gilroy-Medium.ttf"
            rotation={[0, 0, Math.PI]}
          >
            Guilt
          </Text>
          <Blob position={[80, 20, -300]} scale={10} />
          <Text
            ref={textEightRef}
            fontSize={10}
            position={[80, 0, -300]}
            font="Gilroy-Medium.ttf"
            rotation={[0, 0, Math.PI]}
          >
            Fear
          </Text>
          <Blob position={[-50, -60, -300]} scale={10} />
          <Text
            ref={textNineRef}
            fontSize={10}
            position={[-50, -80, -300]}
            font="Gilroy-Medium.ttf"
            rotation={[0, 0, Math.PI]}
          >
            Grief
          </Text>
          <Blob position={[50, -60, -300]} scale={10} />
          <Text
            ref={textTenRef}
            fontSize={10}
            position={[50, -80, -300]}
            font="Gilroy-Medium.ttf"
            rotation={[0, 0, Math.PI]}
          >
            Anger
          </Text>
        </group>
        <Trishul
          position={[0, -300, -200]}
          scale={15}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </>
  );
}

export default Orbs;
