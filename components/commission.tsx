import Image from "next/image";
import Link from "next/dist/client/link";
import custom from "@/assets/images/custom.png";

const Commission = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center justify-center gap-32 w-5/6">
        <div>
          <h2 className=" text-5xl py-12 ">Commissioned Artwork</h2>
          <p className="text-xl">
            Experience art tailored to your imagination with our Commissioned
            Artwork service. We transform your vision into a captivating
            masterpiece, collaborating closely to ensure every detail matches
            your aspirations. Elevate your space with a creation that reflects
            your essence and story, making art a personal and meaningful part of
            your world.
          </p>
          <div className="flex justify-start pt-8">
            <Link
              href="/commissionWork"
              className="text-2xl font-medium  px-4 py-2 rounded-full border border-black  bg-247BA0 bg-white "
            >
              Get started
            </Link>
          </div>
        </div>
        <Image
          src={custom}
          alt="commissioned painting of family and dogs"
          className="w-2/5"
        />
      </div>
    </div>
  );
};

export default Commission;
