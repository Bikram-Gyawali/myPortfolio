import React, { useState,useRef } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
function NavBar() {
  const [bar, setBar] = useState(false);
  const contactme=useRef()
  const hidebar = () => {
    setBar(false);
  };
  const getbar = () => {
    setBar(true);
  };

  const scrollToContact = (elem) => {
    const contactElement = document.getElementById(`${elem}`);
    contactElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    
  };

  return (
    <div style={{ position: "fixed", top: "0", zIndex: 10 }} className="">
      <div className="navbar h-40  border-b-2 my-auto z-0 bg-gray-100 ">
        <div className="left-nav">
          <div onClick={getbar}>
            <i class="fas fa-bars mt-2"></i>
          </div>
        </div>
        {/* <code className=" text-2xl  mx-auto my-auto font-italic  font-weight-bolder text-blue-500  " > {`{ Bikram Gyawali }`}</code> */}
        <div className="navright my-auto flex gap-10 text-2xl  ">
          <h1>
          <button ref={contactme} onClick={() => scrollToContact("blogs")}>Blogs</button>
          </h1>
          <h1>
          <button ref={contactme} onClick={() => scrollToContact("skills")}>Skills</button>
          </h1>
          <h1>
          <button ref={contactme} onClick={() => scrollToContact("projects")}>Projects</button>
          </h1>
          <h1>
            <button ref={contactme} onClick={() => scrollToContact("contact")}>Contact</button>
          </h1>
        </div>
      </div>
      <Sidebar hidebar={hidebar} getbar={getbar} bar={bar} />
    </div>
  );
}

export default NavBar;
