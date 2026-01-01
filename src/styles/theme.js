import { createTheme } from "@mui/material/styles";
import "./font.css";
import "./table.css";
import "./markdown.css";

export default createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF9900",
      light: "#FFB84D",
      dark: "#CC7A00",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#232F3E",
      light: "#37475A",
      dark: "#161E2C",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F8F9FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#5A5A5A",
    },
  },
  typography: {
    fontFamily: [
      '"Noto Sans JP"',
      "メイリオ",
      "Meiryo",
      "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 4px 8px rgba(0,0,0,0.08)",
    "0px 8px 16px rgba(0,0,0,0.1)",
    "0px 12px 24px rgba(0,0,0,0.12)",
    "0px 16px 32px rgba(0,0,0,0.14)",
    "0px 20px 40px rgba(0,0,0,0.16)",
    "0px 24px 48px rgba(0,0,0,0.18)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 2px 4px rgba(0,0,0,0.05)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          boxShadow: "none",
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        elevation1: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(255, 153, 0, 0.08)",
          },
        },
      },
    },
  },
});
