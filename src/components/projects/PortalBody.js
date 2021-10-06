import React, { useEffect, useState } from "react";
import { data } from "../../data/data.json";
import "./cards.css";
function PortalBody({ result, index }) {
  const [image, setImage] = useState(result.images[0]);

  const [datas, setDatas] = useState([]);

  // const handleLeftImage = (value) => {
  //   if (result.images.length - value < 0) {
  //     setImage(result.images.length);
  //   } else {
  //     setImage(result.images.length - value);
  //   }
  // };

  // const handleRightImage = (value) => {
  //   if (result.images.length + value > result.images.length) {
  //     setImage(0);
  //   } else {
  //     setImage(result.images.length + value);
  //   }
  // };

  useEffect(() => {
    setDatas(data);
  }, [datas]);

    const handleLeftImage = () => {
      if (result.images.length - 1 < 0) {
        setImage(result.images[result.images.length]);
      } else {
        setImage(result.images[result.images.length --]);
      }
    };

    const handleRightImage = () => {
      let imgres=result.images.length + 1
      if (imgres > result.images.length) {
        setImage(result.images[0]);
      } else {
        setImage(result.images[result.images.length ++]);
      }
    };

  return (
    <div>
      <div className="mx-auto portalBody flex flex-col  rounded-br-lg max-w-6xl rounded-tr-lg  mb-16 ">
        <div className="leftBox p-1 mx-auto border-b flex flex-row">
          <button
            onClick={() => {
              handleLeftImage();
            }}
          >
            <i class="text-2xl p-1 fas fa-chevron-circle-left"></i>
          </button>
          <img
            src={image}
            //  src="../images/skybw.jpg"
            className="max-w-xl  max-h-96  p-1"
            alt=""
          />
          <button
            onClick={() => {
              handleRightImage();
            }}
          >
            <i class="text-2xl p-1 fas fa-chevron-circle-right"></i>
          </button>
        </div>
        <div className="rightBox flex flex-col mt-3 text-left  mx-14 ">
          <h1 className="gray font-medium text-2xl  border-b-2 mb-1 ">
            {result.title}
          </h1>
          <small className="gray font-medium mb-2 text-wrap  border-b-2 py-1 ">
            {result.description}
          </small>
          <div className="flex flex-row flex-wrap my-auto">
            Tech used:{" "}
            {result.tech.map((skill) => {
              return (
                <small className="p-1 bg-blue-100 text-blue-900 border-2  mb-1 ml-1 p-1 cursor-pointer rounded ">
                  {skill}
                </small>
              );
            })}
          </div>
          <div>
            <h4>Features:</h4>
            {result.features.map((feature) => {
              return <span className="text-gray-500  mb-1  ">{feature} ,</span>;
            })}
          </div>
          <div className="flex flex-row justify-around mt-4 ml-4 relative">
            <a
              target="_blank"
              href={result.github}
              className="link mb-3"
              rel="noreferrer"
            >
              <i class="fab fa-github text-2xl"></i>
            </a>
            {result.demo !== "" ? (
              <a
                target="_blank"
                href={result.demo}
                className="link mb-3"
                rel="noreferrer"
              >
                <i class="fab fa-youtube text-2xl "></i>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalBody;
