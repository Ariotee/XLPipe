import React from "react";

import style from "./style.module";
import HomeSvg from "../../assets/svg/future-home.svg";

const FutureHome = () => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.img}>
          <img src={HomeSvg} />
        </div>
      </div>
    </div>
  );
};

export default FutureHome;
