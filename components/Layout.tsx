import React from "react";
import Header from "./Header";
import Head from "next/head";
import { NextPage } from "next";
import style from "../styles/Layout.module.css";

export const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>CLub la Nacion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </>
  );
};
