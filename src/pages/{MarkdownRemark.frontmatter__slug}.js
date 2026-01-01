import React from "react";
import { graphql } from "gatsby";
import Default from "../containers/Default";
import rehypeReact from "rehype-react";
import Contributors from "../components/markdown/Contributors";
import ReportIndex, {
  ToReportsIndexLink,
} from "../components/markdown/ReportsIndex";
import pkg from "../../package.json";
import * as production from 'react/jsx-runtime';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeReact, {
    ...production,
    components: {
      "md-contributors": Contributors,
      "reports-index": ReportIndex,
      "to-report-index": ToReportsIndexLink,
    },
  });

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { htmlAst } = markdownRemark;
  const content = processor.processSync(htmlAst).result;
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
