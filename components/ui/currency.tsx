"use client";
import { useEffect, useState } from "react";
const formatter = new Intl.NumberFormat("en-GB", {
  // Changed currency to GBP
  style: "currency",
  currency: "GBP", // Changed currency code to GBP
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
