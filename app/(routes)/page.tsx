import Container from "@/components/ui/container";
// import Billboard from "@/components/billboard";
// import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
// import ProductList from "@/components/product-list";
import Intro from "../../components/intro";
// import Link from "next/link";
import Commission from "../../components/commission";

import Review from "@/components/reviews";
import Hero from "@/components/hero";
import getCategories from "@/actions/get-categories";
import Browse from "../../components/browse";
//so its not cached accidentally
export const revalidate = 0;

const HomePage = async () => {
  // const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();
  // const billboard = await getBillboard("4ec2b842-ee83-4e3c-a3a6-51b5923b4536");
  // const limitedProducts = products.slice(0, 4);
  return (
    <>
      <div className="bg-gray-100 ">
        <Hero data={categories} />
        {/* <Billboard data={billboard} /> */}
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
