import style from "./style.module";

import Correct from "../../assets/svg/Correct.svg";
import ExampleImg from "../../assets/svg/exampleImg.svg";

export const FloorComparCard = () => {
  return (
    <div className={style.root}>
      <div className={style.content}>
        <div className={style.img}>
          <img src={ExampleImg} />
        </div>

        <h2 className={style.title}>Отличие от водяных теплых полов</h2>

        <ul className={style.list}>
          <li className={style.item}>
            <div className={style.svg}>
              <img src={Correct} />
            </div>
            Работает бех котла, насоса и коллектора
          </li>
          <li className={style.item}>
            <div className={style.svg}>
              <img src={Correct} />
            </div>
            Равномерно нагревается по всей длине трубы
          </li>
          <li className={style.item}>
            <div className={style.svg}>
              <img src={Correct} />
            </div>
            Более легкий монтаж
          </li>
        </ul>
      </div>
    </div>
  );
};
