"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import AddBeneficiaryTabs from "./AddBeneficiary";
import UpdateBeneficiaryTabs from "./UpdateBeneficiary";

const BeneficiariesTab = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isAdded, setIsAdded] = useState(true);
  return (
    <div className="w-full border-[1px] border-[#D1DAE5] rounded-2xl mt-[30px]">
      <div className="depositTab space-y-4 cursor-pointer">
        <span
          className="w-full flex justify-between items-center"
          onClick={() => setIsToggle(!isToggle)}
        >
          <p className="text-[#133B69] font-semibold text-[20px]">
            Beneficiaries
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
          Step by step guide on how to manage your beneficiaries
        </p>
        {isToggle && (
          <div className="flex space-x-2">
            <button
              type="button"
              className={`h-[32px] w-[61px] ${
                isAdded
                  ? "bg-[#04825F] text-white"
                  : "border-[#04825F] border-[1px] text-[#04825F]"
              } font-medium rounded-[64px] text-sm`}
              onClick={() => setIsAdded(true)}
            >
              Add
            </button>
            <button
              type="button"
              className={`  font-medium rounded-[64px] text-sm ${
                !isAdded
                  ? "bg-[#04825F] text-white"
                  : "border-[#04825F] border-[1px] text-[#04825F]"
              } py-1 px-4`}
              onClick={() => setIsAdded(false)}
            >
              Update
            </button>
          </div>
        )}
      </div>

      {isToggle && (
        <>
          <div className="bg-[#D1DAE5] w-[100%] h-[1px]"></div>
          {isAdded ? <AddBeneficiaryTabs /> : <UpdateBeneficiaryTabs />}
        </>
      )}
    </div>
  );
};

export default BeneficiariesTab;
