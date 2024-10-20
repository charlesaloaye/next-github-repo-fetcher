import {
  FaStar,
  FaCodeBranch,
  FaCode,
  FaEye,
  FaCheckCircle,
  FaHome,
} from "react-icons/fa";
import Link from "next/link";
// import RepoDirs from "./RepoDirs";

async function fetchRepo(name) {
  const apiUrl = `https://api.github.com/repos/charlesaloaye/${name}`;
  const response = await fetch(apiUrl, {
    next: {
      revalidate: 60,
    },
  });
  const repo = await response.json();

  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/code/repos"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Repos
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">
                  <FaStar
                    fontSize={15}
                    className="inline text-yellow-500 mt-0 mr-1"
                  />
                  {repo.stargazers_count}
                  &nbsp; &nbsp;
                  <FaCodeBranch
                    fontSize={15}
                    className="inline text-gray-500 mt-0 mr-1"
                  />
                  {repo.forks_count}
                  &nbsp; &nbsp;
                  <FaEye
                    fontSize={15}
                    className="inline text-indigo-500 mt-0 mr-1"
                  />
                  {repo.watchers_count}
                </div>
                <h1 className="text-3xl font-bold mb-4">{repo.name}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p className="text-orange-700">
                    {repo.license?.name ? (
                      <FaCheckCircle
                        fontSize={15}
                        className="inline text-blue-500 mt-0 mr-1"
                      />
                    ) : (
                      "N/A"
                    )}
                    {repo.license?.name}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Repos Description
                </h3>

                <p className="mb-4">{repo.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Language
                </h3>

                <p className="mb-4">
                  {repo.language ? (
                    <FaCode
                      fontSize={15}
                      className="inline text-gray-500 mt-0 mr-1"
                    />
                  ) : (
                    "N/A"
                  )}
                  {repo.language}
                </p>
              </div>
            </main>
            {/* <RepoDirs name={name} /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Repo;
