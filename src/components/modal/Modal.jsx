import React from "react";

import style from "./mod.module";

const Modal = ({ closeLocation }) => {
  return (
    <div
      style={closeLocation ? { display: "block" } : { display: "none" }}
      className={style.root}
    >
      Modal
    </div>
  );
};

export default Modal;
