import "./globals.css";
import type { Metadata } from "next";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

export const metadata: Metadata = {
  title: "Vivid store",
  description: "Vivid art store",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        {/* Include any necessary head elements */}
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro&display=swap"
          rel="stylesheet"
        />
      </head>
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
