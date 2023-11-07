import React from "react";
import CommissionForm from "@/components/commissionForm";
import Container from "@/components/ui/container";
import Image from "next/image";

import ArtWall from "@/components/artWall";

const CommissionWorkPage: React.FC = () => {
  return (
    <Container>
      <div className="pb-12 pt-8 w-3/4 mx-auto text-center ">
        <h2 className="text-5xl py-12 ">Commissioned Artwork Inquiry</h2>
        <p className="text-xl">
          Thank you for considering a custom artwork! Please fill out the form
          below with your contact details. We'll get in touch within 2 days to
          discuss your preferences and the ideas you have in mind. We're excited
          to bring your vision to life!
        </p>
      </div>
      <ArtWall />
      <div className="flex gap-6 justify-center items-center">
        <CommissionForm />
      </div>
    </Container>
  );
};

export default CommissionWorkPage;
