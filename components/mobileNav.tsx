"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
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

  return (
    <div className="sm:hidden">
      {/* Button to toggle the mobile navbar */}
      <button
        type="button"
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        onClick={toggleMobileNavbar}
      >
        <Menu size={24} />
      </button>

      {/* Mobile navbar content */}
      <div
        className={`${
          isMobileNavbarOpen ? "flex" : "hidden"
        } bg-white sm:hidden`}
      >
        <div className="relative col col-1 z-10 items-center mt-3 pb-4 border-b border-gray-300">
          <Link href="/">
            <Image src={logo} alt="vivid art logo" className="w-32 " />
          </Link>
          <MainNav data={data} />
          <NavbarActions />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
