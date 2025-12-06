import { useState } from "react";

export default function LocationFilter({ onFilterChange }) {
  const [selectedLocations, setSelectedLocations] = useState([]);

  const locations = [
    "PRICES",
    "CITY",
    "DURATION",
    "TRANSPORT",
    "ALL EXLUSIVE HOTEL",
    "TOURS",
    "RESTAURANTS",
    "NORTH",
    "SOUTH",
  ];

const filters = ["PRICES", "CITY", "DURATION", "TRANSPORT"];

const categories = ["TOURS", "RESTAURANTS", "ALL EXCLUSIVE HOTEL"];



  const handleLocationChange = (location) => {
    const updated = selectedLocations.includes(location)
      ? selectedLocations.filter((item) => item !== location)
      : [...selectedLocations, location];

    setSelectedLocations(updated);
    if (onFilterChange) onFilterChange(updated);
  };

  return (
    <div className="">
      <div className="bg-white rounded-lg lg:p-6 lg:px-12 p-2">
        <h2 className="text-lg font-bold tracking-wide mb-6">FILTERS</h2>

        <div>
          <div className="flex lg:flex-col flex-row flex-wrap lg:space-y-3">
            {filters.map((location) => (
              <label
                key={location}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleLocationChange(location)}
                  className="lg:w-4 lg:h-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                />
                <span className="lg:ml-3 mx-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {location}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        <h2 className="text-lg font-bold tracking-wide my-6">CATEGORIES</h2>

        <div>

          <div className="flex lg:flex-col flex-row flex-wrap lg:space-y-3">
            {categories.map((location) => (
              <label
                key={location}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleLocationChange(location)}
                  className="lg:w-4 lg:h-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                />
                <span className="lg:ml-3 mx-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {location}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
