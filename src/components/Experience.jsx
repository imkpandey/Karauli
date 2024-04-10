/* eslint-disable react/no-unknown-property */
import {
  Float,
  PointMaterial,
  Points,
  useGLTF,
  useTexture,
  Sparkles,
  Point,
  useAnimations,
  Center,
  useScroll,
  Html,
  Text,
  Line,
  Environment,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import Ground from "./Ground";
import {
  Bloom,
  EffectComposer,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";
import { easing, random } from "maath";
import tunnel from "tunnel-rat";
import Planets from "./Planets";
import Orbs from "./Orbs";
import { Scene } from "./Scene";
import Blob from "./Blob";
import { Trishul } from "./Trishul";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Model(props) {
  const { scene } = useGLTF("/earth-transformed.glb");
  return <primitive object={scene} {...props} />;
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 4, 1 + state.mouse.y, 25),
      0.04
    );
    state.camera.lookAt(0, 0, 0);
  });
}

const MiniStars = () => {
  const ref = useRef();
  const numPoints = 4000;

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(numPoints), { radius: 800 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, 10, -200]}>
      <Points ref={ref} positions={sphere} frustumCulled={true}>
        <PointMaterial
          transparent
          color={[7.2, 4.9, 10.2]}
          size={2.35}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

function Stars(props) {
  const ref = useRef();
  const numPoints = 4000;

  const [sphere] = useState(
    () => random.inSphere(new Float32Array(numPoints), { radius: 1500 })
    // random.inBox(new Float32Array(numPoints), { sides: [100, 200, 100] })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, 10, -200]}>
      <Points ref={ref} positions={sphere} frustumCulled={true} {...props}>
        <PointMaterial color={[4.2, 4.9, 10.2]} size={2.75} />
      </Points>
    </group>
  );
}

const Experience = () => {
  const earth = useTexture("/earth.jpg");
  const ref = useRef();
  const scroll = useScroll();
  const starsRef = useRef();
  const orbsRef = useRef();
  const innerOrbsRef = useRef();
  const outerOrbsRef = useRef();
  const textOneRef = useRef();
  const textTwoRef = useRef();
  const textThreeRef = useRef();
  const textFourRef = useRef();
  const textFiveRef = useRef();

  useFrame((state, delta) => {
    if (scroll.offset > 0 && scroll.offset < 0.4) {
      ref.current.position.z = 2000 * scroll.offset;
    }

    if (scroll.offset > 0.5 && scroll.offset < 0.85) {
      ref.current.position.z = 2000 * scroll.offset;
      starsRef.current.position.z = -2000;
    } else if (scroll.offset > 0.85) {
      starsRef.current.position.z = -2000;
    } else {
      starsRef.current.position.z = 0;
    }

    if (scroll.offset > 0.8) {
      orbsRef.current.position.z = -2000;
      // textOneRef.current.fontSize = 0;
      // textTwoRef.current.fontSize = 0;
      // textThreeRef.current.fontSize = 0;
      // textFourRef.current.fontSize = 0;
      // textFiveRef.current.fontSize = 0;
      // innerOrbsRef.current.rotation.x = Math.PI / 2;
      // innerOrbsRef.current.position.z = 190;
      // innerOrbsRef.current.rotation.z += delta;
    } else {
      orbsRef.current.position.z = -1500;
      textOneRef.current.fontSize = 10;
      textTwoRef.current.fontSize = 10;
      textThreeRef.current.fontSize = 10;
      textFourRef.current.fontSize = 10;
      textFiveRef.current.fontSize = 10;
      innerOrbsRef.current.rotation.x = 0;
      innerOrbsRef.current.position.z = 0;
      innerOrbsRef.current.rotation.z = 0;
    }
  });

  return (
    <>
      <group ref={ref} position={[0, 5, 0]}>
        {/* <MovingPoints /> */}
        <group position={[0, 1, -500]}>
          <group ref={starsRef} position={[0, 0, -200]}>
            <Stars />
            {/* <MiniStars /> */}
          </group>
          <Planets />
          <ambientLight intensity={Math.PI} />
          <directionalLight position={[10, 10, 5]} intensity={5} />
          <EffectComposer>
            {/* <N8AO aoRadius={1} intensity={2} /> */}
            {/* <TiltShift2 blur={0.5} /> */}
            <Bloom mipmapBlur luminanceThreshold={1} />
          </EffectComposer>
        </group>
        <Ground />
        <group ref={orbsRef} position={[0, -10, -1500]}>
          <group ref={innerOrbsRef}>
            <Blob position={[0, 80, 0]} scale={10} />
            <Text
              ref={textOneRef}
              fontSize={10}
              position={[0, 105, 0]}
              font="Gilroy-SemiBold.ttf"
            >
              Depression
            </Text>
            <Blob position={[-80, 20, 0]} scale={10} />
            <Text
              ref={textTwoRef}
              fontSize={10}
              position={[-80, 45, 0]}
              font="Gilroy-SemiBold.ttf"
            >
              Anxiety
            </Text>
            <Blob position={[80, 20, 0]} scale={10} />
            <Text
              ref={textThreeRef}
              fontSize={10}
              position={[80, 45, 0]}
              font="Gilroy-SemiBold.ttf"
            >
              Stress
            </Text>
            <Blob position={[-50, -60, 0]} scale={10} />
            <Text
              ref={textFourRef}
              fontSize={10}
              position={[-50, -40, 0]}
              font="Gilroy-SemiBold.ttf"
            >
              Delusional Thoughts
            </Text>
            <Blob position={[50, -60, 0]} scale={10} />
            <Text
              ref={textFiveRef}
              fontSize={10}
              position={[50, -40, 0]}
              font="Gilroy-SemiBold.ttf"
            >
              Intrusive Thoughts
            </Text>
          </group>

          <group ref={outerOrbsRef} rotation={[0, 0, Math.PI]}>
            <Blob position={[0, 80, -200]} scale={10} />
            <Text
              fontSize={10}
              position={[0, 60, -200]}
              font="Gilroy-SemiBold.ttf"
              rotation={[0, 0, Math.PI]}
            >
              Paranormal Thoughts
            </Text>
            <Blob position={[-80, 20, -200]} scale={10} />
            <Text
              fontSize={10}
              position={[-80, 0, -200]}
              font="Gilroy-SemiBold.ttf"
              rotation={[0, 0, Math.PI]}
            >
              Guilt
            </Text>
            <Blob position={[80, 20, -200]} scale={10} />
            <Text
              fontSize={10}
              position={[80, 0, -200]}
              font="Gilroy-SemiBold.ttf"
              rotation={[0, 0, Math.PI]}
            >
              Fear
            </Text>
            <Blob position={[-50, -60, -200]} scale={10} />
            <Text
              fontSize={10}
              position={[-50, -80, -200]}
              font="Gilroy-SemiBold.ttf"
              rotation={[0, 0, Math.PI]}
            >
              Grief
            </Text>
            <Blob position={[50, -60, -200]} scale={10} />
            <Text
              fontSize={10}
              position={[50, -80, -200]}
              font="Gilroy-SemiBold.ttf"
              rotation={[0, 0, Math.PI]}
            >
              Anger
            </Text>
          </group>
          <Trishul
            position={[0, -300, 0]}
            scale={15}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
      <Intro />
    </>
  );
};

export default Experience;
