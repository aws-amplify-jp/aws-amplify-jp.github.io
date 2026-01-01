// Remove server-side injected JSS styles after React hydration
// to prevent duplicate styles and ensure proper client-side styling.
exports.onInitialClientRender = () => {
  const jssStyles = document.getElementById("jss-server-side");
  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles);
  }
};
