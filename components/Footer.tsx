import Container from "@/components/Container";
import React from "react";
import Button from "@/components/button";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className=" mt-[60px] w-full text-white">
      <div className=" bg-footerbg  bg-no-repeat  bg-center   bg-cover md:h-[300px] h-[400px] flex items-center w-full  mb-11">
        <Container>
          <div className="flex  justify-between md:pt-[80px] pt-0 items-center  md:flex-row flex-col">
            <p
              className=" font-johnstown text-[50px]  text-[#344C31]"
              data-aos="zoom-out-up"
            >
              We are a Leader in Agriculture Market
            </p>

            <Button
              type="submit"
              label="DISCOVER MORE"
              classes="text-black"
              data-aos="fade-right"
            />
          </div>
        </Container>
      </div>

      <Container>
        <Image src={logo} alt="logo" className=" mx-auto" data-aos="zoom-in" />
        <div className="flex  justify-between  my-[80px]   text-[15px]  md:flex-row flex-col">
          <div className=" md:w-[30%]  w-full">
            <p
              className=" max-w-[600px] w-full border-b border-[#ffffff2a] pb-11 "
              data-aos="flip-left"
            >
              We are operating as a farming business that is focused on
              profitable, progressive and sustainable production of premium
              quality identity-preserved crocodile meat, crocodile skin and
              other vast farm products like chickens, ducks, eggs.
            </p>

            <div className="flex text-secondary gap-9 my-7  text-[30px]   md:justify-none    justify-center">
              <FaFacebookF data-aos="fade-up" />
              <FaTwitter data-aos="fade-down" />
              <FaYoutube data-aos="fade-up" />
              <FaInstagramSquare data-aos="fade-down" />
            </div>
          </div>

          <div className="flex  flex-col md:flex-row  justify-between  text-[12px] md:w-[45%]  w-full ">
            <div>
              <h3 className=" lavvic text-[22px] font-[600] mb-4">
                Useful Links
              </h3>
              <Link href="/about">
                <div className="my-2 md:my-0">About Us</div>
              </Link>

              <Link href="/join">
                <div className="md:my-4">Careers</div>
              </Link>

              <Link href="/legal">
                <div className="my-2 md:my-0">Project</div>
              </Link>
              <Link href="/legal">
                <div className="md:my-4">Gallary</div>
              </Link>
              <Link href="/legal">
                {" "}
                <div className="mt-2 md:mt-0">Contact us</div>
              </Link>
            </div>

            <div className="  md:mt-0 mt-9   text-[15px] md:w-[50%]  w-[80%]">
              <h3 className=" lavvic text-[22px] font-[600] mb-4 ">
                Newsletter
              </h3>
              <p className="my-8">
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>

              <div className=" bg-[#263C28] flex rounded-full justify-between   py-2  pr-3   ">
                <input
                  type="email"
                  name="email "
                  placeholder="Enter your email ....."
                  className=" text-white  w-full  outline-none  ml-4  bg-[#263C28] rounded-full "
                />

                <div className="  w-auto py-[13px] px-[12px] bg-secondary rounded-full m-0 text-black ">
                  {" "}
                  <p>GO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-[#ffffff2a] h-[1px]"></div>
      <Container>
        <p className=" text-secondary text-center mt-4">
          © 2024 vimsbaiscrocodilemeatsuplies. All rights reserved.
        </p>
        <div className="flex  gap-10 text-secondary  py-11  md:justify-normal justify-center">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
