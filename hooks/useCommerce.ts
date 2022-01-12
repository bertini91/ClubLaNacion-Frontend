import { useState, useEffect } from "react";

interface CommerceDesc {
  commerce: string;
  imgURL: string;
}

export const useCommerce = (): CommerceDesc[] => {
  const [useCommerceState, setUseCoomerceState] =
    useState<Array<CommerceDesc>>();

  useEffect(() => {
    //Consultar los comercios al backend
    const commerceList = [
      { commerce: "COTO", imgURL: "" },
      { commerce: "COTO1", imgURL: "" },
      { commerce: "COTO2", imgURL: "" },
      { commerce: "COTO3", imgURL: "" },
    ];
    setUseCoomerceState(commerceList);
  }, []);

  return useCommerceState;
};

interface CommerceTurism {
  imageURL: string;
  commerce: string;
  discount: Array<string>;
  location: number;
}
export const useCommerceTurism = (): CommerceTurism[] => {
  const [useCommerceTurismState, setUseCoomerceTurimsState] =
    useState<Array<CommerceTurism>>();

  useEffect(() => {
    //Consultar los comercios al backend
    const commerceList = [
      {
        imageURL: "",
        commerce: "COTO",
        discount: ["20%", "15%", "10%"],
        location: 0.75,
      },
      {
        imageURL: "",
        commerce: "COTO1",
        discount: ["20%", "15%", "10%"],
        location: 0.95,
      },
      {
        imageURL: "",
        commerce: "COTO2",
        discount: ["20%", "15%", "10%"],
        location: 0.55,
      },
      {
        imageURL: "",
        commerce: "COTO3",
        discount: ["20%", "15%", "10%"],
        location: 0.15,
      },
    ];
    setUseCoomerceTurimsState(commerceList);
  }, []);

  return useCommerceTurismState;
};
