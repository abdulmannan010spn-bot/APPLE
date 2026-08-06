import { Canvas } from "@react-three/fiber";
import MacBookModel from "./Models/Macbook";
import StudioLights from "./Three/StudioLights";
import { useMediaQuery } from "react-responsive";
import useMackbookstore from "../Store/main";
import { useEffect, useRef } from "react";
import { features, featureSequence } from "../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import v1 from "../assets/feature-1.mp4";
import v2 from "../assets/feature-2.mp4";
import v3 from "../assets/feature-3.mp4";
import v4 from "../assets/feature-4.mp4";
import v5 from "../assets/feature-5.mp4";
import clsx from "clsx";

const ModelScroll = () => {
  const groupRef = useRef();
  const { settexture } = useMackbookstore();

  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");
      Object.assign(v, {
        src: feature.videoPath,
        playsInline: true,
        muted: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });
      v.load();
    });
  }, []);

  useGSAP(() => {
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        scrub: true,
        start: "top top",
        end: "bottom top",
        pin: true,
      },
    });

    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        scrub: true,
        start: "top center",
        end: "bottom top",
      },
    });

    if (groupRef.current) {
      t3.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.out",
      });
    }

    t4.call(() => settexture(v1)).to(".box1", {
      opacity: 1,
      y: 0,
      delay: 1,
    });

    t4.call(() => settexture(v2)).to(".box2", {
      opacity: 1,
      y: 0,
    });

    t4.call(() => settexture(v3)).to(".box3", {
      opacity: 1,
      y: 0,
    });

    t4.call(() => settexture(v4)).to(".box4", {
      opacity: 1,
      y: 0,
    });

    t4.call(() => settexture(v5)).to(".box5", {
      opacity: 1,
      y: 0,
    });
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return (
    <group>
      <MacBookModel
        ref={groupRef}
        position={[0, -1, 0]}
        scale={isMobile ? 0.05 : 0.08}
      />
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
      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>{' '}
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;