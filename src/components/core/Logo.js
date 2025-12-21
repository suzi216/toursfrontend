import { GiMountainRoad } from "react-icons/gi";
import Link from "next/link";


const DiscoverAlbaniaLogo = () => {
  return (
    <Link href="/" passHref>
      <div className="flex items-between gap-3 mt-2">


        <div className="relative w-12 h-12  lg:w-12 lg:h-12 xl:w-16 xl:h-16 mt-2">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center shadow-lg">
            <GiMountainRoad className="text-white" size={25} strokeWidth={2.5} />
          </div>

          <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-800 rounded-full border-2 border-white"></div>
        </div>

        <div className="flex flex-col lg:text-18 xl:text-25 xl:mt-1 lg:mt-2 mt-2">
          <span className="font-bold text-gray-700 leading-tight tracking-tight">
            DISCOVER
          </span>
          <span className="font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent leading-tight tracking-tight">
            ALBANIA
          </span>
        </div>
      </div>
    </Link>

  );
};

export default DiscoverAlbaniaLogo;
