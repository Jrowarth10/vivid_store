// import getProducts from "@/actions/get-products";
// import ProductList from "@/components/product-list";
// import Link from "next/link";

// export const revalidate = 0;

// const Browse: React.FC = async () => {
//   const products = await getProducts({ isFeatured: true });

//   const limitedProducts = products.slice(0, 4);
//   return (
//     <div className="flex items-center justify-center my-16 pt-8 pb-20 border-b-2 border-gray-300 ">
//       <div className="w-full rounded-md">
//         <h2 className=" flex justify-center text-5xl  pb-4   ">New Arrivals</h2>
//         <h3 className=" flex justify-center  pb-8 text-xl md:text-2xl ">
//           See what has just been added
//         </h3>
//         <ProductList
//           title=""
//           items={limitedProducts}
//           cardClassName=" "
//           listClassName="px-12"
//         />

//         <div className="flex justify-center pt-12 ">
//           <Link
//             href="https://vivid-store.vercel.app/category/5099b8f3-1dce-47e8-aa30-d9695dd78ebc"
//             className="text-2xl font-medium  px-4 py-2 rounded-md border border-black  bg-247BA0 bg-black text-white disabled:cursor-not-allowed hover:bg-white transition  ease-in-out  hover:text-black  "
//           >
//             View more
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Browse;
