"use client";
import React from "react";

export default function YoutubeVideo() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="relative w-full max-w-5xl max-h-[700px]"
        style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/5r-ye0KDOuY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
