import React from "react";
import s from './CheckMail.module.css'
import checkMailImage from '../../../images/Group 281.svg'


export const CheckMail = () => {
	return (
		<div className={s.checkMailContainer}>
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
					<p className={s.checkMailText} >We’ve sent an Email with instructions to example@mail.com</p>
				</div>
			</div>
		</div>
	)
}