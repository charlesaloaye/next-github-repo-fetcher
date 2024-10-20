import Link from "next/link";
const About = () => {
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          About GitHub Repository Viewer
        </h1>

        <p className="mb-4">
          The GitHub Repository Viewer is a web application built using Next.js
          and Tailwind CSS, designed to provide users with an intuitive
          interface to search for GitHub repositories and view their statistics.
          Whether you are a developer looking to explore libraries, a researcher
          examining trends in open source, or someone curious about a specific
          project, this tool aims to simplify your search experience.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            View a summary of each repository, including the name, description,
            and owner.
          </li>
          <li>
            Access detailed statistics: stars, forks, open issues, contributors,
            and last updated date.
          </li>
          <li>
            Responsive design optimized for both mobile and desktop devices.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
        <p className="mb-4">
          This project utilizes the following technologies:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Next.js</strong>: For building server-side rendered
            applications and improving SEO.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: For creating responsive and modern
            user interfaces using utility-first styles.
          </li>
          <li>
            <strong>GitHub API</strong>: To fetch repository data directly from
            GitHub.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
        <p className="mb-4">
          To get started with the GitHub Repository Viewer, clone the repository
          from GitHub and follow the instructions in the README file. You will
          need to install Node.js and dependencies to run the application
          locally.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contributing</h2>
        <p className="mb-4">
          Contributions are welcome! If you find a bug or have suggestions for
          improvement, feel free to open an issue or submit a pull request on
          the GitHub repository.
        </p>

        <h2 className="text-2xl font-semibold mb-2">License</h2>
        <p className="mb-4">
          This project is licensed under the MIT License. See the{" "}
          <a href="/license" className="text-blue-600 underline">
            LICENSE
          </a>{" "}
          file for more details.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>
          For any inquiries or feedback, you can reach out via email at{" "}
          <a
            href="mailto:your_email@example.com"
            className="text-blue-600 underline"
          >
            charlestechy0@gmail.com
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default About;
