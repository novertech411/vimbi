import React from "react";
import Dot from "@/public/images/countdown.png";
import Image from "next/image";

function CountDot({
  labelnum,
  labeltext,
}: {
  labelnum?: string;
  labeltext?: string;
}) {
  return (
    <div className=" max-w-[200px] relative">
      <Image src={Dot} alt="yellow dot" className="w-full" />

      <div className="  text-white   absolute  top-11 left-10  text-center">
        <h2 className=" text-[50px]   font-inter font-[700]">{labelnum}</h2>
        <p className="text-[18px]">{labeltext}</p>
      </div>
    </div>
  );
}

export default CountDot;
