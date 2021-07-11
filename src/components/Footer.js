import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Container,
  Box,
  Link,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((_) => ({
  root: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Container>
        <Box mx='auto' pb={2}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Link href="https://github.com/aws-amplify-jp/aws-amplify-jp.github.io">Feedback</Link>
            </Grid>
            <Grid item>
              <Link href="/coc">CoC</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
}
