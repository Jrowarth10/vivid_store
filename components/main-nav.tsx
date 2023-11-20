"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className=" ml-12 flex items-center space-x-4 lg:space-x-6 ">
      <Link
        href="/"
        className="text-md  transition-colors hover:text-black text-neutral-500"
      >
        Home
      </Link>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-md font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}

      <Link
        href="/commissionWork"
        className="text-md font-medium transition-colors hover:text-black text-neutral-500"
      >
        Commissions
      </Link>
      <Link
        href="/contact"
        className="text-md font-medium transition-colors hover:text-black text-neutral-500"
      >
        Contact
      </Link>
    </nav>
  );
};

export default MainNav;
