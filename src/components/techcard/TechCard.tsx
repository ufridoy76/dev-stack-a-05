
import type { ITechnology } from '../../types/technology';


const TechCard = ({technology} : {technology : ITechnology}) => {
    console.log(technology);
    const {name, badge, category, description, difficulty, icon, rating} = technology
    
    return (
        
<div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl">

  {/* Top */}
  <div className="flex items-start justify-between">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 p-3 shadow-sm">
      <img
        className="h-full w-full object-contain"
        src={icon}
        alt={name}
      />
    </div>

    <span className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
      {badge}
    </span>
  </div>

  {/* Content */}
  <div className="mt-5">
    <h1 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-violet-600">
      {name}
    </h1>

    <p className="mt-2 min-h-14 text-sm leading-6 text-gray-500">
      {description}
    </p>
  </div>

  {/* Divider */}
  <div className="my-5 h-px bg-gray-100"></div>

  {/* Info */}
  <div className="flex items-center justify-between gap-3">

    <span className="rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">
      {category}
    </span>

    <span className="text-sm font-medium text-gray-500">
      {difficulty}
    </span>

    <span className="flex items-center gap-1 text-sm font-bold text-gray-800">
      ⭐ {rating}
    </span>

  </div>

  {/* Button */}
  <button className="mt-6 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-violet-500 hover:shadow-lg">
    Add to Stack
  </button>

</div>

    )};

export default TechCard;