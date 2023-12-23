import Image from "next/image";
import DepositTab from "@/components/NavigatingMenus/Deposit";
import WithdrawalTab from "./NavigatingMenus/Withdrawal";
import CheckBalanceTab from "./NavigatingMenus/CheckBalance";
import PaymentCycleTab from "./NavigatingMenus/PaymentCycle";
import DeclareTab from "./NavigatingMenus/Declare";
import NextOfKinTab from "./NavigatingMenus/NextOfKin";
import BeneficiariesTab from "./NavigatingMenus/Beneficiaries";
import wallet from "../assets/wallet-3.png";
import documentfav from "../assets/document-favorite.png";

const NavigatingMenu = () => {
  return (
    <div className="md:pl-[80px] md:pr-[80px] mt-[70px]">
      <div className="flex justify-center items-center">
        <p className="text-[#133B69] font-semibold text-center text-3xl md:text-[40px]">
          Navigating the Menu
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-[#696969] font-normal text-center md:text-[24px]">
          Dial <span className="font-semibold">*434#,</span> Select{" "}
          <span className="font-semibold">[1] Pension</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start mt-12  md:space-x-12">
        <div className="w-full md:w-[50%] md:bg-[#F6F8FA] p-3 md:px-10 md:py-8 md:rounded-2xl">
          <span className="flex justify-start items-center space-x-2">
            <Image src={wallet} alt="wallet" width={40} height={40} />
            <p className="text-[#133B69] font-normal text-[24px]">
              TRANSACTION
            </p>
          </span>
          <DepositTab />
          <WithdrawalTab />
          <CheckBalanceTab />
          <PaymentCycleTab />
        </div>
        <div className="w-full md:w-[50%] md:bg-[#F6F8FA] p-3 md:px-10 md:py-8 md:rounded-2xl  pb-8 md:pb-[165px]">
          <span className="flex justify-start items-center space-x-2">
            <Image src={documentfav} alt="wallet" width={40} height={40} />
            <p className="text-[#133B69] font-normal text-[24px]">
              INHERITANCE
            </p>
          </span>
          <DeclareTab />
          <NextOfKinTab />
          <BeneficiariesTab />
        </div>
      </div>
    </div>
  );
};

export default NavigatingMenu;
