import React from "react";
import ReactDom from "react-dom";
import AOS from 'aos';
import './modal.css'
function Modal({ children, open, onClose }) {
  if (!open) return null;
  return    ReactDom.createPortal(
    <div className="fixed modalhead"  onClick={onClose}   >
      <div className="fixed modalbody z-50 rounded-lg bg-white" data-aos="zoom-out" onClick={(e) => {
          e.stopPropagation();
        }} >
        <button onClick={onClose} className="absolute top-0 right-0 p-1 bg-red-500 text-4xl">
          &times;
        </button>
        {children}
        <div className="portalBody flex flex-row   pb-3 rounded-br-lg max-w-6xl  rounded-tr-lg"   
         >
          <div className="leftBox p-1"> 

                  <img
                    src="../images/bw.jpg"
                    //  src="../images/skybw.jpg"
                    className="max-w-xl  max-h-96  p-1"
                    alt=""
                    />
                    </div>
                <div className="rightBox flex flex-col mt-3 text-left  mx-14 ">
                  <h1 className="gray font-medium text-2xl pb-3  ">
                    This is the title of my project
                  </h1>
                  <small className="gray font-medium mb-2 text-wrap  ">
                    Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc  Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc  Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc  Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc  Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc  Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc
                  </small>
                  <div className="flex flex-row flex-wrap x-auto">
                    <small className="p-1 bg-blue-100 text-blue-900 border-2  mb-1 ml-1 p-1  rounded ">
                      Javascript
                    </small>
                    <small className="p-1 bg-blue-100 text-blue-900 border-2  mb-1 ml-1 p-1  rounded ">
                      ReactJs
                    </small>
                    <small className="p-1 bg-blue-100 text-blue-900 border-2  mb-1 ml-1 p-1  rounded ">
                      Firebase
                    </small>
                    <small className="p-1 bg-blue-100 text-blue-900 border-2  mb-1 ml-1 p-1  rounded ">
                      Redux
                    </small>
                    <small className="p-1 bg-blue-100 text-blue-900 border-2  mb-1 ml-1 p-1  rounded ">
                      Redux
                    </small>
                    <small className="p-1 bg-blue-100 text-blue-900 border-2  mb-1 ml-1 p-1  rounded ">
                      Redux
                    </small>
                    <small className="p-1 bg-blue-100 text-blue-900 border-2  mb-1 ml-1 p-1  rounded ">
                      Redux
                    </small>
                  </div>
                  <div className="flex flex-row justify-around mt-4 ml-4 relative">
                    <a href="">
                      <i class="fab fa-github text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
