import { use } from "react";
import type { ITechnology } from "../../types/technology";
import TechCard from "../techcard/TechCard";

const Technologies = ({
  technologiesPromise,
}: {
  technologiesPromise: Promise<ITechnology[]>;
}) => {
  const technologies = use<ITechnology[]>(technologiesPromise);
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl font-extrabold">
          Explore the{" "}
          <span className="bg-linear-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechCard key={technology.id} technology={technology} />
        ))}
      </div>
      ;
    </div>
  );
};

export default Technologies;
