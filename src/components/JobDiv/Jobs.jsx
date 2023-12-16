import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { CompanyData } from "../../contant";

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
       {CompanyData.map((company)=>{
         return (
          <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
         <span className="flex justify-between items-center gap-4">
           <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
             {company.title}
           </h1>
           <span className="flex items-center text-[#ccc] gap-1">
             <BiTimeFive />
             {company.time}
           </span>
         </span>
         <h6 className="text-[#ccc]">{company.location}</h6>
         <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
           {company.description}
         </p>
         <span className="text-[12px] text-textColor font-semibold group-hover:text-white pt-2 block">
           {company.companyName}, {company.location}
         </span>
         <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white mt-4">
           Apply Now
         </button>
       </div>
         )
       })}
      </div>
    </div>
  );
};

export default Jobs;
