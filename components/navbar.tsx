import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/vivid-logo.png";
import getCategories from "@/actions/get-categories";
import MobileNavbar from "./mobileNav";

// export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="sticky top-0 z-30 bg-white ">
      <div className="relative hidden py-10 sm:flex sm:px-6 lg:px-32  h-16 items-center mt-3  shadow-md mb-1  ">
        <Link href="/">
          <Image src={logo} alt="vivid art logo" className="w-32 " />
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
      <MobileNavbar data={categories} />
    </div>
  );
};

export default Navbar;
