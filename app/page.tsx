import Image from "next/image";
import title from "@/public/images/title.png";
import Container from "@/components/Container";
import farm from "@/public/images/farm.png";
import { FaCheckCircle } from "react-icons/fa";
import icon from "@/public/images/icon.png";
import offering from "@/public/images/Frame 1000001069.png";
import video from "@/public/images/video.png";
import ProductCard from "@/components/ProductCard";
import qoutes from "@/public/images/Qouts.png";
import review from "@/public/images/review.png";
import skin from "@/public/images/skin.png";
import Conatact from "@/components/Contact";
import BlogSection from "@/components/BlogSection";
import Countdown from "@/components/Countdown";

import Eggs from "@/public/images/egg.png";
import Chicken from "@/public/images/chicken.png";
import Cock from "@/public/images/cock.png";

export default function Home() {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <main className="   ">
      <div className="  bg-cover  bg-mobilebg    h-[680px] md:bg-hero-section">
        <Container>
          <div className="pt-[128px]   lavvic">
            <Image src={title} alt="" />
            <div className="  md:text-[65px]  text-[37px] text-secondary  lavvic font-[700] leading-tight">
              <h1>
                {" "}
                Experience the Finest in <br></br> Crocodile Products
              </h1>
              <h1 className="text-white">& Poultry Delights</h1>
            </div>
            <p className=" text-white font-[400] my-6">
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
                  Here’s a Bit Of Who <br></br>We Are
                </h2>
              </div>

              <h4 className=" text-secondary md:text-[30px]  my-9   text-[20px] font-[500] ">
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

      <div className="mt-[80px] hidden md:flex">
        <Image src={offering} alt="" className="w-full" />
      </div>
      <div className="  "></div>

      <div className="mt-[80px] ">
        <Image src={video} alt="" className="w-full" />
      </div>
      <div className="   bg-hero-section2   h-[800px] pt-[100px] ">
        <h1 className="text-center text-white text-[50px] font-[700] ">
          {" "}
          Explore Our Products
        </h1>

        <Container>
          <div className="flex justify-between  my-[100px]">
            <ProductCard
              imagePath={Eggs}
              alt=""
              title="Agriculture "
              label=" Natural way of agriculture"
            />

            <ProductCard
              imagePath={Chicken}
              alt=""
              title="Agriculture "
              label=" Natural way of agriculture"
            />

            <ProductCard
              imagePath={Cock}
              alt=""
              title="Agriculture "
              label=" Natural way of agriculture"
            />

            <ProductCard
              imagePath={skin}
              alt=""
              title="Agriculture "
              label=" Natural way of agriculture"
            />
          </div>
        </Container>
      </div>

      <div className="   lavvic   text-center  pt-[100px] text-white ">
        <h2 className="font-[400] text-[20px]">Our Testimonials</h2>
        <h1 className="font-[700] text-[50px]">WHAT THEY’RE TAKING ABOUT</h1>
      </div>

      <Container>
        <div className=" flex  justify-center gap-12 my-[90px]">
          <div className="relative">
            <Image className="absolute right-0" src={qoutes} alt="feedback" />
            <Image src={review} alt="feedback" />
          </div>

          <div className="text-[#ACACAC] w-[50%] ml-5 pt-10">
            <p>
              “Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo
              dictumst elementum. Sagittis elit turpis dignissim turpis
              tristique venenatis. Tempor id commodo odio nunc id volutpat
              libero. Ut hendrerit malesuada netus sapien dictum sapien nibh.
              Cras laoreet risus mus mi commodo volutpat quis neque. Scelerisque
              at in in id donec ornare velit. Posuere amet lobortis volutpat
              purus mauris. Tortor magna non turpis ultricies iaculis rhoncus.
              Volutpat lectus proin pellentesque platea.”
            </p>

            <p className="mt-10">
              {" "}
              <span className="text-white bold">
                Tyrese Gibson
              </span> <br></br> Customer
            </p>
          </div>
        </div>

        <Countdown />
      </Container>

      <div className="  bg-[#6D8C54] flex  h-[700px] text-white gap-12 ">
        <div className="w-[45%] h-full">
          <Image src={skin} alt="crocskin" className=" w-full h-full" />
        </div>

        <div className=" w-[55%]  bg-hero-section3  bg-no-repeat bg-right  pl-12  ">
          <h3 className="text-[20px] mt-[10%]   johns">MODERN AGRICULTURE</h3>
          <h2 className="text-[50px] mb-7 font-[700]">
            Providing High Quality <br /> Products
          </h2>

          <div className=" flex   border-b border-[#ffffff2a]  pb-11  gap-7  mt-[80px]">
            <div className=" h-[80px] w-[80px]   bg-[#344C31]   rounded-full"></div>

            <div>
              <h2 className="text-[24px]  font-[600]">
                Our Agriculture Growth
              </h2>
              <p className="text-[17px] font-[400] text-[#FFFFFF] w-[500px] ">
                Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus
                arcu. Metus elit auctor
              </p>
            </div>
          </div>

          <div className=" flex   pb-11   gap-7  mt-[70px]">
            <div className=" h-[80px] w-[80px]   bg-[#344C31]   rounded-full"></div>

            <div>
              <h2 className="text-[24px]  font-[600]">
                Our Agriculture Growth
              </h2>
              <p className="text-[17px] font-[400] text-[#FFFFFF]  w-[500px]  ">
                Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus
                arcu. Metus elit auctor
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
      <Container>
        <Conatact></Conatact>
      </Container>
    </main>
  );
}
