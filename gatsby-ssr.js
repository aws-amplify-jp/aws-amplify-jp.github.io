const React = require("react");
const { CacheProvider } = require("@emotion/react");
const { renderToString } = require("react-dom/server");
const createEmotionServer = require("@emotion/server/create-instance").default;
const createEmotionCache = require("./src/createEmotionCache");

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  const bodyHTML = renderToString(
    <CacheProvider value={cache}>{bodyComponent}</CacheProvider>
  );

  const chunks = extractCriticalToChunks(bodyHTML);
  const styles = constructStyleTagsFromChunks(chunks);

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <div
      key="emotion-styles"
      dangerouslySetInnerHTML={{ __html: styles }}
    />,
  ]);
};
