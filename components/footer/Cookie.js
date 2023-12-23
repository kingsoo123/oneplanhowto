import Image from "next/image";
import chat from "../../assets/chat.png";

const CookieSect = () => {
  return (
    <div className="hidden md:flex justify-center items-center md:px-[125px] py-4 mt-[250px] space-x-4 bg-[#133B69]">
      <span className="w-[60%]">
        <p className="text-white font-normal text-sm text-left">
          We use cookies on our website to help us provide the best browsing
          experience. By continuing to use our website you are deemed to have
          agreed to the use of cookies.
        </p>
      </span>

      <button
        type="button"
        className="h-[52px] w-[91px] text-[#133B69] bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white"
      >
        Accept
      </button>

      <button
        type="button"
        className="h-[52px] w-[91px] text-white bg-[transparent] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[transparent]"
      >
        Cancel
      </button>

      <div className="absolute right-24 -mt-[140px] z-20 w-[70px] h-[70px] cursor-pointer">
        <Image src={chat} alt="chat" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default CookieSect;
