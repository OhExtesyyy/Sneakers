import "../../index.css"
import { Sneaker } from "./Sneaker/Sneaker"
import { InfoSneakers } from "./InfoSneakers/InfoSneakers"


const array = [
    {   
        image: "/src/project/assets/img/Sneakers/s1.jpg",
        name: "Мужские Кроссовки Nike Air Max 270",
        price: 15999,
    },
    {   
        image: "/src/project/assets/img/Sneakers/s2.jpg",
        name: "Кроссовки Puma X Aka Boku Future Rider",
        price: 8999,
    },
    {   
        image: "/src/project/assets/img/Sneakers/s3.jpg",
        name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
        price: 11299,
    },
    {   
        image: "/src/project/assets/img/Sneakers/s4.jpg",
        name: "Мужские Кроссовки Nike LeBron XVIII",
        price: 16499,
    },
];

export const Sneakers = () => {
    return (
        <>
            <section>
                <InfoSneakers />
            </section>

            <section>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 0 40px 0",
                }}>
                    {
                        array.map(obj => (
                            <Sneaker
                                title={obj.name}
                                price={obj.price}
                                image={obj.image}
                            />
                        ))}
                </div>
            </section >
        </>
    )
}