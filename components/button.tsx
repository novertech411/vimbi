import React from "react";
import clsx from "clsx";
function button({
  label,
  classes,
  type,
  onClick,
  disabled = false,
}: {
  label?: string;
  classes?: string;
  type: "button" | "submit" | "reset";
  onClick?: (...params: any) => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "bg-secondary px-[30px] py-[15px]  rounded-xl mt-6",
        classes || ""
      )}
      onClick={onClick}
    >
      {" "}
      {label}{" "}
    </button>
  );
}

export default button;
