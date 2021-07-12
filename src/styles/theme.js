import { createTheme } from "@material-ui/core/styles";
import './font.css';

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
