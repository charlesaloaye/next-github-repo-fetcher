import Repos from "@/components/Repos";

async function fetchRepos() {
  const apiUrl = "https://api.github.com/users/charlesaloaye/repos";
  const response = await fetch(apiUrl, {
    next: {
      revalidate: 60,
    },
  });
  const repos = await response.json();

  return repos;
}

const RepoPage = async () => {
  await new Promise((resolve) => setTimeout(resolve), 1000);

  const repos = await fetchRepos();

  return (
    <>
      <Repos repos={repos} />
    </>
  );
};

export default RepoPage;
