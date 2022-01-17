import Link from "next/link";
import React, { CSSProperties, useState } from "react";
import style from "../../styles/header.module.css";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";

const MenuHamburger = ({ widthState }): JSX.Element => {
  const [hamburgerVisible, setHamburgerVisible] = useState<CSSProperties>();
  const [styleBoxMenu, setStyleBoxMenu] = useState<CSSProperties>();

  const closeHamburger = () => {
    const closeStyle: CSSProperties = {
      transition: "all .5s",
      visibility: "hidden",
    };
    setHamburgerVisible(closeStyle);
    setStyleBoxMenu(closeStyle);
  };
  return (
    <div className={`${style.menuHamburger}`} style={hamburgerVisible}>
      <div
        style={hamburgerVisible && styleBoxMenu}
        className={`${style.boxMenu}`}
      >
        <div className={`${style.boxMenuTitle}`} onAuxClick={closeHamburger}>
          <Link href={"/"}>
            <a className={style.logo1}></a>
          </Link>
          <p>Club La Nacion</p>
          <button
            className={`${style.buttonClose}`}
            onClick={closeHamburger}
          ></button>
        </div>
        {widthState < 800 ? <MenuMobile /> : <MenuDesktop />}
      </div>
    </div>
  );
};

export default MenuHamburger;
