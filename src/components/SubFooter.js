import React from "react";
import { socialIcons } from "../utils/constant";

const SubFooter = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className=" mx-auto text-center h-[200px] flex flex-col items-center justify-center">
      <p className="text-gray-200  text-2xl font-bold ">{currentYear} Netflix | All Rights Reserved.</p>

      <div className="text-gray-200 flex items-center justify-around gap-12 mt-8">
        {
          socialIcons.map((Socialicon) => {
            
              const IconComponent = Socialicon.icon;
              return <IconComponent className="text-3xl" key={Socialicon.name}/>
        
          })
        }
      </div>
    </div>
  );
};

export default SubFooter;
