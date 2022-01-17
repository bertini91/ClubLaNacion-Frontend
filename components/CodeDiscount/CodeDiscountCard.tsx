import React from "react";
import Image from "next/image";
import style from "../../styles/CodeDiscount/codeDiscountCard.module.css";

interface CommerceDesc {
  commerce: string;
  images: string;
  crmid: string
}

const CodeDiscountCard = ({ commerce, images, crmid }: CommerceDesc): JSX.Element => {
  const externaImageLoader = ({ src }: { src: string }) => src;
  return (
    <div className={`${style.cardContent}`}>
      <div className={`${style.cardImg}`}>
        {images !== "" && (
          <Image loader={externaImageLoader} src={images} alt="imagen" layout="fill"></Image>
        )}
      </div>
      <div className={style.cardDetail}>
        <p className={style.cardTitle}>{commerce} </p>
        <div className={style.cardDescButton}>
          <a href={`https://club.lanacion.com.ar/${crmid}`} target="_blank">quiero mi descuento</a>
        </div>
      </div>
    </div>
  );
};

export default CodeDiscountCard;
