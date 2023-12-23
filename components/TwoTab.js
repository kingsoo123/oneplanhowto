const TwoTab = () => {
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
            Account balance is displayed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoTab;
