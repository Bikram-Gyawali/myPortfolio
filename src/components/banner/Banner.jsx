import React from "react";
import "./banner.css";
import Typewriter from "typewriter-effect";

function Banner() {
  return (
    <div className="banner-box flex flex-row " id="home">
      <div className="relative   ">
        <img
          src="/images/bw.jpg"
          className="w-50 h-20 mt-40  h-full -ml-28   rounded-full border-0 bannerImg "
          alt=""
        />
      </div>
      <div className="red -ml-96 mt-96  text-white  font-bold text-2xl">
        <h1 className=" -ml-80 text-white font-medium font-mono font-bold text-6xl">
          H⃣ E⃣ L⃣ L⃣ O⃣ 👋
          {/* 🖐👋  */}
        </h1>
        <small className="font-font-extralight text-4xl " id="elem">
          {" "}
          {"   "}I am_
        </small>

        <h1 className="text-6xl italic font-mono absolute ease-in text-opacity-40">
          <div className="typewriter text-blue-400">
            <Typewriter
              className="relative"
              options={{
                strings: [
                  "Bᵢₖᵣₐₘ Gyₐwₐₗᵢ",
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
