"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import user1 from "../../assets/User_Square.png";
import DepositTabs from "../NavigatingMenus/DepositTabs";

const FirstTab = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="md:hidden w-full mt-[20px] p-3">
      <div
        className={`rgbaBG w-[100%] h-[177px] dark:border-[#036C4F] rounded-2xl p-3 space-y-4 cursor-pointer`}
        onClick={() => setIsToggle(!isToggle)}
      >
        <span className="w-full flex justify-between items-center cursor-pointer">
          <Image src={user1} alt="user" width={40} height={40} />
          {isToggle ? (
            <IoIosArrowDown className="text-[#036C4F] w-[20px] h-[20px]" />
          ) : (
            <IoIosArrowForward className="text-[#036C4F] w-[20px] h-[20px]" />
          )}
        </span>

        <p className="text-[#036C4F] font-semibold text-[20px]">
          Register Yourself
        </p>
        <p className="font-normal text-sm text-[#696969]">
          Step by step guide on how to register yourself using the One Plan
          short-code.
        </p>
      </div>

      {isToggle && (
        <>
          <div className="bg-[#D1DAE5] w-[90%] h-[1px]"></div>
          <DepositTabs />
        </>
      )}
    </div>
  );
};

export default FirstTab;
