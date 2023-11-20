// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import "../styles/styles.css";
// import getProducts from "@/actions/get-products";
// import ProductList from "@/components/product-list";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Image from "next/image";
// import archipelago from "../assets/images/archipelago-wide.jpg";
// import ProductCard from "./ui/product-card";
// //slidesPerView={3}

// export default async function App() {
//   const products = await getProducts({ isFeatured: true });
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           {products.map((product) => (
//             <ProductCard key={product.id} data={product} />
//           ))}
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
