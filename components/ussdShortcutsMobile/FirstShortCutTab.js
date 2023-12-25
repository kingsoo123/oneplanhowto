"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import money from "../../assets/money-add.png";
import DepositTabs from "../NavigatingMenus/DepositTabs";
import FirstTabs from "./FirstTabs";

const FirstShortCutTab = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="md:hidden w-full mt-[20px] p-3">
      <div
        className={`rgbaBG3 w-[100%] h-[177px] dark:border-[#F6C911] rounded-2xl p-3 space-y-4 cursor-pointer`}
        onClick={() => setIsToggle(!isToggle)}
      >
        <span className="w-full flex justify-between items-center">
          <Image src={money} alt="money" width={40} height={40} />
          {isToggle ? (
            <IoIosArrowDown className="w-[20px] h-[20px]" />
          ) : (
            <IoIosArrowForward className="w-[20px] h-[20px]" />
          )}
        </span>
        <p className="text-[#1E1E1E] font-semibold text-[20px]">
          Dial *434*11#
        </p>
        <p className="font-normal text-sm text-[#696969]">
          Step by step guide on how to make a Voluntary Contribution.
        </p>
      </div>

      {isToggle && (
        <>
          <div className="bg-[#D1DAE5] w-[90%] h-[1px]"></div>
          <FirstTabs />
        </>
      )}
    </div>
  );
};

export default FirstShortCutTab;
