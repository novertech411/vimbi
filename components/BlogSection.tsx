import React from "react";
import BlogCard from "./BlogCard";
import Container from "./Container";
import greenskin from "@/public/images/blog1.jpg";
import yellowskin from "@/public/images/image 26 (1).png";
import grayskin from "@/public/images/blog2.webp";
import Link from "next/link";

function BlogSection() {
  return (
    <div className="      ">
      <div className="bg-blogwave  bg-[#263C28] h-[500px]   inter text-white pt-[80px]">
        <h4 className=" text-center  ">FROM THE BLOG</h4>
        <h1 className=" text-center mt-4  lavvic  md:text-[50px] text-[40px] font-[700]">
          News & Articles
        </h1>
      </div>

      <div className="relative md:h-[500px]  h-[1400px] flex justify-center ">
        <div className="flex -mt-[200px]  absolute mx-full justify-center gap-9  flex-wrap">
          <Link href="./blog/content1">
            <BlogCard
              label="Female Farmer of the Year at 2023 National Young
          Farmers Awards"
              date="12, Nov 2024"
              imagePath={greenskin}
              authur="The Herald"
              alt="alt"
            />
          </Link>
          <Link href="./blog/content2">
            <BlogCard
              label="Blazing a Trail: Vimbai Dzingirai, Zimbabwe’s Only Female Crocodile Farmer"
              imagePath={grayskin}
              date="24, Apr 2024"
              authur="thenewshawks"
              alt="alt"
            />{" "}
          </Link>

          <BlogCard
            label="Taking seamless key indicators offline to"
            imagePath={yellowskin}
            date="12, Nov 2024"
            authur="vimbie"
            alt="alt"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
