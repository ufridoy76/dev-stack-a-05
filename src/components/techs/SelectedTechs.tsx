import { type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/technology";
import SelectedTechCard from "./SelectedTechCard";

const SelectedTechs = ({
  selectedStack,
  setSelectedStack,
}: {
  stackCount: number;
  setStackCount: Dispatch<SetStateAction<number>>;
  selectedStack: ITechnology[];
  setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>;
}) => {
  console.log(setSelectedStack);
  return (
    <div className="col-span-1 h-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Your Stack</h1>

      <p className="text-gray-600 mb-4">
        {selectedStack.length} technologies selected.
      </p>

      <div className="border border-dashed border-gray-400 rounded-xl p-6 text-center">
        {selectedStack.length === 0 ? (
          <p>Your stack is empty.</p>
        ) : (
          selectedStack.map((tech) => (
            <SelectedTechCard
              key={tech.id}
              tech={tech}
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            />
          ))
        )}
      </div>

      {}
    </div>
  );
};
export default SelectedTechs;
