import axios from "axios";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_USERNAME) {
  throw new Error("GITHUB_USERNAME is not defined");
}

const githubClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "User-Agent": "portfolio-app",
    ...(GITHUB_TOKEN && {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    }),
    Accept: "application/vnd.github+json",
  },
});

/* =======================
   PROJECTS
======================= */
export async function fetchProjects() {
  const { data } = await githubClient.get(
    `/users/${GITHUB_USERNAME}/repos`,
    {
      params: {
        sort: "updated",
        per_page: 50,
      },
    }
  );

  return data
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      topics: repo.topics || [],
      lastPushed: repo.pushed_at,
    }));
}

/* =======================
   PROFILE
======================= */
export async function fetchProfile() {
  const { data } = await githubClient.get(
    `/users/${GITHUB_USERNAME}`
  );

  return {
    username: data.login,
    name: data.name || data.login,
    bio: data.bio,
    avatar: data.avatar_url,
    location: data.location,
    blog: data.blog,
    company: data.company,
    twitter: data.twitter_username,
    followers: data.followers,
    following: data.following,
    publicRepos: data.public_repos,
    createdAt: data.created_at,
    githubUrl: data.html_url,
  };
}
