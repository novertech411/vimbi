import Image from "next/image";
import React from "react";
import gallary1 from "@/public/images/gallary1.webp";
import gallary2 from "@/public/images/gallary2.webp";
import gallary3 from "@/public/images/gallary3.jpeg";
import gallary4 from "@/public/images/gallary4.jpeg";
import gallary5 from "@/public/images/gallary5.jpeg";
import gallary6 from "@/public/images/gallary6.jpeg";
import gallary7 from "@/public/images/gallary7.jpeg";
import gallary8 from "@/public/images/gallary8.jpeg";
import gallary9 from "@/public/images/gallary9.jpeg";

function page() {
  return (
    <div>
      <div className=" text-center     bg-gallarybg h-[300px]  bg-no-repeat bg-white text-white flex items-center justify-center">
        <h3 className=" inter text-[70px] font-[600]">Gallary </h3>
      </div>
      <div className="      ">
        <div className="bg-blogwave  bg-[#263C28] h-[500px]  inter text-white pt-[80px]">
          <h1 className=" text-center mt-4  lavvic  text-[50px] font-[700]">
            News & Articles
          </h1>
        </div>

        <div className="relative h-[1000px]  flex justify-center ">
          <div className=" -mt-[200px]   grid-center  justify-center absolute mx-full grid grid-cols-4 gap-4  max-w-[1024px]">
            <Image src={gallary1} alt="crock" className=" rounded-lg " />
            <Image src={gallary2} alt="crock" className=" rounded-lg" />
            <Image src={gallary3} alt="crock" className=" rounded-lg" />
            <Image src={gallary4} alt="crock" className=" rounded-lg" />
            <Image src={gallary5} alt="crock" className=" rounded-lg" />
            <Image src={gallary6} alt="crock" className=" rounded-lg" />
            <Image src={gallary7} alt="crock" className=" rounded-lg" />
            <Image src={gallary8} alt="crock" className=" rounded-lg" />
            <Image src={gallary9} alt="crock" className=" rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
