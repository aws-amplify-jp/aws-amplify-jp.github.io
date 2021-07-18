import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  anchor: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    "&.primary": {
      color: theme.palette.primary.main,
    },
    "&.contrast": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

export default function Link({ children, primary, contrast, ...all }) {
  const classes = useStyles();

  let isExternal = false;
  if (all.to && all.to.startsWith("https")) {
    isExternal = true;
  }
  if (all.href && all.href.startsWith("https")) {
    isExternal = true;
  }
  if (isExternal && all.to) {
    console.error(`External links should use 'href'.`);
  }
  if (!isExternal && all.href) {
    console.error(`Internal links should use 'to'.`);
  }

  const anchorClass = classnames(
    classes.anchor,
    all.className,
    { primary },
    { contrast }
  );

  return (
    <>
      {isExternal ? (
        <a
          {...all}
          className={anchorClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <GatsbyLink {...all} className={anchorClass}>
          {children}
        </GatsbyLink>
      )}
    </>
  );
}
