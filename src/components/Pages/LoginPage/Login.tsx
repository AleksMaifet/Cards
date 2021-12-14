import {NavLink} from "react-router-dom";
import {PATH} from "../../RoutesBlock/RoutesBlock";
import React from "react";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../superComponents/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";


type LoginPropsType = {
    onChangeEmail: (e: React.FormEvent<HTMLInputElement>) => void
    changeChecked: () => void
    onChangePassword: (e: React.FormEvent<HTMLInputElement>) => void
    login: () => void
    password: string
    email: string
    checked: boolean
}
export const Login = (props: LoginPropsType) => {

    return (
        <div>
            <div>
                <div>it-incubator</div>
                <div>Sign in</div>
                <div>
                    <SuperInputText placeholder={'Email'}
                                    onChange={props.onChangeEmail}
                                    value={props.email}/>
                </div>
                <div>
                    <SuperInputText placeholder={'Password'}
                                    onChange={props.onChangePassword}
                                    value={props.password}/>

                </div>
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