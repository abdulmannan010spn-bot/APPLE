import { useGSAP } from "@gsap/react";
import { performanceImages } from "../Constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  useGSAP(() => {
    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#performance",
        start: "top top",
        end: "+=500",
        scrub: true,
      },
    });

    const leftGroup = ["#p1", "#p2", "#p7"];
    const rightGroup = ["#p4","#p3", "#p6"];

    t5.to(
      leftGroup,
      { x: -800, ease: "power1.inOut", duration: 0.6 },
      0,
    ).to(
      rightGroup,
      { x: 800, ease: "power1.inOut", duration: 0.6},
      0,
    );

  });

  return (
    <section id="performance">
      <h2 className="px-4">Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map((image) => (
          <img
            key={image.id}
            id={image.id}
            className={image.id}
            src={image.src}
            alt={image.id}
          />
        ))}
      </div>

      <div className="content px-7 lg:px-0">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster,
          <span className="text-white">
            {" "}
            so gaming feels more immersive and realistic than ever.
          </span>
          <br />
          <br />
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
