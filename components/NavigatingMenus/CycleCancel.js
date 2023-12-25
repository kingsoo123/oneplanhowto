const CycleCancelTabs = () => {
  return (
    <div className="overflow-y-auto h-full w-full pt-4">
      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 1</p>
          <p className="text-[#1E1E1E] font-normal text-base">Enter PIN</p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 2</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Confirm cycle cancellation
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 3</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Confirms cancellation
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 4</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            USSD message is displayed and session is ended
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-3">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 4</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            SMS is sent to indicate cancellation of mandate
          </p>
        </div>
      </div>
    </div>
  );
};

export default CycleCancelTabs;
