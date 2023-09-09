import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');


    function onSubmit(e) {
        e.preventDefault();
    }


    function onSubmit(e) {
        e.preventDefault();
    }
    
    return (
        <div className="auth">
            <p className="auth__title">Регистрация</p>
            <form className="auth__form">
                <label htmlFor="user-email">
                    <input 
                        onChange={(e) => {setUserEmail(e.target.value)}}
                        type="email" 
                        className="auth__input auth__input_type-email" 
                        placeholder="Email" />
                </label>
                <label htmlFor="user-password">
                    <input 
                        onChange={(e) => {setUserPassword(e.target.value)}}
                        type="text" 
                        className="auth__input auth__input_type-password" 
                        placeholder="Пароль"/>
                </label>
                <button type="submit" className="auth__submit-btn">Зарегистрироваться</button>
                <div className="auth__signin">
                    <p>Уже зарегистрированы?</p>
                    <NavLink className="auth__login-link" to='/sign-in'>Войти</NavLink>
                </div>
            </form>
        </div>
    )
}

