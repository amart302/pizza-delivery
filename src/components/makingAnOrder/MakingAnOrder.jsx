import { useForm } from "react-hook-form";
import Footer from "../footer/Footer";
import SmallHeader from "../smallHeader/smallHeader";
import "./makingAnOrder.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MakingAnOrder(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const basket = JSON.parse(localStorage.getItem("basket")) || [];

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
        console.log(data);
    }

    return(
        <>
            <SmallHeader />
            <main className="making-an-order-main">
                <form onSubmit={handleSubmit(makingAnOrder)}>
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
                                <input type="radio" name="paymentMethods" value="card" {...register("paymentMethods", { required: "Это поле обязательно для заполнения" })}/>
                                <label htmlFor="paymentMethods" id="card">Картой</label>
                            </div>
                        </div>
                        { errors.paymentMethods && <p className="error-message">{ errors.paymentMethods.message }</p> }
                    </div>
                    <button type="submit">Оформить заказ</button>
                </form>
                <div className="order-container">
                    <span>Состав заказа</span>
                    {
                        basket.map(item => {
                            {
                                <div>
                                    
                                </div>
                            }
                        })
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}