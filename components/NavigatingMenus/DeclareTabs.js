const DeclareTabs = () => {
  return (
    <div className="overflow-y-auto h-full w-full pt-4">
      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 1</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Confirm beneficiary list
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 2</p>
          <p className="text-[#1E1E1E] font-normal text-base">Enter PIN</p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 3</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Confirms payment
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 4</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Receives MOMO prompt
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 5</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Customer will receive an SMS to confirm successful payment with a
            link to download their certificate
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeclareTabs;
