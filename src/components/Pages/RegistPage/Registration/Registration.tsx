import React, {ChangeEvent} from "react";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './../Registration.module.css'
import c from '../../../../styleComponents/App.module.css'

type RegistrationPropsType = {
    changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    changePassword: (e: ChangeEvent<HTMLInputElement>) => void
    changeConfirmedPassword: (e: ChangeEvent<HTMLInputElement>) => void
    fetchData: () => void
    email: string
    password: string
    confirmedPassword: string
    error: string
}
export const Registration = ({
                                 changeEmail,
                                 changePassword,
                                 fetchData,
                                 email,
                                 password,
                                 error,
                                 changeConfirmedPassword,
                                 confirmedPassword
                             }: RegistrationPropsType) => {
    return (
        <div className={c.container}>
          <div className={s.registrationBlock}>
            <div className={s.blockCenter}>
              <h3 className={s.registrationTitle}>
                Sign Up
              </h3>
            </div>
            <div>
                <SuperInputText onChange={changeEmail} value={email} placeholder={"Login"}/>
            </div>
            <div>
                <SuperInputText onChange={changePassword} value={password} type={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <SuperInputText onChange={changeConfirmedPassword} value={confirmedPassword} type={"password"} placeholder={"Confirm password"}/>
            </div>
            <div>
                <span>{error}</span>
            </div>
            <div>
                <SuperButton onClick={fetchData}>Register!</SuperButton>
            </div>
        </div>
        </div>
    )
}