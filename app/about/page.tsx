import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import farm from "@/public/images/farm.png";
import { FaCheckCircle } from "react-icons/fa";
import icon from "@/public/images/icon.png";
import video from "@/public/images/video.png";

function page() {
  return (
    <div>
      <div className=" text-center     bg-aboutbg h-[300px]  bg-no-repeat bg-white text-white flex items-center justify-center">
        <h3 className=" inter text-[70px] font-[600]">About us</h3>
      </div>

      <div className=" bg-hero-section1 bg-no-repeat  h-full  pt-[80px] ">
        <Container>
          <div className="flex justify-center  lavvic gap-10">
            <div className=" relative">
              <Image src={farm} className=" " alt="farm  " />
              <div className="absolute bg-[#6D8C54] h-[140px] rounded-xl  flex items-center gap-5 px-7    -bottom-11  left-[17%] ">
                <Image src={icon} alt=" icon" />{" "}
                <div className=" text-white   lavvic border-l  border-[#ffffff20] pl-5">
                  <p className="font-[400] text-[40px]">86,700</p>
                  <p className="font-[500] text-[16px]">
                    Successfully Project Completed
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[50%] text-white pt-5 ">
              <h4>OUR INTRODUCTION</h4>

              <h2 className=" text-white font-[700] text-[50px] my-5">
                Here&apos;s a Bit Of Who <br /> We Are
              </h2>
              <h4 className=" text-secondary text-[30px] font-[500]">
                We&apos;re a Leader in the Crocodile Market
              </h4>
              <p>
                We are operating as a farming business that is focused on
                profitable, progressive and sustainable production of premium
                quality identity-preserved crocodile meat, crocodile skin and
                other vast farm products like chickens, ducks, eggs. We hope to
                give our customers value for their money by giving them the best
                nutritional meat found here in the Mashonaland region of
                Zimbabwe. We prefer a clean lifestyle &amp; we&apos;re willing
                to embrace change as a means to that end. We also have an open
                mind regarding partnerships therefore any investment
                opportunities are welcome.
              </p>

              <div className="flex items-center gap-5 mt-7 ">
                <FaCheckCircle className="text-secondary " />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="flex items-center gap-5 my-4 ">
                <FaCheckCircle className="text-secondary " />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="flex items-center gap-5  my-4">
                <FaCheckCircle className="text-secondary " />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-[80px] ">
        <Image src={video} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default page;
