import {
  FaStar,
  FaCodeBranch,
  FaCode,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
const Repos = ({ repos }) => {
  return (
    <>
      <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
          <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {repos[0]?.owner?.login.toUpperCase()} has {repos.length} Repository
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
            {repos.map((repo, index) => {
              return (
                <>
                  <li
                    key={index}
                    className="bg-white rounded-xl shadow-md relative"
                  >
                    <div className="p-4">
                      <div className="mb-6">
                        <div className="text-gray-600 my-2">
                          <div className="mb-3">
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
                        </div>
                        <h3 className="text-xl font-bold">{repo.name}</h3>
                      </div>

                      <div className="mb-5">{repo.description}</div>

                      <h3 className="text-indigo-500 mb-2">
                        {repo.language ? (
                          <FaCode
                            fontSize={15}
                            className="inline text-gray-500 mt-0 mr-1"
                          />
                        ) : (
                          "N/A"
                        )}
                        {repo.language}
                      </h3>

                      <div className="border border-gray-100 mb-5"></div>

                      <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-blue-700 mb-3">
                          {repo.license?.name ? (
                            <FaCheckCircle
                              fontSize={15}
                              className="inline text-blue-500 mt-0 mr-1"
                            />
                          ) : (
                            "N/A"
                          )}
                          {repo.license?.name}
                        </div>
                        <Link
                          href={`/code/repos/${repo.name}`}
                          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Repos;
