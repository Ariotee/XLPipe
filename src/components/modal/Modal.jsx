import React from "react";

import style from "./mod.module";

import Exist from "../../assets/svg/exist.svg";

const Modal = ({ closeLocation }) => {
  return (
    <div
      style={closeLocation ? { display: "block" } : { display: "none" }}
      className={style.root}
    >
      <form action="" className={style.form}>
        <input type="text" className={style.input} placeholder="Поиск" />
      </form>

      <div className={style.list}>
        <ul className={style.list_cities}>
          <li className={`${style.item} ${style.activeCity}`}>
            Москва
            <img src={Exist} />
          </li>
          <li className={style.item}>
            Москва
            <img src={Exist} />
          </li>
          <li className={style.item}>
            Москва
            <img src={Exist} />
          </li>
          <li className={style.item}>Москва</li>
          <li className={style.item}>Москва</li>
          <li className={style.item}>
            Москва
            <img src={Exist} />
          </li>
          <li className={style.item}>Москва</li>
          <li className={style.item}>
            Москва
            <img src={Exist} />
          </li>
          <li className={style.item}>
            Москва
            <img src={Exist} />
          </li>
          <li className={style.item}>
            Москва
            <img src={Exist} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
