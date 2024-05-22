import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
    return (
        <p className={css.fetchError}>Error occurred while fetching images</p>
    )
}