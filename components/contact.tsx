import React from "react";

function contact() {
  return (
    <div className="flex  inter text-white">
      <div>
        <h5 className=" text-[20px] font-[400]">CONTACT NOW</h5>
        <h3 className="lavvic text-[50px] font-[700]">GET IN TOUCH NOW</h3>
        <p className="my-12">
          Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea
          dictumst. Duis porta,quam ut finibus ultrices.
        </p>

        <div className="mb-8">
          <h3 className="tet-[14px]">Phone</h3>
          <p>
            +880123456789 <br /> +880123456789
          </p>
        </div>

        <div className="mb-8">
          <h3 className="tet-[14px] font-[400] ">Phone</h3>
          <p>
            +880123456789 <br /> +880123456789
          </p>
        </div>

        <div className="mb-8">
          <h3 className="tet-[14px] font-[400] ">Email</h3>
          <p>vimsupplies@company.com</p>
        </div>

        <div className="mb-8">
          <h3 className="tet-[14px] font-[400] ">Address</h3>
          <p>Somewhere On Earth</p>
        </div>
      </div>

      <div className="w-[50%] font-lavvic ">
        <form>
          <input
            type="name"
            name="name "
            placeholder="Your Name "
            className=" text-white  p-[25px] w-full rounded-xl outline-none placeholder:font-bold mt-3  bg-[#263C28]"
          />
        </form>
      </div>
    </div>
  );
}

export default contact;
