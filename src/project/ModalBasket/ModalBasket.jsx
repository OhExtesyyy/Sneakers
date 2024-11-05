import css from "./ModalBasket.module.css"
import arrow from "../assets/img/arrow.svg"
import { ModalItems } from "./ModalItems/ModalItems"
import krest from "../assets/img/krest.svg"


export const ModalBasket = () => {

    return (
        <div style={{display: "none"}} className={css.overlay}>
            <div className={css.modal}>
                <h2>Корзина
                    <img className={css.remove} src={krest} alt="remove" />
                </h2>

                <ModalItems />

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