import React from "react";
import { FcApproval, FcAssistant, FcBarChart } from "react-icons/fc";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[440px] block">
        The value that holds us true and to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <FcBarChart className="text-[2rem]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Demanding
            </span>
          </div>

          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <FcApproval className="text-[2rem]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Approved
            </span>
          </div>

          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <FcAssistant className="text-[2rem]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Support 24x7
            </span>
          </div>

          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
