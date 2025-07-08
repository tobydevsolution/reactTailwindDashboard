// src/components/SearchInput.jsx
import React from "react"; // Ensure React is imported if using JSX
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = () => {
  return (
    // Removed mx-auto and max-w-full from the parent div.
    // Added w-full to ensure the parent div always takes the full width available.
    // Adjusted mt-10 to mt-0 or a smaller value if it's causing too much space.
    // Added py-2 to the input for better vertical padding.
    <div className="relative w-full">
      {" "}
      {/* Ensure this container takes full width */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-3xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Search your content"
      />
    </div>
  );
};

export default SearchInput;
