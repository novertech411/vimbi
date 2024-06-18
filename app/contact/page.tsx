import Contact from "@/components/Contact";
import Container from "@/components/Container";
import React from "react";

function page() {
  return (
    <div>
      <div className=" text-center     md:bg-contactbg md:h-[300px] h-[240px] bg-no-repeat bg-white text-white flex items-center justify-center   md:bg-auto  bg-cover bg-contactmob">
        <h3 className=" inter md:text-[70px]  text-[40px] font-[600]">
          Contact{" "}
        </h3>
      </div>

      <Container>
        <div className="flex justify-center  mt-11">
          <Contact />
        </div>
      </Container>
    </div>
  );
}

export default page;
