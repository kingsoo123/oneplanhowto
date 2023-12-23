"use client";

import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const MobileModal = ({ setShow }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto backdrop">
      <div className="w-[100%] bg-[#17477E] rounded-b-3xl py-6 px-3">
        <div className="w-full flex justify-end items-center">
          <IoCloseOutline
            className="text-white w-[50px] h-[50px]"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="space-y-5">
          <p className="text-white font-medium text-[20px]">Home</p>
          <p className="text-white font-medium text-[20px]">Pension</p>
          <p className="text-white font-medium text-[20px]">Welfare</p>
          <p className="text-white font-medium text-[20px]">Loan</p>
          <div>
            <span
              className="flex items-center space-x-3"
              onClick={() => setIsToggle(!isToggle)}
            >
              <p className="text-white font-medium text-[20px]">Learn</p>
              <IoIosArrowForward className="text-white w-[30px] h-[30px]" />
            </span>

            {isToggle && (
              <div className="space-y-4 mt-[30px] opacity-50">
                <p className="text-white text-[16px] font-normal">About us</p>
                <p className="text-white text-[16px] font-normal">Contact us</p>
                <div>
                  <p className="text-white text-[16px] font-normal">
                    How to use *434#
                  </p>
                </div>
              </div>
            )}
          </div>
          <p className="text-white font-medium text-[20px]">
            Start your plan today
          </p>
          <p className="text-white font-medium text-[20px]">Login</p>
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
