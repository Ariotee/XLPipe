import React from "react";

import Intro from "../components/intro/Intro";
import WhyWe from "../components/why-we/WhyWe";
import ChoiseProject from "../components/choiseProject/ChoiseProject";
import FutureHome from "../components/future-home/FutureHome";
import ComparFloor from "../components/compar-floor/ComparFloor";
// import SwiperTest from "../components/swiper/Swipers";

const HomePage = () => {
  return (
    <>
      <Intro />
      <main>
        <WhyWe />
        <ComparFloor />
        <FutureHome />
        <ChoiseProject />
      </main>
      {/* <SwiperTest /> */}
    </>
  );
};

export default HomePage;
