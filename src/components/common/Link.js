import React from "react";
import { makeStyles } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import Theme from '../../styles/theme'
import classnames from 'classnames'

const useStyles = makeStyles((_) => ({
  anchor: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&.primary': {
      color: Theme.palette.primary.main
    }
  },
}));

export default function Link({ children, primary, ...all }) {
  const classes = useStyles();

  let isExternal = false
  if (all.to && all.to.startsWith('https')) {
    isExternal = true
  }
  if (all.href && all.href.startsWith('https')) {
    isExternal = true
  }

  const anchorClass = classnames(classes.anchor, all.className, { primary })

  return (
    <>
      {isExternal ? (
        <a {...all} className={anchorClass} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <GatsbyLink {...all} className={anchorClass}>
          {children}
        </GatsbyLink>
      )}
    </>
  )
}