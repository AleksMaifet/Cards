import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "../Pages/ErrorPage/Error404";
import {ForgotPass} from "../Pages/NewPassPage/ForgotPass";
import { LoginContainer } from '../Pages/LoginPage/LoginContainer';
import {Profile} from "../Pages/ProfilePage/Profile";
import {Recovery} from "../Pages/RecoveryPage/Recovery";
import {RegistrationContainer} from "../Pages/RegistPage/RegistContainer";
import {Test} from "../Pages/TestPage/Test";
import {ForgotPrivetRoute} from "./PrivetRoutes/ForgotPrivetRoute";
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
        <Route path={PATH.NEWPASSPAGE} element={
          <NewPasswordPrivetRoute>
            <ForgotPass/>
          </NewPasswordPrivetRoute>
        }/>
        <Route path={PATH.LOGINPAGE} element={<LoginContainer/>}/>
        <Route path={PATH.PROFILEPAGE} element={<Profile/>}/>
        <Route path={PATH.RECOVERYPAGE} element={<Recovery/>}/>
        <Route path={PATH.REGISTRATIONPAGE} element={<RegistrationContainer/>}/>
        <Route path={PATH.RECOVERYPAGE} element={
          <ForgotPrivetRoute>
            <Recovery/>
          </ForgotPrivetRoute>
        }/>
        <Route path={PATH.TESTPAGE} element={<Test/>}/>
        <Route path={'*'} element={<Error404/>}/>
      </Routes>
    </div>
  )
}
