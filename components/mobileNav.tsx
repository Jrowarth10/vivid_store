"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/vivid-logo.png";
import { Category } from "@/types";

interface MobileNavProps {
  data: Category[];
}

const MobileNavbar = ({ data }: MobileNavProps) => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const toggleMobileNavbar = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
  };

  // const closeMobileNavbar = () => {
  //   setIsMobileNavbarOpen(false);
  // };

  return (
    <div className="sm:hidden relative">
      <div className="flex justify-between py-4 mx-3 ">
        <Link href="/">
          <Image src={logo} alt="vivid art logo" className="w-32 " />
        </Link>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          onClick={toggleMobileNavbar}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile navbar content */}
      <div
        className={`absolute top-0 right-0 w-full transition-transform transform ${
          isMobileNavbarOpen ? "translate-y-0" : "-translate-y-full"
        } bg-white sm:hidden z-10 flex flex-col items-end p-4`}
      >
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          onClick={toggleMobileNavbar}
        >
          <X size={24} />
        </button>
        <div className="flex-col col-1 mx-auto items-center mt-3 pb-4">
          <MainNav
            data={data}
            isMobileView={isMobileNavbarOpen}
            toggleMobileNavbar={toggleMobileNavbar}
          />
          <NavbarActions
            isMobileView={isMobileNavbarOpen}
            toggleMobileNavbar={toggleMobileNavbar}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
