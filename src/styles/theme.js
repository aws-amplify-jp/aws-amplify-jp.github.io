import { createTheme } from "@mui/material/styles";
import "./font.css";
import "./table.css";

export default createTheme({
  palette: {
    primary: {
      main: "#f90",
      contrastText: "#000",
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
  },
});
