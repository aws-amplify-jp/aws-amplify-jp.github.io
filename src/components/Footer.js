import React from "react";
import { Container, Box, Grid } from "@mui/material";
import Link from "./Link";

export default function Footer() {
  return (
    <>
      <Box mb={5} />
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: "primary.main",
          height: "36px",
        }}
      >
        <Container>
          <Box mx="auto" m={1}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <Link to="/coc" contrast>
                  行動規範
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://github.com/aws-amplify-jp/aws-amplify-jp.github.io"
                  contrast
                >
                  フィードバック
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
