const { GitHubClient } = require("./src/utils/github");
const fs = require("fs");
const path = require("path");

const inJapan = (username, users) => {
  const user = users[username];
  return (
    user && (/(Japan|Tokyo|hyogo|日本)/i.test(user.location) || user.japan)
  );
};

const repositories = [
  {
    owner: "aws-amplify-jp",
    repos: ["aws-amplify-jp.github.io", "awesome-aws-amplify-ja"],
  },
  {
    owner: "aws-amplify",
    repos: [
      "amplify-js",
      "amplify-cli",
      "docs",
      "amplify-ios",
      "amplify-android",
      "amplify-flutter",
      "amplify-ui",
      "maplibre-gl-js-amplify",
    ],
    filter: inJapan,
  },
];

async function fetchUsers(client, contributors, users) {
  for (const contributor of contributors) {
    const { login } = contributor;
    if (Object.prototype.hasOwnProperty.call(users, login)) {
      continue;
    }
    const user = await client.fetchUser(login);
    if (!user) {
      continue;
    }
    users[login] = {
      login,
      location: user.location,
    };
  }
}

async function fetchContributors() {
  const usersJsonPath = path.join(
    __dirname,
    "./src/contents/contributors/users.json"
  );
  const users = fs.existsSync(usersJsonPath)
    ? JSON.parse(fs.readFileSync(usersJsonPath, { encoding: "utf8" }))
    : {};

  const contributorList = [];
  const client = new GitHubClient({ auth: process.env.GITHUB_TOKEN });
  for (const { owner, repos, filter } of repositories) {
    for (const repo of repos) {
      const contributors = await client.fetchContributors(owner, repo);
      await fetchUsers(client, contributors, users);
      contributorList.push(
        ...contributors
          .filter(({ login }) =>
            typeof filter === "function" ? filter(login, users) : true
          )
          .map((contributor) => ({
            owner,
            repo,
            contributor,
          }))
      );
    }
  }

  await fs.promises.writeFile(usersJsonPath, JSON.stringify(users, null, 2));

  return contributorList;
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  //
  // Create nodes for all of the contributors
  //
  const contributors = await fetchContributors();
  contributors.forEach(({ owner, repo, contributor }) => {
    const { login, avatar_url, html_url } = contributor;
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
    });
  });
};
