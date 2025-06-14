import Logo from "../../assets/logo-black.png";
import Logo_dark from "../../assets/logo-white.png";
import "./Navbar.css";
import search_icon from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  // Function to toggle theme
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="navbar">
      {/* Logo */}
      <img
        src={theme == "light" ? Logo : Logo_dark}
        alt="Logo"
        className="logo"
      />
      {/* Navbar Links */}
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <img
          src={theme == "light" ? search_icon : search_icon_dark}
          alt="search-icon"
        />
        {/* <button className="search-button">Search</button> */}
      </div>
      {/* Dark mode toggle */}
      <img
        onClick={() => {
          toggleTheme();
        }}
        src={theme == "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
