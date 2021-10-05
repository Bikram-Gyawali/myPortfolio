import React from "react";
import bw from "../images/bw.jpg";
import "./banner.css";
import Typewriter from "typewriter-effect";

function Banner() {
  return (
    <div className="banner-box flex flex-row ">
      <div className="relative   ">
        <img
          src={bw}
          className="w-50 h-20 mt-40  h-full -ml-28   rounded-full border-0 bannerImg "
          alt=""
        />
        
      </div>
      <div
        className="red -ml-96 mt-96  text-white  font-bold text-2xl"
        
      >
        <h1 className=" -ml-80 text-white font-medium font-mono font-bold text-6xl">
        H⃣   E⃣   L⃣   L⃣   O⃣ 👋 
          {/* 🖐👋  */}
        </h1>
        <small className="font-font-extralight text-4xl " id="elem">
          {" "}
          {"   "}I am_
        </small>

        <h1 className="text-6xl italic font-mono absolute ease-in text-opacity-40">
          {/* <Typewriter 
            className="relative"
            onInit={(typewriter) => {
              
              typewriter
                .typeString("Bikram Gyawali")
                // .callFunction(() => {
                //   console.log("String typed out!");
                // })
                .pauseFor(2500)
                .deleteAll()
                // .callFunction(() => {
                //   console.log("All strings were deleted");
                // })
                .typeString("Developer.")
                .pauseFor("1500")
                .deleteAll()

                .typeString("Bicky.")
                .callFunction((loop)=>{
                  loop()
                })
                .start();
            }}
          /> */}

          

          <div className="typewriter text-blue-400"  >
          <Typewriter
            className="relative"
            options={{
              strings: ["Bᵢₖᵣₐₘ Gyₐwₐₗᵢ", "ᴅᴇᴠᴇʟᴏᴘᴇʀ.", "Freelacer.", "Bᵢcₖy."],
              autoStart: true,
              loop: true,
            }}
            />
            </div>
          {/* <small id="cursi" className="absolute" ></small> */}
        </h1>
      </div>
    </div>
  );
}

export default Banner;
