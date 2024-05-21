
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from "./components/Loader/Loader"

function App() {
  const [query, setQuery] = useState('');
  const [isLoading,setIsLoading] = useState('false')
  function handleSearch(query) {

    setQuery(query)

  }
  return (<>
    <SearchBar onSubmit={handleSearch} />
    {isLoading && <Loader />}
    {!isLoading && <ImageGallery query={query} setIsLoading={setIsLoading}/>}
  </>)
}

export default App
