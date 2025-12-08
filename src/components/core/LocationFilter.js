import { useState } from "react";

export default function LocationFilter({ onFilterChange }) {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);


  const cities = ["TIRANA", "SHKODER", "BERAT", "SARANDA"];

  const categories = ["TOURS", "RESTAURANTS", "HOTEL"];


  const handleCityChange  = (city) => {
    const updated = selectedCities.includes(city)
      ? selectedCities.filter((c) => c !== city)
      : [...selectedCities, city];

    setSelectedCities(updated);

    if (onFilterChange)
      onFilterChange({
        city: updated,
        category: selectedCategories,
      });
  };

    const handleCategoryChange = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updated);

    if (onFilterChange)
      onFilterChange({
        city: selectedCities,
        category: updated,
      });
  };

  return (
    <div className="">
      <div className="bg-white rounded-lg lg:p-6 lg:px-12 p-2">
        <h2 className="text-lg font-bold tracking-wide mb-6">CITIES</h2>

        <div>
          <div className="flex lg:flex-col flex-row flex-wrap lg:space-y-3">
            {cities.map((location) => (
              <label
                key={location}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedCities.includes(location)}
                  onChange={() => handleCityChange (location)}
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
                  checked={selectedCategories.includes(location)}
                  onChange={() => handleCategoryChange(location)}
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
