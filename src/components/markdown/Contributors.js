import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { styled } from "@mui/material/styles";
import { Avatar, Tooltip, Link } from "@mui/material";

const List = styled('ul')(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${theme.spacing(7)}, 1fr))`,
  gap: theme.spacing(1),
  listStyle: "none",
  padding: 0,
  margin: 0,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

export default function Contributors() {
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
      <List>
        {repositoryList[repository].map(({ name, avatar, url }) => (
          <Tooltip title={name} arrow key={name}>
            <li>
              <Link href={url}>
                <StyledAvatar alt={name} src={avatar} />
              </Link>
            </li>
          </Tooltip>
        ))}
      </List>
    </div>
  ));
}
