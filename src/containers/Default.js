import React from "react";
import { Container, Box } from "@material-ui/core";
import Title from "../components/Title";
import Style from "../components/Style";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Default({ title, children }) {
  return (
    <>
      <Title title={title} />
      <Style>
        <Header />
        <Container>{children}</Container>
        <Box mb={5} />
        <Footer />
      </Style>
    </>
  );
}
