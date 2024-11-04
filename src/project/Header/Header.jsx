import css from "./Header.module.css"
import logo from "../../assets/img/logo.svg"
import basket from "../../assets/img/corz.svg"
import favorites from "../../assets/img/serds.png"
import profile from "../../assets/img/prof.svg"
import { ModalBasket } from "../ModalBasket/ModalBasket"


const Header = () => {
    return (
        
        <>  
            <ModalBasket/>
            <header className={css.header}>
                <div className={css.leftHeader}>
                    <img width={40} height={40} src={logo} alt="" />
                    <div>
                        <h2>REACT SNEAKERS</h2>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className={css.rightHeader}>
                    <li>
                        <img width={18} height={18} src={basket} alt="" />
                        <p>1205 руб.</p>
                    </li>
                    <li>
                        <img width={18} height={18} src={favorites} alt="" />
                        <p>Закладки</p>
                    </li>
                    <li>
                        <img width={18} height={18} src={profile} alt="" />
                        <p>Профиль</p>
                    </li>
                </ul>
            </header>
        </>

    )


}

export default Header;