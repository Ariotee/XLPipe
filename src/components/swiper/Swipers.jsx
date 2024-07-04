import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  { id: "0", imgSrc: "../../assets/img/billy.jpg" },
  { id: "1", imgSrc: "../../assets/img/ghoust.jpg" },
  { id: "2", imgSrc: "../../assets/img/billy.jpg" },
];

const SwiperTest = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const goToImage = (i) => {
    setCurrentImageIndex(i);
  };

  return (
    <div className="">
      <div style={{ padding: "100px 0" }}>
        <div>
          {images.map((imgSrc, i) => (
            <button key={i} onClick={() => goToImage(i)}>
              Go to Image {i + 1}
            </button>
          ))}
        </div>
        <Swiper>
          <SwiperSlide>
            <div
              style={{ maxWidth: "1280px", margin: "0 auto", height: "500px" }}
            >
              {images.map((imgSrc) => {
                <img
                  src={` ${imgSrc}`}
                  alt={`Slide ${currentImageIndex + 1}`}
                />;
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperTest;

// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper-bundle.css";
// import style from "./style.module";

// import Ghoust from "../../assets/img/ghoust.jpg";
// import Billy from "../../assets/img/billy.jpg";

// export const SwiperTest = () => {
//   return (
//     <div className={style.root} id={0}>
//       <div className={style.container}>
//         <Swiper slidesPerView={1}>
//           <SwiperSlide>
//             <div className={style.body}>
//               <img src={Ghoust} />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className={style.body}>
//               <img src={Billy} />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className={style.body}>
//               <img src={Ghoust} />
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };
