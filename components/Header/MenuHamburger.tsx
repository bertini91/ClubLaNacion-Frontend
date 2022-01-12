import Link from "next/link";
import React, { CSSProperties, useState } from "react";
import style from "../../styles/header.module.css";
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";

const MenuHamburger = ({ widthState }): JSX.Element => {
  const [hamburgerVisible, setHamburgerVisible] = useState<CSSProperties>();
  const [styleBoxMenu, setStyleBoxMenu] = useState<CSSProperties>();

  const hamburgerClick = () => {
    const styleVisibility: CSSProperties = {
      visibility: "visible",
      position: "fixed",
      width: "100%",
      top: "0",
      height: "100%",
      background: "rgba(0, 0, 0, 0.36)",
      transition: "all 0.5s",
      overflowY: "auto",
      left: "0",
    };
    const styleBox: CSSProperties = {
      left: "0",
      transition: "all .5s",
      width: "400px",
      visibility: "visible",
      height: "100%",
      zIndex: "11",
    };
    setHamburgerVisible(styleVisibility);
    setStyleBoxMenu(styleBox);
  };
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
