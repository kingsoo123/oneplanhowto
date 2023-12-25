"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CycleChangedTabs from "./CycleChange";
import CycleCancelTabs from "./CycleCancel";

const PaymentCycleTab = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isChanged, setIsChanged] = useState(true);
  return (
    <div className="w-full border-[1px] border-[#D1DAE5] rounded-2xl mt-[30px]">
      <div className="depositTab space-y-4 cursor-pointer">
        <span
          className="w-full flex justify-between items-center"
          onClick={() => setIsToggle(!isToggle)}
        >
          <p className="text-[#133B69] font-semibold text-[20px]">
            Payment Cycle
          </p>
          {isToggle ? (
            <IoIosArrowDown className="text-[#17477E] w-[20px] h-[20px]" />
          ) : (
            <IoIosArrowForward className="text-[#17477E] w-[20px] h-[20px]" />
          )}
        </span>
        <p
          className="font-normal text-sm"
          onClick={() => setIsToggle(!isToggle)}
        >
          Step by step guide on how to deposit to your account
        </p>

        {isToggle && (
          <div className="flex space-x-2">
            <button
              type="button"
              className={` ${
                isChanged
                  ? "bg-[#04825F] text-white"
                  : "border-[#04825F] border-[1px] text-[#04825F]"
              } font-medium rounded-[64px] text-sm py-1 px-4`}
              onClick={() => setIsChanged(true)}
            >
              Change
            </button>
            <button
              type="button"
              className={`  font-medium rounded-[64px] text-sm ${
                !isChanged
                  ? "bg-[#04825F] text-white"
                  : "border-[#04825F] border-[1px] text-[#04825F]"
              } py-1 px-4`}
              onClick={() => setIsChanged(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {isToggle && (
        <>
          <div className="bg-[#D1DAE5] w-[100%] h-[1px]"></div>
          {isChanged ? <CycleChangedTabs /> : <CycleCancelTabs />}
        </>
      )}
    </div>
  );
};

export default PaymentCycleTab;
