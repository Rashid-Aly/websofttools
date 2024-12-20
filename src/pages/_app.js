/* eslint-disable react/prop-types */
import "../styles/globals.css";
import Script from "next/script";
import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "./gtag";
import { DefaultSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "./../../next-seo-config";
import RootLayout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2111N1C2DB"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2111N1C2DB');
        `}
      </Script>
      <DefaultSeo
        {...NEXT_SEO_DEFAULT}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/favicon/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon/favicon-16x16.png",
          },
          {
            rel: "icon",
            type: "image/png",
            href: "https://www.websofttools.com/images/ICON.png",
          },
          {
            rel: "manifest",
            href: "/favicon/site.webmanifest",
          },
        ]}
      />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;
