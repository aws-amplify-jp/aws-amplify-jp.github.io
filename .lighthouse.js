module.exports = {
  ci: {
    collect: {
      // collect options here
      staticDistDir: "./public",
      url: [
        "http://localhost/index.html",
      ]
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", {minScore: 0.9}]
      }
    },
  },
};
