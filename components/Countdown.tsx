import React from "react";
import CountDot from "./CountDot";

function Countdown() {
  return (
    <div className=" justify-center flex mb-11 flex-wrap  gap-11">
      <CountDot labeltext="Happy Clients" labelnum="1000" />
      <CountDot labeltext="Deliveries" labelnum="2000" />
      <CountDot labeltext="Wining Awards" labelnum="10" />
      <CountDot labeltext="Fast Support" labelnum="24/7" />
    </div>
  );
}

export default Countdown;
