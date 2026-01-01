import React from "react";
import { Container } from "@mui/material";
import Style from "../components/Style";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Default({ children }) {
  return (
    <>
      <Style>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Style>
    </>
  );
}
