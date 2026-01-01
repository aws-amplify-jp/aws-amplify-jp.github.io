import React from "react";
import { Container, Box } from "@mui/material";
import Style from "../components/Style";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Default({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "400px",
          background: "linear-gradient(135deg, rgba(255, 153, 0, 0.03) 0%, rgba(35, 47, 62, 0.03) 100%)",
          zIndex: 0,
          pointerEvents: "none",
        },
      }}
    >
      <Style>
        <Header />
        <Container
          sx={{
            flexGrow: 1,
            position: "relative",
            zIndex: 1,
            py: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              padding: { xs: 2, sm: 3, md: 4 },
              minHeight: "400px",
            }}
          >
            {children}
          </Box>
        </Container>
        <Footer />
      </Style>
    </Box>
  );
}
