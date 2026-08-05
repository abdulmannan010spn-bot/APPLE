import { useMediaQuery } from "react-responsive";
import game from "../assets/game.mp4";
import logomask from "../assets/mask-logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024)" });

  useGSAP(() => {
    if (!isTablet) {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          scrub: true,
          start: "top top",
          end: "bottom 100%",
          pin: true,
        },
      });
      t1.to(".mask img", {
        scale: 1.2,
        duration:1
      })

        .from(".content", {
          opacity: 0,
          y: 100,
          ease: "power1.out",
          duration: 1,
        },"-=1");
    }
  }, [isTablet]);
  return (
    <section id="showcase">
      <div className="media">
        <video src={game} loop autoPlay playsInline muted />
        <div className="mask">
          <img src={logomask} alt="" />
        </div>
      </div>

      <div className="content pl-8">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 power
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>

              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>

              <p className="text-primary">
                Learn more about Apple Intelligence <span className="font-extrabold">{' >'}</span>
              </p>
            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>Pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
