import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/vivid-logo.png";
import getCategories from "@/actions/get-categories";

// export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center mt-3 pb-4 border-b border-gray-300">
          <Link href="/">
            <Image src={logo} alt="vivid art logo" className="w-32 " />
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
