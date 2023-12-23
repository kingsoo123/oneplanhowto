const AddNextOfKinsTabs = () => {
  return (
    <div className="overflow-y-auto h-full w-full pt-8">
      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 1</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Customer enters Next of Kin name{" "}
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 2</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Customer enters contact details of Next of Kin
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 3</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Summary of Next of Kin details is displayed
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 4</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            USSD message is displayed and session end
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddNextOfKinsTabs;
