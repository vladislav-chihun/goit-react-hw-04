import { useState, useEffect } from "react";
import { apiFoo } from "../../api";
import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ query,}) {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const fetchImages = async () => {
      if (query) {
        try {
          const data = await apiFoo(query); 
          const imageData = data.results.map((image) => ({
            smallImg: image.urls.small,
            regularImg: image.urls.regular,
          }));
          setImages(imageData);
        } catch (error) {
          console.error(error);
        } 
      }
    };

    fetchImages();
  }, [query]);

  if (images.length === 0) {
    return null;
  }

   return (
    <div>
      <ul className={css.imgList}>
        {images.map((image, index) => (
          <li key={index}>
             <ImageCard smallImg={image.smallImg} regularImg={image.regularImg} />
          </li>
        ))}
      </ul>
    </div>
  );
}
