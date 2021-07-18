module.exports = {
  siteMetadata: {
    title: `Amplify Japan User Group`,
    siteUrl: `https://aws-amplify-jp.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/contents`,
        ignore: [
          `src/contents/external/mapping.json`,
          `src/contents/external/.gitkeep`,
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sitemap`
  ],
};
