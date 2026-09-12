import { type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/technology";
import { MdDelete } from "react-icons/md";

const SelectedTechCard = ({
  tech,
  selectedStack,
  setSelectedStack,
}: {
  tech: ITechnology;
  selectedStack: ITechnology[];
  setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>;
}) => {
  const { icon, name, category } = tech;

  const handleRemoveStack = () => {
    const restStack = selectedStack.filter((stack) => stack.name !== tech.name);

    setSelectedStack(restStack);
  };

  return (
    <div className="flex justify-between h-20 items-center border rounded-xl p-3">
      <div className="flex  gap-4">
        <img className="w-10" src={icon} alt="" />
        <div>
          <h2>{name}</h2>
          <p>{category}</p>
        </div>
      </div>
      <span onClick={handleRemoveStack}>
        <MdDelete />
      </span>
    </div>
  );
};

export default SelectedTechCard;
