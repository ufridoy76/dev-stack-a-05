import { type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/technology";
import { Bounce, toast } from "react-toastify";
import { TbXboxXFilled } from "react-icons/tb";

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
    const ifExist = selectedStack.some((stack) => stack.id === tech.id);
    if (!ifExist) {
      toast.error("Stack Failed to Remove!", {
        position: "bottom-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    const restStack = selectedStack.filter((stack) => stack.name !== tech.name);

    setSelectedStack(restStack);
    toast.success("Stack Successfully Removed!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="flex justify-between items-center border rounded-xl p-3">
      <div className="flex  gap-4">
        <img className="w-10" src={icon} alt="" />
        <div>
          <h2>{name}</h2>
          <p>{category}</p>
        </div>
      </div>
      <span onClick={handleRemoveStack} className="text-3xl text-red-600 rounded-ful">
        <TbXboxXFilled />
      </span>
    </div>
  );
};

export default SelectedTechCard;
