import Container from "@/components/Container";
import Whatappcard from "@/components/Whatappcard";
import React from "react";

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

      <Container>
        <div className="flex gap-4 flex-wrap justify-center ">
          <Whatappcard />

          <Whatappcard />
          <Whatappcard />
          <Whatappcard />
          <Whatappcard />
          <Whatappcard />
        </div>
      </Container>
    </div>
  );
}

export default page;
