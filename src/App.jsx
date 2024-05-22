import { apiFoo } from "./api";
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from "./components/Loader/Loader"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { useEffect } from "react";
function App() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState([]);
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(1)
  function handleSearch(query) {
    setQuery(query)
    setPage(1)
    setImages([])
  }
 
  useEffect(() => {
    const fetchImages = async () => {
      if (query === "") {
        return
        
      }
        try {
          setIsError(false);
          setIsLoading(true);
          const data = await apiFoo(query, page);
           const imageData = data.results.map((image) => ({
          smallImg: image.urls.small,
          regularImg: image.urls.regular,
           }));
          
          setImages(prevData => [...prevData, ...imageData]);
        } catch (error) {
          console.error(error);
          setIsError(true)
        } finally {
          setIsLoading(false);
          
        }
      
    };
    
    fetchImages();
  }, [query, page]);
  
   const handleLoadMore = (event) => {
    setPage(page + 1)
    event.preventDefault();
   }
  
  return (<>
    <SearchBar onSubmit={handleSearch} />
    {isError && <p>Error occurred while fetching images.</p>}
    {isLoading && <Loader />}
    {!isLoading && <ImageGallery images={images} />}
    {!isLoading && images.length > 0 && !isError && <LoadMoreBtn onClick={handleLoadMore} />}
  </>)
}

export default App
