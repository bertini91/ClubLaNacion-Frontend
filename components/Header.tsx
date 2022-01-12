import React, { CSSProperties, useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useWindowDimensions } from "../hooks/useWindowsResolution";
import { MenuMobile } from "./Header/MenuMobile";
import { MenuDesktop } from "./Header/MenuDesktop";
import FormSearch from "./Header/FormSearch";
import style from "../styles/header.module.css";

const Header: NextPage = (): JSX.Element => {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState<number>(0);
  const [boxShadow, setBoxShadow] = useState<number>(0);
  const [hamburgerVisible, setHamburgerVisible] = useState<CSSProperties>();
  const [styleBoxMenu, setStyleBoxMenu] = useState<CSSProperties>();
  const [widthState, setWidthState] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setWidthState(width);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.3;
      setBackgroundTransparacy(backgroundTransparacyVar + 0.5);
      setBoxShadow(boxShadowVar);
    }
    setWidthState(width);
  }, [clientWindowHeight]);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

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
      width: "420px",
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
    <div
      className={style.container}
      style={{
        background: `rgba(81, 81, 81, ${backgroundTransparacy})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className={style.hamburger}>
        <button
          className={style.iconHamburger1}
          onClick={hamburgerClick}
        ></button>

        <Link href={"/"}>
          <a className={style.logo1}></a>
        </Link>
      </div>
      {widthState > 799 ? <FormSearch /> : null}
      <div className={style.iconsContent}>
        <button className={`${style.buttonIcons} ${style.alarmIcon}`}></button>
        <button className={`${style.buttonIcons} ${style.likeIcon}`}></button>
        <button className={`${style.buttonIcons} ${style.emojiIcon}`}></button>
      </div>
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
    </div>
  );
};

export default Header;
