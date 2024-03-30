import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";

const Effects = () => {
  //   const datas = useControls("godray", {
  //     enabled: true,
  //     samples: {
  //       value: 100,
  //       min: 10,
  //       max: 200,
  //       step: 10,
  //     },
  //     density: {
  //       value: 0.96,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     decay: {
  //       value: 0.98,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     weight: {
  //       value: 0.3,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     exposure: {
  //       value: 1,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     blur: {
  //       value: 0,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //   });

  const [lightMesh, setLightMesh] = useState();

  const { scene } = useThree();

  useEffect(() => {
    if (scene.userData.refs && scene.userData.refs.lightMesh) {
      const lightMeshRef = scene.userData.refs.lightMesh;
      setLightMesh(lightMeshRef);
    }
  }, [scene.userData.refs]);
  return (
    <EffectComposer>
      {lightMesh && (
        <GodRays
          sun={lightMesh.current}
          samples={1000}
          density={4}
          decay={0.98}
          weight={0.3}
          //   exposure={1}
        />
      )}
    </EffectComposer>
  );
};

export default Effects;
