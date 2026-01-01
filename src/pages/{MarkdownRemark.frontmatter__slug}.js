import React from "react";
import { graphql } from "gatsby";
import Default from "../containers/Default";

import Contributors from "../components/markdown/Contributors";
import ReportIndex, {
  ToReportsIndexLink,
} from "../components/markdown/ReportsIndex";
import pkg from "../../package.json";

const components = {
  "md-contributors": Contributors,
  "reports-index": ReportIndex,
  "to-report-index": ToReportsIndexLink,
};

// Self-closing HTML tags that should not have children
const voidElements = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

function renderAst(node, index = 0) {
  if (!node) return null;
  
  if (node.type === 'root') {
    return <>{node.children?.map((child, i) => renderAst(child, i))}</>;
  }
  
  if (node.type === 'element') {
    const Component = components[node.tagName] || node.tagName;
    const props = { ...node.properties, key: index };
    
    // Don't render children for void elements
    if (voidElements.has(node.tagName)) {
      return React.createElement(Component, props);
    }
    
    const children = node.children?.map((child, i) => renderAst(child, i));
    return React.createElement(Component, props, children);
  }
  
  if (node.type === 'text') {
    return node.value;
  }
  
  return null;
}

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { htmlAst } = markdownRemark;
  const content = renderAst(htmlAst);
  
  return (
    <Default>

      <div>{content}</div>
    </Default>
  );
}

export function Head({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <>
      <title>{frontmatter.title ? `${frontmatter.title} - ` : ""}Amplify 日本ユーザーグループ</title>
      <meta name="description" content={pkg.description} />
      <html lang="ja" />
    </>
  )
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
