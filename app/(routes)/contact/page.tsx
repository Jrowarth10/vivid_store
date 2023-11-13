import React from "react";
import ContactForm from "@/components/contactForm";
import Container from "@/components/ui/container";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <Container>
      <div className="flex gap-6 justify-center items-center">
        <ContactForm />
      </div>
    </Container>
  );
};

export default ContactPage;
