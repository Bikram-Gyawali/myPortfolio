import React from "react";
import AOS from "aos";
function Skills() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  // data-aos="zoom-out-right"
  //       data-aos-offset="200"
  //       data-aos-delay="50"
  //       data-aos-duration="1000"
  //       data-aos-easing="ease-in-out"
  //       data-aos-mirror="true"
  //       data-aos-once="false"
  //       data-aos-anchor-placement="top-center"
  return (
    <div>
      <section class="body-font">
        <div class="container px-5 py-24 mx-auto " data-aos="fade-up">
          <div class="text-center mb-20">
            <h3 className=" text-blue-600 text-2xl mt-4 border-b-2   -mb-4 font-medium " >
              My Skills
            </h3>
          </div>

          <div id="skills"  class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 "  >
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-right"  >
                <img
                  src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
                  className="w-10 mr-4"
                  alt=""
                />
                <span class="title-font font-medium">ReactJS</span>
                <div class=" w-50  m-auto">
                  <div class="ml-3 w-full h-4 bg-gray-400 rounded-full mt-3 mx-auto">
                    <div class="w-4/6 h-full text-center text-xs text-white bg-red-500 rounded-full">
                      60%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center my-auto" data-aos="fade-left">
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
                  className="w-10 mr-4"
                  alt=""
                />
                <span class="title-font font-medium">React Native</span>
                <div class=" w-50  m-auto">
                  <div class="ml-3 w-full h-4 bg-gray-400 rounded-full mt-3 mx-auto ">
                    <div class="w-1/4 h-full text-center text-xs text-white bg-red-500 rounded-full">
                      15%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-right">
                <img
                  src="https://static.javatpoint.com/mongodb/images/mongodb-tutorial.jpg"
                  className="w-10 mr-4"
                  alt=""
                />
                <span class="title-font font-medium">MongoDB</span>
                <div class=" w-50  m-auto">
                  <div class="ml-3 w-full h-4 bg-gray-400 rounded-full mt-3 mx-auto ">
                    <div class="w-2/6 h-full text-center text-xs text-white bg-red-500 rounded-full">
                      25%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-left">
                <img
                  src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                  className="w-10 mr-4"
                  alt=""
                />
                <span class="title-font font-medium">NodeJS</span>
                <div class=" w-50  m-auto">
                  <div class="ml-3 w-full h-4 bg-gray-400 rounded-full mt-3 mx-auto ">
                    <div class="w-3/6 h-full text-center text-xs text-white bg-red-500 rounded-full">
                      35%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-right">
                <img
                  src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                  className="w-10 mr-4"
                  alt=""
                />
                <span class="title-font font-medium">ExpressJs</span>
                <div class=" w-50  m-auto">
                  <div class="ml-3 w-full h-4 bg-gray-400 rounded-full mt-3 mx-auto">
                    <div class="w-3/6 h-full text-center text-xs text-white bg-red-500 rounded-full">
                      35%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-left">
                <img
                  src="https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png"
                  className="w-10 mr-4"
                  alt=""
                />
                <span class="title-font font-medium">Git</span>
                <div class=" w-50  m-auto">
                  <div class="ml-3 w-full h-4 bg-gray-400 rounded-full mt-3">
                    <div class="w-3/6 h-full text-center text-xs text-white bg-red-500 rounded-full">
                      35%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center"  data-aos="fade-right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                  className="w-10 mr-4"
                  alt=""
                />

                <span class="title-font font-medium">Javascript</span>
                <div class=" w-50  m-auto">
                  <div class="ml-3 w-full h-4 bg-gray-400 rounded-full mt-3">
                    <div class="w-2/4 h-full text-center text-xs text-white bg-red-500 rounded-full">
                      50%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-left">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                  className="w-10 mr-4"
                  alt=""
                />
                <span class="title-font font-medium">Typescript</span>
                <div class=" w-50  m-auto">
                  <div class="ml-3 w-full h-4 bg-gray-400 rounded-full mt-3">
                    <div class="w-1/4 h-full text-center text-xs text-white bg-red-500 rounded-full">
                      15%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-right">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
                  className="w-10 mr-4"
                  alt=""
                />
                <span class="title-font font-medium">Python</span>
                <div class=" w-50  m-auto">
                  <div class="ml-3 w-full h-4 bg-gray-400 rounded-full mt-3">
                    <div class="w-1/4 h-full text-center text-xs text-white bg-red-500 rounded-full">
                      15%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
