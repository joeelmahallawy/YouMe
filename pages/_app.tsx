import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import icon from "../attachments/apple-touch-icon.png";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabase";
import { RecoilRoot, useRecoilState } from "recoil";
import { UserProvider } from "@auth0/nextjs-auth0";
import { NextPageContext } from "next";

const MyApp = (
  props
  // { Component, pageProps }: AppProps
) => {
  console.log(props);
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Head>
          <link rel="icon" href={icon.src} />
          <title>YouMe</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Layout>
          <UserProvider>
            <props.Component {...props.pageProps} />
          </UserProvider>
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const userDataResponse = await fetch("http://localhost:3000/api/userstats", {
    headers: { Cookie: ctx.req.headers.cookie },
  });
  const userData = await userDataResponse.json();
  return {
    props: {
      userData,
    },
  };
};

export default MyApp;
