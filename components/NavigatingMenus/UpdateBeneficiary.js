const UpdateBeneficiaryTabs = () => {
  return (
    <div className="overflow-y-auto h-full w-full pt-8">
      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 1</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Beneficiary list is displayed, Customer is asked to select record to
            be updated
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 2</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Update name/contact of beneficiary
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 3</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Summary of beneficiary is displayed
          </p>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 4</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Press 1 to confirm changes
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateBeneficiaryTabs;
