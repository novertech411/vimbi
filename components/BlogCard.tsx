import React from "react";

import Image, { StaticImageData } from "next/image";
import { GoPerson } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";

function BlogCard({
  imagePath,
  alt,
  label,
}: {
  imagePath: StaticImageData;
  alt: string;
  label: string;
}) {
  return (
    <div className="bg-[#263C28] rounded-lg   max-w-[400px]  ">
      <Image
        src={imagePath}
        alt={alt}
        className="w-full  rounded-t-lg     max-w-[360x]"
      />

      <div className="p-6 relative">
        <div className=" bg-secondary rounded-tl-lg py-[7px] px-[14px]  absolute -right-0   -top-9">
          <p>3 May, 2024</p>
        </div>

        <div className="flex gap-8  text-[15px] text-white">
          <div className="flex gap-4 items-center">
            <GoPerson className=" text-secondary    " /> <p>by Kevin Martin</p>
          </div>

          <div className="flex gap-4 items-center">
            <TbMessageCircle className=" text-secondary    " />{" "}
            <p>2 Comments</p>
          </div>
        </div>
        <p className=" font-[700]  text-[24px] mt-3 text-white">{label}</p>
      </div>
    </div>
  );
}

export default BlogCard;
