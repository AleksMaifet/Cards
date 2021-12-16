import React, {ChangeEvent} from "react";

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
        <div>RegistrationPage
            <div>
                <input onChange={changeEmail} value={email} placeholder={"Login"}/>
            </div>
            <div>
                <input onChange={changePassword} value={password} type={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <input onChange={changeConfirmedPassword} value={confirmedPassword} type={"password"} placeholder={"Confirm password"}/>
            </div>
            <div>
                <span>{error}</span>
            </div>
            <div>
                <button onClick={fetchData}>Register!</button>
            </div>

        </div>
    )
}