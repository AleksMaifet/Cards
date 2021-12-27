import React, {useState} from "react";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {Modal} from "../../../modals/Modal";
import s from "../PacksPage/AddPackPage/addPackPage.module.css";


type DeletePageType = {
	_id:string
	onDeletePackHandler:(_id:string) => void
	title:string
}


export const DeletePageContainer = React.memo(({_id,onDeletePackHandler,title,...props}:DeletePageType) => {

	const [active,setActive] = useState<boolean>(false)
	const onAddPackModule = () => {
		setActive(true)
	}
	const onClosePackModule = () => {
		setActive(false)
	}
	return (
		<>
			<SuperButton onClick={onAddPackModule}>Delete</SuperButton>
			<Modal active={active} setActive={setActive}>
				<div>
					<div className={s.addPackBlockWrapper}>
						<div>
							<h3>Delete Pack</h3>
						</div>
						<div>
							<p>
								Do you really want to remove <span style={{fontWeight:'bolder'}}>Pack Name - {title} ? </span>
								All cards will be excluded from this course.
							</p>
						</div>
						<div>
							<SuperButton onClick={onClosePackModule}>Cansel</SuperButton>
							<SuperButton onClick={() => {onDeletePackHandler(_id)}}>Delete</SuperButton>
						</div>
					</div>
				</div>
			</Modal>
		</>
	)
})