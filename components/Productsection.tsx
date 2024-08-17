"use client";
import React from "react";
import Image from "next/image";
import offering from "@/public/images/Frame 1000001069.png";
import video from "@/public/images/video.png";
import prod1 from "@/public/images/product1.png";
import prod2 from "@/public/images/product2.png";
import prod3 from "@/public/images/product3.png";
import prod4 from "@/public/images/product4.png";
import prod5 from "@/public/images/product5.png";
import vmobile from "@/public/images/videomobile.png";
import YouTube from "react-youtube";

function Productsection() {
  return (
    <div>
      <div className="mt-[80px] hidden md:flex">
        <Image src={offering} alt="" className="w-full" />
      </div>

      <div className="mt-11  md:hidden   block">
        <div
          className="h-[251px] flex relative text-white"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image src={prod1} alt="" className="w-full" />
          <div className="  absolute text-center inset-0  font-[700]">
            <h2 className=" text-[28px]   mt-10">Quality Crocodile Skin</h2>
            <p className="text-[16px] mt-2  max-w-[290px] text-left mx-auto ">
              Elevate your style with our premium crocodile skins, meticulously
              sourced from ethical means committed to satisfy you.
            </p>
          </div>
        </div>

        <div
          className="h-[251px] flex relative text-white"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image src={prod2} alt="" className="w-full" />
          <div className="  absolute text-center inset-0  font-[700]">
            <h2 className=" text-[28px]   mt-10">Quality Crocodile Meat</h2>
            <p className="text-[16px] mt-2  max-w-[290px] text-left mx-auto ">
              Indulge in the Exceptional Flavor and Texture of Premium Crocodile
              Meat, Ethically Sourced and Expertly Prepared for Your Culinary
              Delight.
            </p>
          </div>
        </div>

        <div
          className="h-[251px] flex relative text-white"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image src={prod3} alt="" className="w-full" />
          <div className="  absolute text-center inset-0  font-[700]">
            <h2 className=" text-[28px]   mt-10">Day old Broilers</h2>
            <p className="text-[16px] mt-2  max-w-[290px] text-left mx-auto ">
              Discover the Beginning of Exceptional Quality: Our Day-Old
              Broilers are Carefully Selected and Nurtured for Optimal Health
              and Flavor.
            </p>
          </div>
        </div>

        <div
          className="h-[251px] flex relative text-white"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Image src={prod4} alt="" className="w-full" />
          <div className="  absolute text-center inset-0  font-[700]">
            <h2 className=" text-[28px]   mt-10">Broilers</h2>
            <p className="text-[16px] mt-2  max-w-[290px] text-left mx-auto ">
              Tender and Flavorful Broilers Ready for Your Culinary Creations.
              Ethically Raised and Expertly Processed for Quality You Can Taste.
            </p>
          </div>
        </div>

        <div
          className="h-[251px] flex relative text-white"
          data-aos="fade-up"
          data-aos-duration="7000"
        >
          <Image src={prod5} alt="" className="w-full" />
          <div className="  absolute text-center inset-0  font-[700]">
            <h2 className=" text-[28px]   mt-10">Eggs</h2>
            <p className="text-[16px] mt-2  max-w-[290px] text-left mx-auto ">
              Farm-Fresh Eggs for Your Kitchen Delights. Packed with Nutrients
              and Flavor, Our Eggs Are the Perfect Addition to Your Meals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productsection;
