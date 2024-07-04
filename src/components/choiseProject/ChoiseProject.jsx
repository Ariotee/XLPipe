import AboutPrice from "./about-price/AboutPrice";
import AboutProject from "./about-project/AboutProject";

import style from "./style.module";

const ChoiseProject = () => {
  return (
    <div className={style.root}>
      <AboutProject />
      <AboutPrice />
    </div>
  );
};

export default ChoiseProject;
