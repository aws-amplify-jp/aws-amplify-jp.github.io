const React = require("react");
const { ServerStyleSheets } = require("@material-ui/styles");

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
