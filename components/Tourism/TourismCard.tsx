import React, { CSSProperties } from "react";
import Image from "next/image";
import { NextPage } from "next";
import locationImg from "../../public/static/location.svg";
import style from "../../styles/Tourism/TourismCard.module.css";

interface Props {
  images: string;
  name: string;
  location: number;
  crmid: string;
  benefits: Array<{ type: string }>;
}
export const TourismCard: NextPage<Props> = ({
  images = "",
  name,
  location,
  crmid,
  benefits,
}) => {
  const externaImageLoader = ({ src }: { src: string }) => src;
  return (
    <div className={`${style.cardContent}`}>
      <div className={`${style.cardImg}`}>
        {images !== "" && (
          <a href={`https://club.lanacion.com.ar/${crmid}`} target="_blank">
            <Image
              loader={externaImageLoader}
              src={images}
              alt="imagen"
              layout="fill"
              width={"146px"}
              height={"120px"}
            ></Image>
          </a>
        )}
      </div>
      <div className={style.cardDetail}>
        <p className={style.cardTitle}>{name} </p>
        <div className={style.discount}>
          {benefits &&
            benefits.map(({ type }, index) => {
              if (index > 1) {
                const styleColor: CSSProperties = {
                  color: "#0573f9",
                };
                return (
                  <p
                    key={index}
                    className={`${style.cardText} ${style.cardTextDiscount}`}
                    style={styleColor}
                  >
                    {type}
                  </p>
                );
              }
              if (index == 1) {
                const styleColor: CSSProperties = {
                  color: "#222455",
                  borderRightStyle: "solid",
                  borderRightColor: "#dce4ed",
                  paddingRight: "4px",
                  borderWidth: "1px",
                };
                return (
                  <p
                    key={index}
                    className={`${style.cardText} ${style.cardTextDiscount}`}
                    style={styleColor}
                  >
                    {type}
                  </p>
                );
              } else {
                const styleColor: CSSProperties = {
                  color: "#0019a5",
                  borderRightStyle: "solid",
                  borderRightColor: "#dce4ed",
                  paddingRight: "4px",
                  borderWidth: "1px",
                };
                return (
                  <p
                    key={index}
                    className={`${style.cardText} ${style.cardTextDiscount}`}
                    style={styleColor}
                  >
                    {type}
                  </p>
                );
              }
            })}
        </div>

        <p className={`${style.cardText} ${style.cardTextLocation}`}>
          <Image src={locationImg} width={15} height={12} /> A {location}
        </p>
      </div>
    </div>
  );
};
