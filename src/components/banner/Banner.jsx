import React from "react";
import "./banner.css";
import Typewriter from "typewriter-effect";

function Banner() {
  // let value=" H⃣ E⃣ L⃣ L⃣ O⃣" 
  return (
    <div className="banner-box flex flex-row  " id="home">
      <div className="">
        <img
          src="/images/bw.jpg"
          className="bannerImg rounded-full border-0"
          alt=""
        />
      </div>
      <div className="textBlock text-white font-bold  lg:ml-5 ">
        <h1 className="text-white font-medium font-mono font-bold   ">
         {"🅷 🅴 🅻 🅻 🅾  👋"}          
          {/* 🖐👋  */}
        </h1>
        <small className="font-font-extralight text-4xl " id="elem">
          {" "}
          {"   "}I am_
        </small>
        <h1 className=" italic font-mono  ase-in text-opacity-40 ">
          <div className="typewriter text-blue-400">
            <Typewriter
              className="relative"
              options={{
                strings: [
                  "Bikram Gyawali",
                  "ᴅᴇᴠᴇʟᴏᴘᴇʀ.",
                  "Freelacer.",
                  "Bᵢcₖy.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Banner;
