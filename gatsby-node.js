const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const inJapan = (username, users) => {
  const user = users[username];
  return (
    user && (/(Japan|Tokyo|hyogo|日本)/i.test(user.location) || user.japan)
  );
};

async function fetchJson(url) {
  console.log(`Downloading ${url}`);
  const response = await fetch(url);
  return response.json();
}

async function fetchUsers() {
  const url =
    "https://raw.githubusercontent.com/aws-amplify-jp/aws-amplify-contributors/main/assets/users.json";
  return await fetchJson(url);
}

async function fetchContributors() {
  const url =
    "https://raw.githubusercontent.com/aws-amplify-jp/aws-amplify-contributors/main/assets/contributors.json";
  return await fetchJson(url);
}

async function readUsersInJapan() {
  const usersInJapanJsonPath = path.join(
    __dirname,
    "./src/contents/contributors/users-in-japan.json"
  );
  return fs.existsSync(usersInJapanJsonPath)
    ? JSON.parse(
        await fs.promise.readFile(usersInJapanJsonPath, { encoding: "utf8" })
      )
    : [];
}

async function fetchContributorsInJapan() {
  const usersInJapan = await readUsersInJapan();
  const repositories = await fetchContributors();
  const users = await fetchUsers();
  // locationだけで日本と判断できないユーザーを明示的に日本であると補完する
  usersInJapan.forEach((userInJapan) => {
    const user = users.find((user) => user.login === userInJapan);
    if (user) {
      user.japan = true;
    }
  });

  const contributorList = [];
  for (const { owner, repo, contributors } of repositories) {
    contributorList.push(
      ...contributors
        .filter(({ login }) => owner === "aws-amplify-jp" || inJapan(login, users))
        .map((contributor) => ({
          owner,
          repo,
          contributor,
        }))
    );
  }
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
  const contributors = await fetchContributorsInJapan();
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

exports.onCreateDevServer = ({ app }) => {
  const staticDir = path.join(__dirname, "static");

  // Gatsbyの開発サーバーに静的ディレクトリを追加
  if (fs.existsSync(staticDir)) {
    const serveStatic = require("serve-static");
    app.use(serveStatic(staticDir));
    console.log(`[dev] Serving static files from ${staticDir}`);
  }
};
