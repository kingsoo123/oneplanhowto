"use client";

import Image from "next/image";
import { useState } from "react";
import RegisterYourself from "./RegisterYourself";
import AgentAssisted from "./AgentAssisted";
import user1 from "../assets/User_Square.png";
import user2 from "../assets/user_square2.png";
import FirstTab from "./RegistrationMobile/firstTab";
import SecondTab from "./RegistrationMobile/SecondTab";

const Registration = () => {
  const [isRegSelected, SetIsRegSelected] = useState(true);
  return (
    <div className="md:pl-[80px] md:pr-[80px] mt-[70px]">
      <div className="flex justify-center items-center">
        <p className="text-[#133B69] font-semibold text-center text-3xl md:text-[40px]">
          Registration
        </p>
      </div>
      {/* This block of div is for medium size device width screen */}
      <div className="hidden md:flex justify-between items-center mt-[40px]">
        <div className="w-[35%] flex flex-col justify-between h-[392px]">
          <div
            className={`rgbaBG w-[90%] h-[177px] dark:border-[#036C4F] ${
              isRegSelected ? "border-[1px]" : ""
            } rounded-2xl p-3 space-y-4 cursor-pointer`}
            onClick={() => SetIsRegSelected(true)}
          >
            <Image src={user1} alt="user" width={40} height={40} />
            <p className="text-[#036C4F] font-semibold text-[20px]">
              Register Yourself
            </p>
            <p className="font-normal text-sm text-[#696969]">
              Step by step guide on how to register yourself using the One Plan
              short-code.
            </p>
          </div>
          <div
            className={`rgbaBG w-[90%] h-[177px] dark:border-[#036C4F] ${
              !isRegSelected ? "border-[1px]" : ""
            } rounded-2xl p-3 space-y-4 cursor-pointer`}
            onClick={() => SetIsRegSelected(false)}
          >
            <Image src={user2} alt="user" width={40} height={40} />
            <p className="text-[#036C4F] font-semibold text-[20px]">
              Agent-Assisted Registration
            </p>
            <p className="font-normal text-sm text-[#696969]">
              Step by step guide on how to register yourself through a Planner
              Agent.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center md:w-[65%] h-[392px] dark:border-[#D2D2D2] border-[1px] rounded-2xl p-6 ">
          {isRegSelected ? <RegisterYourself /> : <AgentAssisted />}

          <div className="h-[109px] w-[2px] dark:bg-[#1E1E1E]" />
        </div>
      </div>
      {/* This ends the medium size screen device width div */}

      {/* Beginning of mobile device screen view */}

      <FirstTab />
      <SecondTab />
    </div>
  );
};

export default Registration;
