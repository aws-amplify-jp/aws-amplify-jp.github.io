const createCache = require("@emotion/cache").default;

function createEmotionCache() {
  return createCache({ key: "css" });
}

module.exports = createEmotionCache;
