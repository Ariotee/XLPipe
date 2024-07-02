import { FloorComparCard } from "../cards/Cards";
import style from "./style.module";

const ComparFloor = () => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <h2 className={style.title}>ОТЛИЧИЯ ОТ ДРУГИХ ТЕПЛЫХ ПОЛОВ</h2>

        <div className={style.list_cards}>
          <FloorComparCard />
          <FloorComparCard />
          <FloorComparCard />
        </div>
      </div>
    </div>
  );
};

export default ComparFloor;
