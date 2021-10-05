import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
function Contact() {
  console.log(process.env);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      `${process.env.REACT_APP_SERVICE_ID}`,
      `${process.env.REACT_APP_TEMPLATE_ID}`,
      form.current,
      `${process.env.REACT_APP_USER_ID}`
    );
  };

  return (
    <div id="contact">
      <div class="text-center mb-20">
        <h3 className="container text-blue-600 text-2xl mt-4 border-b-2  -mb-4 font-medium ">
          Contact Me
        </h3>
      </div>
      <section class="text-gray-600 body-font">
        <div class="px-5 imgContact py-24  flex sm:flex-nowrap flex-wrap ">
          <form onSubmit={sendEmail} ref={form} className="w-full ">
            <div class="contactForm  p-3 lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div class="relative mb-4 ">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <input
                type="submit"
                value="send"
                class="w-96 mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              />
              <p class="text-xs text-gray-500 mt-3">Will Catch you soon</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
