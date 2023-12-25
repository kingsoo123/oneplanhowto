"use client";

import Image from "next/image";
import { useState } from "react";
import OneTab from "./OneTab";
import TwoTab from "./TwoTab";
import ThreeTab from "./ThreeTab";
import money from "../assets/money-add.png";
import receipt from "../assets/receipt-item.png";
import documentfav from "../assets/document-favorite.png";
import FirstShortCutTab from "./ussdShortcutsMobile/FirstShortCutTab";
import SecondShortCutTab from "./ussdShortcutsMobile/SecondShortcutTab";
import ThirdShortCutTab from "./ussdShortcutsMobile/ThirdShortCutTab";

const UssdAgent = () => {
  const [toggle, SetToggle] = useState("one");

  return (
    <div className="md:pl-[80px] md:pr-[80px] md:mt-[70px] mt-[30px]">
      <div className="flex justify-center items-center">
        <p className="text-[#133B69] font-semibold text-center text-3xl md:text-[40px]">
          USSD Shortcuts
        </p>
      </div>
      {/* This block of div is for medium size device width screen */}
      <div className="hidden md:flex justify-between items-start mt-[40px]">
        <div className="w-[35%] flex flex-col justify-between space-y-5">
          <div
            className={`rgbaBG3 w-[90%] h-[177px] dark:border-[#F6C911] ${
              toggle === "one" ? "border-[1px]" : ""
            } rounded-2xl p-3 space-y-4 cursor-pointer`}
            onClick={() => SetToggle("one")}
          >
            <Image src={money} alt="money" width={40} height={40} />
            <p className="text-[#1E1E1E] font-semibold text-[20px]">
              Dial *434*11#
            </p>
            <p className="font-normal text-sm text-[#696969]">
              Step by step guide on how to make a Voluntary Contribution.
            </p>
          </div>
          <div
            className={`rgbaBG3 w-[90%] h-[177px] dark:border-[#F6C911] ${
              toggle === "two" ? "border-[1px]" : ""
            } rounded-2xl p-3 space-y-4 cursor-pointer`}
            onClick={() => SetToggle("two")}
          >
            <Image src={receipt} alt="money" width={40} height={40} />
            <p className="text-[#1E1E1E] font-semibold text-[20px]">
              Dial *434*12#
            </p>
            <p className="font-normal text-sm text-[#696969]">
              Step by step guide on how to check your account balances.
            </p>
          </div>

          <div
            className={`rgbaBG3 w-[90%] h-[177px] dark:border-[#F6C911] ${
              toggle === "three" ? "border-[1px]" : ""
            } rounded-2xl p-3 space-y-4 cursor-pointer`}
            onClick={() => SetToggle("three")}
          >
            <Image src={documentfav} alt="money" width={40} height={40} />
            <p className="text-[#1E1E1E] font-semibold text-[20px]">
              Dial *434*13#
            </p>
            <p className="font-normal text-sm text-[#696969]">
              Step by step guide on how to Declare your Inheritance.
            </p>
          </div>
        </div>
        <div className="flex justify-between w-[65%] dark:border-[#D2D2D2] border-[1px] rounded-2xl p-6 ">
          {toggle === "one" ? (
            <OneTab />
          ) : toggle === "two" ? (
            <TwoTab />
          ) : (
            <ThreeTab />
          )}
        </div>
      </div>
      {/* This ends the medium size screen device width div */}
      {/* Beginning of mobile device screen */}
      <FirstShortCutTab />
      <SecondShortCutTab />
      <ThirdShortCutTab />
    </div>
  );
};

export default UssdAgent;
