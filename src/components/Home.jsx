import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Loader from "react-loaders";
import Photo from "./Photo";
import { motion } from "framer-motion";
import pic from "../assets/images/Desmond_yellowbg.png";

const Home = () => {
  const [letterClass, setLetterClass] = useState("");

  return (
    <section>
      <section className="h-screen ">
        {/* <div className="absolute inset-0 bg-gray-900 z-[-1]"></div> */}
        <div className="container mx-auto h-full ">
          {/* Text Zone */}
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
            {/* left text */}
            <div className="text-center xl:text-left relative order-2 xl:order-none">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-vi relative max-w-[500px]">
                <span className="absolute text-[#4D4DFF] font-title text-[14px] md:text-[18px] left-2 mt-[-30px] md:mt-[-40px] opacity-80">
                  &lt;h1&gt;
                </span>
                <div className="animate-rubberBand text-white font-test font-bold">
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    H
                  </span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    i
                  </span>
                </div>
                <div className="mt-2 mb-4 md:mt-3 md:mb-5 animate-rubberBand text-white font-test font-bold">
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    I
                  </span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    ’
                  </span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    m
                  </span>
                  <span className="inline-block">&nbsp;</span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    D
                  </span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    E
                  </span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    S
                  </span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    M
                  </span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    O
                  </span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    N
                  </span>
                  <span className="inline-block animate-bounceIn hover:animate-rubberBand">
                    D
                  </span>
                </div>
                <div className="text-[#00ffee]">
                  <Typewriter
                    words={[
                      "Frontend Developer",
                      "React Developer",
                      "Full Stack Developer",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                  <span className="absolute text-[#4D4DFF] font-title opacity-80 text-[14px] md:text-[18px] ml-[20px] mt-[18px] animation-fadeIn">
                    &lt;/h1&gt;
                  </span>
                </div>
              </h1>
              <p className="text-sm md:text-lg font-robo md:text-left text-white animate-bounceIn max-w-[500px]">
                Frontend Developer / React / HTML / CSS / Bootstrap / Canva /
                Figma
              </p>
              <h2 className="text-indigo-600 text-sm md:text-lg font-second md:text-left animate-rubberBand">
                From{" "}
                <strong className="text-[#00ffee] md:text-xl">Pixels</strong> to
                Performance: Full{" "}
                <strong className="text-[#00ffee] md:text-xl">Stack</strong>{" "}
                Magic Begins Here...
              </h2>
              {/* Centered Button Container */}
              <div className="flex justify-center md:justify-start mt-4 md:mt-5 space-x-2 md:space-x-4">
                <Link
                  to="/contact"
                  className="bg-transparent text-sm md:text-lg px-4 md:px-6 py-2 rounded-md text-[#00ffee] border-2 border-[#00ffee] font-robo font-bold shadow-[0_0_5px_#ffffff] transition-transform duration-100 hover:bg-[#00ffee] hover:text-white ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee] animate-rubberBand"
                >
                  CONTACT ME
                </Link>
                <a
                  href="DesmondF_Resume.pdf"
                  download="DesmondF_Fernandis_Resume.pdf"
                  className="bg-transparent text-pink-500 border border-pink-500 text-sm md:text-lg px-4 md:px-6 py-2 rounded-md hover:bg-pink-500 hover:text-white font-robo font-bold shadow-[0_0_5px_#ffffff] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee] animate-rubberBand"
                >
                  My Resume
                </a>
              </div>
            </div>

            {/* Animated Image Container */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0 flex justify-center xl:justify-start xl:ml-[-5%] animate-rubberBand">
              <Photo className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
            </div>
          </div>
        </div>
      </section>
      <Loader type="ball-pulse" active={true} />
    </section>
  );
};

export default Home;
