import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import srcImageSlider from "../public/static/slider2.png";
import style from "../styles/Slider.module.css";

export const Slider: NextPage = (): JSX.Element => {
  return (
    <div className={`${style.sliderContent}`}>
      <div className={style.sliderList}>
        <div className={style.sliderImg}>
          <Image
            src={srcImageSlider}
            alt="imagen"
            id="slider1"
            layout="fill"
          />
        </div>
      </div>
      <button
        className={`${style.sliderButton} ${style.sliderButtonPrev}`}
      ></button>
      <button
        className={`${style.sliderButton} ${style.sliderButtonNext}`}
      ></button>
    </div>
  );
};
