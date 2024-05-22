import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleLoadMore }) { 
  return (
    <div className={css.loadMoreBtnContainer}>
      <button type="button" className={css.loadMoreBtn} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
}
