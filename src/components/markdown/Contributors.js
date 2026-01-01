import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Avatar, Tooltip, Link, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Contributors() {
  const theme = useTheme();
  const query = useStaticQuery(graphql`
    query {
      allContributor {
        edges {
          node {
            contributeTo
            avatar
            url
            name
          }
        }
      }
    }
  `);

  const repositoryList = query.allContributor.edges.reduce((acc, { node }) => {
    const { contributeTo } = node;
    if (!acc[contributeTo]) {
      acc[contributeTo] = [];
    }
    acc[contributeTo].push(node);
    return acc;
  }, {});

  return Object.keys(repositoryList).map((repository) => (
    <div key={repository}>
      <h3>{repository}</h3>
      <Box
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, ${theme.spacing(7)})`,
          gap: theme.spacing(1),
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {repositoryList[repository].map(({ name, avatar, url }) => (
          <Tooltip title={name} arrow key={name}>
            <li>
              <Link href={url}>
                <Avatar
                  alt={name}
                  src={avatar}
                  sx={{
                    width: theme.spacing(7),
                    height: theme.spacing(7),
                  }}
                />
              </Link>
            </li>
          </Tooltip>
        ))}
      </Box>
    </div>
  ));
}
