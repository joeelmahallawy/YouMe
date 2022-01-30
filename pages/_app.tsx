import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import icon from "../attachments/apple-touch-icon.png";
import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useGlobalUser } from "../lib/globalStates";
import { supabase } from "../lib/supabase";
import { RecoilRoot, useRecoilState } from "recoil";
import globalUser from "../lib/recoi";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Head>
          <link rel="icon" href={icon.src} />
          <title>YouMe</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default MyApp;
