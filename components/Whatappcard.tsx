import React from "react";
import Image, { StaticImageData } from "next/image";
import Eggs from "@/public/images/egg.png";
import Link from "next/link";

function Whatappcard({
  subtitle,
  title,
  label,
  alt,
  imagePath,
}: {
  imagePath: StaticImageData;
  title?: string;
  subtitle?: string;
  label?: string;
  alt: string;
}) {
  return (
    <div
      className="  rounded-xl  w-[400px] bg-[#263C28] text-white p-5"
      data-aos="flip-up"
    >
      <Image
        src={imagePath}
        alt={alt}
        className=" w-full h-[200px] rounded-lg"
      />
      <div className="">
        <h3 className="text-center my-5 font-[600] text-[30px]">{title}</h3>
        <p className="px-6 my-5  h-[100px]">{label}</p>
        <Link href=" https://wa.me/263734199666">
          <div className="rounded-xl p-2  text-[20px] bg-secondary border-2   text-primary  border-secondary w-[200px] text-center mx-auto hover:bg-primary hover:text-secondary ">
            {subtitle}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Whatappcard;
