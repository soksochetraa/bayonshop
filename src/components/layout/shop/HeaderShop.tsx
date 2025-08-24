import React from "react";

const HeaderShop = () => {
  return (
    <div className="  w-full h-auto py-2.5  md:p-0 bg-[url('/images/hero_shop.png')] bg-cover bg-no-repeat flex justify-center items-center ">
      <div className=" flex-col flex w-full h-full md:w-[1420px] md:h-[180px] ">
        <div className=" md:ml-[30px] mt-[39px]  w-[320px] h-auto flex justify-center items-center gap-2.5 ">
          <p className="text-white text-[12px] font-[poppins] ">Home</p>
          <img
            src="/images/Vector.svg"
            alt="arow"
            className="w-[4.5px] h-[9px]"
          />
          <p className=" text-[#A7A7A7] font-[poppins] text-[12px] font-normal not-italic leading-normal">
            New Luma Yoga Collection
          </p>
        </div>
        <div className="md:ml-[30px] md:mt-8 mt-2.5 ">
          <p className=" px-11 text-white text-[40px] font-[Poppins] font-light leading-[120%]">
            Simple Wood Chair Collection
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderShop;
