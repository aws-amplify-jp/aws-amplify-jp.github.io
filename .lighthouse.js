module.exports = {
  ci: {
    collect: {
      // collect options here
      staticDistDir: "./public",
      // Exclude internal Gatsby files from lighthouse testing
      url: [
        "http://localhost/index.html",
        "http://localhost/404.html"
      ]
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", {minScore: 0.9}]
      }
    },
  },
};
