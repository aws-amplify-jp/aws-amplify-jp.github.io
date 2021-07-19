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
      <ul className={classes.list}>
        {repositoryList[repository].map(({ name, avatar, url }) => (
          <Tooltip title={name} arrow key={name}>
            <li>
              <Link href={url}>
                <Avatar alt={name} src={avatar} className={classes.avatar} />
              </Link>
            </li>
          </Tooltip>
        ))}
      </ul>
    </div>
  ));
}
