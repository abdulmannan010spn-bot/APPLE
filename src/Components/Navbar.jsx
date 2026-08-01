import { navLinks } from "../Constants";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center">
          <button>
            <img src={search} alt={search} />
          </button>

          <button>
            <img src={cart} alt={cart} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
