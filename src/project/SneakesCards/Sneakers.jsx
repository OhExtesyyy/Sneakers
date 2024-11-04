import "../../index.css"
import { Sneaker } from "./Sneaker/Sneaker"
import { InfoSneakers } from "./InfoSneakers/InfoSneakers"


export const Sneakers = () => {
    return (
        <>
            <section>
                <InfoSneakers />
                <Sneaker />
            </section>
        </>
    )
}