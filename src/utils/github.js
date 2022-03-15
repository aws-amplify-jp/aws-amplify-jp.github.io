const { Octokit } = require("@octokit/core");
const { paginateRest } = require("@octokit/plugin-paginate-rest");
const { throttling } = require("@octokit/plugin-throttling");
const MyOctokit = Octokit.plugin(throttling, paginateRest);

const createOctokit = (options = {}) => {
  const octokit = new MyOctokit({
    ...options,
    throttle: {
      onRateLimit: (retryAfter, options, octokit) => {
        octokit.log.warn(
          `Request quota exhausted for request ${options.method} ${options.url}`
        );
        if (options.request.retryCount === 0) {
          octokit.log.warn(`Retrying after ${retryAfter} seconds!`);
          return true;
        }
      },
      onSecondaryRateLimit: (retryAfter, options, octokit) => {
        octokit.log.warn(
          `SecondaryRateLimit detected for request ${options.method} ${options.url}`
        );
      },
    },
  });
  return octokit;
};

class GitHubClient {
  constructor(options = {}) {
    this.octokit = createOctokit(options);
  }

  async fetchContributors(owner, repo) {
    const containers = await this.octokit.paginate(
      "GET /repos/{owner}/{repo}/contributors",
      {
        owner,
        repo,
      }
    );
    return containers;
  }

  async fetchUser(username) {
    try {
      const { data } = await this.octokit.request("GET /users/{username}", {
        username,
      });
      return data;
    } catch (e) {
      console.warn(e);
      return null;
    }
  }
}

exports.GitHubClient = GitHubClient;
