import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../modal/Modal";
import "./cards.css";

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 10,
  //     slidesToSlide: 0, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 4,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div>
      <section className="body-font w-full">
        <div class=" px-1 py-24  "  data-aos="fade-up">
          <div class="text-center mb-20">
            <h3  className=" text-blue-600 text-2xl mt-4 border-b-2   -mb-4 font-medium ">
              My Projects
            </h3>
          </div>
          <div className="slider-box  " id="projects" >
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={100}
              keyBoardControl={true}
              customTransition="all 0.5s"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-20px ml-3"
              className="pb-4 w-full z-0"
            >
              <div className=" flex flex-col  border-r-4  border-blue-400 shadow-2xl w-90 pb-3 rounded-br-lg   ">
                <div className="leftBox    h-60 w-full">
                  <img
                    src="../images/skybw.jpg"
                    className="h-full w-full"
                    alt=""
                  />
                </div>
                <div className="rightBox flex flex-col mt-3 text-left ml-2 ">
                  <h1 className="gray font-medium text-2xl pb-3 w-full ">
                    This is the title of my ptoject
                  </h1>
                  <small className="gray font-medium mb-2 text-wrap ">
                    Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc
                  </small>
                  <div className="flex flex-row flex-wrap ,x-auto  w-70 mr-0.5">
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
                    <button onClick={() => setIsOpen(true)}>Read More</button>
                    <Modal
                      open={isOpen}
                      onClose={() => setIsOpen(false)}
                    ></Modal>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col  border-r-4  border-blue-400 shadow-2xl w-90 pb-3 rounded-br-lg   ">
                <div className="leftBox    h-60 w-full">
                  <img
                    src="../images/skybw.jpg"
                    className="h-full w-full"
                    alt=""
                  />
                </div>
                <div className="rightBox flex flex-col mt-3 text-left ml-2 ">
                  <h1 className="gray font-medium text-2xl pb-3 w-full ">
                    This is the title of my ptoject
                  </h1>
                  <small className="gray font-medium mb-2 text-wrap ">
                    Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc
                  </small>
                  <div className="flex flex-row flex-wrap ,x-auto  w-70 mr-0.5">
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
                    <a href="c">
                      <i class="fab fa-github text-2xl"></i>
                    </a>
                    <button onClick={() => setIsOpen(true)}>Read More</button>
                    <Modal
                      open={isOpen}
                      onClose={() => setIsOpen(false)}
                    ></Modal>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col  border-r-4  border-blue-400 shadow-2xl w-90 pb-3 rounded-br-lg   ">
                <div className="leftBox    h-60 w-full">
                  <img
                    src="../images/skybw.jpg"
                    className="h-full w-full"
                    alt=""
                  />
                </div>
                <div className="rightBox flex flex-col mt-3 text-left ml-2 ">
                  <h1 className="gray font-medium text-2xl pb-3 w-full ">
                    This is the title of my ptoject
                  </h1>
                  <small className="gray font-medium mb-2 text-wrap ">
                    Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc
                  </small>
                  <div className="flex flex-row flex-wrap ,x-auto  w-70 mr-0.5">
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
                    <a href="c">
                      <i class="fab fa-github text-2xl"></i>
                    </a>
                    <button onClick={() => setIsOpen(true)}>Read More</button>
                    <Modal
                      open={isOpen}
                      onClose={() => setIsOpen(false)}
                    ></Modal>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col  border-r-4  border-blue-400 shadow-2xl w-90 pb-3 rounded-br-lg   ">
                <div className="leftBox    h-60 w-full">
                  <img
                    src="../images/skybw.jpg"
                    className="h-full w-full"
                    alt=""
                  />
                </div>
                <div className="rightBox flex flex-col mt-3 text-left ml-2 ">
                  <h1 className="gray font-medium text-2xl pb-3 w-full ">
                    This is the title of my ptoject
                  </h1>
                  <small className="gray font-medium mb-2 text-wrap ">
                    Desc:This project i did when i was studying react i have
                    implemented redux redux thunk etc
                  </small>
                  <div className="flex flex-row flex-wrap mx-auto  w-70 mr-0.5">
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
                    <a href="c">
                      <i class="fab fa-github text-2xl"></i>
                    </a>
                    <button onClick={() => setIsOpen(true)}>Read More</button>
                    <Modal
                      open={isOpen}
                      onClose={() => setIsOpen(false)}
                    ></Modal>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
