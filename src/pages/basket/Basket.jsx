import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import "./basket.css";
import NewProducts from "../../components/newProducts/NewProducts";
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
                            <div className="product-card" key={item.id}>
                            <img src={item.image} alt="" />
                            <div className="product-info">
                                <p className="product-name">{item.name}</p>
                                <p className="product-description">{item.description}</p>
                            </div>
                            <div className="product-card-bottom">
                                <p className="product-price">от {item.price} ₽</p>
                                <button className="add-to-basket-button">Добавить в корзину</button>
                            </div>
                        </div>
                        ))
                    }
                </div>
                <div className="offer-container">
                    <h2>Также можем предложить</h2>
                    <NewProducts />
                </div>
            </main>
            <Footer />
        </div>
    )
}