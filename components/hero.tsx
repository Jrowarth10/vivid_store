"use client";

import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Stockholm from "@/assets/images/livingroom-2.png";

interface HeroProps {
  data: Category[];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className=" mx-auto modified-8xl  ">
      <div className=" mx-auto py-12 mb-12 w-5/6  ">
        <div className="flex justify-center   ">
          <Image
            src={Stockholm}
            alt="swedish archipelago"
            className="rounded-md w-3/6 h-3/6 mr-12"
          />
          <div>
            <h1 className="text-8xl  mb-9  ">Museum Caliber Art</h1>
            <h2 className="text-5xl  mb-9  ">
              Original Watercolour Paintings & Commissions
            </h2>
            <div className="flex  justify-center gap-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-2xl font-medium  px-4 py-2 rounded-md border border-black  bg-247BA0 bg-black text-white disabled:cursor-not-allowed hover:bg-white transition  ease-in-out  hover:text-black"
                >
                  Shop now
                </Link>
              ))}
              <Link
                href="/commissionWork"
                className="text-2xl font-medium  px-4 py-2 rounded-md border border-black  bg-247BA0 bg-white  disabled:cursor-not-allowed hover:bg-black transition  ease-in-out  hover:text-white "
              >
                Commissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//////////////////////////////////
{
  /* <div>
            <div className="">
              <Image src={moose2} alt="archipelago" />
            </div>
          </div> */
}
