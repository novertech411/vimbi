import React from "react";
import BlogCard from "@/components/BlogCard";
import greenskin from "@/public/images/image 26 (2).png";
import yellowskin from "@/public/images/image 26 (1).png";
import grayskin from "@/public/images/image 26.png";

function page() {
  return (
    <div>
      <div className=" text-center     bg-blogbg h-[300px]  bg-no-repeat bg-white text-white flex items-center justify-center">
        <h3 className=" inter text-[70px] font-[600]">Blog </h3>
      </div>

      <div className="      ">
        <div className="bg-blogwave  bg-[#263C28] h-[500px]  inter text-white pt-[80px]">
          <h1 className=" text-center mt-4  lavvic  text-[50px] font-[700]">
            News & Articles
          </h1>
        </div>

        <div className="relative h-[1000px]  flex justify-center ">
          <div className=" -mt-[200px]  absolute mx-full grid grid-cols-3 gap-9">
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
