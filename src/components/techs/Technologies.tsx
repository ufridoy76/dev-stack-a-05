import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/technology";
import SelectedTechs from "./SelectedTechs";
import AllTechs from "./AllTechs";

const Technologies = ({
  technologiesPromise,
  stackCount,
  setStackCount,
}: {
  technologiesPromise: Promise<ITechnology[]>;
  stackCount: number;
  setStackCount: Dispatch<SetStateAction<number>>;
}) => {
  const technologies = use(technologiesPromise);
  // const [stackCount, setStackCount] = useState(0);
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          Explore{" "}
          <span className="bg-linear-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="mt-2 text-gray-600">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Technologies */}
        <AllTechs
          technologies={technologies}
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
          stackCount={stackCount}
          setStackCount={setStackCount}
        ></AllTechs>

        {/* Stack */}
        <SelectedTechs
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
          stackCount={stackCount}
          setStackCount={setStackCount}
        ></SelectedTechs>
      </div>
    </div>
  );
};

export default Technologies;
