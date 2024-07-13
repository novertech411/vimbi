import Container from "@/components/Container";
import Whatappcard from "@/components/Whatappcard";
import React from "react";
import learder from "@/public/images/leader.webp";
import eggs from "@/public/images/download (8).jpeg";
import meat from "@/public/images/meategg.png";
import whatspp from "@/public/images/whatapp.jpeg";
import chicken from "@/public/images/poultry_3.jpg";
import boiler from "@/public/images/image 9.png";

function page() {
  return (
    <div className=" ">
      <div className=" text-center     md:bg-productbg md:h-[300px]   h-[250px]  bg-no-repeat bg-white text-white flex items-center justify-center  md:bg-auto  bg-cover bg-productmob">
        <h3 className="inter md:text-[70px] font-[600] text-[40px] leading-11">
          {" "}
          <span className="text-secondary  md:text-white lea">Product </span> &
          Services{" "}
        </h3>
      </div>
      <h1 className="md:text-center text-secondary md:text-[50px] font-[700] mt-[100px]    text-[40px]   text-left">
        {" "}
        Sustainable Harvest, Diverse{" "}
        <span className="text-white"> Offerings</span>
      </h1>

      <p className="max-w-[900px] mx-auto text-center text-white md:text-[20px]  px-8 my-16 text-[14px]">
        Elevate Your Culinary Experience with Quality meats, elevate your
        fashion with <span className="text-secondary"> quality crocodile</span>{" "}
        skins.
      </p>
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
            title="Broilers"
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
      </Container>
    </div>
  );
}

export default page;
