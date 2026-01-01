// Remove emotion server-side injected styles after React hydration
exports.onInitialClientRender = () => {
  // No cleanup needed for Emotion - it handles hydration automatically
};
