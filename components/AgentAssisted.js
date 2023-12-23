const AgentAssisted = () => {
  return (
    <div className="overflow-y-auto h-full w-full">
      <div className="w-[370px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 1</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Customer enters Agent Planner number
          </p>
        </div>
      </div>

      <div className="w-[640px] py-4">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 2</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Message is displayed stating whether agent is licensed by One Plan
            or not
          </p>
        </div>
      </div>

      <div className="w-[680px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 3</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            If agent is lincesed by One Plan, Customer is sent a one time pin to
            share with the agent to complete their registration.
          </p>
        </div>
      </div>

      <div className="w-[550px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 4</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Terms and Condition is displayed. Customer enters 1 to accept.
          </p>
        </div>
      </div>

      <div className="w-[680px]">
        <div className="rgbaBG2 px-4 py-2 rounded-lg space-y-2 mt-5">
          <p className="text-[#1E1E1E] font-semibold text-sm">STEP 5</p>
          <p className="text-[#1E1E1E] font-normal text-base">
            Customer is either asked to change or maintian PIN created by
            Planner Agent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentAssisted;
