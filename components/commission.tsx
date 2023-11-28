import Image from "next/image";
import Link from "next/dist/client/link";
import custom from "@/assets/images/custom.png";

const Commission = () => {
  return (
    <div className="flex items-center justify-center  my-16 pt-8 pb-20 border-b-2 border-gray-300">
      <div className=" flex flex-col items-center justify-center gap-12 w-5/6 lg:flex-row lg:gap-32">
        <div>
          <h2 className=" text-5xl text-center pb-8 md:text-left    ">
            Commissioned Artwork
          </h2>
          <p className="text-lg text-center md:text-xl  md:text-left">
            Experience art tailored to your imagination with our Commissioned
            Artwork service. We transform your vision into a captivating
            masterpiece, collaborating closely to ensure every detail matches
            your aspirations. Elevate your space with a creation that reflects
            your essence and story, making art a personal and meaningful part of
            your world.
          </p>
          <div className="pt-8 flex justify-center md:justify-start ">
            <Link
              href="/commissionWork"
              className="text-2xl font-medium  px-4 py-2 rounded-md border border-black  bg-247BA0 bg-black text-white  disabled:cursor-not-allowed hover:bg-white transition  ease-in-out  hover:text-black "
            >
              Get started
            </Link>
          </div>
        </div>
        <Image
          src={custom}
          alt="commissioned painting of family and dogs"
          className=" rounded-md sm:w-4/5 md:3/5 lg:w-2/5"
        />
      </div>
    </div>
  );
};

export default Commission;
