import React from "react";
function Footer() {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container py-8 mx-auto flex items-center sm:flex-row flex-col">
          <img
            // src={"/images/biklogo.jpg"}
            src="/images/biklogo.jpg"
            className="h-10 w-20 mt-3 rounded-lg border-2 border-blue-500"
            alt=""
          />
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2021 Bikram Gyawali —
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="bikramgyawali57@gmail.com"
              class="text-gray-600 ml-1"
            >
              bikramgyawali57@gmail.com
            </a>
          </p>
          <span class="text-2xl inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/BikramGyawali.79"
              class="text-gray-500 "
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/bikram-gyawali-4069461a0/"
              class="ml-3 text-gray-500"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Bikram-Gyawali"
              class="ml-3 text-gray-500"
            >
              <i class="fab fa-github-square"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/c/TechnicalAsian13579"
              class="ml-3 text-gray-500"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
