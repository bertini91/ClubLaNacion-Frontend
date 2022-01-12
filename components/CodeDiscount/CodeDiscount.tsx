import React from "react";
import { NextPage } from "next";
import style from "../../styles/CodeDiscount/codeDiscount.module.css";
import Link from "next/link";
import CodeDiscountCard from "./CodeDiscountCard";
import { useCommerce } from "../../hooks/useCommerce";

const CodeDiscount: NextPage = (): JSX.Element => {
  const commerceList = useCommerce();

  return (
    <div className={style.codeDescContent}>
      <div className={style.codeDescHeader}>
        <div>
          <p className={style.codeDescTitle}> Código de descuento </p>
          <p className={style.codeDescSubtitle}>
            ¿Sos socio de CLUB LA NACION? Descarga y disfruta beneficios
            exclusivos en tus marcas favoritas
          </p>
        </div>
        <div className={style.codeDescButton}>
          <Link href={"/"}>Todos los códigos</Link>
        </div>
      </div>
      <div className={`${style.sliderContent}`}>
        <button className={`${style.buttonPrev} ${style.buttons}`}></button>
        <div className={`${style.sliderCards}`}>
          {commerceList &&
            commerceList.map(({ commerce, imgURL }, key) => (
              <CodeDiscountCard key={key} commerce={commerce} imgURL={imgURL} />
            ))}
        </div>
        <button className={`${style.buttonNext} ${style.buttons}`}></button>
      </div>
    </div>
  );
};

export default CodeDiscount;
