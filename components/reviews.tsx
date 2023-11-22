"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { Star } from "lucide-react";
import slides, { Slide } from "../assets/slidesData";

// function Review() {
//   return (
//     <div className=" w-5/6 mx-auto  my-16 py-20 text-center ">
//       <h2 className="text-5xl  pb-4 ">Customer Reviews</h2>
//       <h3 className="text-2xl pb-12  ">See what our customers think</h3>
//       <Swiper
//         cssMode={true}
//         navigation={true}
//         pagination={false}
//         loop={true}
//         mousewheel={true}
//         // keyboard={true}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//         className="mySwiper"
//       >
//         {slides.map((slide: Slide, index: number) => (
//           <SwiperSlide key={index}>
//             <div className="flex gap-16   w-3/4">
//               <Image src={slide.src} alt={slide.alt} className="rounded-md" />
//               <div className="flex flex-col justify-center">
//                 <h4 className="text-2xl pb-2 ">{slide.title}</h4>
//                 <div className="flex pb-4">
//                   <Star color="gold" fill="gold" size={24} />
//                   <Star color="gold" fill="gold" size={24} />
//                   <Star color="gold" fill="gold" size={24} />
//                   <Star color="gold" fill="gold" size={24} />
//                   <Star color="gold" fill="gold" size={24} />
//                 </div>
//                 <p className="">{slide.text}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

function Review() {
  return (
    <div className=" w-5/6 mx-auto  my-16 py-20 text-center  ">
      <h2 className="text-5xl  pb-4 ">Customer Reviews</h2>
      <h3 className="text-2xl pb-12  ">See what our customers think</h3>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        speed={800}
        className="mySwiper"
      >
        {slides.map((slide: Slide, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex gap-16   w-3/4">
              <Image src={slide.src} alt={slide.alt} className="rounded-md" />
              <div className="flex flex-col justify-center">
                <h4 className="text-2xl pb-2 ">{slide.title}</h4>
                <div className="flex pb-4">
                  <Star color="gold" fill="gold" size={24} />
                  <Star color="gold" fill="gold" size={24} />
                  <Star color="gold" fill="gold" size={24} />
                  <Star color="gold" fill="gold" size={24} />
                  <Star color="gold" fill="gold" size={24} />
                </div>
                <p className="">{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
