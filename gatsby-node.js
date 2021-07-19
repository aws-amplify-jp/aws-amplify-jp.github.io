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
  //
  // Create nodes for all of the contributors
  //
  const owner = "aws-amplify-jp";
  const repositoryList = [
    "aws-amplify-jp.github.io",
    "awesome-aws-amplify-ja",
  ];

  for (const repo of repositoryList) {
    const contributors = await fetchContributors(owner, repo);
    contributors.forEach(contributor => {
      const {login, avatar_url, html_url} = contributor;
      const repository = `${owner}/${repo}`;
      actions.createNode({
        contributeTo: repository,
        name: login,
        avatar: avatar_url,
        url: html_url,
        id: createNodeId(`Contributor-${repository}-${login}`),
        internal: {
          type: "Contributor",
          contentDigest: createContentDigest(contributor),
        },
      })
    })
  }
}