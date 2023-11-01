import React from "react";
import CommissionForm from "@/components/commissionForm";
import Container from "@/components/ui/container";
import Image from "next/image";
import Giraffe from "@/assets/images/giraffe.jpg";

const CommissionWorkPage: React.FC = () => {
  return (
    <Container>
      <div className="flex gap-6 justify-center items-center">
        <CommissionForm />
        <Image
          src={Giraffe}
          alt="portrait painting of a giraffe"
          className="w-1/4"
        />
      </div>
    </Container>
  );
};

export default CommissionWorkPage;
