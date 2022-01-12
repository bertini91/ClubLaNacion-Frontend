import style from "../../styles/header.module.css";

export const MenuDesktop = (): JSX.Element => {
  return (
    <ul className={`${style.boxMenuList}`}>
      <li>Politica</li>
      <li>Deporte</li>
      <li>Economia</li>
      <li>COVID</li>
    </ul>
  );
};
