import style from "./style.module";

export const ShellForIntroduction = ({ children }) => {
  return (
    <section className={style.root}>
      <div className={style.container}>{children}</div>
    </section>
  );
};

export const ShellForContent = ({ children }) => {
  return <div className={style.content}>{children}</div>;
};
