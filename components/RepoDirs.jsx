async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // fetch the contents of the repository
  const res = await fetch(
    `https://api.github.com/repos/charlesaloaye/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  // parse the response as JSON
  const content = await res.json();
  // filter out directories
  return content;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);

  const dirs = Object.keys(contents).filter((key) => contents[key].isDir);

  return (
    <>
      {dirs.map((dir) => {
        <div key={dir.path}>{dir.path}</div>;
      })}
    </>
  );
};

export default RepoDirs;
