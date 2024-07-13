import React from "react";
import BlogCard from "@/components/BlogCard";
import greenskin from "@/public/images/blog1.jpg";
import yellowskin from "@/public/images/image 26 (1).png";
import grayskin from "@/public/images/blog2.webp";
import Link from "next/link";

function page() {
  return (
    <div>
      <div className=" text-center     md:bg-blogbg   md:h-[300px]  h-[250px] bg-no-repeat bg-white text-white flex items-center justify-center  md:bg-auto  bg-cover bg-blogmob">
        <h3 className=" inter md:text-[70px] font-[600]  text-[40px] ">
          Blog{" "}
        </h3>
      </div>

      <div className="      ">
        <div className="bg-blogwave  bg-[#263C28] h-[500px]  inter text-white pt-[80px]">
          <h1 className=" text-center mt-4  lavvic  md:text-[50px] font-[700]  text-[20px]">
            News & Articles
          </h1>
        </div>

        <div className="relative md:h-[1000px]  h-[360vh] flex justify-center flex-wrap   ">
          <div className=" -mt-[200px]  absolute mx-full flex flex-wrap gap-9 justify-center  px-3">
            <Link href="./blog/content1">
              <BlogCard
                label="Female Farmer of the Year at 2023 National Young
          Farmers Awards"
                date="12, Nov 2024"
                imagePath={greenskin}
                alt="alt"
              />
            </Link>
            <Link href="./blog/content2">
              <BlogCard
                label="Blazing a Trail: Vimbai Dzingirai, Zimbabwe’s Only Female Crocodile Farmer"
                imagePath={grayskin}
                date="24, Apr 2024"
                alt="alt"
              />{" "}
            </Link>
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={yellowskin}
              date="1, Jan 2024"
              alt="alt"
            />
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={yellowskin}
              date="19, May 2023"
              alt="alt"
            />
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={yellowskin}
              alt="alt"
              date="6, Jun  2022"
            />
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={yellowskin}
              date="14, May 2024"
              alt="alt"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
