import React from "react";
import profile1 from "../../assets/profiles/profile-1.png";
import profile2 from "../../assets/profiles/profile-2.png";
import profile3 from "../../assets/profiles/profile-3.png";
import profile4 from "../../assets/profiles/profile-4.png";

const Section3 = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-3 font-roboto max-md:flex max-md:flex-col">
        <div className="border-2 border-gray-200 rounded-md px-6 py-8">
          <p className="text-gray-500 text-xs leading-loose mb-3">
            “Walling helps us visually organise ideas and tasks, work
            collaboratively and efficiently within our team. The visual
            experience makes it so easy to plan content and stay on track with
            our projects and campaigns.”
          </p>
          <div className="flex ">
            <img src={profile1} alt="profile1" className="h-12 mr-3" />
            <div className=" text-xs flex flex-col justify-center">
              <p className="text-gray-600">Harsh Pandey</p>
              <p className="text-gray-500">Head of Development</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-md px-6 py-8">
          <p className="text-gray-500 text-xs leading-loose mb-3">
            “Walling helps us visually organise ideas and tasks, work
            collaboratively and efficiently within our team. The visual
            experience makes it so easy to plan content and stay on track with
            our projects and campaigns.”
          </p>
          <div className="flex ">
            <img src={profile2} alt="profile1" className="h-12 mr-3" />
            <div className=" text-xs flex flex-col justify-center">
              <p className="text-gray-600">Harsh Pandey</p>
              <p className="text-gray-500">Head of Development</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-md px-6 py-8">
          <p className="text-gray-500 text-xs leading-loose mb-3">
            “Walling helps us visually organise ideas and tasks, work
            collaboratively and efficiently within our team. The visual
            experience makes it so easy to plan content and stay on track with
            our projects and campaigns.”
          </p>
          <div className="flex ">
            <img src={profile3} alt="profile1" className="h-12 mr-3" />
            <div className=" text-xs flex flex-col justify-center">
              <p className="text-gray-600">Harsh Pandey</p>
              <p className="text-gray-500">Head of Development</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-md px-6 py-8">
          <p className="text-gray-500 text-xs leading-loose mb-3">
            “Walling helps us visually organise ideas and tasks, work
            collaboratively and efficiently within our team. The visual
            experience makes it so easy to plan content and stay on track with
            our projects and campaigns.”
          </p>
          <div className="flex ">
            <img src={profile4} alt="profile1" className="h-12 mr-3" />
            <div className=" text-xs flex flex-col justify-center">
              <p className="text-gray-600">Harsh Pandey</p>
              <p className="text-gray-500">Head of Development</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Section3;
