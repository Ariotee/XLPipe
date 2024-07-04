import style from "./style.module";

const WhyWe = () => {
  return (
    <section className={style.root}>
      <div className={style.container}>
        <h2 className={style.title}>ПОЧЕМУ ИМЕННО МЫ</h2>
        <div className={style.content}>
          <div className={style.content_text}>
            <p className={style.text_p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              metus velit, volutpat in dignissim vel, imperdiet id odio. Vivamus
              et lectus non odio fermentum condimentum vel et mi. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec porttitor
              volutpat consectetur. Nam ut porta sem. Phasellus eget scelerisque
              elit, quis imperdiet urna. Phasellus a lectus quis massa pretium
              maximus
            </p>
            <br />
            <p className={style.text_p}>
              Nam pellentesque sodales nulla, consectetur pretium nulla
              facilisis eget. Proin bibendum imperdiet erat, viverra semper orci
              vulputate at. Quisque ullamcorper dolor ac euismod gravida. Donec
              tempor leo imperdiet ligula ornare porttitor
            </p>
            <br />
            <p className={style.text_p}>
              A us nunc hendrerit et. Proin imperdiet, tortor vitae consequat
              rhoncus, augue turpis placerat eros, a bibendum erat neque in ex.
              Ut auctor sit amet purus ut condimentum. Donec vel leo vel tortor
              mattis vehicula tincidunt id ex.
            </p>
          </div>
          <div className={style.content_img}>{/* <img src='' alt=''/> */}</div>
        </div>

        <div className={style.btn}>
          <button className={style.order}>Заказать</button>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
