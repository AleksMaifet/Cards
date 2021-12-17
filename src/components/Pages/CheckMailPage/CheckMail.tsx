import React from "react";
import s from './CheckMail.module.css'
import c from '../../../styleComponents/App.module.css'
import checkMailImage from '../../../images/Group 281.svg'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";


export const CheckMail = () => {
	const emailRecovery = useSelector<AppStoreType, string>(state => state.forgot.emailRecovery)
	return (
		<div className={c.container}>
			<div className={s.checkMailBlock}>
				<div className={s.checkMailImageBlock}>
					<img src={checkMailImage}/>
				</div>
				<div className={s.checkMailTextBlock}>
					<h3 className={s.checkMailTitle}>
						Check Email
					</h3>
				</div>
				<div className={s.checkMailTextBlock}>
					<p className={s.checkMailText} >{`We’ve sent an Email with instructions to ${emailRecovery}`}</p>
				</div>
			</div>
		</div>
	)
}