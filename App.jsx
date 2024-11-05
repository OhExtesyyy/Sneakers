import Header from "./src/project/Header/header"
import { Slider } from "./src/project/Slider/Slider"
import { Sneakers } from "./src/project/SneakesCards/Sneakers"
import { ModalBasket } from "./src/project/ModalBasket/ModalBasket"

export const App = () => {
    return (
        <>
            <div className="wrapper">
                <ModalBasket />
                <Header />
                <Slider />
                <Sneakers />
            </div>

        </>
    )
}