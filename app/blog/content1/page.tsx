import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import blogone from "@/public/images/blog2.webp";

function page() {
  return (
    <div>
      <div className=" text-center     md:bg-blogbg   md:h-[300px]  h-[250px] bg-no-repeat bg-white text-white flex items-center justify-center  md:bg-auto  bg-cover bg-blogmob">
        <h3 className=" inter md:text-[70px] font-[600]  text-[40px] ">
          Blog{" "}
        </h3>
      </div>

      <Container>
        <h1 className="text-center text-secondary md:text-[50px] font-[700] my-[100px] text-[20px] max-w-[1100px] mx-auto px-1">
          Vimbies Farms Wins Female Farmer of the Year at 2023 National Young
          Farmers Awards
        </h1>
        <div className="mb-11">
          <Image
            src={blogone}
            alt="img"
            className="md:max-w-[700px] max-w-[320px] mx-auto"
          />
        </div>
        <div className="  text-white px-3 md:text-[20px] text-[15px] max-w-[1000px]  mx-auto">
          <p>
            We are thrilled to announce that Vimbai Dzingirai, the Executive
            Director of Vimbai&#39;s Crocodylidae Products, Tanning & Taxidermy, has
            been awarded the prestigious Female Farmer of the Year at the 2023
            National Young Farmers Awards held in Harare. The National Young
            Farmers Awards, established by President Mnangagwa in 2019, aim to
            recognize and celebrate the contributions of young farmers to
            agricultural production and entrepreneurship.
            <br />
            <br />
            This year&#39;s theme, &#34;Food Security Everyday, Everywhere,
            Youth in Agriculture Moving Towards Vision 2030,&#34; aligns with
            the government&#39;s commitment to ensuring no one and no place is
            left behind in the journey towards food security and
            self-sufficiency.
            <br />
            <br />
            Vice President Dr. Constantino Chiwenga, in his address, emphasized
            the importance of innovation in agriculture, particularly in
            combating the challenges posed by climate change. He highlighted the
            government&#39;s policies that have kept Zimbabwe on track to
            achieve food security, wheat self-sufficiency, and nutrition
            security by 2025. These efforts have already resulted in significant
            increases in maize production and resilience during challenging
            farming seasons. Dr. Anxious Masuka, Minister of Lands, Agriculture,
            Fisheries, Water and Rural Development, echoed these sentiments,
            noting the crucial role of youth in driving sustainable agricultural
            development. He pointed out that young farmers are well-positioned
            to leverage technology and innovation to address the impacts of
            climate change and ensure food security.
            <br />
            <br />
            Vimbai Dzingirai, representing Vimbies Farms, was honored among
            other exceptional young farmers for her dedication and achievements
            in agriculture. This recognition is a testament to the hard work and
            commitment of the entire team at Vimbies Farms. We are incredibly
            proud of this achievement and remain committed to advancing
            agricultural practices that contribute to the nation&#39;s food
            security and economic development. At Vimbies Farms, we believe in
            the power of innovation, teamwork, and on-the-ground dedication to
            transform agriculture and secure a prosperous future for all.
            <br />
            <br />
            Thank you for your continued support as we strive to make a
            meaningful impact in the agricultural sector. Stay tuned for more
            updates and insights from Vimbies Farms!
          </p>
        </div>
      </Container>
    </div>
  );
}

export default page;
