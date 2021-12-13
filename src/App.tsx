import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {RoutesBlock} from "./components/RoutesBlock/RoutesBlock";
import {apiLogin} from "./components/ApiRequests/apiLogin";
import {useDispatch} from "react-redux";
import {setUserData} from './components/Reducers/login-reducer';

export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        apiLogin.me().then((res) => {
            const data = {
                isAuth: true,
                _id: res.data._id,
                email: res.data.email,
                name: res.data.name,
                avatar: (res.data.avatar ? res.data.avatar : null),
            }
            dispatch(setUserData(data))

        })
    }, [dispatch])
    return (
        <div className="App">
            <Header/>
            <RoutesBlock/>
        </div>
    );
}

