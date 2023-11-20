import React from "react";
import Image from "next/image";
import girl from "@/assets/images/girl.png";

const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-20 border-b-2 border-gray-300">
      <div className="flex items-center justify-center gap-32 w-5/6">
        <Image
          src={girl}
          alt="art on the wall in the living room"
          className="w-2/5 rounded-md"
        />
        <div>
          <h2 className="text-5xl pb-8">What We Do</h2>
          <p className="text-xl">
            Vivid Art Studio is an online art shop, designed to share the
            wonderful watercolour work of the artist Maria Shmarina. All
            paintings on this site are original and have been painted by Maria.
            Maria also offers commission work services, infusing each piece of
            art with a distinctive personal touch, making the artwork a truly
            unique and meaningful experience for individuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
