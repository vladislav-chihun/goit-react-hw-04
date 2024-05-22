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
  function handleSearch(query) {
    setQuery(query)

  }
  useEffect(() => {
    const fetchImages = async () => {
      if (query) {
        setIsLoading(true);
        try {
          const data = await apiFoo(query);
          const imageData = data.results.map((image) => ({
            smallImg: image.urls.small,
            regularImg: image.urls.regular,
          }));
          setImages(imageData);
        } catch (error) {
          console.error(error);
          setImages([]);
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    fetchImages();
  }, [query]);
  if (images.length === 0) {
    return null;
  }
  return (<>
    <SearchBar onSubmit={handleSearch} />
    {isLoading && <Loader />}
    {!isLoading && <ImageGallery images={images} />}
  </>)
}

export default App
