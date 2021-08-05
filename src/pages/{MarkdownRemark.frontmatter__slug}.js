import React from "react";
import { graphql } from "gatsby";
import Default from "../containers/Default";
import rehypeReact from "rehype-react";
import Contributors from "../components/markdown/Contributors";
import ReportIndex, {
  ToReportsIndexLink,
} from "../components/markdown/ReportsIndex";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "md-contributors": Contributors,
    "reports-index": ReportIndex,
    "to-report-index": ToReportsIndexLink,
  },
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
