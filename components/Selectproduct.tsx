import React from "react";

import Eggs from "@/public/images/egg.png";
import Chicken from "@/public/images/chicken.png";
import Cock from "@/public/images/cock.png";
import skin from "@/public/images/skin.png";
import ProductCard from "@/components/ProductCard";
import Container from "./Container";

function Selectproduct() {
  return (
    <div>
      <div className="   bg-hero-section2   md:h-[800px]   pt-[100px] ">
        <h1 className="text-center text-white text-[50px] font-[700] ">
          {" "}
          Explore Our Products
        </h1>

        <Container>
          <div className="flex md:justify-between  justify-center  my-[100px]    flex-col md:flex-row ">
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
    </div>
  );
}

export default Selectproduct;
