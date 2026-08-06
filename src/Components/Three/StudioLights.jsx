import { Environment, Lightformer, SpotLight } from "@react-three/drei";

const StudioLights = () => {
  return (
    <group>
      <Environment resolution={1024}>
        <Lightformer
          //left
          form="rect"
          intensity={8}
          position={[-8, 4, 4]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[8, 8, 1]}
        />

        <Lightformer
          //right
          form="rect"
          intensity={8}
          position={[8, 4, 4]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[8, 8, 1]}
        />

        <Lightformer
          //back
          form="rect"
          intensity={4}
          position={[0, 3, -10]}
          rotation={[0, Math.PI, 0]}
          scale={[8, 8, 1]}
        />
      </Environment>

      <SpotLight position={[-8, 5, 6]} intensity={8} angle={0.5} penumbra={1} />

      <SpotLight position={[8, 5, 6]} intensity={8} angle={0.5} penumbra={1} />
    </group>
  );
};

export default StudioLights;