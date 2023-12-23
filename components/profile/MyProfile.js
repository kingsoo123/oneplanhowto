import Image from "next/image";
import AddEmailTab from "./AddEmail";
import ChangePinTab from "./ChangePin";
import user from "../../assets/user-2.png";

const MyProfile = () => {
  return (
    <div className="md:pl-[80px] md:pr-[80px] mt-[70px]">
      <div className="w-[100%] md:bg-[#F6F8FA] p-3 md:px-10 md:py-8 md:rounded-2xl">
        <span className="flex justify-start items-center cursor-pointer space-x-3">
          <Image src={user} alt="user" width={40} height={40} />
          <p className="text-[#133B69] font-normal text-[24px]">MY PROFILE</p>
        </span>
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:space-x-40">
          <AddEmailTab />
          <ChangePinTab />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
