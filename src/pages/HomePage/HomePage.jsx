import React, { useState } from "react";
import AppNav from "../../components/PageNav/PageNav";
import PageFooter from "../../components/PageFooter/PageFooter";
import HomePageComp from "../../components/HomePageComp/HomePageComp";

export default function HomePage() {
  return (
    <>
      <AppNav />
      <HomePageComp />
      <PageFooter />
    </>
  );
}
