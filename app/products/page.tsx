import Container from "@/components/Container";
import Whatappcard from "@/components/Whatappcard";
import React from "react";
import learder from "@/public/images/leader.webp";
import eggs from "@/public/images/download (8).jpeg";
import meat from "@/public/images/meategg.jpg";
import whatspp from "@/public/images/whatapp.jpeg";
import chicken from "@/public/images/poultry_3.jpg";
import boiler from "@/public/images/image 9.png";
import Link from "next/link";
import Image from "next/image";
import "@/components/animation/bounce.css";
import givecall from "@/public/images/giveacall.png";
import { PiFarmBold } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { PiMathOperationsFill } from "react-icons/pi";
import { VscLaw } from "react-icons/vsc";
import { FaPhoneVolume } from "react-icons/fa6";

function page() {
  return (
    <div className=" ">
      <div className=" text-center     md:bg-productbg md:h-[300px]   h-[250px]  bg-no-repeat bg-white text-white flex items-center justify-center  md:bg-auto  bg-cover bg-productmob">
        <h3
          className="inter md:text-[70px] font-[600] text-[40px] leading-11"
          data-aos="zoom-in-down"
        >
          {" "}
          <span className="text-secondary  md:text-white lea">Products </span> &
          Services{" "}
        </h3>
      </div>

      <div data-aos="fade-right">
        <h1 className="md:text-center text-secondary md:text-[50px] font-[700] mt-[100px]  px-2   text-[40px]   text-center">
          {" "}
          Sustainable Harvest, Diverse{" "}
          <span className="text-white"> Offerings</span>
        </h1>

        <p className="max-w-[900px] mx-auto text-center text-white md:text-[20px]  px-8 my-16 text-[14px]">
          Elevate Your Culinary Experience with Quality meats, elevate your
          fashion with{" "}
          <span className="text-secondary"> quality crocodile</span> skins.
        </p>
      </div>

      <Container>
        <div className="flex gap-4 flex-wrap justify-center mt-11 ">
          <Whatappcard
            alt="leader"
            imagePath={learder}
            title="Quality Crocodile Skin"
            label="Elevate your style with our premium crocodile skins, meticulously sourced from ethical means committed to satisfy you."
            subtitle="Order Now"
          />

          <Whatappcard
            alt="leader"
            imagePath={meat}
            title="Quality Crocodile Meat"
            label="Indulge in the Exceptional Flavor and Texture of Premium Crocodile Meat, Ethically Sourced and Expertly Prepared for Your Culinary Delight."
            subtitle="Order Now"
          />

          <Whatappcard
            alt="boiler"
            imagePath={boiler}
            title="Day old Broilers"
            label="Discover the Beginning of Exceptional Quality: Our Day-Old Broilers are Carefully Selected and Nurtured for Optimal Health and Flavor."
            subtitle="Order Now"
          />

          <Whatappcard
            alt="chicken"
            imagePath={chicken}
            title="Broilers"
            label="Tender and Flavorful Broilers Ready for Your Culinary Creations. Ethically Raised and Expertly Processed for Quality You Can Taste."
            subtitle="Order Now"
          />

          <Whatappcard
            alt="Egg"
            imagePath={eggs}
            title="Eggs"
            label="Farm-Fresh Eggs for Your Kitchen Delights. Packed with Nutrients and Flavor, Our Eggs Are the Perfect Addition to Your Meals."
            subtitle="Order Now"
          />

          <Whatappcard
            alt="whatapp"
            imagePath={whatspp}
            title="Open to talk"
            label="Orders can be placed on WhatsApp."
            subtitle="let's talk"
          />
        </div>

        <div>
          <h1 className="md:text-center text-secondary md:text-[50px] font-[700] mt-[100px]    text-[40px]   text-center">
            {" "}
            Our Consultancy Services
          </h1>

          <p className="max-w-[900px] mx-auto text-center text-white md:text-[20px]  md:px-8 my-16 text-[14px]">
            We are crocodile farming experts, we provide comprehensive
            consultancy services to help clients establish and operate
            successful commercial crocodile production facilities. With 7 years
            of hands-on experience, we guide clients through every stage of the
            crocodile farming value chain.
          </p>
        </div>

        <div className="flex  md:flex-row flex-col-reverse  gap-9">
          <div className=" relative  flex justify-center   ">
            <Image
              src={givecall}
              data-aos="fade-right"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className=" justify-center  lavvic md:w-[50%]   w-[100%] text-white">
            <h1 className="text-left text-secondary font-[700]   md:text-[30px]  my-4   text-[20px] ">
              Our Crocodile Farming Expertise
            </h1>
            <div className=" flex gap-3 items-center " data-aos="fade-up">
              <div className="rounded-xl flex p-2 h-[50px] bg-secondary items-center">
                <PiFarmBold className="text-primary text-[30px]" />{" "}
              </div>
              <div>
                <h2 className="font-[600] text-secondary">
                  Site Selection & Farm Design
                </h2>
                <p>
                  Evaluate potential farm locations based on factors like water
                  sources, climate, and land suitability. Provide architectural
                  designs and layout recommendations for crocodile housing,
                  hatcheries, feeding areas, and other infrastructure.
                </p>
              </div>
            </div>

            <div className=" flex  gap-3 items-center mt-2" data-aos="fade-up">
              <div className="rounded-xl flex p-2 h-[50px] bg-secondary items-center">
                <MdManageAccounts className="text-primary text-[30px]" />{" "}
              </div>
              <div>
                <h2 className="font-[600] text-secondary">
                  Hatchery Management
                </h2>
                <p>
                  Advise on egg collection, incubation, and hatching techniques.
                  Develop protocols for hatchling care and rearing.
                </p>
              </div>
            </div>

            <div className=" flex gap-3 items-center mt-2" data-aos="fade-up">
              <div className="rounded-xl flex p-2 h-[50px] bg-secondary items-center">
                <PiBowlFoodFill className="text-primary text-[30px]" />{" "}
              </div>
              <div>
                <h2 className="font-[600] text-secondary">
                  Nutrition & Feeding
                </h2>
                <p>
                  Formulate optimal feed rations tailored to each growth stage.
                  Establish efficient feeding schedules and methods.
                </p>
              </div>
            </div>

            <div className=" flex gap-3 items-center mt-2" data-aos="fade-up">
              <div className="rounded-xl flex p-2 h-[50px] bg-secondary items-center">
                <MdHealthAndSafety className="text-primary text-[30px]" />{" "}
              </div>
              <div>
                <h2 className="font-[600] text-secondary">
                  Health & Disease Management
                </h2>
                <p>
                  Implement comprehensive biosecurity protocols. Advise on
                  disease prevention, treatment, and monitoring strategies.
                </p>
              </div>
            </div>

            <div className=" flex gap-3 items-center mt-2" data-aos="fade-up">
              <div className="rounded-xl flex p-2 h-[50px] bg-secondary items-center">
                <PiMathOperationsFill className="text-primary text-[30px]" />{" "}
              </div>
              <div>
                <h2 className="font-[600] text-secondary">
                  Operations & Husbandry
                </h2>
                <p>
                  Train farm staff on safe crocodile handling and best
                  practices. Provide guidance on harvesting, processing, and
                  product storage.
                </p>
              </div>
            </div>

            <div className=" flex gap-3 items-center mt" data-aos="fade-up">
              <div className="rounded-xl flex p-2 h-[50px] bg-secondary items-center">
                <VscLaw className="text-primary text-[30px]" />{" "}
              </div>
              <div>
                <h2 className="font-[600] text-secondary">
                  Regulatory Compliance
                </h2>
                <p>
                  Ensure adherence to all relevant local and national
                  regulations. Assist with permits, licenses, and reporting
                  requirements.
                </p>
              </div>
            </div>

            <div className="flex justify-center" data-aos="fade-up-right">
              <Link href=" https://wa.me/263734199666">
                <button className=" bg-secondary px-[40px] py-[20px] border-2 border-secondary  rounded-xl mt-6 flex items-center gap-3 text-primary  bt-shake  text-[20px]  hover:text-secondary hover:bg-primary ">
                  {" "}
                  <FaPhoneVolume />
                  Get a Qoute
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default page;
