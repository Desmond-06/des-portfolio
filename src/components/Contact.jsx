import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import lol from "../assets/images/lol.png"; // Updated import for new image

const Contact = () => {
  return (
    <div className="relative overflow-hidden ">
      {/* Background Cover */}
      {/* <div className="absolute inset-0 bg-gray-900 z-[-1]"></div> */}

      <div className="container mx-auto flex flex-col lg:flex-row items-center p-4">
        {/* Text Zone */}
        <div className="text-zone w-full lg:w-1/2 ">
          <h1 className="text-5xl font-bold font-test animate-bounceIn mb-6 hover:animate-bounce text-white">
            Contact me
          </h1>
          <div className="w-60 h-1 bg-white animate-bounceIn absolute top-[4rem]"></div>
          <p className="font-robo text-lg md:text-xl mb-3 text-white animate-bounceIn">
            I'm a very ambitious fullstack developer looking for a role in an
            established IT company with opportunities for growth.
          </p>

          {/* Contact Form */}
          <div className="contact-form w-full ">
            <form
              method="POST"
              action="https://getform.io/f/af73c1a4-d723-4d29-8fc9-b22b0590a574"
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-4">
                <input
                  className="w-full lg:w-1/2 bg-gray-800 text-[#00ffee] p-4 rounded animate-bounceIn"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
                <input
                  className="w-full lg:w-1/2 bg-gray-800 text-[#00ffee] p-4 rounded animate-bounceIn"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <input
                className="w-full bg-gray-800 text-pink-500 p-4 rounded animate-bounceIn"
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <textarea
                className="w-full bg-gray-800 text-pink-500 p-4 rounded animate-bounceIn"
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <input
                type="submit"
                className="bg-[#00ffee] text-black py-2 px-4 rounded-full cursor-pointer text-lg font-semibold tracking-wide border-2 border-transparent shadow-[0_0_5px_#ffffff] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee] animate-bounceIn"
                value="SEND"
              />
            </form>
          </div>

          {/* Call Me and Email Me Section */}
          <div className="flex flex-col lg:flex-row gap-4 mt-8 font-second">
            <div className="flex-1 flex items-center p-4 bg-gray-700 rounded-md bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b-2 border-white">
              <div className="h-12 w-12 bg-black rounded-full flex justify-center items-center">
                <IoMdCall size={18} className="text-white" />
              </div>
              <div className="text-white text-left ml-3">
                <h3 className="font-bold text-lg">Call Me</h3>
                <a href="tel:7892568577" className="text-sm">
                  7892568577
                </a>
              </div>
            </div>
            <div className="flex-1 flex items-center p-4 bg-gray-700 rounded-md bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b-2 border-white">
              <div className="h-12 w-12 bg-black rounded-full flex justify-center items-center">
                <IoIosMail size={18} className="text-white" />
              </div>
              <div className="text-white text-left ml-3">
                <h3 className="font-bold text-lg">Email Me</h3>
                <a
                  href="mailto:desmondfernandis0836@gmail.com"
                  className="text-sm"
                >
                  desmondfernandis0836@gmail.com
                </a>
                <br />
                <a
                  href="mailto:desmondfernandis06@gmail.com"
                  className="text-sm"
                >
                  desmondfernandis06@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="img-container w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0 lg:ml-10 relative">
          <img
            className="w-full h-auto" // Ensure the image scales properly
            src={lol} // Updated image source
            alt="Lolo"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
