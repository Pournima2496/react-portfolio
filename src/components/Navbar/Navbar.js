import "./Navbar.scss";
import "../../darkTheme.scss";

import { FaTimes } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState, useContext } from "react";
import { DarkModeContext } from "../../context/context";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const theme = useContext(DarkModeContext);
  const handleClick = () =>{
    theme.dispatch({type:"toggleTheme"})
  }

  return (
    <div className="navbar">
      <div className="n-left">
        <div className="logo">Pournima</div>
        <div className="icons">
          <button onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25, transition: "all .3s"}}></button>
        </div>
      </div>
      <div className="n-right">
        <ul
          className={toggleMenu ? "mobile-list" : "list"}
          onClick={() => setToggleMenu(false)}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menu" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? <FaTimes /> : <HiMenuAlt2 />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
