import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.query.value.trim();
    if (!inputValue) {
      toast.error("Field is empty", {
         position: 'top-right',
      });
      return;
    }
    onSubmit(inputValue);
    event.target.query.value = ""; 
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.formInput}
        />
        <button type="submit" className={css.formBtn}>Search</button>
        <Toaster />
      </form>
    </header>
  );
}
