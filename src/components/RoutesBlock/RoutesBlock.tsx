import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "../Pages/ErrorPage/Error404";
import {NewPass} from "../Pages/NewPassPage/NewPass";
import {Profile} from "../Pages/ProfilePage/Profile";
import {Recovery} from "../Pages/RecoveryPage/Recovery";
import {Registration} from "../Pages/RegistPage/Regist";
import {Test} from "../Pages/TestPage/Test";
import {Login} from "../Pages/LoginPage/Login";

export const PATH = {
  LOGINPAGE: '/login',
  NEWPASSPAGE: '/new_pass',
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
        <Route path={PATH.NEWPASSPAGE} element={<NewPass/>}/>
        <Route path={PATH.PROFILEPAGE} element={<Profile/>}/>
        <Route path={PATH.RECOVERYPAGE} element={<Recovery/>}/>
        <Route path={PATH.REGISTRATIONPAGE} element={<Registration/>}/>
        <Route path={PATH.TESTPAGE} element={<Test/>}/>
        <Route path={'*'} element={<Error404/>}/>
      </Routes>
    </div>
  )
}
