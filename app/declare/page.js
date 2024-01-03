import Image from "next/image";
import logo from "../../assets/declareLogo.png";
import download from "../../assets/download.png";

const DeclarationCertificate = () => {
  return (
    <div className="p-[50px]">
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="logo" className="w-[115px] h-[61px]" />
      </div>

      <div className="w-full flex justify-center items-center">
        <p className="mt-6 text-[#133B69] text-center md:text-justify font-semibold md:font-bold text-[64px] md:text-[80px] leading-tight">
          Declaration Certificate
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <p className="md:w-[30%] text-center text-[18px] md:text-[20px] text-[#434343] font-normal mt-6">
          Click the download button below to get your declaration certificate
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <span className="mt-6 h-[84px] w-[400px] bg-[#17477E] font-medium rounded-lg  dark:bg-[#17477E] flex justify-center items-center space-x-2">
          <Image src={download} alt="logo" />{" "}
          <p className="text-[24px] text-white">Download</p>
        </span>
      </div>
    </div>
  );
};

export default DeclarationCertificate;
