import { createTheme } from "@mui/material/styles";
import "./font.css";
import "./table.css";

export default createTheme({
  palette: {
    primary: {
      main: "#1976D2", // A modern blue
      contrastText: "#fff", // White contrast text for dark primary
    },
    secondary: {
      main: "#E040FB", // A vibrant purple accent
      contrastText: "#fff", // White contrast text for dark secondary
    },
    background: {
      default: "#f8f8f8", // Light grey background for the page
      paper: "#ffffff", // White background for paper elements
    },
  },
  typography: {
    fontFamily: [
      "メイリオ",
      "Meiryo",
      "ＭＳ ゴシック",
      "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    h2: {
      fontWeight: 500,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 500,
      letterSpacing: "-0.005em",
    },
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
});
