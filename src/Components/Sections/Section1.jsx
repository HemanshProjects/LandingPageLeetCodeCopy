import React, { useState } from "react";
import main from "../../assets/dsa-main.png";
import { TiMediaRecordOutline, TiMediaRecord  } from "react-icons/ti";

const Section1 = () => {
  const [page, setPage] = useState(2);
  return (
    <div className="flex flex-row max-md:flex-col">
      <div className="flex-1">
        <h1 className="font-bold font-quicksand text-[32px] text-gray-900 pt-14 mb-3 leading-10">
          Best way to revise for your next coding interview
        </h1>
        <p className="text-gray-600 font-roboto mb-4">
          Get everything in a single guide: Data structures, algorithms,
          patterns, visualizers, questions, examples, solutions, explanations,
          and much more!
        </p>
        <button
          className="font-mavenpro bg-black items-center text-white w-full text-sm font-medium rounded-sm py-2
        hover:bg-pink-400 hover:shadow-lg hover:shadow-black hover:text-black hover:font-bold hover:border-red-400
        hover:border-solid border-t-2 border-l-2 mb-8"
        >
          Buy FREE through <span>GUMROAD</span>
        </button>
        <div className="font-roboto text-gray-600 bg-slate-100 text-xs px-5 py-5 italic border-s-4 border-orange-300 mb-8 ">
          {page === 1 && (
            <p>
              "Excellent revision tool, specially when you have an interview
              coming up in 15 days or so. It's so hard to find everything in one
              place."
            </p>
          )}

          {page ===2 && (
            <p>
              "Highly recommended if you're interviewing or preparing these days
              - this guide will help you revise concepts and practice things
              before the interview."
            </p>
          )}

          {page === 3 && (
            <p>
              "Awesome! Love how the concepts are explained + all the wonderful
              resources mentioned. Having everything in one guide is super
              helpful."
            </p>
          )}
        </div>
        <div className="flex flex-row justify-center text-md gap-2">
          <button className="" onClick={() => setPage(1)}>
             {(page===1) && <TiMediaRecord/>}
             {(page!==1) && <TiMediaRecordOutline />}
          </button>
          <button onClick={() => setPage(2)}>
             {(page===2) && <TiMediaRecord/>}
             {(page!==2) && <TiMediaRecordOutline />}
          </button>
          <button onClick={() => setPage(3)}>
             {(page===3) && <TiMediaRecord/>}
             {(page!==3) && <TiMediaRecordOutline />}
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center max-md:mt-8">
        <img src={main} alt="BookImg" className="h-[400px]" />
      </div>
    </div>
  );
};

export default Section1;
