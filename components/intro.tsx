import React from "react";
import Image from "next/image";
import girl from "@/assets/images/girl.png";

const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-16 pt-8 border-b-2 border-gray-300 pb-20">
      <div className="flex flex-col-reverse items-center justify-center gap-12 w-5/6 lg:flex-row lg:gap-32">
        <Image
          src={girl}
          alt="art on the wall in the living room"
          className="rounded-md sm:w-4/5 md:3/5 lg:w-2/5"
        />
        <div>
          <h2 className="text-5xl text-center pb-8 md:text-left ">Our Story</h2>
          <p className="text-lg text-center md:text-xl  md:text-left">
            Vivid Art Studio, an online art shop, showcasing the exquisite
            watercolor creations of the Swedish Russian artist and founder Maria
            Shmarina. All paintings featured are original pieces personally
            crafted by Maria. Alongside her showcased work, Maria provides
            commission services, imbuing each artwork with a distinctive
            personal touch. Her art is a culmination of her travels across the
            world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
