import React from "react";
import AOS from 'aos'
function Aboutme() {
  AOS.init()
  const rowClass =
    "flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none";
  const leftClass = "w-full sm:w-1/3 font-medium text-center sm:text-left";
  const rightClass = "flex-1 text-left sm:text-left mx-3 ";
  return (
    <div className="w-full">
       <div class="text-center mb-20" >
            <h3 className=" text-blue-600 text-2xl mt-20 border-b-2   -mb-4 font-medium ">
              About Me
            </h3>
          </div>
      <div className="mt-4" >
        <div className={rowClass} data-aos="fade-up">
          <span className={leftClass}>Full name:</span>
          <span className={rightClass}>Bikram Gyawali</span>
        </div>
        <div className={rowClass} data-aos="fade-up">
          <span className={leftClass}>Email Address:</span>
          <span className={rightClass}>bikramgyawali57@gmail.com</span>
        </div>
        <div className={rowClass} data-aos="fade-up">
          <span className={leftClass}>P.Address:</span>
          <span className={rightClass}>Butwal,Rupandehi, Nepal</span>
        </div>
        <div className={rowClass} data-aos="fade-up">
          <span className={leftClass}>Github:</span>
          <span className={rightClass}>
            <a href="https://github.com/Bikram-Gyawali">Bikram-Gyawali</a>
          </span>
        </div>

        <div className={rowClass} data-aos="fade-up">
          <span className={leftClass}>Bio</span>
          <span className={rightClass}>
            I am a freelancer,software developer with plenty of experience on
            technologies like Reactjs,Nodejs,Python,MongoDb,Github. Or
            should I say that I Love Javascirpt. Do you know that I am a Student too ?
            Studying CSIT in Madan Bhandari Memorial College,KTM,Batch 076
          </span>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
