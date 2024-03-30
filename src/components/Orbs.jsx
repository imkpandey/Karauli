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
} from "@react-three/drei";
import { easing, random } from "maath";
import { useRef } from "react";

function Orbs() {
  const box = random.inBox(new Float32Array(100), { sides: [100, 100, 100] });
  const spherical = random.inSphere(new Float32Array(1200), { radius: 10 });
  const { width, height } = useThree((state) => state.viewport);
  const scroll = useScroll();

  const refOne = useRef();
  const refTwo = useRef();
  const refThree = useRef();
  const refFour = useRef();
  const refFive = useRef();
  const refSix = useRef();
  const refSeven = useRef();
  const refEight = useRef();
  const refNine = useRef();
  const refTen = useRef();
  const groupRef = useRef();
  const groupTwoRef = useRef();

  useFrame((state, delta) => {
    if (scroll.offset >= 0.63) {
      state.scene.background = new THREE.Color("#ffffff");
    } else {
      state.scene.background = new THREE.Color("#000000");
    }
    // if (scroll.offset >= 0.7 && scroll.offset <= 0.75) {
    //   easing.damp(groupTwoRef.current.position, "z", 100, 0.2, delta);
    //   if (scroll.offset >= 0.7) {
    //     easing.damp(groupTwoRef.current.position, "z", 100, 0.2, delta);
    //     // Define the delay between showing each mesh
    //     const delay = 100; // in milliseconds
    //     // Define the time offset for the first mesh
    //     const initialDelay = 0; // in milliseconds
    //     // Define an array of refs to loop through
    //     const refs = [refOne, refTwo, refThree, refFour, refFive];
    //     // Initialize a counter to keep track of the current mesh
    //     let currentMeshIndex = 0;
    //     // Function to show the next mesh with delay
    //     const showNextMesh = () => {
    //       // Show the current mesh
    //       easing.damp(
    //         refs[currentMeshIndex].current.position,
    //         "z",
    //         150,
    //         0.2,
    //         delta
    //       );
    //       // refs[currentMeshIndex].current.position.z = 150;
    //       // Move to the next mesh in the array
    //       currentMeshIndex++;
    //       // Check if there are more meshes to show
    //       if (currentMeshIndex < refs.length) {
    //         // Schedule the next mesh to show after the delay
    //         setTimeout(showNextMesh, delay);
    //       }
    //     };
    //     // Start showing meshes after initial delay
    //     setTimeout(showNextMesh, initialDelay);
    //   }
    // }
    // if (scroll.offset > 0.7) {
    //   easing.damp(groupRef.current.position, "z", 100, 0.2, delta);
    //   if (scroll.offset > 0.7) {
    //     easing.damp(groupRef.current.position, "z", 100, 0.2, delta);
    //     // Define the delay between showing each mesh
    //     const delay = 100; // in milliseconds
    //     // Define the time offset for the first mesh
    //     const initialDelay = 0; // in milliseconds
    //     // Define an array of refs to loop through
    //     const refs = [refSix, refSeven, refEight, refNine, refTen];
    //     // Initialize a counter to keep track of the current mesh
    //     let currentMeshIndex = 0;
    //     // Function to show the next mesh with delay
    //     const showNextMesh = () => {
    //       // Show the current mesh
    //       easing.damp(
    //         refs[currentMeshIndex].current.position,
    //         "z",
    //         150,
    //         0.2,
    //         delta
    //       );
    //       // refs[currentMeshIndex].current.position.z = 150;
    //       // Move to the next mesh in the array
    //       currentMeshIndex++;
    //       // Check if there are more meshes to show
    //       if (currentMeshIndex < refs.length) {
    //         // Schedule the next mesh to show after the delay
    //         setTimeout(showNextMesh, delay);
    //       }
    //     };
    //     // Start showing meshes after initial delay
    //     setTimeout(showNextMesh, initialDelay);
    //   }
    // }
    // groupRef.current.rotation.z += delta / 4;
  });

  return (
    <>
      <spotLight
        position={[300, 300, 300]}
        decay={0.5}
        penumbra={1}
        intensity={1000}
      />
      <group position={[0, 0, -100]} rotation={[0, Math.PI / 2, 0]}>
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
      </group>

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
      <group ref={groupRef}>
        <mesh ref={refOne} position={[0, 15, 120]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={1}
          />
        </mesh>
        <Text fontSize={3} position={[0, 22, 120]} font="Gilroy-SemiBold.ttf">
          Depression
        </Text>
        <mesh ref={refTwo} position={[20, 0, 120]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={1}
          />
        </mesh>
        <Text fontSize={3} position={[32, 0, 120]} font="Gilroy-SemiBold.ttf">
          Anxiety
        </Text>

        <mesh ref={refThree} position={[-20, 0, 120]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={1}
          />
        </mesh>
        <Text fontSize={3} position={[-32, 0, 120]} font="Gilroy-SemiBold.ttf">
          Stress
        </Text>

        <mesh ref={refFour} position={[15, -25, 120]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={1}
          />
        </mesh>
        <Text fontSize={3} position={[15, -33, 120]} font="Gilroy-SemiBold.ttf">
          Delusional Thoughts
        </Text>

        <mesh ref={refFive} position={[-15, -25, 120]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={1}
          />
        </mesh>
        <Text
          fontSize={3}
          position={[-15, -33, 120]}
          font="Gilroy-SemiBold.ttf"
        >
          Intrusive Thoughts
        </Text>
      </group>

      <group
        ref={groupTwoRef}
        rotation={[0, 0, Math.PI]}
        position={[0, -10, -180]}
      >
        <mesh ref={refSix} position={[0, 10, 170]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={5}
          />
        </mesh>
        <Text
          fontSize={3}
          position={[0, 18, 170]}
          rotation={[0, 0, Math.PI]}
          //   font="../assets/fonts/Gilroy-SemiBold.ttf"
        >
          Anger
        </Text>

        <mesh ref={refSeven} position={[20, 0, 170]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={5}
          />
        </mesh>
        <Text
          fontSize={3}
          position={[30, 0, 170]}
          font="Gilroy-SemiBold.ttf"
          rotation={[0, 0, Math.PI]}
        >
          Guilt
        </Text>

        <mesh ref={refEight} position={[-20, 0, 170]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={5}
          />
        </mesh>
        <Text
          fontSize={3}
          position={[-30, 0, 170]}
          font="Gilroy-SemiBold.ttf"
          rotation={[0, 0, Math.PI]}
        >
          Fear
        </Text>

        <mesh ref={refNine} position={[15, -25, 170]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={5}
          />
        </mesh>
        <Text
          fontSize={3}
          position={[15, -33, 170]}
          font="Gilroy-SemiBold.ttf"
          rotation={[0, 0, Math.PI]}
        >
          Paranormal Thoughts
        </Text>

        <mesh ref={refTen} position={[-15, -25, 170]}>
          <sphereGeometry args={[4, 128]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={5}
          />
        </mesh>
        <Text
          fontSize={3}
          position={[-15, -33, 170]}
          font="Gilroy-SemiBold.ttf"
          rotation={[0, 0, Math.PI]}
        >
          Grief
        </Text>
      </group>

      {/* <mesh scale={8} position={[0, 0, -300]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={1.9}
        />
      </mesh> */}
    </>
  );
}

export default Orbs;
