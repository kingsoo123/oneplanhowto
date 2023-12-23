import Image from "next/image";
import heroimg from "../assets/hero-image.png";
const Hero = () => {
  return (
    <div className="pl-0 pr-0 md:pl-[80px] md:pr-[80px] mt-[30px]">
      <div className="flex justify-center items-center pt-[70px] px-8">
        <p className="text-[#133B69] font-semibold text-center text-3xl md:text-[56px]">
          Using the *434# Short-code
        </p>
      </div>
      <div className="flex justify-center items-center mt-[30px] px-4">
        <p className="text-[#696969] font-normal md:text-[20px] text-center">
          This is a step by step guide on how to use our USSD short-code.
        </p>
      </div>
      <div className="flex justify-center items-center mt-[60px]">
        <Image src={heroimg} alt="logo" width={632} height={317} />
      </div>
    </div>
  );
};

export default Hero;
