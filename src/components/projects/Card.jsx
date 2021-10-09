import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../modal/Modal";
import "./cards.css";
import { data } from "../../data/data.json";
import PortalBody from "./PortalBody";

function Card() {
  const [datas, setDatas] = useState([]);
  const [newData, setNewData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDatas(data);
    // console.log("usef", datas);
  }, [datas]);
  // console.log("dtas", datas);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <section className=" body-font  ">
        <div class="container" data-aos="fade-up">
          <div class="text-center mb-20">
            <h3 className=" text-blue-600 text-2xl mt-4 border-b-2   -mb-10 font-medium " >
              My Projects
            </h3>
          </div>
          <div className="slider-box"  id="projects">
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
              itemClass="carousel-item-padding-20px ml-2"
              className="pb-4 w-full z-0"
              data-aos="fade-left"
            >
              {datas.map((result, index) => {
                return (
                  <div className="cards flex flex-col  border-r-4  border-blue-400 shadow-2xl w-full pb-3 rounded-br-lg h-full mx-auto" >
                    <div className="leftBox h-44 w-full mx-auto">
                      <img
                        // src={""+result.images[0]}
                        src={`${result?.images[0]}`}
                        className="h-full w-full"
                        alt=""
                      />
                    </div>
                    <div className="rightBox flex flex-col mt-3 text-left ml-2 ">
                      <h1 className="titl gray font-medium text-2xl  pb-3">
                        {result.title}
                      </h1>
                      <small className="gray font-medium mb-2 text-wrap desc h-9 mx-2 ">
                        {result?.description}
                      </small>
                      <div className="flex flex-row flex-wrap w-70 mr-0.5">
                        {result.tech.map((skill) => {
                          return (
                            <small className="p-1 bg-blue-100 text-blue-900 border-2  mb-1 ml-1 p-1 cursor-pointer rounded ">
                              {skill}
                            </small>
                          );
                        })}
                      </div>
                      <div className="">
                        <div className="flex flex-row justify-around mt-4 ml-4 relative ">
                          <a
                            target="_blank"
                            href={result.github}
                            className="link"
                            rel="noreferrer"
                          >
                            <i class="fab fa-github text-2xl"></i>
                          </a>
                          <button
                            onClick={() => {
                              setIsOpen(true);
                              setNewData(result);
                            }}
                          >
                            Read More
                          </button>
                          <Modal
                            open={isOpen}
                            id={result.id}
                            onClose={() => setIsOpen(false)}
                          >
                            <PortalBody result={newData} index={index} />
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
