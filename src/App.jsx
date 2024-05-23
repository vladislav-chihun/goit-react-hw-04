import appCss from "./App.module.css";
import { apiFoo } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPage, setTotalPage] = useState(false);

  function handleSearch(query) {
    setQuery(query);
    setPage(1);
    setImages([]);
  }

  useEffect(() => {
    if (query.trim() === "") {
        return;
    }
    const fetchImages = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await apiFoo(query, page);
        const imageData = data.results.map((image) => ({
          smallImg: image.urls.small,
          regularImg: image.urls.regular,
        }));
        setImages((prevData) => [...prevData, ...imageData]);
        setTotalPage( data.total_pages !== page)
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (largeImg) => {
    setSelectedImage(largeImg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {images.length === 0 && query !== "" && !isError && !isLoading && <p className={appCss.noImgFound}>No Images Found</p>}
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
      {!isLoading && images.length > 0 && !isError && totalPage && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal isOpen={isModalOpen} onRequestClose={handleCloseModal} largeImg={selectedImage} />
    </div>
  );
}

export default App;
