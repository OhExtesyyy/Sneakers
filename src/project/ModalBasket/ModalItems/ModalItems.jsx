import css from "./ModalItems.module.css"
import s1 from "../../assets/img/Sneakers/s1.jpg"
import krest from "../../assets/img/krest.svg"

export const ModalItems = () => {
    return (
        <div className={css.items}>
            <div className={css.cartItem}>
                <img width={70} height={70} src={s1} alt="Sneakers" />
                <div className={css.infoTovar}>
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <img className={css.remove} src={krest} alt="remove" />
            </div>

            <div className={css.cartItem}>
                <img width={70} height={70} src={s1} alt="Sneakers" />
                <div className={css.infoTovar}>
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <img className={css.remove} src={krest} alt="remove" />
            </div>
        </div>
    )
}