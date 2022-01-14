import Link from "next/link";
import { TourismCard } from "./TourismCard";
import { CommerceTurism } from "../../interfaces/account";
import style from "../../styles/Tourism/Tourism.module.css";

interface Props {
  accounts: Array<CommerceTurism>;
}

const Tourism = ({ accounts }: Props) => {

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
          {accounts &&
            accounts.map(({ images, name, discount, location }, key) => {
              const url = images[0].url;
              return (
                <TourismCard
                  key={key}
                  name={name}
                  images={url || ""}
                  discount={["20%", "15%", "10%"]}
                  location={location}
                />
              );
            })}
        </div>
        <button className={`${style.buttons} ${style.buttonNext} `}></button>
      </div>
    </div>
  );
};

export default Tourism;
