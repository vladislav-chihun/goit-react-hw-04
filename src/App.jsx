import { apiFoo } from "./api";
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from "./components/Loader/Loader"
import { useEffect } from "react";
function App() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState([]);
  const [isError, setIsError] = useState(false)
  function handleSearch(query) {
    setQuery(query)

  }
  useEffect(() => {
    const fetchImages = async () => {
      if (query) {
        setIsLoading(true);
        try {
          setIsError(false)
          const data = await apiFoo(query);
          const imageData = data.results.map((image) => ({
            smallImg: image.urls.small,
            regularImg: image.urls.regular,
          }));
          setImages(imageData);
        } catch (error) {
          console.error(error);
          setIsError(true)
          setImages([]);
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    fetchImages();
  }, [query]);
  
  return (<>
    <SearchBar onSubmit={handleSearch} />
    {isError && <p>Error occurred while fetching images.</p>}
    {isLoading && <Loader />}
    {!isLoading && <ImageGallery images={images} />}
  </>)
}

export default App
