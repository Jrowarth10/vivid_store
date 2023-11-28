import React from "react";
import Image from "next/image";
import Row from "@/assets/images/boy rowing.jpg";
import Family from "@/assets/images/family at beach.jpg";
import Puppy from "@/assets/images/puppy.jpg";
import Surf from "@/assets/images/surf.jpg";
import Venice from "@/assets/images/venice.png";
import Himalayas from "@/assets/images/himalayas.png";

const ArtWall: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-1 justify-center py-12 w-3/4 mx-auto md:grid-cols-3  ">
      <div className="flex justify-center items-center">
        <Image src={Row} alt="young boy rowing" />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Family} alt="family at the beach" />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Puppy} alt="girl and puppy at the park" />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Surf} alt="woman in the water with a surfboard" />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Venice} alt="painting of Venice" />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Himalayas} alt="painting of the Himalayas" />
      </div>
    </div>
  );
};

export default ArtWall;
