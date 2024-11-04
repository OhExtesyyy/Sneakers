import css from "./ModalBasket.module.css"
import s1 from "../../assets/img/Sneakers/s1.jpg"
import krest from "../../assets/img/krest.svg"
import arrow from "../../assets/img/arrow.svg"


export const ModalBasket = () => {

    return (
        <div style={{
            display: "none"
        }} className={css.overlay}>
            <div className={css.modal}>
                <h2>Корзина
                    <img className={css.remove} src={krest} alt="remove" />
                </h2>

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

                <div className={css.cartTotalBlock}>

                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className={css.greenButton}>Оформить заказ <img src={arrow} alt="arrow" /></button>
                </div>
            </div>
        </div>
    )


}