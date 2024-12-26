

import "./registrationWindow.css";

export default function RegistrationWindow({ onClose }){
    return (
        <div className="form-contrainer">
            <form action="">
                <span>Регистрация</span>
                <img src="./images/cross.svg" alt="" className="close-form" onClick={onClose} />
                <div className="form-group">
                    <label htmlFor="">Электронную почту</label>
                    <input type="text" placeholder="example@gmail.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Номер телефона</label>
                    <input type="text" placeholder="+7(999) 999-99-99"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Пароль</label>
                    <input type="password" placeholder="******"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Подтвердите пароль</label>
                    <input type="password" placeholder="******"/>
                </div>
                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}