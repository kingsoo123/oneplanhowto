const FooterMenu = () => {
  return (
    <footer className="md:pl-[80px] md:pr-[80px] mt-[70px]">
      <div className="flex justify-between items-start flex-wrap md:flex-nowrap p-3 md:p-0">
        <div className="w-[50%]">
          <p className="font-semibold text-[20px] text-[#133B69]">Company</p>
          <div className="h-[15px]" />
          <span className="text-[#133B69] text-sm font-medium space-y-6">
            <p>About Us</p>
            <p>Privacy</p>
            <p>Terms</p>
          </span>
        </div>
        <div className="w-[50%]">
          <p className="font-semibold text-[20px] text-[#133B69]">Product</p>
          <div className="h-[15px]" />
          <span className="text-[#133B69] text-sm font-medium space-y-6">
            <p>Pension</p>
            <p>Welfare</p>
            <p>Loan</p>
          </span>
        </div>
        <div className="w-[50%] mt-16 md:mt-0">
          <p className="font-semibold text-[20px] text-[#133B69]">Resources</p>
          <div className="h-[15px]" />
          <span className="text-[#133B69] text-sm font-medium space-y-6">
            <p>FAQs</p>
            <p>Security</p>
          </span>
        </div>
        <div className="w-[50%] mt-16 md:mt-0">
          <p className="font-semibold text-[20px] text-[#133B69]">Contact</p>
          <div className="h-[15px]" />
          <span className="text-[#133B69] text-sm font-medium space-y-6">
            <p>help@oneplan.finance</p>
            <p>+233 599 434 000</p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
