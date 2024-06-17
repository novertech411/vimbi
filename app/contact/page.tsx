import Contact from "@/components/Contact";
import Container from "@/components/Container";
import React from "react";

function page() {
  return (
    <div>
      <div className=" text-center     bg-contactbg h-[300px]  bg-no-repeat bg-white text-white flex items-center justify-center">
        <h3 className=" inter text-[70px] font-[600]">Contact </h3>
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
