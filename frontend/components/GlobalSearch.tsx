import React, { useState } from "react";

const GlobalSearch: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // Implement autosuggest or search logic here
  };

  return (
    <input
      type="search"
      value={query}
      onChange={handleSearch}
      placeholder="Search..."
      className="border rounded px-3 py-1 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700"
      aria-label="Global Search"
    />
  );
};

export default GlobalSearch;
