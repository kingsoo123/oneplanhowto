"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import user2 from "../../assets/user_square2.png";
import DepositTabs from "../NavigatingMenus/DepositTabs";
import SecondTabs from "./SecondTabs";

const SecondTab = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="md:hidden w-full mt-[20px] p-3">
      <div
        className={`rgbaBG w-[100%] h-[177px] dark:border-[#036C4F] rounded-2xl p-3 space-y-4 cursor-pointer`}
        onClick={() => setIsToggle(!isToggle)}
      >
        <span className="w-full flex justify-between items-center cursor-pointer">
          <Image src={user2} alt="user" width={40} height={40} />
          {isToggle ? (
            <IoIosArrowDown className="text-[#036C4F] w-[20px] h-[20px]" />
          ) : (
            <IoIosArrowForward className="text-[#036C4F] w-[20px] h-[20px]" />
          )}
        </span>

        <p className="text-[#036C4F] font-semibold text-[20px]">
          Agent-Assisted Registration
        </p>
        <p className="font-normal text-sm text-[#696969]">
          Step by step guide on how to register yourself through a Planner
          Agent.
        </p>
      </div>

      {isToggle && (
        <>
          <div className="bg-[#D1DAE5] w-[90%] h-[1px]"></div>
          <SecondTabs />
        </>
      )}
    </div>
  );
};

export default SecondTab;
