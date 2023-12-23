const OneTab = () => {
  return (
    <div className="overflow-y-auto h-full w-full">
      <div className="w-[148px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 1</p>
          <p className="text-[#1E1E1E] font-normal text-base">Enter your PIN</p>
        </div>
      </div>

      <div className="w-[438px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 2</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Enter the amount you want to deposit/contribute
          </p>
        </div>
      </div>

      <div className="w-[384px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 3</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Deposit/Contribution summary is displayed
          </p>
        </div>
      </div>

      <div className="w-[300px]">
        <div className="h-[74px] rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 4</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Confirm deposit/contribution
          </p>
        </div>
      </div>

      <div className="w-[400px]">
        <div className="h-[74px] rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 5</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Receives MOMO prompt to enter MOMO Pin
          </p>
        </div>
      </div>

      <div className="w-[500px]">
        <div className="h-[74px] rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 6</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Receives SMS to confirm successful deposit/contribution
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneTab;
