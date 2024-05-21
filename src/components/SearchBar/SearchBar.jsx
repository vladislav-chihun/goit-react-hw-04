import React, { useState } from "react";
import toast,{Toaster} from "react-hot-toast";
export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  toast.error()
  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (event === "") {
       toast.error("Field is empty");
      return;
    }
    
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
}
