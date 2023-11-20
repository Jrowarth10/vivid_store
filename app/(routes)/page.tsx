import Container from "@/components/ui/container";
// import Billboard from "@/components/billboard";
// import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Intro from "../../components/intro";
import Link from "next/link";
import Commission from "../../components/commission";
import About from "@/components/about";
import Review from "@/components/reviews";
import Hero from "@/components/hero";
import getCategories from "@/actions/get-categories";

//so its not cached accidentally
export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();
  // const billboard = await getBillboard("4ec2b842-ee83-4e3c-a3a6-51b5923b4536");
  const limitedProducts = products.slice(0, 4);
  return (
    <>
      <div className="bg-gray-100 ">
        <Hero data={categories} />
        {/* <Billboard data={billboard} /> */}
      </div>
      <Container>
        <Intro />
        <div className="flex items-center justify-center my-16 py-20 border-b-2 border-gray-300 ">
          <div className="w-full rounded-md">
            <h2 className="flex  justify-center text-5xl pb-12 ">
              Our Gallery
            </h2>
            <ProductList
              title=""
              items={limitedProducts}
              cardClassName=" "
              listClassName="px-12"
            />

            <div className="flex justify-center pt-12 ">
              <Link
                href="http://localhost:3001/category/2f65c97b-4006-4b21-ac68-1804dab4f3f6"
                className="text-2xl font-medium  px-4 py-2 rounded-md border border-black  bg-247BA0 bg-white disabled:cursor-not-allowed hover:bg-black transition  ease-in-out  hover:text-white  "
              >
                View more
              </Link>
            </div>
          </div>
        </div>
        <Commission />
        <About />
        <Review />
      </Container>
    </>
  );
};

export default HomePage;
