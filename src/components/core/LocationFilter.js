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

  const handleLocationChange = (location) => {
    const updated = selectedLocations.includes(location)
      ? selectedLocations.filter((item) => item !== location)
      : [...selectedLocations, location];

    setSelectedLocations(updated);
    if (onFilterChange) onFilterChange(updated);
  };

  return (
    <div className="">
      <div className="bg-white rounded-lg p-6 px-12 shadow-sm">
        <h2 className="text-lg font-bold tracking-wide mb-6">FILTERS</h2>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Location</h3>

          <div className="space-y-3">
            {locations.map((location) => (
              <label
                key={location}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleLocationChange(location)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                />
                <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">
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
