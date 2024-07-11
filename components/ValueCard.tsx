import React from "react";
import Team from "./icon/Team ";

function ValueCard({
  title,
  label,
  icon,
}: {
  title?: string;
  label?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="max-w-[250px] bg-[#263C28] rounded-xl  p-3 text-center  text-white ">
      <div className="rounded-full  mx-auto w-[90px] h-[90px] my-8 bg-secondary  flex items-center justify-center  border-8 border-[#f7c25f62]">
        {" "}
        {icon}
      </div>
      <h2 className="my-2 font-still font-[600] text-[25px]  text-secondary">
        {title}
      </h2>
      <p className="mb-4">{label}</p>
    </div>
  );
}

export default ValueCard;
