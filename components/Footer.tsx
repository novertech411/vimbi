import Container from "@/components/Container";
import React from "react";
import Button from "@/components/button";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className=" mt-[60px] w-full text-white">
      <div className=" bg-footerbg  bg-no-repeat  bg-center h-[300px] flex items-center w-full  mb-11">
        <Container>
          <div className="flex  justify-between pt-[80px]  items-center">
            <p className=" font-johnstown text-[50px]  text-[#344C31]">
              We are Leader in Agriculture Market
            </p>

            <Button type="submit" label="DISCOVER MORE" />
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex  justify-between  my-[80px]   text-[15px]">
          <div className=" w-[30%]">
            <p className=" max-w-[600px] border-b border-[#ffffff2a] pb-11 ">
              Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse
              platea dictumst. Duis porta,quam ut finibus ultrices.
            </p>

            <div className="flex text-secondary gap-9 my-7  text-[30px]">
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
              <FaInstagramSquare />
            </div>
          </div>

          <div className="flex   justify-between  text-[12px] w-[45%] ">
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

            <div className="      text-[15px] w-[50%] ">
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
        <div className="flex  gap-10 text-white  py-11">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
