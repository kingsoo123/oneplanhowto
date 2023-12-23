const NewsLetter = () => {
  return (
    <div className="md:pl-[80px] md:pr-[80px] mt-[70px] p-3">
      <div className="flex flex-col md:flex-row justify-between md:items-center bg-[#17477E] w-full md:px-32 md:py-20 rounded-2xl p-8 space-y-4 md:space-y-0">
        <p className="font-semibold md:text-4xl text-white">
          Send me latest <br /> tips, updates & offers.
        </p>
        <div className="w-full flex flex-col md:flex-row md:justify-end md:w-[60%] md:h-[56px] space-y-4 md:space-x-2 md:space-y-0">
          <input
            type="text"
            placeholder="enter your email address"
            className="w-full md:w-[60%] h-[56px] bg-[#2B4E78] rounded-lg text-white placeholder-white text-sm pl-2"
          />
          <button
            type="button"
            className="h-[52px] w-[117px] text-[#17477E] bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
