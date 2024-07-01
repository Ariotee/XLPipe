import style from "./style.module";

export const CountWork = () => {
  return (
    <div className={style.countWork}>
      <p className={style.countWork_number}>154</p>
      <p className={style.countWork_title}>Выполненных объектов</p>
    </div>
  );
};
