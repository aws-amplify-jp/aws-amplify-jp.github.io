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
  const owner = "aws-amplify-jp";
  const repo = "aws-amplify-jp.github.io";
  const contributors = await fetchContributors(owner, repo);

  contributors.forEach(contributor => {
    const {login, avatar_url, html_url} = contributor;
    actions.createNode({
      contributeTo: `${owner}/${repo}`,
      name: login,
      avatar: avatar_url,
      url: html_url,
      id: createNodeId(`Contributor-${login}`),
      internal: {
        type: "Contributor",
        contentDigest: createContentDigest(contributor),
      },
    })
  })
}