import React from "react";
import { styled } from "@mui/material/styles";
import { Link as GatsbyLink } from "gatsby";
import classnames from "classnames";

const StyledAnchor = styled('a')(({ theme, primary, contrast }) => ({
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

  const anchorClass = classnames(
    all.className,
    { primary },
    { contrast }
  );

  return (
    <>
      {isExternal ? (
        <StyledAnchor
          {...all}
          className={anchorClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </StyledAnchor>
      ) : (
        <GatsbyLink {...all} className={anchorClass}>
          {children}
        </GatsbyLink>
      )}
    </>
  );
}
