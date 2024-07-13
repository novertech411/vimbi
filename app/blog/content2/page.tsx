import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import blogimg from "@/public/images/blog2.webp";

function page() {
  return (
    <div>
      <div className=" text-center     md:bg-blogbg   md:h-[300px]  h-[250px] bg-no-repeat bg-white text-white flex items-center justify-center  md:bg-auto  bg-cover bg-blogmob">
        <h3 className=" inter md:text-[70px] font-[600]  text-[40px] ">
          Blog{" "}
        </h3>
      </div>

      <Container>
        <h1 className="text-center text-secondary md:text-[50px] font-[700] my-[100px]    text-[20px] max-w-[1100px]  mx-auto   px-1">
          {" "}
          Blazing a Trail: Vimbai Dzingirai, Zimbabwe’s Only Female Crocodile
          Farmer
        </h1>

        <div className=" mb-11">
          <Image
            src={blogimg}
            alt="img"
            className="md:max-w-[700px]  max-w-[320px] mx-auto"
          />
        </div>

        <div className="  text-white px-3 md:text-[20px] text-[15px] max-w-[1000px]  mx-auto">
          <p>
            We are incredibly proud to highlight the achievements of Vimbai
            Dzingirai, the pioneering force behind Vimbai’s Crocodylidae
            Products, Tanning and Taxidermy, and Vimbai’s Organic Poultry and
            Crocodile Meat Supplies. Vimbai, a 32-year-old crocodile farmer
            based in Harare, has defied the odds and established herself as
            Zimbabwe’s first female crocodile farmer, blazing a trail in a
            male-dominated industry.
          </p>
          <br></br>
          <br></br>
          <p>
            <strong>A Day in the Life of a Crocodile Farmer</strong>
          </p>
          <br></br>

          <p>
            Vimbai starts her day with a unique and challenging routine—flushing
            out dirty water from the ponds housing her float of freshwater Nile
            crocodiles and refilling them. She has become familiar with these
            majestic creatures, learning to maintain their hygiene without
            agitating their temper. “Depending on their moods, they can be very
            territorial and aggressive if you enter their space and get too
            close on certain days,” Vimbai told The NewsHawks. Her journey into
            crocodile farming has not been easy. Despite the challenges, she has
            remained steadfast, becoming a pioneer in the field and showing
            other women that they can achieve anything. Vimbai co-owns a
            crocodile-siring partnership with her mentor in Masvingo,
            demonstrating her commitment to creating opportunities and paving
            the way for future generations of female farmers.
          </p>
          <p>
            <br></br>
            <br></br>
            <strong>Breaking Barriers and Achieving Accolades</strong>
          </p>
          <br></br>

          <p>
            In a sector where few have ventured, Vimbai has not only entered but
            excelled. Last year, she was crowned Female Farmer of the Year and
            Runner-Up in the Piggery category, adding to her numerous accolades.
            Her dedication to both her reptilian charges and her community is
            evident as she juggles her farming responsibilities with her
            commitment to education and social entrepreneurship. Selected for
            the Young African Leaders Initiative (YALI) Regional Leadership
            Centre programme, Vimbai has also participated in the International
            Visitor Leadership Programme (IVLP) for Social Entrepreneurship in
            the United States. She channels her energy and resources towards
            disenfranchised groups, striving to create a positive impact in her
            community.
          </p>
          <br></br>
          <br></br>
          <p>
            <strong>Empowering Women and Prioritizing Employees</strong>
          </p>
          <br></br>

          <p>
            Vimbai’s companies are unique not just for their focus on crocodile
            farming but also for their commitment to gender equity and employee
            welfare. “Most women struggle and at times end up being exposed to
            sexual harassment and unpleasant scenarios just trying to secure
            employment,” Vimbai says. She prioritizes her employees, ensuring
            they receive reasonable salaries and recognizing their crucial role
            in the success of her ventures. Her journey has been marked by
            challenges, from the male-dominated nature of the industry to the
            difficulties in joining professional associations and accessing
            necessary resources. Despite these hurdles, Vimbai remains a
            protagonist in her story, overcoming barriers and continuing to push
            forward.
          </p>
          <br></br>
          <br></br>
          <p>
            <strong>A Vision for the Future</strong>
          </p>
          <br></br>

          <p>
            Vimbai’s story is one of resilience, innovation, and determination.
            Her work in crocodile farming, piggery, organic poultry, and cattle
            ranching showcases her versatility and dedication to agriculture.
            She envisions a future where more women enter and succeed in the
            agricultural sector, breaking down barriers and creating new
            opportunities. According to a 2017 United Nations Environment
            Programme report, Zimbabwe is the world’s second-largest exporter of
            crocodile products, with over 2 million crocodile skins traded
            annually worldwide. Vimbai’s efforts contribute to this significant
            industry, and she continues to strive for excellence, ensuring that
            Zimbabwe’s crocodile products remain of the highest quality. At
            Vimbai’s Crocodylidae Products, Tanning and Taxidermy, and Vimbai’s
            Organic Poultry and Crocodile Meat Supplies, we are inspired by
            Vimbai’s achievements and commitment to making a difference.
          </p>
          <br></br>
          <br></br>
          <p>
            Her journey is a testament to the power of perseverance, and we look
            forward to supporting her continued success. Stay tuned for more
            updates and stories from Vimbai’s groundbreaking work in crocodile
            farming and beyond.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default page;
