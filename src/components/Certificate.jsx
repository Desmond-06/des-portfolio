import React from "react";
import one from "../assets/certificates/one.png";
import two from "../assets/certificates/two.png";
import three from "../assets/certificates/three.png";
import four from "../assets/certificates/four.png";
import five from "../assets/certificates/five.png";
import six from "../assets/certificates/six.png";
import seven from "../assets/certificates/seven.png";
import eight from "../assets/certificates/eight.png";
import nine from "../assets/certificates/nine.png";
import ten from "../assets/certificates/ten.png";
import eleven from "../assets/certificates/eleven.png";
import twelve from "../assets/certificates/twelve.png";
import thirteen from "../assets/certificates/thirteen.png";
import fourteen from "../assets/certificates/fourteen.jpg";

const Certificate = () => {
  const techs = [
    { id: 1, src: one, title: "one", style: "shadow-purple-500" },
    { id: 2, src: two, title: "two", style: "shadow-purple-500" },
    { id: 3, src: three, title: "three", style: "shadow-purple-500" },
    { id: 4, src: four, title: "four", style: "shadow-white" },
    { id: 5, src: five, title: "five", style: "shadow-purple-500" },
    { id: 6, src: six, title: "six", style: "shadow-white" },
    { id: 7, src: seven, title: "seven", style: "shadow-purple-500" },
    { id: 8, src: eight, title: "eight", style: "shadow-white" },
    { id: 9, src: nine, title: "nine", style: "shadow-purple-500" },
    { id: 10, src: ten, title: "ten", style: "shadow-white" },
    { id: 11, src: eleven, title: "eleven", style: "shadow-purple-500" },
    { id: 12, src: twelve, title: "twelve", style: "shadow-white" },
    { id: 13, src: thirteen, title: "thirteen", style: "shadow-white" },
    { id: 14, src: fourteen, title: "fourteen", style: "shadow-white" },
  ];

  return (
    <>
      {/* bg-gradient-to-b from-black to-gray-900 */}
      <div className="min-h-screen p-4 ">
        {/* <div className="absolute inset-0 bg-gray-900 z-[-1]"></div> */}
        <div className="text-zone w-full md:w-1/2 md:p-10">
          <h1 className="text-5xl font-bold font-test animate-bounceIn mb-6 hover:animate-bounce text-white">
            Certificate
          </h1>
          <div className="w-60 h-1 bg-white animate-bounceIn absolute top-[6.5rem]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-10 px-5 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <a href={src} target="_self" rel="noopener noreferrer">
                <img src={src} alt={title} className="max-w-full h-auto" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;
