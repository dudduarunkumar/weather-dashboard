import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
