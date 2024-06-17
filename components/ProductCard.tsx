import React from "react";
import Image, { StaticImageData } from "next/image";
import crock from "@/public/images/crock.png";
import { FaArrowRight } from "react-icons/fa";
function ProductCard({
  imagePath,
  alt,
  label,

  title,
}: {
  imagePath: StaticImageData;
  alt: string;

  label: string;
  title: string;
}) {
  return (
    <div className=" max-w-[280px] relative border  border-secondary rounded-lg">
      <Image src={imagePath} alt={alt} className="w-full h-full rounded-lg" />
      <div className=" absolute    justify-between w-full px-5  items-center   bottom-4  flex   ">
        <div className=" lavvic ">
          <h4 className=" text-[12px] font-[700] text-secondary">{title}</h4>
          <h3 className="text-[18px] font-[600]   text-white "> {label}</h3>
        </div>

        <FaArrowRight className="text-secondary  w-5  h-5" />
      </div>
    </div>
  );
}

export default ProductCard;
