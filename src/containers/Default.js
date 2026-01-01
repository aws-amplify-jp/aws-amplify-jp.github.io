import React from "react";
import { Container } from "@mui/material";
import Title from "../components/Title";
import Description from "../components/Description";
import Html from "../components/Html";
import Style from "../components/Style";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Default({ title, children }) {
  return (
    <>
      <Html />
      <Title title={title} />
      <Description />
      <Style>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Style>
    </>
  );
}
