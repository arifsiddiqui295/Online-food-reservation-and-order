import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import menu from "../Pages/Menu/Menu";
const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const menuPage = ()=>{
    console.log("helo from navigation")
    navigate('/Menu');
  }
  return (
    <>
      <nav className="z-30">
        <div className="logo">BistroNova</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button onClick={menuPage} className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
