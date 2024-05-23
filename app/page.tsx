import Image from "next/image";
import title from "@/public/images/title.png";
import Container from "@/components/Container";
import farm from "@/public/images/farm.png";
import { FaCheckCircle } from "react-icons/fa";
import icon from "@/public/images/icon.png";
import offering from "@/public/images/Frame 1000001069.png";
import video from "@/public/images/video.png";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="   ">
      <div className="  bg-cover h-[680px] bg-hero-section">
        <Container>
          <div className="pt-[128px]   lavvic">
            <Image src={title} alt="" />
            <div className="  text-[65px] text-secondary  lavvic font-[700] leading-tight">
              <h1>
                {" "}
                Experience the Finest in <br></br> Crocodile Products
              </h1>
              <h1 className="text-white">& Poultry Delights</h1>
            </div>
            <p className=" text-white font-[400]">
              Sustainably Sourced, Expertly Processed, and Delivered with
              Excellence
            </p>
          </div>

          <button className=" bg-secondary px-[30px] py-[15px]  rounded-xl mt-6">
            {" "}
            Discover More
          </button>
        </Container>
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

              <h2 className=" text-white font-[700] text-[50px]   my-5">
                Here’s a Bit Of Who <br></br>We Are
              </h2>
              <h4 className=" text-secondary text-[30px] font-[500] ">
                We’re a Leader in the Crocodile Market
              </h4>
              <p>
                {" "}
                We are operating as a farming business that is focused on
                profitable, progressive and sustainable production of premium
                quality identity-preserved crocodile meat, crocodile skin and
                other vast farm products like chickens, ducks, eggs.We hope to
                give our customers value for their money by giving them the best
                nutritional meat found here in the Mashonaland region of
                Zimbabwe. We prefer a clean lifestyle & we're are willing to
                embrace change as a means to that end.We also have an open mind
                regarding partnerships therfore any investment opportunities are
                welcome.
              </p>

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

          <h1 className="text-center text-white text-[50px] font-[700] mt-[200px]">
            {" "}
            Quality Products & Services
          </h1>
        </Container>
      </div>

      <div className="mt-[80px]">
        <Image src={offering} alt="" className="w-full" />
      </div>

      <div className="mt-[80px] ">
        <Image src={video} alt="" className="w-full" />
      </div>

      <h1 className="text-center text-white text-[50px] font-[700] mt-[200px]">
        {" "}
        Explore Our Products
      </h1>

      <Container>
        <div className="flex ">
          <ProductCard />
        </div>
      </Container>
    </main>
  );
}
