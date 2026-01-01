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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-8HMK0M9FE8`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amplify 日本ユーザーグループ (Amplify Japan User Group) `,
        short_name: `Amplify 日本ユーザーグループ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff9900`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
      },
    },

  ],
};
