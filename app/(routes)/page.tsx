import Container from "@/components/ui/container";

import Intro from "../../components/intro";

import Commission from "../../components/commission";

import Review from "@/components/reviews";
import Hero from "@/components/hero";
import getCategories from "@/actions/get-categories";
import Browse from "../../components/browse";

export const revalidate = 0;

const HomePage = async () => {
  const categories = await getCategories();

  return (
    <>
      <div className="bg-gray-100 ">
        <Hero data={categories} />
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
