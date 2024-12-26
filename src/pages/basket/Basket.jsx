import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import "./basket.css";
import { useEffect, useState } from "react";

export default function Basket(){
    const basket = useSelector(state => state.basket);
    const [ check, setCheck ] = useState(false);

    useEffect(() => {
        if(basket.length) setCheck(true);
    }, [])

    return (
        <div className="App">
            <Header />
            <main className="basket-main">
                {!check && <h2>Ваша корзина пуста</h2>}
                <div className="basket-products-container">
                    {
                        check && basket.map(item => (
                            <div className="basket-card" key={item.id}>
                            <img src={item.image} alt="" />
                            <div className="basket-card-info">
                                <p className="basket-card-name">{item.name}</p>
                                <p className="basket-card-description">{item.description}</p>
                            </div>
                            <p className="basket-card-price">{item.price} ₽</p>
                            <div className="basket-card-quantity-parent">
                                <div className="basket-card-quantity">
                                    <button style={{borderRadius: "8px 0px 0px 8px"}}>-</button>
                                    <p>1</p>
                                    <button style={{borderRadius: "0px 8px 8px 0px"}}>+</button>
                                </div>
                            </div>
                            <img src="./images/deleteCross.svg" alt="" className="deleteCross" />
                        </div>
                        ))
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}