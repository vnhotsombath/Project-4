import React, { useState } from "react";
import AppNav from "../../components/AppNavBar/AppNavBar";
import HomePageComp from "../../components/HomePageComp/HomePageComp";

export default function HomePage() {
  return (
    <>
      <AppNav />
      <HomePageComp />
    </>
  );
}
