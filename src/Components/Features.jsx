import { Canvas } from "@react-three/fiber";
import MacBookModel from "./Models/Macbook";
import StudioLights from "./Three/StudioLights";
import { useMediaQuery } from "react-responsive";

const ModelScroll = () => {
      const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
    return (
      <group>
        <MacBookModel position={[0, -1, 0]} scale={isMobile ? 0.05 : 0.08} />
      </group>
    );
  };

const Features = () => {

  
  return (
    <section id="features">
      <h2 className="px-7">See it all in a new light</h2>
      <Canvas
        id="f-canvas"
        camera={{ position: [0, 2, 5], far: 100, near: 0.1, fov: 50 }}
      >
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>
      <div className="inset-0 absolute"></div>
    </section>
  );
};
export default Features;
