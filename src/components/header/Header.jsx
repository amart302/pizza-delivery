import { useSelector } from "react-redux";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RegistrationWindow from "../registrarionWindow/RegistrationWindow";

export default function Header(){
    const basketLength = useSelector(state => state.basket.length);
    const navigate = useNavigate();
    const [ form, setForm ] = useState(false);
    
    const closeForm = () => {
        setForm(false);
    };

    return(
        <>
        <header>
            <div className="header-container1">
                <div className="header-logo-container">
                    <img src="./images/logo.svg" alt="" />
                </div>
                <div className="delivery-info">
                    <div className="delivery-details">
                        <span className="delivery-title">Доставка пасты</span>
                        <span className="delivery-location">Москва</span>
                    </div>
                    <div className="delivery-container">
                        <div className="delivery-platform">
                            <img src="./images/yandexFoodIcon.svg" alt="" />
                            <span className="platform-name">Яндекс еда</span>
                            <div className="delivery-separator"></div>
                            <span className="rating">4.8</span>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 5.05469C13 4.82031 12.75 4.72656 12.5625 4.69531L8.64062 4.125L6.88281 0.570312C6.8125 0.421875 6.67969 0.25 6.5 0.25C6.32031 0.25 6.1875 0.421875 6.11719 0.570312L4.35938 4.125L0.4375 4.69531C0.242188 4.72656 0 4.82031 0 5.05469C0 5.19531 0.101563 5.32812 0.195313 5.42969L3.03906 8.19531L2.36719 12.1016C2.35938 12.1563 2.35156 12.2031 2.35156 12.2578C2.35156 12.4609 2.45313 12.6484 2.67969 12.6484C2.78906 12.6484 2.89063 12.6094 2.99219 12.5547L6.5 10.7109L10.0078 12.5547C10.1016 12.6094 10.2109 12.6484 10.3203 12.6484C10.5469 12.6484 10.6406 12.4609 10.6406 12.2578C10.6406 12.2031 10.6406 12.1563 10.6328 12.1016L9.96094 8.19531L12.7969 5.42969C12.8984 5.32812 13 5.19531 13 5.05469Z" fill="#FFC816"/>
                            </svg>
                        </div>
                        <div className="delivery-time">
                            <span className="time-label">Время доставки</span>
                            <div className="delivery-separator"></div>
                            <span className="time-value">от 32 мин</span>
                        </div>
                    </div>
                </div>
                <div className="header-call-button-container">
                    <button className="header-call-button">Заказать звонок</button>
                    <span className="header-phone-number">8 499 391-84-49</span>
                </div>
            </div>
            <div className="header-container2">
                <nav>
                    <a href="#">Пицца</a>
                    <a href="#">Паста</a>
                    <a href="#">Супы</a>
                    <a href="#">Салаты</a>
                    <a href="#">Напитки</a>
                    <a href="#">Десерты</a>
                    <a href="#">Бакалея</a>
                    <a href="#">Антипасти</a>
                    <a href="#">Акции</a>
                    <a href="#">Комбо</a>
                    <a href="#">Контакты</a>
                </nav>
                <div className="header-buttons-container">
                    <button className="login-button" onClick={() => setForm(true)}>Войти</button>
                    <button className="basket-button" onClick={() => navigate("/basket")}>Корзина | {basketLength}</button>
                </div>
            </div>
        </header>
                {
                    form && <RegistrationWindow onClose={ closeForm }/>
                }
        </>
    )
}