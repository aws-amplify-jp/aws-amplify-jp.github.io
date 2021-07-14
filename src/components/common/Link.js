import React from "react";
import { makeStyles } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

const useStyles = makeStyles((_) => ({
  anchor: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
}));

export default function Link({ children, ...all }) {
  const classes = useStyles();

  return (
    <GatsbyLink {...all} className={classes.anchor + ' ' + all.className}>
      {children}
    </GatsbyLink>
  )
}