import { GiMountainRoad } from "react-icons/gi";

const DiscoverAlbaniaLogo = () => {
  return (
    <div className="flex items-between gap-3 mt-2">
      <div className="relative lg:w-16 lg:h-16 w-12 h-12 mt-2">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center shadow-lg">
          <GiMountainRoad className="text-white" size={26} strokeWidth={2.6} />
        </div>

        <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-800 rounded-full border-2 border-white"></div>
      </div>

      <div className="flex flex-col lg:text-3xl sm:text-xl mt-1">
        <span className="font-bold text-gray-700 leading-tight tracking-tight">
          DISCOVER
        </span>
        <span className="font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent leading-tight tracking-tight">
          ALBANIA
        </span>
      </div>
    </div>
  );
};

export default DiscoverAlbaniaLogo;
