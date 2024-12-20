/* eslint-disable react/prop-types */
// Note: Root Layout for all pages

import { useEffect } from "react";
import { Footer, Header } from "..";

export const metadata = {
  metadataBase: new URL("https://www.websofttools.com/"),
  title: {
    default: "Web Soft Tools",
    template: "Web Soft Tools - %s",
  },
  description:
    "Web Soft Tools is a free online service that allows you to download videos from YouTube, Facebook, Vimeo, and many other websites.",
  keywords: [
    "Web Soft Tools",
    "video downloader",
    "Youtube video downloader",
    "youtube downloader",
    "Media downloader",
  ],
  icons: {
    icon: "",
  },
  openGraph: {
    images: "",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const header = window.document.querySelector("header");
    const scrollThreshold = 100;
    function handleScroll() {
      if (window.pageYOffset > scrollThreshold) {
        header.classList.remove("bg-opacity-0");
      } else {
        header.classList.add("bg-opacity-0");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
