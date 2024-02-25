import { Image, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

function VideoText(props) {
  const catRef = useRef();
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/showreel.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );

  useEffect(() => void video.play(), [video]);

  useFrame(({ clock }) => {
    catRef.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.15;
  });
  return (
    <group>
      <Text
        font="/Anton.woff"
        position={[-7, 6, -2]}
        fontSize={2}
        color="#2C805A"
        outlineColor="white"
        outlineWidth={0.2}
        letterSpacing={-0.05}
      >
        Strictly
      </Text>
      <Image
        ref={catRef}
        position={[7, 6.6, -2.01]}
        url="./cat.png"
        scale={4}
        transparent
      />
      <Text font="/Anton.woff" fontSize={5} letterSpacing={0} {...props}>
        popping
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} />
        </meshBasicMaterial>
      </Text>
      <Text
        font="/Anton.woff"
        position={[10.4, 2, -2]}
        fontSize={2}
        color="#FD5F3E"
        outlineColor="white"
        outlineWidth={0.2}
        letterSpacing={-0.05}
      >
        Ideas
      </Text>
    </group>
  );
}

export default VideoText;
