const { Octokit } = require("@octokit/core");

const fetchContributors = async (owner, repo) => {
  const octokit = new Octokit();
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
    owner,
    repo
  });
  return data;
};

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const contributors = await fetchContributors('aws-amplify-jp', 'aws-amplify-jp.github.io');

  contributors.forEach(contributor => {
    const {login, avatar_url, html_url} = contributor;
    actions.createNode({
      login,
      avatar_url,
      html_url,
      id: createNodeId(`Contributor-${login}`),
      internal: {
        type: "Contributor",
        contentDigest: createContentDigest(contributor),
      },
    })
  })
}