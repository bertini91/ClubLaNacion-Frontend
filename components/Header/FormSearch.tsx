import React from "react";
import style from "../../styles/header.module.css";

const search = (event) => {
  event.preventDefault();
  //Debo validar si los dos campos son obligatorios
  console.log("Buscando...");
};

const FormSearch = (): JSX.Element => {
  return (
    <form onSubmit={() => console.log("onSubmit")} className={style.formSearch}>
      <input
        type="text"
        className={`${style.searchInput}`}
        placeholder="Buscar un comercio..."
      />
      <input
        type="text"
        className={`${style.locationInput}`}
        placeholder="Ingresa una ubicación..."
      />
      <button className={style.buttonSearch} type="submit" onClick={search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path
            id="search_icon"
            fillRule="evenodd"
            d="M10.474,15.955 C7.452,15.955 4.993,13.496 4.993,10.474 C4.993,7.452 7.452,4.993 10.474,4.993 C13.496,4.993 15.955,7.452 15.955,10.474 C15.955,13.496 13.496,15.955 10.474,15.955 M20.691,19.282 L16.411,15.002 C17.371,13.744 17.948,12.178 17.948,10.474 C17.948,6.346 14.601,3 10.474,3 C6.346,3 3,6.346 3,10.474 C3,14.601 6.346,17.948 10.474,17.948 C12.178,17.948 13.744,17.371 15.002,16.411 L19.282,20.691 C19.672,21.081 20.303,21.081 20.691,20.691 C21.081,20.303 21.081,19.672 20.691,19.282"
          />
        </svg>
      </button>
    </form>
  );
};

export default FormSearch;
