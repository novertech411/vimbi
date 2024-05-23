import Image from "next/image";
import React from "react";
import crock from "@/public/images/crock.png";
import { FaArrowRight } from "react-icons/fa";
function ProductCard() {
  return (
    <div className=" max-w-[350px] relative border  border-secondary rounded-lg">
      <Image src={crock} alt="" className="w-full h-full" />
      <div className=" absolute  flex justify-between w-full px-5 items-center   bottom-4">
        <div className=" lavvic">
          <h4 className=" text-[12px] font-[700] text-secondary">
            Agriculture
          </h4>
          <h3 className="text-[18px] font-[600]  text-white leading-loose">
            {" "}
            Natural way of <br></br> agriculture
          </h3>
        </div>

        <FaArrowRight className="text-secondary w-[50px]" />
      </div>
    </div>
  );
}

export default ProductCard;
