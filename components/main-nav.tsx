"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
  isMobileView?: boolean;
  toggleMobileNavbar?: () => void;
}

const MainNav: React.FC<MainNavProps> = ({
  data,
  isMobileView,
  toggleMobileNavbar,
}) => {
  const MobileNavClassName = isMobileView
    ? "flex flex-col col-1 gap-4  "
    : "ml-12 flex items-center space-x-4 lg:space-x-6 ";
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className={MobileNavClassName}>
      <Link
        href="/"
        className="text-lg  transition-colors hover:text-black text-neutral-500"
        onClick={toggleMobileNavbar}
      >
        Home
      </Link>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-lg  transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
          onClick={toggleMobileNavbar}
        >
          {route.label}
        </Link>
      ))}

      <Link
        href="/commissionWork"
        className="text-lg transition-colors hover:text-black text-neutral-500"
        onClick={toggleMobileNavbar}
      >
        Commissions
      </Link>
      <Link
        href="/contact"
        className="text-lg  transition-colors hover:text-black text-neutral-500"
        onClick={toggleMobileNavbar}
      >
        Contact
      </Link>
    </nav>
  );
};

export default MainNav;
