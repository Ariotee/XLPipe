import React from "react";

import style from "./style.module";

const AboutProject = () => {
  return (
    <section className={style.root}>
      <div className={style.container}>
        <h2 className={style.title}>О проекте</h2>

        <p className={style.text}>
          Mauris et ornare nibh, sed dictum leo. Sed gravida accumsan nisi, sed
          malesuada quam egestas vel. Mauris finibus magna a metus elementum
          ornare. Sed id mi ac purus efficitur mattis non eu erat. Nulla
          pellentesque euismod mi nec pharetra. Mauris auctor maximus lacus, eu
          laoreet enim suscipit ac. Sed accumsan quam nec nisi fermentum
          aliquam. Aliquam erat volutpat. Nullam nec nisi lacus. Sed ornare
          molestie tellus, ut auctor augue malesuada quis. Etiam felis elit,
          aliquam vitae fermentum vitae, dapibus a lectus. Etiam porttitor quam
          tincidunt consectetur pretium.
        </p>

        <div className={style.table}>
          <div className={style.item}>
            <p className={style.name}>площадь</p>
            <p className={style.info}>
              234м <sup className={style.info_degree}>2</sup>
            </p>
          </div>
          <div className={style.item}>
            <p className={style.name}>тип отопления</p>
            <p className={style.info}>Водяное</p>
          </div>
          <div className={style.item}>
            <p className={style.name}>напольное покрытите</p>
            <p className={style.info}>Плитка</p>
          </div>
          <div className={style.item}>
            <p className={style.name}>срок реализации</p>
            <p className={style.info}>18 Дней</p>
          </div>
          <div className={style.item}>
            <p className={style.name}>тип объекта</p>
            <p className={style.info}>Дом</p>
          </div>
          <div className={style.item}>
            <p className={style.name}>количество этажей</p>
            <p className={style.info}>2</p>
          </div>
          <div className={style.item}>
            <p className={style.name}>количество комнат</p>
            <p className={style.info}>6</p>
          </div>
          <div className={style.item}>
            <p className={style.name}>стоимость проекта</p>
            <p className={style.info}>₽ 1 045 400</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
