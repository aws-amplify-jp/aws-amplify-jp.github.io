import React from "react";
import { Container, Box } from "@mui/material";
import Style from "../components/Style";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Default({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Style>
        <Header />
        <Container sx={{ flexGrow: 1 }}>{children}</Container>
        <Footer />
      </Style>
    </Box>
  );
}
