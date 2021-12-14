import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "../Pages/ErrorPage/Error404";
import {ForgotPass} from "../Pages/NewPassPage/ForgotPass";
import {Profile} from "../Pages/ProfilePage/Profile";
import {Registration} from "../Pages/RegistPage/Regist";
import {Test} from "../Pages/TestPage/Test";
import {Login} from "../Pages/LoginPage/Login";
import {Recovery} from "../Pages/RecoveryPage/Recovery";
import {ForgotPrivetRoute} from "./PrivetRoutes/ForgoPrivetRoute";
import {NewPasswordPrivetRoute} from "./PrivetRoutes/NewPasswordPrivetRoute";

export const PATH = {
  LOGINPAGE: '/login',
  NEWPASSPAGE: '/set-new-password/:tokenId',
  PROFILEPAGE: '/profile',
  RECOVERYPAGE: '/recovery',
  REGISTRATIONPAGE: '/regist',
  TESTPAGE: '/test',
}

export const RoutesBlock = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.LOGINPAGE}/>}/>
        <Route path={PATH.LOGINPAGE} element={<Login/>}/>
        <Route path={PATH.NEWPASSPAGE} element={
          <NewPasswordPrivetRoute>
            <ForgotPass/>
          </NewPasswordPrivetRoute>
        }/>
        <Route path={PATH.PROFILEPAGE} element={<Profile/>}/>
        <Route path={PATH.RECOVERYPAGE} element={
          <ForgotPrivetRoute>
            <Recovery/>
          </ForgotPrivetRoute>
        }/>
        <Route path={PATH.REGISTRATIONPAGE} element={<Registration/>}/>
        <Route path={PATH.TESTPAGE} element={<Test/>}/>
        <Route path={'*'} element={<Error404/>}/>
      </Routes>
    </div>
  )
}
