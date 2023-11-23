"use client";
import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

interface MainNavProps {
  isMobileView?: boolean;
  toggleMobileNavbar?: () => void;
}

const NavbarActions: React.FC<MainNavProps> = ({
  isMobileView,
  toggleMobileNavbar,
}) => {
  //Prevents hydration errors as it will use local storage
  const [isMounted, setIsMounted] = useState(false);
  const MobileNavClassName = isMobileView
    ? "mt-4 "
    : "ml-auto flex items-center gap-x-4";

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  const handleButtonClick = () => {
    router.push("/cart");
    if (toggleMobileNavbar) {
      toggleMobileNavbar();
    }
  };
  return (
    <div className={MobileNavClassName}>
      <Button
        onClick={handleButtonClick}
        className="flex items-center px-4 py-2 rounded-full border border-black"
      >
        <ShoppingBag size={20} />
        <span className=" text-sm font-medium">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
