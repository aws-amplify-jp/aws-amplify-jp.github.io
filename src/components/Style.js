import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";

export default function Style({ children }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
