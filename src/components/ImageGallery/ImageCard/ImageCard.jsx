import css from "./ImageCard.module.css"
export default function ImageCard({ smallImg }) {
  return (
    <div >
      <img src={smallImg} className={css.imgCard}  />
    </div>
  );
}
