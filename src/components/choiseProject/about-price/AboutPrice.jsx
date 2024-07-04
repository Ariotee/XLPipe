import { ShellForContent, ShellForIntroduction } from "../../shells/Shells";

import EmptyIcon from "../../../assets/svg/empty.svg";

import style from "./style.module";

const AboutPrice = () => {
  return (
    <ShellForIntroduction>
      <h2 className={style.title}>про стоимость</h2>

      <ShellForContent>
        <div className={style.info_text}>
          <p className={style.text}>
            Mauris et ornare nibh, sed dictum leo. Sed gravida accumsan nisi,
            sed malesuada quam egestas vel.
          </p>
          <p className={style.text}>
            -Mauris finibus magna a metus elementum ornare. Sed id mi ac purus
            efficitur mattis non eu erat. Nulla pellentesque euismod mi nec
            pharetra.
          </p>
          <p className={style.text}>
            Aliquam erat volutpat. Nullam nec nisi lacus. Sed ornare molestie
            tellus, ut auctor augue malesuada quis.
          </p>
          <p className={style.text}>
            Etiam felis elit, aliquam vitae fermentum vitae, dapibus a lectus.
            Etiam porttitor quam tincidunt consectetur pretium.
          </p>
          <p className={style.text}>
            Mauris auctor maximus lacus, eu laoreet enim suscipit ac. Sed
            accumsan quam nec nisi fermentum aliquam.
          </p>
        </div>

        <div className={style.info_ill}>
          <img src={EmptyIcon} />
        </div>
      </ShellForContent>

      <div className={style.order}>
        <div className={style.total_price}>ОТ 600.000 &#x20bd;</div>
        <button className={style.btn_ordering}>Заказать</button>
      </div>
    </ShellForIntroduction>
  );
};

export default AboutPrice;
