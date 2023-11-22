import React from "react";
import Image from "next/image";
import girl from "@/assets/images/girl.png";

const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-20 border-b-2 border-gray-300 pb-20">
      <div className="flex items-center justify-center gap-32 w-5/6">
        <Image
          src={girl}
          alt="art on the wall in the living room"
          className="w-2/5 rounded-md"
        />
        <div>
          <h2 className="text-5xl pb-8">Our Story</h2>
          <p className="text-xl">
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
