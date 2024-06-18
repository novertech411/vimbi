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
      <div className=" text-center     md:bg-aboutbg md:h-[300px]  h-[250px] bg-no-repeat bg-white text-white flex items-center justify-center  bg-cover bg-aboutmob">
        <h3 className=" inter md:text-[70px] font-[600] text-[40px]">
          {" "}
          <span className="text-secondary  md:text-white">About </span> us
        </h3>
      </div>

      <div className=" bg-hero-section1 bg-no-repeat  h-full  pt-[80px] ">
        <Container>
          <div className=" block   md:hidden ">
            <h2 className=" text-white font-[700] text-[30px]   my-5">
              Here’s a Bit Of Who <br></br>We Are
            </h2>
          </div>

          <div className="flex justify-center  lavvic gap-10   flex-col  md:flex-row">
            <div className=" relative">
              <Image src={farm} className=" " alt="farm  " />
              <div className="absolute bg-[#6D8C54] h-[100px] rounded-xl  flex items-center gap-5 md:px-7  px-3   -bottom-[60px]  left-[17%] ">
                <Image src={icon} alt=" icon" />{" "}
                <div className=" text-white   lavvic border-l  border-[#ffffff20] pl-5">
                  <p className="font-[400] md:text-[40px]   text-[16px]">
                    86,700
                  </p>
                  <p className="font-[500] md:text-[16px] text-[10px]">
                    Successfully Project Completed
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-[50%]   w-[100%] text-white md:pt-5  pt-10  ">
              <div className="hidden  md:block">
                <h4>OUR INTRODUCTION</h4>

                <h2 className=" text-white font-[700] text-[50px]   my-5">
                  Here&apos;s a Bit Of Who <br /> We Are
                </h2>
              </div>

              <h4 className=" text-secondary md:text-[30px]  my-9   text-[20px] font-[500] ">
                We&apos;re a Leader in the Crocodile Market
              </h4>
              <p>
                {" "}
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
              <div className="  mt-11  ">
                <div className="flex items-center gap-5 mt-7 ">
                  <FaCheckCircle className="text-secondary " />{" "}
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex items-center gap-5 my-4 ">
                  <FaCheckCircle className="text-secondary " />{" "}
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex items-center gap-5  my-4">
                  <FaCheckCircle className="text-secondary " />{" "}
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="md:text-center text-white md:text-[50px] font-[700] mt-[200px]    text-[40px]   text-left">
            {" "}
            Quality Products & Services
          </h1>
        </Container>
      </div>

      <div className="mt-[80px] ">
        <Image src={video} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default page;
