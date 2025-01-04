import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  return (
    <div className="education__container">
      <div>
        <div className="text-center mb-4 mt-4">
          <p className="text-gray-300">
            <span className="text-[#4db5ff] text-2xl">- </span>Education & Work
          </p>
          <h1>
            My{" "}
            <span className="text-[#4db5ff]">
              Academic and <br />
              Professional
            </span>{" "}
            Journey
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Education Section */}
          <div className="w-full md:w-1/2 mb-7 md:mb-0">
            {/* Row */}
            <div className="flex gap-2 items-center ml-4">
              <p className="bg-[#4db5ff] h-6 w-6 rounded-full">
                <FaGraduationCap className="ml-[2px] text-[20px]" />
              </p>
              <p className="font-bold text-xl">Education</p>
            </div>
            <hr className="mt-3 mb-3 w-[60%] ml-4" />
            {/* Row-2 */}
            <div className="">
              <div className="border-l-2 border-gray-400 h-auto mx-4">
                <p className="ml-2">2022-2025</p>
                <h1 className="ml-2 font-bold">
                  Moulvibazar Polytechnic <br /> Institute
                </h1>
                <p className="ml-2 mt-2 font-semibold">
                  Subject: Computer Science and Technology
                </p>
                <p className="ml-2 mt-2">Last year</p>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="w-full md:w-1/2">
            <div className="">
              {/* Row */}
              <div className="flex gap-2 items-center ml-4">
                <p className="bg-[#4db5ff] h-6 w-6 rounded-full flex justify-center items-center">
                  <FaBriefcase className="text-white text-[20px]" />
                </p>
                <p className="font-bold text-xl">Work Experience</p>
              </div>
              <hr className="mt-3 mb-3 w-[60%] ml-4" />
              {/* Row-2 */}
              <div className="">
                <div className="border-l-2 border-gray-400 h-auto mx-4">
                  <p className="ml-2 text-gray-500">2022 - Present</p>
                  <h1 className="ml-2 font-bold">Freelance Projects</h1>
                  <p className="ml-2 mt-2">
                    - Developed a portfolio website using React and Tailwind CSS
                    to showcase skills and projects.
                  </p>
                  <p className="ml-2 mt-2">
                    - Built a weather application using JavaScript and
                    OpenWeather API, allowing users to view real-time weather
                    updates.
                  </p>
                  <p className="ml-2 mt-2 font-semibold">
                    Skills: React, Tailwind CSS, JavaScript, API Integration & many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
