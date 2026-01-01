import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Style({ children }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
