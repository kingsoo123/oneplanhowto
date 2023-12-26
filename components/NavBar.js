"use client";

import { useState } from "react";
import { Drawer } from "antd";
import Image from "next/image";
import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import MobileModal from "./mobileModal";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  // const closeDrawer = () => {
  //   setOpen(false);
  // };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed flex justify-between items-center h-[61px] md:pl-[80px] md:pr-[80px] pt-4 bg-white w-full">
      <div className="h-full w-full md:w-[30%] flex justify-between md:justify-start items-center p-3 md:p-0">
        <Image
          src={logo}
          alt="logo"
          className="w-[80px] md:w-[115px] md:h-[61px]"
        />
        <CiMenuBurger
          className="md:hidden w-[50px] h-[35px] text-[#133B69]"
          onClick={() => setShow(true)}
        />
      </div>

      <div className="hidden h-full w-[70%] md:flex md:justify-between md:items-center">
        <div className="w-[50%] h-[60px] flex justify-start items-center">
          <span className="w-full flex space-x-16">
            <p className="text-[#133B69] text-[16px] font-normal">Pension</p>
            <p className="text-[#133B69] text-[16px] font-normal">Welfare</p>
            <p className="text-[#133B69] text-[16px] font-normal">Loan</p>
            <span
              className="flex justify-between items-center space-x-4 cursor-pointer"
              onMouseOver={showDrawer}
            >
              <p className="text-[#133B69] text-[16px] font-normal">Learn</p>
              <IoIosArrowDown className="text-[#17477E] w-[20px] h-[20px]" />
            </span>
          </span>
        </div>
        <div className="w-[50%] h-full flex justify-end items-center">
          <span>
            <button
              type="button"
              className="h-[56px] w-[106px] text-[#17477E]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-[#17477E] border-[1px]"
            >
              Log in
            </button>
            <button
              type="button"
              className="h-[56px] w-[215px] text-white bg-[#17477E] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#17477E]"
            >
              Start your plan today
            </button>
          </span>
        </div>
      </div>

      <Drawer
        placement="top"
        closable={false}
        //onClose={onClose}
        open={open}
        getContainer={false}
        height={150}
        width={200}
      >
        <div className="space-y-4" onMouseLeave={onClose}>
          <p className="text-[#133B69] text-[16px] font-normal cursor-pointer">
            About us
          </p>
          <p className="text-[#133B69] text-[16px] font-normal cursor-pointer">
            Contact us
          </p>
          <div>
            <p className="text-[#133B69] text-[16px] font-normal cursor-pointer">
              How to use *434#
            </p>
          </div>
        </div>
      </Drawer>

      {show && <MobileModal setShow={setShow} />}
    </nav>
  );
};

export default NavBar;
