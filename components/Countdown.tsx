"use client";
import React, { useState, useEffect } from "react";
import CountDot from "./CountDot";

function Countdown() {
  const targetCounts = {
    clients: 800,
    deliveries: 700,
    awards: 10,
    support: "24/7",
  };

  const [counts, setCounts] = useState({
    clients: 0,
    deliveries: 0,
    awards: 0,
    support: targetCounts.support,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) => ({
        clients: Math.min(prevCounts.clients + 5, targetCounts.clients),
        deliveries: Math.min(
          prevCounts.deliveries + 10,
          targetCounts.deliveries
        ),
        awards: Math.min(prevCounts.awards + 1, targetCounts.awards),
        support: prevCounts.support,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="justify-center flex mb-11 flex-wrap gap-11">
      <div data-aos="flip-up">
        {" "}
        <CountDot
          labeltext="Happy Clients"
          labelnum={counts.clients.toString()}
        />{" "}
      </div>
      <div data-aos="flip-up">
        {" "}
        <CountDot
          labeltext="Deliveries"
          labelnum={counts.deliveries.toString()}
        />{" "}
      </div>
      <div data-aos="flip-up">
        {" "}
        <CountDot
          labeltext="Winning Awards"
          labelnum={counts.awards.toString()}
        />{" "}
      </div>
      <div data-aos="flip-up">
        {" "}
        <CountDot labeltext="Fast Support" labelnum="24/7" />{" "}
      </div>
    </div>
  );
}

export default Countdown;
