import React, { useState } from "react";
import AppNav from "../../components/PageNav/PageNav";
import PageFooter from "../../components/PageFooter/PageFooter";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Posts from "../../components/Posts/Posts";

export default function HomePage() {
  return (
    <>
      <AppNav />
      <HeroBanner />
      <PageFooter />
    </>
  );
}
