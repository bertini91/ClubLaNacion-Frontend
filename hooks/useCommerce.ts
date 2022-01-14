import { useState, useEffect } from "react";
import { consultAPI } from "../helpers/fetch";
import getConfig from "next/config";
import { CommerceDesc, CommerceTurism } from "../interfaces/account";

const { publicRuntimeConfig } = getConfig();
const { ACCOUNT_DISCOUNT, ACCOUNT_TOURISM } = publicRuntimeConfig;

export const useCommerceDiscount = (): CommerceDesc[] => {
  const [useCommerceState, setUseCoomerceState] =
    useState<Array<CommerceDesc>>();

  const consult = async () => {
    const baseUrl: string | any = ACCOUNT_DISCOUNT;
    try {
      const commerce = await consultAPI(baseUrl, "");
      const result = await commerce.json();
      setUseCoomerceState(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    consult();
  }, []);

  return useCommerceState;
};

export const useCommerceTurism = (): CommerceTurism[] => {
  const [useCommerceTurismState, setUseCoomerceTurimsState] =
    useState<Array<CommerceTurism>>();
  const consult = async () => {
    const baseUrl: string | any = ACCOUNT_TOURISM;
    try {
      const commerce = await consultAPI(baseUrl, "");
      const result = await commerce.json();
      setUseCoomerceTurimsState(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consult();
  }, []);

  return useCommerceTurismState;
};
