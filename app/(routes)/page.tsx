import Container from "@/components/ui/container";

import Intro from "../../components/intro";

import Commission from "../../components/commission";

import Review from "@/components/reviews";
import Hero from "@/components/hero";

import Browse from "../../components/browse";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <Hero />
      </div>
      <Container>
        <Browse />
        <Commission />
        <Intro />

        <Review />
      </Container>
    </>
  );
};

export default HomePage;
