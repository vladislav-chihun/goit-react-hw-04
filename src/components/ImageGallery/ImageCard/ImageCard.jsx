import css from "./ImageCard.module.css"
export default function ImageCard({ smallImg, regularImg }) {
  return (
    <div >
      <img src={smallImg} className={css.imgCard} alt="Small version" />
    </div>
  );
}
