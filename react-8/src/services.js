export const getRepositories = async ({ username }) => {
  const data = await fetch(`https://api.github.com/users/${username}/repos`);
  const repositories = await data.json();

  return repositories;
};
