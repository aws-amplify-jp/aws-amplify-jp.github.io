import { makeStyles } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Link from '../Link'

const useStyles = makeStyles((_) => ({
  root: {
    position: 'relative',
  },
  toReportIndexRoot: {
    marginTop: '50px',
    marginBottom: '50px',
  }
}))

export default function ReportsIndex() {
  const classes = useStyles();
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
    const { frontmatter } = node
    if (frontmatter.slug.startsWith('/reports') && frontmatter.slug !== '/reports') {
      acc.push(frontmatter)
    }
    return acc
  }, [])

  return (
    <div className={classes.root}>
      <table>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>日付</th>
            <th>寄稿者</th>
            <th>詳細リンク</th>
          </tr>
        </thead>
        <tbody>
          {reportsList.map((item) => (
            <tr key={item.slug}>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.author}</td>
                <td><Link to={item.slug} primary>詳細</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const ToReportsIndexLink = () => {
  const classes = useStyles();

  return (
    <div className={classes.toReportIndexRoot}>
      <Link to="/reports" primary>レポート一覧に戻る</Link>
    </div>
  )
}