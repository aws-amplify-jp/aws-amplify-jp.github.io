const React = require("react");
const { ServerStyleSheets } = require("@material-ui/styles");

// Using replaceRenderer (legacy API) for Material-UI v4 JSS SSR support.
// This is the recommended approach for Material-UI v4 with JSS in Gatsby v4.
// For Material-UI v5+, migrate to wrapRootElement with Emotion instead.
exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheets = new ServerStyleSheets();
  const bodyHTML = require("react-dom/server").renderToString(
    sheets.collect(bodyComponent)
  );

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{ __html: sheets.toString() }}
    />,
  ]);
};
