import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../../types/technology";
import TechCard from "./TechCard";

const AllTechs = ({
  technologies,
  selectedStack,
  setSelectedStack,
}: {
  technologies: ITechnology[];
  selectedStack: ITechnology[];
  setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>;
  stackCount: number;
  setStackCount: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((technology) => (
        <TechCard
          key={technology.id}
          technology={technology}
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
        ></TechCard>
      ))}
    </div>
  );
};

export default AllTechs;
