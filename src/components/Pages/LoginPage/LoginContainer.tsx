import React, {useState} from 'react'
import {Navigate} from "react-router-dom";
import {PATH} from "../../RoutesBlock/RoutesBlock";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Reducers/login-reducer";
import {AppStoreType} from "../../store/store";
import {Login} from "./Login";


export const LoginContainer = () => {
    const isAuth = useSelector((state: AppStoreType) => state.login.isAuth)
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeChecked =() => {
        setChecked(!checked)
    }
    const onChangeEmail =(e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangePassword =(e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const login = () => {
        dispatch(loginTC(email, password, checked))
    }
    if (isAuth) {
        return <Navigate to={PATH.PROFILEPAGE}/>

    }
    return (
        <div>
            <Login onChangeEmail={onChangeEmail}
                   changeChecked={changeChecked}
                   onChangePassword={onChangePassword}
                   login={login}
                   password={password}
                   email={email}
                   checked={checked}/>
        </div>
    )
}


