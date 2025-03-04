import "./footer.css";

export default function Footer(){

    return(
        <footer>
            <div className="footer-container1">
                <div className="footer-logo-container">
                    <img src="./images/logo.svg" alt="" />
                </div>
                <div className="footer-links">
                    <a href="#">Калорийность и состав</a>
                    <a href="#">Правовая информация</a>
                </div>
                <div className="social-media">
                    <p>Мы в соцсетях</p>
                    <div className="social-media-links">
                        <a href="#">YouTube</a>
                        <a href="#">Facebook</a>
                        <a href="#">Москва ул.Проспект</a>
                        <a href="#">Instagram</a>
                        <a href="#">ВКонтакте</a>
                        <a href="#">Вернадского 86В</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">YaBao Все прав защищены © 2021</p>
                    <div className="payment-systems">
                        <img src="./images/visaIcon.svg" alt="" />
                        <img src="./images/paypalIcon.svg" alt="" />
                        <img src="./images/masterCardIcon.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-container2">
                <div className="social-madia2">
                    <p>ОСТАЛИСЬ ВОПРОСЫ? А МЫ ВСЕГДА НА СВЯЗИ:</p>
                    <div className="social-madia2-links">
                        <button><img src="./images/viberIcon.svg" alt="" /></button>
                        <button><img src="./images/skypeIcon.svg" alt="" /></button>
                        <button><img src="./images/messengerIcon.svg" alt="" /></button>
                        <button><img src="./images/telegramIcon.svg" alt="" /></button>
                        <button><img src="./images/facebookIcon.svg" alt="" /></button>
                        <button><img src="./images/vkIcon.svg" alt="" /></button>
                        <button className="writeToUs">Написать нам</button>
                    </div>
                </div>
                <div className="footer-call-button-container">
                    <span className="footer-phone-number">8 499 391-84-49</span>
                    <button className="footer-call-button">Заказать звонок</button>
                </div>
            </div>
            <img src="./images/bigLogo.svg" alt="" className="big-logo"/>
        </footer>
    )
}