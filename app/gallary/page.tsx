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
import gallary10 from "@/public/images/gallary10.jpeg";
import gallary11 from "@/public/images/gallary11.jpeg";
import gallary12 from "@/public/images/gallary12.jpeg";
import gallary13 from "@/public/images/download (8).jpeg";
import gallary14 from "@/public/images/image 9.png";

function page() {
  return (
    <div>
      <div className=" text-center     md:bg-gallarybg md:h-[300px] h-[250px] bg-no-repeat bg-white text-white flex items-center justify-center    md:bg-auto  bg-cover bg-blogmob">
        <h3 className=" inter md:text-[70px] font-[600] text-[40px] ">
          Gallery{" "}
        </h3>
      </div>
      <div className="      ">
        <div className="bg-blogwave  bg-[#263C28] h-[500px]  inter text-white pt-[80px]">
          <h1 className=" text-center mt-4  lavvic  md:text-[50px] font-[700]  text-[20px]">
            Photos
          </h1>
        </div>

        <div className="relative md:h-[1100px]    h-[750vh] flex justify-center z-0">
          <div className=" -mt-[200px]   grid-center  justify-center absolute mx-full  auto-cols-auto  columns-3xs    gap-y-4 gap-4 row-auto  px-2  ">
            <Image
              src={gallary2}
              alt="crock"
              className=" rounded-lg mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary14}
              alt="crock"
              className=" rounded-lg   mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary3}
              alt="crock"
              className=" rounded-lg   mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary4}
              alt="crock"
              className=" rounded-lg  mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary13}
              alt="crock"
              className=" rounded-lg  mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary10}
              alt="crock"
              className=" rounded-lg   mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary5}
              alt="crock"
              className=" rounded-lg  mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary6}
              alt="crock"
              className=" rounded-lg  mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary7}
              alt="crock"
              className=" rounded-lg  mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary8}
              alt="crock"
              className=" rounded-lg   mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary9}
              alt="crock"
              className=" rounded-lg   mt-4"
              data-aos="fade-up"
            />

            <Image
              src={gallary11}
              alt="crock"
              className=" rounded-lg   mt-4"
              data-aos="fade-up"
            />
            <Image
              src={gallary12}
              alt="crock"
              className=" rounded-lg   mt-4"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
