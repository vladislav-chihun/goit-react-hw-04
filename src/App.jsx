import { apiFoo } from "./api"
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery"
function App() {
  const [query, setQuery] = useState('');
  function handleSearch(query) {
    setQuery(query)
  }
  return (<>
    <SearchBar onSubmit={handleSearch} />
    <ImageGallery query={query} />
  </>)
}

export default App
