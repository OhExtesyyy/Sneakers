import Header from "./src/project/Header/header"
import { Slider } from "./src/project/Slider/Slider"
import { Sneakers } from "./src/project/SneakesCards/Sneakers"

export const App = () => {
    return (
        <>
        <div className="wrapper">
            <Header />
            <Slider />
            <Sneakers />
        </div>
        
        </>
    )
}