import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Intro from "../../components/intro";
import Link from "next/link";
import Commission from "../../components/commission";

//so its not cached accidentally
export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("93d018ad-d9e3-4957-91ed-8df2b4255180");
  const limitedProducts = products.slice(0, 4);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <Intro />
      <div className="flex items-center justify-center py-12">
        <div className="w-full bg-FFF2E9">
          <h2 className="flex  justify-center text-5xl py-12 ">Our Gallery</h2>
          <ProductList
            title=""
            items={limitedProducts}
            cardClassName="bg-FFF2E9 border-none pt-0 pb-12"
            listClassName="px-12"
          />
          <div className="flex justify-center pb-12">
            <Link
              href="http://localhost:3001/category/2f65c97b-4006-4b21-ac68-1804dab4f3f6"
              className="text-2xl font-medium  px-4 py-2 rounded-full border border-black  bg-247BA0 bg-white "
            >
              View more
            </Link>
          </div>
        </div>
      </div>
      <Commission />
    </Container>
  );
};

export default HomePage;
