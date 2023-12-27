"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import AddEmailTabs from "./AddEmailTabs";

const AddEmailTab = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="w-full border-[1px] border-[#D1DAE5] rounded-2xl mt-[30px]">
      <div
        className="depositTab space-y-4 cursor-pointer"
        onClick={() => setIsToggle(!isToggle)}
      >
        <span className="w-full flex justify-between items-center">
          <p className="text-[#133B69] font-semibold text-[20px]">Add Email</p>
          <IoIosArrowForward />
        </span>
        <p className="font-normal text-sm">
          Step by step guide on how to add email address
        </p>
      </div>

      {isToggle && (
        <>
          <div className="bg-[#D1DAE5] w-[100%] h-[1px]"></div>
          <AddEmailTabs />
        </>
      )}
    </div>
  );
};

export default AddEmailTab;
