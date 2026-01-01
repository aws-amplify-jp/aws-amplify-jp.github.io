import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Grid } from "@mui/material";
import Link from "./Link";

const Root = styled('div')(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(4), // Add margin above the footer
  backgroundColor: theme.palette.grey[900], // Darker background for a modern look
  padding: theme.spacing(3, 2), // Add padding for vertical space
  color: theme.palette.common.white, // Ensure text is visible on dark background
}));

export default function Footer() {
  return (
    <Root>
      <Container>
        <Box mx="auto" m={1}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Link to="/coc" sx={{ color: "white" }}>
                行動規範
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://github.com/aws-amplify-jp/aws-amplify-jp.github.io"
                sx={{ color: "white" }}
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
