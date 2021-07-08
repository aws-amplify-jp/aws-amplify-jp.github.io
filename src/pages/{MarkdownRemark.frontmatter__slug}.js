import React from "react";
import { graphql } from "gatsby";
import Default from "../containers/Default";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Default title={frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Default>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
