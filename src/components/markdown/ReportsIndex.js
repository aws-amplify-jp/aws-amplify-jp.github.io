import { styled } from "@mui/material/styles";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Link from "../Link";

const Root = styled('div')({
  position: "relative",
});

const ToReportIndexRoot = styled('div')({
  marginTop: "50px",
  marginBottom: "50px",
});

export default function ReportsIndex() {
  const query = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              author
            }
          }
        }
      }
    }
  `);

  const reportsList = query.allMarkdownRemark.edges.reduce((acc, { node }) => {
    const { frontmatter } = node;
    if (
      frontmatter.slug.startsWith("/reports") &&
      frontmatter.slug !== "/reports"
    ) {
      acc.push(frontmatter);
    }
    return acc;
  }, []);

  return (
    <Root>
      <table>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>日付</th>
            <th>寄稿者</th>
            <th>リンク</th>
          </tr>
        </thead>
        <tbody>
          {reportsList.map((item) => (
            <tr key={item.slug}>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.author}</td>
              <td>
                <Link to={item.slug} primary>
                  詳細
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Root>
  );
}

export const ToReportsIndexLink = () => {
  return (
    <ToReportIndexRoot>
      <Link to="/reports" primary>
        レポート一覧に戻る
      </Link>
    </ToReportIndexRoot>
  );
};
