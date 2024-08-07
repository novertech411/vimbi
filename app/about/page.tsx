import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import farm from "@/public/images/farm.png";
import { FaCheckCircle } from "react-icons/fa";
import icon from "@/public/images/icon.png";
import video from "@/public/images/video.png";
import ValueCard from "@/components/ValueCard";
import Team from "@/components/icon/Team ";
import Innova from "@/components/icon/Innova";
import Inte from "@/components/icon/Inte";
import Commit from "@/components/icon/Commit";
import YoutubeVideo from "@/components/Youtub";
import farmporge from "@/public/images/farmorage.png";
import feed from "@/public/images/feedorgasnic.png";
import meat from "@/public/images/meatorganic.png";

function page() {
  return (
    <div>
      <div className=" text-center     md:bg-aboutbg md:h-[300px]  h-[250px] bg-no-repeat bg-white text-white flex items-center justify-center  bg-cover bg-aboutmob">
        <h3 className=" inter md:text-[70px] font-[600] text-[40px]">
          {" "}
          <span className="text-secondary  md:text-white">About </span> us
        </h3>
      </div>

      <div>
        <h1 className="text-center text-secondary md:text-[50px] font-[700] my-[100px]    text-[30px]    px-6">
          Vimbai&quot;s Organic Poultry and Crocodile Meat Supplies
        </h1>
        <p className="max-w-[900px] mx-auto text-center text-white md:text-[20px]  px-8 my-16 text-[14px]">
          Honoring Tradition, Cultivating Excellence: For{" "}
          <span className="text-secondary"> almost a decade</span>, we&quot;ve
          been dedicated to delivering the highest standards of organic meats,
          eggs and materials, ensuring every bite is a taste of excellence and
          every skin speaks excellence.
        </p>
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
                Zimbabwe. We prefer a clean lifestyle &amp; we are willing to
                embrace change as a means to that end. We also have an open mind
                regarding partnerships therefore any investment opportunities
                are welcome.
              </p>
              <div className="  mt-11  ">
                <div className="flex items-center gap-5 mt-7 ">
                  <p>
                    Our Mission is to provide all our Partners and Clients with
                    high quality, cost-effective products and services that can
                    meet their needs.
                  </p>
                </div>
                <div className="flex items-center gap-5 my-4 ">
                  <p>
                    We see ourselves becoming the most successful farm
                    organisation leading the supply chain of all our products
                    and services in Zimbabwe as well as the whole of Africa..
                  </p>
                </div>
                <div className="flex items-center gap-5  my-4">
                  <p>
                    I was Mentored & started a partnership in masvingo but i
                    later ventured my own huge establishment in Darwendale which
                    has grown to be a market leader in the whole mashonaland
                    region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <h1 className=" text-center text-white md:text-[50px] font-[700] mt-[200px]    text-[40px]  ">
        {" "}
        Our values
      </h1>
      <Container>
        <p className=" max-w-[900px] mx-auto text-center text-white md:text-[20px]  px-8 my-16 text-[14px] ">
          {" "}
          Our <span className="text-secondary"> Values</span> Define Us:
          Integrity, Team work, and Quality are at the Core of Everything We Do.
          Discover How Our Commitment to Ethical Practices and Excellence Sets
          Us Apart.
        </p>
        <div className=" mt-11">
          <div className=""></div>
          <div className=" flex flex-wrap gap-10 justify-center">
            <ValueCard
              title="Integrity "
              icon={<Inte />}
              label="At Vimbai's Organic, integrity is our foundation, ensuring products you can trust."
            />
            <ValueCard
              title="Team Work"
              icon={<Team />}
              label="Over here, teamwork fuels our success, fostering collaboration for exceptional results."
            />
            <ValueCard
              title="Innovation"
              icon={<Innova />}
              label="Innovation drives us forward, pushing boundaries for better products and experiences"
            />
            <ValueCard
              title="Commitment"
              icon={<Commit />}
              label="Commitment is our strength, driving us to deliver excellence in every product and service."
            />
          </div>
        </div>
      </Container>

      <div className="mt-[80px]  ">
        <YoutubeVideo />
      </div>

      <div>
        <h1 className="text-center text-secondary md:text-[50px] font-[700] my-[100px]    text-[35px]    px-3 ">
          {" "}
          We’re Organic.
          <span className="text-white"> Let’s Prove It.</span>
        </h1>

        <Container>
          <div className="   flex text-white  justify-center  gap-11  flex-wrap-reverse my-11   ">
            <div className=" max-w-[550px] px-1 flex items-center ">
              <div>
                <h3 className=" font-[600] text-[30px] md:text-left my-6 text-center text-secondary">
                  {" "}
                  Organic Farming Practices
                </h3>
                <p className="text-[18px] text-center md:text-left">
                  At Vimbai&quot;s Organic, we believe in sustainable and
                  ethical farming practices. Our commitment to organic farming
                  means that our animals are raised without antibiotics,
                  hormones, or GMOs. We prioritize natural methods to ensure the
                  health and well-being of our livestock, resulting in
                  high-quality organic meats and eggs.
                </p>
              </div>
            </div>
            <Image
              src={farmporge}
              alt="farm"
              className=" md:max-w-[600px]  max-w-[300px]"
            />
          </div>

          <div className="   flex text-white  justify-center  gap-11   flex-wrap my-11  ">
            <Image
              src={feed}
              alt="farm"
              className=" md:max-w-[600px] max-w-[300px]"
            />
            <div className=" max-w-[550px] px-5 flex items-center ">
              <div>
                <h3 className=" font-[600] text-[30px] md:text-left my-6 text-center text-secondary">
                  {" "}
                  Natural Feed and Environment
                </h3>
                <p className="text-[18px]">
                  Our animals are fed a natural diet free from synthetic
                  additives and pesticides. We prioritize their access to open
                  spaces and natural habitats, allowing them to exhibit natural
                  behaviors and thrive in a stress-free environment. This
                  holistic approach contributes to the superior taste and
                  nutritional value of our organic meats and eggs.
                </p>
              </div>
            </div>
          </div>

          <div className="   flex text-white  justify-center  gap-11  flex-wrap-reverse my-11  ">
            <div className=" max-w-[550px] px-5 flex items-center ">
              <div>
                <h3 className=" font-[600] text-[30px] md:text-left my-6 text-center text-secondary">
                  {" "}
                  Animal Welfare and Care
                </h3>
                <p className="text-[18px] text-center md:text-left">
                  Organic products offer numerous health benefits. They are free
                  from synthetic chemicals, pesticides, and antibiotics, making
                  them a healthier choice for you and your family. Our organic
                  meats and eggs are rich in nutrients, vitamins, and essential
                  fatty acids, contributing to a balanced and nutritious diet.
                </p>
              </div>
            </div>
            <Image
              src={farmporge}
              alt="farm"
              className=" md:max-w-[600px]  max-w-[300px]"
            />
          </div>

          <div className="   flex text-white  justify-center  gap-11   flex-wrap my-11  ">
            <Image
              src={meat}
              alt="farm"
              className=" md:max-w-[600px]  max-w-[300px]"
            />
            <div className=" max-w-[550px] px-5 flex items-center ">
              <div>
                <h3 className=" font-[600] text-[30px] md:text-left my-6 text-center text-secondary">
                  {" "}
                  Health Benefits of Organic Products
                </h3>
                <p className="text-[18px] text-center md:text-left">
                  Organic products offer numerous health benefits. They are free
                  from synthetic chemicals, pesticides, and antibiotics, making
                  them a healthier choice for you and your family. Our organic
                  meats and eggs are rich in nutrients, vitamins, and essential
                  fatty acids, contributing to a balanced and nutritious diet.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default page;
