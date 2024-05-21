import axios from "axios";
import { apiFoo } from "../../api"; 
import { useState } from "react";
import { useEffect } from "react";
import ImageCard from "./ImageCard/ImageCard";
export default function ImageGallery({ query }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages =  async (query) => {
      if (query) {
        try {
          const response = await axios.get(apiFoo(query));
          const imageData = response.data.map((image) => ({
            smallImg: image.urls.small,
            regularImg: image.urls.regular,
          }));
          setImages(imageData);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchImages();
  }, [query]);

  return (
    <div>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <div>
              <img src={image.smallImg} alt="" />
            </div>
            <ImageCard regularImg={image.regularImg}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
