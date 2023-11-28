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
    <div className=" mx-auto py-12 w-5/6  ">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center  ">
        <Image
          src={Stockholm}
          alt="swedish archipelago"
          className="rounded-md max-w-xs sm:max-w-sm  md:max-w-md lg:mr-12 lg:max-w-md xl:max-w-lg"
        />
        <div>
          <h1 className=" text-6xl text-center  mb-4 sm:text-6xl sm:text-left md:text-7xl   xl:text-8xl  ">
            Museum&nbsp;
            <span className=" inline sm:hidden md:hidden lg:inline">
              <br />
            </span>
            Caliber Art
          </h1>
          <h2 className="text-3xl mb-9 text-center md:text-5xl lg:text-left    ">
            Original Watercolour <br /> Paintings & Commissions
          </h2>
          <div className="flex  justify-center gap-4 sm: mb-8 lg:mb-0   ">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className=" text-lg px-2 py-1 rounded-md border border-black  bg-247BA0 bg-black text-white disabled:cursor-not-allowed hover:bg-white transition  ease-in-out  hover:text-black md:text-2xl md:px-4 md:py-2"
              >
                Shop now
              </Link>
            ))}
            <Link
              href="/commissionWork"
              className=" text-lg  px-2 py-1 rounded-md border border-black  bg-247BA0 bg-white  disabled:cursor-not-allowed hover:bg-black transition  ease-in-out  hover:text-white md:text-2xl md:px-4 md:py-2"
            >
              Commissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
