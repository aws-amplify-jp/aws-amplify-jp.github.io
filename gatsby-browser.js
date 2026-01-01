exports.onInitialClientRender = () => {
  const jssStyles = document.getElementById("jss-server-side");
  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles);
  }
};
