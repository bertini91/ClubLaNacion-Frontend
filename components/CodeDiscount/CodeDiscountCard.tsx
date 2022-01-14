import React from "react";
import Image from "next/image";
import style from "../../styles/CodeDiscount/codeDiscountCard.module.css";
import Link from "next/link";

interface CommerceDesc {
  commerce: string;
  images: string;
}

const CodeDiscountCard = ({ commerce, images }: CommerceDesc): JSX.Element => {
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
          <Link href={"/"}>quiero mi descuento</Link>
        </div>
      </div>
    </div>
  );
};

export default CodeDiscountCard;
