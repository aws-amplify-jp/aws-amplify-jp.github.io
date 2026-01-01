import { Box } from "@mui/material";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Link from "../Link";

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
    <Box sx={{ position: "relative" }}>
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
    </Box>
  );
}

export const ToReportsIndexLink = () => {
  return (
    <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
      <Link to="/reports" primary>
        レポート一覧に戻る
      </Link>
    </Box>
  );
};
