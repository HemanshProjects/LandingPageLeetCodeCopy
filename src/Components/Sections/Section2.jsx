import React from "react";
import page1 from "../../assets/dsa-2.png";
import { FaCheckCircle } from "react-icons/fa";

const Section2 = () => {
  return (
    <div className="flex flex-col items-center ">
      <h2 className="font-quicksandlight font-bold text-3xl mb-10 text-gray-800">
        What's Included
      </h2>

      <div className="flex gap-12 w-full max-md:flex-col ">
        <div className="flex justify-end flex-1 max-md:mb-4 max-md:justify-center">
          <img src={page1} alt="Page1Img" className="h-[350px] max-w-full" />
        </div>
        <div className="flex justify-start flex-1 max-md:justify-center">
        <div >
          <ul className="font-roboto mb-7">
            <li className="mb-4 flex items-center">
              <FaCheckCircle className=" text-sm mr-2 text-green-500" />{" "}
              <span className="text-sm text-gray-600">
                15+ algo patterns discussed
              </span>
            </li>
            <li className="mb-4 flex items-center">
              <FaCheckCircle className=" text-sm mr-2 text-green-500" />{" "}
              <span className="text-sm text-gray-600">
                Detailed solutions and explanations
              </span>
            </li>
            <li className="mb-4 flex items-center">
              <FaCheckCircle className=" text-sm mr-2 text-green-500" />{" "}
              <span className="text-sm text-gray-600">
                Awesome resources, articles, blogs
              </span>
            </li>
            <li className="mb-4 flex items-center">
              <FaCheckCircle className=" text-sm mr-2 text-green-500" />{" "}
              <span className="text-sm text-gray-600">
                Visualizers and animations included
              </span>
            </li>
            <li className="mb-4 flex items-center">
              <FaCheckCircle className=" text-sm mr-2 text-green-500" />{" "}
              <span className="text-sm text-gray-600">
                100 pages of quality content
              </span>
            </li>
            <li className="mb-4 flex items-center">
              <FaCheckCircle className=" text-sm mr-2 text-green-500" />{" "}
              <span className="text-sm text-gray-600">
                Concepts explained for beginners
              </span>
            </li>
            <li className="mb-4 flex items-center">
              <FaCheckCircle className=" text-sm mr-2 text-green-500" />{" "}
              <span className="text-sm text-gray-600">
                All in one revision guide
              </span>
            </li>      
          </ul>

          <div className="w-full flex justify-center">
          <button className="bg-orange-600 rounded-3xl text-xs font-bold text-white px-6 py-3">Download for free</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
