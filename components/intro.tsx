import React from "react";
import Image from "next/image";
import wallArt from "@/assets/images/livingroom-1.jpg";

const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center justify-center gap-32 w-5/6">
        <Image
          src={wallArt}
          alt="art on the wall in the living room"
          className="w-2/5"
        />
        <div>
          <h1 className="text-4xl pb-4">Elevate Your Space</h1>
          <p className="text-xl">
            At Vivid Art Studio, we're dedicated to enriching your living spaces
            with a burst of creativity and character. Our collection, featuring
            stunning stationary, captivating prints, and personalized
            commissions, is meticulously designed to infuse your home with
            vibrancy. Transform your surroundings into a haven of inspiration
            and warmth with our curated art pieces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
