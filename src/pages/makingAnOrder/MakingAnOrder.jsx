import { useForm } from "react-hook-form";
import Footer from "../../components/footer/Footer";
import SmallHeader from "../../components/smallHeader/smallHeader";
import "./makingAnOrder.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

export default function MakingAnOrder(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const basket = useSelector(state => state.basket);
    const orders = useSelector(state => state.orders);

    useEffect(() => {
        if(!basket.length){
            navigate("/basket");
        }
    }, []);

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, "");
        let formatted = "";
        if (cleaned.length > 0) {
            formatted = `+7 (${cleaned.substring(1, 4)}) ${cleaned.substring(4, 7)}-${cleaned.substring(7, 9)}-${cleaned.substring(9, 11)}`;
        }
    
        return formatted.trim();
    };

    const validatePhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, "");
        if(cleaned.length < 11) return "Номер телефона должен содержать 11 цифр";
    };

    const makingAnOrder = (data) => {
        data.order = basket;
        data.totalPrice = calculateTotalPrice();
        data.date = getDate();
        dispatch({ type: "ADD_ORDER", payload: data });
        toast.success("Заказ успешно оформлен!");
        setTimeout(() => {
            dispatch({ type: "CLEAR_TO_BASKET" });
            navigate("/");
        }, 1000);
    };

    const getDate = () => {
        const date = new Date();
        const formattedDateTime = date.toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        return formattedDateTime;
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        basket.map(item => totalPrice += item.price * item.quantity);
        return totalPrice;
    };

    return(
        <>
            <SmallHeader />
            <Toaster richColors position="top-center" />
            <main className="making-an-order-main">
                <form className="making-an-order-form" onSubmit={handleSubmit(makingAnOrder)}>
                    <span>Заказ на доставку</span>
                    <div className="form-group">
                        <label htmlFor="name">Имя</label>
                        <input type="text" placeholder="Иван" {...register("name", { required: "Это поле обязательно для заполнения" })} />
                        { errors.name && <p className="error-message">{ errors.name.message }</p> }
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Номер телефона</label>
                        <input type="text" value={user.phoneNumber} {...register("phoneNumber", { required: "Это поле обязательно для заполнения", validate: validatePhoneNumber })} onChange={(e) => {
                            const newValue = formatPhoneNumber(e.target.value);
                            e.target.value = newValue
                        }}/>
                        { errors.phoneNumber && <p className="error-message">{ errors.phoneNumber.message }</p> }
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input type="text" placeholder="Ул. КИМа, д1..." {...register("address", { required: "Это поле обязательно для заполнения" })}/>
                        { errors.address && <p className="error-message">{ errors.address.message }</p> }
                    </div>  
                    <div className="form-group">
                    <label htmlFor="paymentMethods">Выберите способ оплаты</label>
                        <div className="payment-methods-container">
                            <div>
                                <input type="radio" name="paymentMethods" value="cash" {...register("paymentMethods", { required: "Это поле обязательно для заполнения" })}/>
                                <label htmlFor="paymentMethods" id="cash">Наличными</label>
                            </div>
                            <div>
                                <input type="radio" name="paymentMethods" value="card" {...register("paymentMethods", { required: "Необходимо выбрать способ оплаты" })}/>
                                <label htmlFor="paymentMethods" id="card">Картой</label>
                            </div>
                        </div>
                        { errors.paymentMethods && <p className="error-message">{ errors.paymentMethods.message }</p> }
                    </div>
                    <div className="form-group">
                    <button className="backToBasketButton" onClick={() => navigate("/basket")}><img src="./images/arrow.svg" alt="" />Вернуться в корзину</button>
                        <button type="submit">Оформить заказ</button>
                    </div>
                </form>
                <div className="order-container-parent">
                    <h2 style={{ color: "rgb(247, 210, 45)" }}>Состав заказа</h2>
                    <div className="order-container">
                            {
                                basket.map(item => (
                                        <div className="order-card" key={item.id}>
                                            <img src={ item.image } alt="" />
                                            <p className="order-card-name">{ (item.name)  }</p>
                                            <p className="order-card-quantity">{ item.quantity }</p>
                                            <p className="order-card-price">{ item.price } ₽</p>
                                        </div>
                                ))
                            }
                    </div>
                    <div className="total-price-container"><span>Сумма заказа</span><span>{ calculateTotalPrice() } ₽</span></div>
                </div>
            </main>
            <Footer />
        </>
    )
}