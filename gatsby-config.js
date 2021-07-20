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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-component`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-8HMK0M9FE8`,
      },
    },
  ],
};
