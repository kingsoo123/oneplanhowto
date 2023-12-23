const ThreeTab = () => {
  return (
    <div className="overflow-y-auto h-full w-full">
      <div className="w-[228px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 1</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Confirm beneficiary list.
          </p>
        </div>
      </div>

      <div className="w-[114px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 2</p>
          <p className="text-[#1E1E1E] font-normal text-base">Enter PIN.</p>
        </div>
      </div>

      <div className="w-[184px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 3</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Confirm payment.
          </p>
        </div>
      </div>

      <div className="w-[230px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 4</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Receive MOMO prompt.
          </p>
        </div>
      </div>

      <div className="w-[580px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 5</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Customer will receive an SMS to confirm successful payment with a
            link to download their certificate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeTab;
