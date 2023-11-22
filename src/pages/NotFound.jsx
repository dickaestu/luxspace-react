import React from "react";
import PageErrorMessage from "../parts/PageErrorMessage";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

const NotFound = () => {
  return (
    <>
      <Header theme="black" />

      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
};

export default NotFound;
