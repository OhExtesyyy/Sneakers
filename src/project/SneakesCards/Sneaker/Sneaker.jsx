import plus from "../../assets/img/Plus.svg"
import s1 from "../../assets/img/Sneakers/s1.jpg"
import izbr from "../../assets/img/izbr.svg"
import izbr_active from "../../assets/img/izbr-active.svg"
import btn from "../../assets/img/no-active-basket.svg"
import btn_active from "../../assets/img//active-basket.svg"
import css from "./Sneaker.module.css"


export const Sneaker = (props) => {
    return (
        
            <div className={css.card}>
                <div className={css.favorite}>
                    <img width={32} height={32} src={izbr} alt="izbr" />

                </div>
                <img width={133} height={112} src={props.image} alt="Sneakers" />
                <h5>{props.title}</h5>
                <div className={css.cardBottom}>
                    <div className={css.infoCard}>
                        <span>Цена:</span>
                        <b>{props.price}</b>
                    </div>
                    <button className={css.button}>
                        <img width={11} height={11} src={plus} alt="Plus" />
                    </button>
                </div>
            </div>
    )
}