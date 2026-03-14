import React, { useRef } from "react";
import "./sidebar.css";
function Sidebar(props) {
  const takeref = useRef();

  const scrollToContact = (elem) => {
    const contactElement = document.getElementById(`${elem}`);
    contactElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div
      onClick={props.hidebar}
      className={props.bar ? "overlay open " : "overlay  "}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        id="mySidenav"
        className={props.bar ? "sidenav open" : "sidenav "}
      >
        <span
          className="closebtn"
          style={{
            color: "",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={props.hidebar}
        >
          <i className="fas fa-times"></i>
        </span>
        <h1 className="text-xl font-medium mt-10 text-gray-100" >
          <button ref={takeref} onClick={() => scrollToContact("home")}>
            Home
          </button>
        </h1>
        <h1 className="text-xl font-extralight mt-10 text-gray-100" >
          <button ref={takeref} onClick={() => scrollToContact("skills")}>
            Skills
          </button>
        </h1>
        <h1 className="text-xl font-medium mt-10 text-gray-100" >
          <button ref={takeref} onClick={() => scrollToContact("projects")}>
            Projects
          </button>
        </h1>
        <h1 className="text-xl font-medium mt-10 text-gray-100" >
          <button ref={takeref} onClick={() => scrollToContact("contact")}>
            Contact
          </button>
        </h1>
      </div>
    </div>
  );
}

export default Sidebar;
