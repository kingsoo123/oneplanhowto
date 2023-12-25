const WithdrawalTabs = () => {
  return (
    <div className="overflow-y-auto h-full w-full pt-4">
      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 1</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Message is displayed stating whether you can withdraw
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 2</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            If you’re eligible, available balance is displayed
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 3</p>
          <p className="text-[#1E1E1E] font-normal text-base">Enter your PIN</p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 4</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Enter amount to withdraw
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 5</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Withdrawal summary is displayed
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 6</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Notice indicating processing will take maximum of 48hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalTabs;
