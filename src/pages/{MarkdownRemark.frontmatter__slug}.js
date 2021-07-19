import React from "react";
import { graphql } from "gatsby";
import Default from "../containers/Default";
import rehypeReact from "rehype-react";
import Contributors from "../components/markdown/Contributors";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "md-contributors": Contributors },
}).Compiler;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, htmlAst } = markdownRemark;
  return (
    <Default title={frontmatter.title}>
      <div>{renderAst(htmlAst)}</div>
    </Default>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        slug
        title
      }
    }
  }
`;
