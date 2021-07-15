module.exports = {
  ci: {
    collect: {
      // collect options here
      staticDistDir: "./public"
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", {minScore: 1}]
      }
    },
  },
};
