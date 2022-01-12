import Link from "next/link";
import React from "react";
import { TourismCard } from "./TourismCard";
import { NextPage } from "next";
import style from "../../styles/Tourism/Tourism.module.css";
import { useCommerceTurism } from "../../hooks/useCommerce";

const Tourism: NextPage = () => {
  const commers = useCommerceTurism();

  return (
    <div className={style.tourismContent}>
      <div className={style.tourismHeader}>
        <p className={style.tourismTitle}>Turismo en Buenos Aires</p>
        <div className={style.tourismButton}>
          <Link href={"/"}>todos los beneficios</Link>
        </div>
      </div>
      <div className={`${style.sliderContent}`}>
        <button className={` ${style.buttons} ${style.buttonPrev}`}></button>
        <div className={style.cardContent}>
          {commers &&
            commers.map(({ imageURL, commerce, discount, location }, key) => (
              <TourismCard
                key={key}
                commerce={commerce}
                imageURL={imageURL}
                discount={discount}
                location={location}
              />
            ))}
        </div>
        <button className={`${style.buttons} ${style.buttonNext} `}></button>
      </div>
    </div>
  );
};

export default Tourism;
