import React from "react";
import { Slider } from "../components/Slider";
import { Layout } from "../components/Layout";
import Tourism from "../components/Tourism/Tourism";
import CodeDiscount from "../components/CodeDiscount/CodeDiscount";
import Header from "../components/Header";
import Head from "next/head";
import { useCommerceTurism, useCommerceDiscount } from "../hooks/useCommerce";

export const MyContext = React.createContext(null);

const Home = () => {
  const accountsState = useCommerceTurism();
  const discountState = useCommerceDiscount();

  return (
    <>
      <Head>
        <title>CLub la Nacion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <Slider />
        <Tourism accounts={accountsState} />
        <CodeDiscount accountsDiscount={discountState} />
      </Layout>
    </>
  );
};

export default Home;
