import { type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/technology";
import SelectedTechCard from "./SelectedTechCard";
import { Bounce, toast } from "react-toastify";

const SelectedTechs = ({
  selectedStack,
  setSelectedStack,
}: {
  stackCount: number;
  setStackCount: Dispatch<SetStateAction<number>>;
  selectedStack: ITechnology[];
  setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>;
}) => {
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.success("All technologies removed successfully!", {
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
    <div className="col-span-1 ">
      <div className="border border-gray-100 h-auto rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Your Stack</h1>

        <div className="text-gray-600 mb-4">
          {selectedStack.length === 0 ? (
            <p>No technologies selected yet.</p>
          ) : (
            <p>{selectedStack.length} Technology Selected</p>
          )}
        </div>

        <div className="border border-dashed border-gray-400 rounded-xl p-6 text-center space-y-4">
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
        {/* Only ONE Remove All button */}
        {selectedStack.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="mt-4 w-full rounded-xl bg-red-500 py-2 font-semibold text-white hover:bg-red-600"
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
};
export default SelectedTechs;
