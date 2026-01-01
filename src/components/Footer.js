import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Grid } from "@mui/material";
import Link from "./Link";

const Root = styled('div')(({ theme }) => ({
  width: "100%",
  position: "fixed",
  bottom: 0,
  backgroundColor: theme.palette.primary.main,
  height: "36px",
}));

export default function Footer() {
  return (
    <>
      <Box mb={5} />
      <Root>
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
      </Root>
    </>
  );
}
