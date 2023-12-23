import Image from "next/image";
import npra from "../../assets/npra-logo.png";
import gflag from "../../assets/gflag.png";
import chat from "../../assets/chat.png";

const Flag = () => {
  return (
    <div className="flex flex-col md:flex-row md:pl-[80px] md:pr-[80px] mt-[100px] md:space-x-4 p-3">
      <div className="flex md:justify-between items-center space-x-2">
        <Image src={npra} alt="npra" width={37} height={40} />
        <span>
          <p className="font-medium text-sm text-[#696969]">
            Partner licensed by NPRA
          </p>
          <p className="font-medium text-[12px] text-[#8E8E8E]">
            In Goodstanding
          </p>
        </span>
      </div>
      <div className="hidden w-[1px] h-[44px] bg-[#B4B4B4]" />
      <div className="flex md:justify-between items-center space-x-2 mt-7 md:mt-0">
        <Image src={gflag} alt="npra" width={37} height={40} />
        <p className="font-medium text-sm text-[#696969]">
          17 Garden Road, East Legon, Accra
        </p>
      </div>

      {/* <div className="absolute right-20 z-20">
        <Image src={chat} alt="chat" className="w-[250px] h-[250px]" />
      </div> */}
    </div>
  );
};

export default Flag;
