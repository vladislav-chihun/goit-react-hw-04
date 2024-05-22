import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
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
