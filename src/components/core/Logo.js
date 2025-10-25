import { GiMountainRoad } from "react-icons/gi";

const DiscoverAlbaniaLogo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Logo icon */}
      <div className="relative w-16 h-16">
        {/* Mountain icon with teal gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center shadow-lg">
          <GiMountainRoad className="text-white" size={26} strokeWidth={2.6} />
        </div>

        {/* Accent dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-800 rounded-full border-2 border-white"></div>
      </div>

      {/* Text section */}
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-gray-700 leading-tight tracking-tight">
          DISCOVER
        </span>
        <span className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent leading-tight tracking-tight">
          ALBANIA
        </span>
      </div>
    </div>
  );
};

export default DiscoverAlbaniaLogo;
