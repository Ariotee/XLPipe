import { CountWork } from "../deco-comp/DecoComp";
import style from "./intro.module";

const Intro = () => {
  return (
    <div className={style.root}>
      <div className={style.intro}>
        <CountWork />
        <div className={style.container}>
          <div className={style.RSide}>
            <div className={style.intro_title}>
              <h1 className={style.title_h1}>УСТАНОВКА СИСТЕМ ОТОПЛЕНИЯ</h1>
            </div>

            <div className={style.intro_subtitle}>
              <p className={style.subtitle_p}>
                Подберем и установим оптимальный вид отопления в Ваш дом.
              </p>
            </div>

            <div className={style.intro_order}>
              <button className={style.order_btn}>Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
