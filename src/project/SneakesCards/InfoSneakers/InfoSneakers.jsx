import css from "./InfoSneakers.module.css"
import search from "../../../assets/img/search.svg"

export const InfoSneakers = () => {
    return (
        <div className={css.info}>
            <h1>Все кроссовки  </h1>
            <div className={css.searchBlock}>
                <img src={search} alt="search" />
                <input placeholder="Поиск..." type="text" />
            </div>
        </div>
    )
}