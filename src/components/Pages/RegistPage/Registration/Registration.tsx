import React, {ChangeEvent} from "react";

type RegistrationPropsType = {
    changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    changePassword: (e: ChangeEvent<HTMLInputElement>) => void
    fetchData: () => void
    email: string
    password: string
    error: string
}
export const Registration = ({
                                 changeEmail,
                                 changePassword,
                                 fetchData,
                                 email,
                                 password,
                                 error
                             }: RegistrationPropsType) => {
    return (
        <div>RegistrationPage
            <div>
                <input onChange={changeEmail} value={email}/>
            </div>
            <div>
                <input onChange={changePassword} value={password} type={"password"}/>
            </div>
            <div>
                <button onClick={fetchData}>Register!</button>
            </div>
            <span>{error}</span>
        </div>
    )
}