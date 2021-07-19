import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Tooltip, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${theme.spacing(7)}px)`,
    gap: theme.spacing(1),
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Contributors() {
  const classes = useStyles();
  const query = useStaticQuery(graphql`
    query {
      allContributor {
        edges {
          node {
            avatar
            url
            name
          }
        }
      }
    }
  `);
  const contributors = query.allContributor.edges;

  return (
    <ul className={classes.list}>
      {contributors.map(({ node }) => (
        <Tooltip title={node.name} arrow>
          <li key={node.name}>
            <Link href={node.url}>
              <Avatar
                alt={node.name}
                src={node.avatar}
                key={node.name}
                className={classes.avatar}
              />
            </Link>
          </li>
        </Tooltip>
      ))}
    </ul>
  );
}
