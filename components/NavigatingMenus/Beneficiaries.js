"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import DepositTabs from "./DepositTabs";

const BeneficiariesTab = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="w-full border-[1px] border-[#D1DAE5] rounded-2xl mt-[30px]">
      <div
        className="depositTab space-y-4 cursor-pointer"
        onClick={() => setIsToggle(!isToggle)}
      >
        <span className="w-full flex justify-between items-center">
          <p className="text-[#133B69] font-semibold text-[20px]">
            Beneficiaries
          </p>
          {isToggle ? (
            <IoIosArrowDown className="text-[#17477E] w-[20px] h-[20px]" />
          ) : (
            <IoIosArrowForward className="text-[#17477E] w-[20px] h-[20px]" />
          )}
        </span>
        <p className="font-normal text-sm">
          Step by step guide on how to deposit to your account
        </p>
        {isToggle && (
          <div className="flex space-x-2">
            <button
              type="button"
              className="h-[32px] w-[61px] text-white bg-[#04825F] font-medium rounded-[64px] text-sm dark:bg-[#04825F]"
            >
              Add
            </button>
            <button
              type="button"
              className="text-[#04825F]  font-medium rounded-[64px] text-sm border-[#04825F] border-[1px] py-1 px-4"
            >
              Update
            </button>
          </div>
        )}
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

export default BeneficiariesTab;
