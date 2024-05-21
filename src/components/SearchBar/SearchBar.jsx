import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query); 
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
