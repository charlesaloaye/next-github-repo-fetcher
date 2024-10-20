import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";
import { Suspense } from "react";

const page = async ({ params: { name } }) => {
  return (
    <>
      <Suspense fallback={<div>Loading Repository...</div>}>
        <Repo name={name} key={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </>
  );
};

export default page;
