import { useForm } from "react-hook-form";
import "./registrationWindow.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function RegistrationWindow({ onClose }){
    const dispatch = useDispatch();
    const [ errorMessage, setErrorMessage ] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ changingForms, setChangingForms ] = useState(false);

    const onSubmitRegistration = (data) => {
        setErrorMessage("");
        if(data.password == data.confirmPassword){   
            const users = JSON.parse(localStorage.getItem("users")) || [];
            data.id = users.length + 1;
            const newUser = data;
            delete newUser.confirmPassword;
            const isEmailExists = users.some(item => item.email == newUser.email);
            const isPhoneExists = users.some(item => item.phoneNumber == newUser.phoneNumber);
            if(isEmailExists) setErrorMessage("Пользователь с этой почтой уже существует");
            else if(isPhoneExists) setErrorMessage("Пользователь с этим номером уже существует");
            else{
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                dispatch({type: "SAVE_USER_DATA", payload: newUser});
                localStorage.setItem("user", JSON.stringify(newUser));
                alert("Регистрация прошла успешно");
                onClose();
            }
        }else{
            setErrorMessage("Пароли не совпадают");
        }
    }

    const onSubmitAvtorization = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        let user;
        let check = false;
        users.map(item => {
            if(item.password == data.password && item.email == data.email) 
                user = item;
                check = true;
        });
        if(check){
            dispatch({type: "SAVE_USER_DATA", payload: user});
            localStorage.setItem("user", JSON.stringify(user));
            alert("Успешный вход");
            onClose();
        }else{
            setErrorMessage("Неверный email или пароль");
        }
        
    }

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
    }

    return (
        <div className="form-contrainer">
            {
                changingForms && 
                <form onSubmit={handleSubmit(onSubmitRegistration)}>
                    <span>Регистрация</span>
                    <img src="./images/cross.svg" alt="" className="close-form" onClick={onClose} />
                    <div className="form-group">
                        <label htmlFor="email">Электронную почту</label>
                        <input type="text" placeholder="example@gmail.com" {...register("email", { required: "Это поле обязательно для заполнения", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,message: 'Некорректный email' }})} />
                        { errors.email && <p className="error-message">{ errors.email.message }</p> }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Номер телефона</label>
                        <input type="text" placeholder="+7(999) 999-99-99" {...register("phoneNumber", { required: "Это поле обязательно для заполнения", validate: validatePhoneNumber })} onChange={(e) => {
                            const newValue = formatPhoneNumber(e.target.value);
                            e.target.value = newValue
                        }}/>
                        { errors.phoneNumber && <p className="error-message">{ errors.phoneNumber.message }</p> }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Пароль</label>
                        <input type="password" placeholder="******" {...register("password", { required: "Это поле обязательно для заполнения" })}/>
                        { errors.password && <p className="error-message">{ errors.password.message }</p> }
                    </div>  
                    <div className="form-group">
                        <label htmlFor="">Подтвердите пароль</label>
                        <input type="password" placeholder="******" {...register("confirmPassword", { required: "Это поле обязательно для заполнения" })}/>
                        { errors.confirmPassword && <p className="error-message">{ errors.confirmPassword.message }</p> }
                        { (errorMessage) ? <p className="error-message">{ errorMessage }</p> : false}
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                    <p style={{textAlign: "center"}}>Уже есть аккаунт? <a href="#" onClick={() => {
                        setErrorMessage("");
                        setChangingForms(false);
                    }}>Войти</a></p>
                </form>
            }

            {
                !changingForms && 
                <form onSubmit={handleSubmit(onSubmitAvtorization)}>
                    <span>Вход на сайт</span>
                    <img src="./images/cross.svg" alt="" className="close-form" onClick={onClose} />
                    <div className="form-group">
                        <label htmlFor="email">Электронную почту</label>
                        <input type="text" placeholder="example@gmail.com" {...register("email", { required: "Это поле обязательно для заполнения", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,message: 'Некорректный email' }})} />
                        { errors.email && <p className="error-message">{ errors.email.message }</p> }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Пароль</label>
                        <input type="password" placeholder="******" {...register("password", { required: "Это поле обязательно для заполнения" })}/>
                        { errors.password && <p className="error-message">{ errors.password.message }</p> }
                        { (errorMessage) ? <p className="error-message">{ errorMessage }</p> : false}
                    </div>  
                    <button type="submit">Войти</button>
                    <p style={{textAlign: "center"}}>У вас нет аккаунта? <a href="#" onClick={() => {
                        setErrorMessage("");
                        setChangingForms(true);
                    }}>Зарегистрироваться</a></p>
                </form>
            }
        </div>
    )
}