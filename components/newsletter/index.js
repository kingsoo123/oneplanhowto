const NewsLetter = () => {
  return (
    <div className="md:pl-[80px] md:pr-[80px] mt-[70px]">
      <div className="flex justify-between items-center bg-[#17477E] w-full px-32 py-20 rounded-2xl">
        <p className="font-semibold text-4xl text-white">
          Send me latest <br /> tips, updates & offers.
        </p>
        <div className="flex justify-end w-[60%] h-[56px] space-x-2">
          <input
            type="text"
            placeholder="enter your email address"
            className="w-[60%] bg-[#2B4E78] rounded-lg text-white placeholder-white text-sm pl-2"
          />
          <button
            type="button"
            className="h-[52px] w-[117px] text-[#7a899b] bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
