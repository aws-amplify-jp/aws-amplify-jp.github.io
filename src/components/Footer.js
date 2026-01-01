import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Grid } from "@mui/material";
import Link from "./Link";

const Root = styled('div')(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(6),
  background: "linear-gradient(135deg, #232F3E 0%, #37475A 100%)",
  padding: theme.spacing(4, 2),
  color: theme.palette.common.white,
  boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
}));

export default function Footer() {
  return (
    <Root>
      <Container>
        <Box mx="auto" m={1}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Link 
                to="/coc" 
                sx={{ 
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                行動規範
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://github.com/aws-amplify-jp/aws-amplify-jp.github.io"
                sx={{ 
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                フィードバック
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Root>
  );
}
