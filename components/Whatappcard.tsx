import React from "react";
import Image, { StaticImageData } from "next/image";
import Eggs from "@/public/images/egg.png";

function Whatappcard({
  subtitle,
  title,
  label,
  alt,
  imagePath,
}: {
  imagePath: StaticImageData;
  title?: string;
  subtitle?: string;
  label?: string;
  alt: string;
}) {
  return (
    <div className="  rounded-xl  w-[400px] bg-[#263C28] text-white p-5">
      <Image src={Eggs} alt={alt} className=" w-full h-[200px] rounded-lg" />
      <div className="">
        <h3 className="text-center my-5 font-[600] text-[30px]">
          {" "}
          Quality Crocodile Skin
        </h3>
        <p className="px-6 my-5">
          Elevate your style with our premium crocodile skins, meticulously
          sourced from ethical means committed to satisfy you.
        </p>

        <div className="rounded-full p-3  text-[25px] bg-secondary w-[200px] text-center mx-auto">
          {" "}
          Order now{" "}
        </div>
      </div>
    </div>
  );
}

export default Whatappcard;
