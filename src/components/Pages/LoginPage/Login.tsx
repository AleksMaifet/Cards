import {NavLink} from "react-router-dom";
import {PATH} from "../../RoutesBlock/RoutesBlock";
import React from "react";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../superComponents/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import style from './Login.module.css'


type LoginPropsType = {
    onChangeEmail: (e: React.FormEvent<HTMLInputElement>) => void
    changeChecked: () => void
    onChangePassword: (e: React.FormEvent<HTMLInputElement>) => void
    login: () => void
    password: string
    email: string
    checked: boolean
    error: string
    showPassword: boolean
    changeShowPassword: () => void
}
export const Login = (props: LoginPropsType) => {

    return (
        <div className={style.container}>
            <div className={style.login}>
                <div>it-incubator</div>
                <div>Sign in</div>
                <div>
                    <SuperInputText
                        className={style.text}
                        placeholder={'Email'}
                        onChange={props.onChangeEmail}
                        value={props.email}/>

                </div>

                <div className={style.box}>
                    <SuperInputText
                        className={style.password}
                        typeInput={`${props.showPassword ? 'text' : 'password'}`}
                        placeholder={'Password'}
                        onChange={props.onChangePassword}
                        value={props.password}/>
                    <input className={style.checkbox} type={'checkbox'} defaultChecked={props.showPassword}
                           onClick={props.changeShowPassword}/>
                </div>
                {props.error&&<div className={style.error}>{props.error}</div>}
                <div>Remember me
                    <SuperCheckbox type={"checkbox"}
                                   defaultChecked={props.checked}
                                   onClick={props.changeChecked}/>
                </div>
                <div>
                    <NavLink to={PATH.RECOVERYPAGE}>Forgot password</NavLink>
                </div>
                <div>
                    <SuperButton onClick={props.login}>Login</SuperButton>
                </div>
                <div>
                    <NavLink to={PATH.REGISTRATIONPAGE}>Sign Up</NavLink>
                </div>
            </div>
        </div>)
}