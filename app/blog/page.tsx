import React from "react";
import BlogCard from "@/components/BlogCard";
import greenskin from "@/public/images/image 26 (2).png";
import yellowskin from "@/public/images/image 26 (1).png";
import grayskin from "@/public/images/image 26.png";

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
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={greenskin}
              alt="alt"
            />
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={grayskin}
              alt="alt"
            />{" "}
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={yellowskin}
              alt="alt"
            />
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={yellowskin}
              alt="alt"
            />
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={yellowskin}
              alt="alt"
            />
            <BlogCard
              label="Taking seamless key indicators offline to"
              imagePath={yellowskin}
              alt="alt"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
