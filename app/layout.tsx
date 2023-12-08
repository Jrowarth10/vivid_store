import "./globals.css";
import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-crimson-pro",
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Vivid store",
  description: "Vivid art store",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      style={{ height: "100%" }}
      className={`${crimsonPro.variable} font-sans`}
    >
      <body style={{ height: "100%", margin: 0, overflowX: "hidden" }}>
        <div style={{ minHeight: "100%" }}>
          <ModalProvider />
          <ToastProvider />
          <div className="sticky top-0 z-50 bg-white">
            {/* Navbar */}
            <Navbar />
          </div>
          {children}
          {/* Footer and any other components */}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
