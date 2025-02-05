import React from "react";

//Libs
import { Link } from "react-router-dom";

//Styles
import style from "./header.module.scss";

//Components
import Modal from "../modal/Modal";
import Logotype from "../../assets/svg/Logotype.svg";
import SearchIcon from "../../assets/svg/Search.svg";
import { ArrowDownBlack, ArrowDownWhite, ArrowUpBlack } from "../SvgIcons";

const Header = () => {
  const [currentLocation, setCurrentLocation] = React.useState("Москва");

  const [closeLocation, setCloseLocation] = React.useState(false);

  const onClickLocation = () => {
    setCloseLocation(true);

    if (closeLocation) {
      setCloseLocation(false);
    }
  };

  return (
    <div className={style.root}>
      <div className={style.container}>
        <header className={style.header}>
          <div className={style.logo}>
            <img src={Logotype} alt="Логотип" />
          </div>

          <nav className={style.navigation}>
            <ul className={style.list}>
              <Link to={"/"} className={style.link}>
                <li className={style.item}>Главная</li>
              </Link>
              <Link to={"/catalog"} className={style.link}>
                <li className={style.item}>Каталог</li>
              </Link>
              <a href="#" className={style.link}>
                <li className={style.item}>Акции</li>
              </a>
              <a href="#" className={style.link}>
                <li className={style.item}>О системе</li>
              </a>
              <a href="#" className={style.link}>
                <li className={style.item}>Блог</li>
              </a>
              <a href="#" className={style.link}>
                <li className={style.item}>Вопросы</li>
              </a>
              <a href="#" className={style.link}>
                <li className={style.item}>Отзывы</li>
              </a>
              <a href="#" className={style.link}>
                <li className={style.item}>Контакты</li>
              </a>
            </ul>
          </nav>

          <div className={style.search_body}>
            <form action="#" className={style.form_search}>
              <label className={style.label}>Поиск</label>

              <div className={style.form_search_flex}>
                <input
                  placeholder="Поиск"
                  type="text"
                  className={style.search_input}
                />

                <div className={style.btn_search}>
                  <button className={style.click_search}>
                    <img src={SearchIcon} alt="Кнопка поиска" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className={style.contacts}>
            <div className={style.phones}>
              <a href="tel: +79609539395" className={style.call}>
                +7 960 953 93 95
              </a>
              <div className={style.select_btn}>
                <button className={style.btn_call}>
                  <ArrowDownWhite />
                </button>
              </div>
            </div>

            <div className={style.cityes}>
              <button className={style.select_cityes} onClick={onClickLocation}>
                {currentLocation}
                <div className={style.arrowBtn}>
                  {!closeLocation ? <ArrowDownBlack /> : <ArrowUpBlack />}
                </div>
              </button>
            </div>
          </div>
        </header>
        <Modal closeLocation={closeLocation} />
      </div>
    </div>
  );
};

export default Header;
