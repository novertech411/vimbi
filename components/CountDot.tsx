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
    <div className=" md:max-w-[200px] relative   max-w-[128px]">
      <Image src={Dot} alt="yellow dot" className="w-full" />

      <div className="  text-white   absolute  md:top-11 md:left-10    top-[34px] left-[29px]  text-center">
        <h2 className=" md:text-[50px]   text-[30px] font-inter font-[700]">
          {labelnum}
        </h2>
        <p className="md:text-[18px]   text-[10px]">{labeltext}</p>
      </div>
    </div>
  );
}

export default CountDot;
