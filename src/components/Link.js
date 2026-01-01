import React from "react";
import { Link as GatsbyLink } from "gatsby";
import classnames from "classnames";
import { styled } from "@mui/material/styles";

const StyledAnchor = styled("a")(({ theme, primary, contrast }) => ({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  ...(primary && {
    color: theme.palette.primary.main,
  }),
  ...(contrast && {
    color: theme.palette.primary.contrastText,
  }),
}));

const StyledGatsbyLink = styled(GatsbyLink)(({ theme, primary, contrast }) => ({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  ...(primary && {
    color: theme.palette.primary.main,
  }),
  ...(contrast && {
    color: theme.palette.primary.contrastText,
  }),
}));

export default function Link({ children, primary, contrast, ...all }) {
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

  return (
    <>
      {isExternal ? (
        <StyledAnchor
          {...all}
          primary={primary}
          contrast={contrast}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </StyledAnchor>
      ) : (
        <StyledGatsbyLink {...all} primary={primary} contrast={contrast}>
          {children}
        </StyledGatsbyLink>
      )}
    </>
  );
}
