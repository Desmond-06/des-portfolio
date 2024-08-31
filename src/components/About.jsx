import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faCss3,
  faPython,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [htmlWidth, setHtmlWidth] = useState(0);
  const [bootstrapWidth, setBootstrapWidth] = useState(0);
  const [mysqlWidth, setMysqlWidth] = useState(0);
  const [figmaWidth, setFigmaWidth] = useState(0);
  const [javaWidth, setJavaWidth] = useState(0);
  const [cssWidth, setCssWidth] = useState(0);
  const [javascriptWidth, setJavascriptWidth] = useState(0);
  const [cppWidth, setCppWidth] = useState(0);
  const [pythonWidth, setPythonWidth] = useState(0);

  useEffect(() => {
    setHtmlWidth(100);
    setBootstrapWidth(75);
    setMysqlWidth(80);
    setJavaWidth(80);
    setFigmaWidth(75);
    setCssWidth(85);
    setJavascriptWidth(85);
    setCppWidth(85);
    setPythonWidth(85);
  }, []);

  return (
    <>
      <div className="container flex flex-col md:flex-row items-center justify-between w-full text-white pt-18 md:h-screen p-4">
        {/* <div className="absolute inset-0 bg-black z-[-1]"></div> */}
        {/* Text Zone */}
        <div className="text-zone w-full md:w-1/2 p-5 md:p-10 relative">
          <h1 className="text-5xl font-bold font-second animate-bounceIn mb-6 hover:animate-bounce ">
            About me
          </h1>
          <div className="w-60 h-1 bg-white animate-bounceIn absolute top-[5.5rem]"></div>
          <p className="font-robo text-lg md:text-xl mt-3 animate-bounceIn">
            Hello there! 👋 I'm Desmond Fernandis, a recent MCA graduate from
            MIT Manipal, eager to embark on an exciting journey in the tech
            world. My academic background has equipped me with a solid
            foundation in computer science, and I am now seeking opportunities
            to apply my knowledge and skills in a professional setting.
          </p>
          <p className="font-robo text-lg md:text-xl mb-6 animate-bounceIn">
            Explore my portfolio for a glimpse of my projects and skills. I am
            excited about the opportunity to leverage my knowledge and learn
            from experienced professionals in a real-world setting.
          </p>
          <p className="font-robo text-lg md:text-xl mb-6 animate-bounceIn">
            Let's build the future together! 🚀
          </p>
          <a
            href="DesmondF_Resume.pdf"
            download="DesmondF_Fernandis_Resume.pdf"
            className="bg-transparent text-pink-500 border border-pink-500 text-lg px-6 py-2 rounded-md hover:bg-pink-500 hover:text-white font-robo font-bold shadow-[0_0_5px_#ffffff] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_10px_#00ffee] animate-bounceIn"
          >
            My Resume
          </a>
        </div>

        {/* Tech Stack and Cube Spinner */}
        <div className="tech-stack-section w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
          <h1 className="tech-stack-heading text-3xl font-bold mb-10 hover:animate-bounce animate-bounceIn font-second">
            Tech Stack
          </h1>
          <div className="cubespinner mt-9 ">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#EFD81D" size="3x" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" size="3x" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#F06529" size="3x" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" size="3x" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EC4D28" size="3x" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#154734" size="3x" />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className=" flex flex-col items-center justify-center w-full  text-white pt-18 p-4 ">
        <div className="w-full max-w-[1240px]">
          <h3 className="text-white text-5xl font-bold p-2 font-second animate-bounceIn hover:animate-bounce">
            My Skills
          </h3>
          <div className="w-60 h-1 bg-white animate-bounceIn mb-10"></div>
          <p className="font-robo text-lg md:text-xl mb-6">
            As a web developer, I am experienced in creating and implementing
            web designs, developing and maintaining websites, and ensuring
            optimal functionality and user experience. I am proficient in HTML,
            CSS, and JavaScript, which form the foundation of modern web
            development. I can bring your web projects to life, ensuring they
            are not only functional but visually appealing. With a passion for
            clean and efficient code, I am dedicated to delivering high-quality
            web solutions that meet the needs of clients and users alike. I have
            the skills to turn your ideas into dynamic and engaging web
            applications.
          </p>

          {/* Skills Bars */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "HTML", width: htmlWidth },
              { name: "BOOTSTRAP", width: bootstrapWidth },
              { name: "MYSQL", width: mysqlWidth },
              { name: "FIGMA", width: figmaWidth },
              { name: "JAVA", width: javaWidth },
              { name: "CSS", width: cssWidth },
              { name: "JAVASCRIPT", width: javascriptWidth },
              { name: "C++", width: cppWidth },
              { name: "PYTHON", width: pythonWidth },
            ].map((skill) => (
              <div key={skill.name} className="pt-8 px-5">
                <span className="flex justify-between items-center text-lg">
                  <span>{skill.name}</span>
                  <span className="text-end">{skill.width}%</span>
                </span>
                <div className="w-full h-3 bg-gray-200 rounded mt-2">
                  <div
                    className="h-3 bg-[#00df9a] rounded transition-all duration-1000 ease-in"
                    style={{ width: `${skill.width}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
