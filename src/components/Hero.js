import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowForward } from "@mui/icons-material";
import Link from "./Link";
import HeroImage from "../images/hero-image.jpg";

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "600px",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  marginLeft: "-24px",
  marginRight: "-24px",
  marginTop: "-32px",
  marginBottom: "48px",
  borderRadius: "0 0 32px 32px",
  [theme.breakpoints.down("md")]: {
    minHeight: "500px",
    marginBottom: "32px",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "400px",
    borderRadius: "0 0 24px 24px",
  },
}));

const HeroBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(
      to bottom,
      rgba(7, 11, 26, 0.8) 0%, /* Darker, almost black, but with a hint of existing dark background color */
      rgba(7, 11, 26, 0.4) 50%, /* Lighter in the middle */
      rgba(7, 11, 26, 0.8) 100% /* Darker at the bottom */
    ), radial-gradient(
      circle at 80% 20%,
      rgba(255, 153, 0, 0.2) 0%, /* Subtle orange glow */
      transparent 50%
    ), radial-gradient(
      circle at 20% 80%,
      rgba(59, 130, 246, 0.15) 0%, /* Subtle blue glow */
      transparent 50%
    )`,
    backdropFilter: "blur(2px)",
  },
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  color: "#fff",
  textAlign: "center",
  padding: theme.spacing(8, 2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 2),
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "3.5rem",
  marginBottom: theme.spacing(2),
  textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
  lineHeight: 1.8,
  maxWidth: "800px",
  margin: "0 auto",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#FF9900",
  padding: "14px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  borderRadius: "50px",
  textTransform: "none",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#f5f5f5",
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
  },
}));

export default function Hero() {
  return (
    <HeroSection>
      <HeroBackground 
        sx={{
          backgroundImage: `url(${HeroImage})`,
        }}
      />
      <HeroContent>
        <HeroTitle variant="h1">
          Amplify Japan User Group
        </HeroTitle>
        <HeroSubtitle variant="h5">
          AWS Amplify の利用者・開発者が集まり、<br />
          相互にサポートし合う日本のコミュニティ
        </HeroSubtitle>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/events" underline="none">
            <CTAButton variant="contained" endIcon={<ArrowForward />}>
              イベントを見る
            </CTAButton>
          </Link>
        </Box>
      </HeroContent>
    </HeroSection>
  );
}
