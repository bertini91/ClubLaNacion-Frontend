import React from "react";
import Link from "next/link";
import CodeDiscountCard from "./CodeDiscountCard";
import style from "../../styles/CodeDiscount/codeDiscount.module.css";
import { CommerceDesc } from "../../interfaces/account";

interface Props {
  accountsDiscount: Array<CommerceDesc>;
}

const CodeDiscount = ({ accountsDiscount }: Props): JSX.Element => {
  console.log(accountsDiscount);
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
          {accountsDiscount &&
            accountsDiscount.map(({ name, images }, key) => (
              <CodeDiscountCard
                key={key}
                commerce={name}
                images={images[0].url}
              />
            ))}
        </div>
        <button className={`${style.buttonNext} ${style.buttons}`}></button>
      </div>
    </div>
  );
};

export default CodeDiscount;
