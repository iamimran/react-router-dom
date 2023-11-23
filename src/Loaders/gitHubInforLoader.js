export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/iamimran");
  return response.json();
};
