import React from "react";

function page() {
  return (
    <div className="bg-[#263C28] ">
      <div className=" text-center     md:bg-productbg md:h-[300px]   h-[250px]  bg-no-repeat bg-white text-white flex items-center justify-center  md:bg-auto  bg-cover bg-productmob">
        <h3 className="inter md:text-[70px] font-[600] text-[40px] leading-11">
          {" "}
          <span className="text-secondary  md:text-white lea">Product </span> &
          Services{" "}
        </h3>
      </div>

      <div className="text-center bg-hero-section2 h-[600px] bg-cover mt-11">
        <h1 className=" text-center   lavvic  md:text-[30px] text-[20px] font-[700] text-white">
          Chemical & Antibiotic <span className="text-secondary">Free</span>
        </h1>

        <div></div>
      </div>
    </div>
  );
}

export default page;
