import laptop from "../assets/laptop.png";
import sun from "../assets/sun.png";
import ai from "../assets/ai.png";
import battery from "../assets/battery.png";
import highlight from "../assets/highlight-bg.png";

const Highlights = () => {
  return (
    <section id="highlights" className="px-4">
      <h2>There’s never been a better time to upgrade.</h2>
      <h3>Here’s what you get with the new MacBook Pro.</h3>
      <div className="masonry">
        <div className="left-column">
          <div style={{ backgroundImage: `url(${highlight})` }}>
            <img src={laptop} alt="Laptop" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>

          <div>
            <img src={sun} alt="Sun" />
            <p>
              A stunning <br /> Liquid Retina XDR display.
            </p>
          </div>
        </div>

        <div className="right-column">
          <div className="apple-gradient">
            <img src={ai} alt="AI" />
            <p>
              Built for
              <span>
                {" "}
                <br /> Apple Intelligence.
              </span>
            </p>
          </div>

          <div>
            <img src={battery} alt="Battery" />
            <p className="green-gradient">
              Up to 14 more hours
              <br /> battery life. <br />{" "}
              <span className="text-dark-100">Up to 24 hours total.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Highlights;
