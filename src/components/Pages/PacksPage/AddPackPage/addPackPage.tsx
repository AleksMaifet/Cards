import React, {useState} from "react";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './addPackPage.module.css'
import {useDispatch} from "react-redux";
import {addPackTC} from "../../../Reducers/PacksReducer";
import {Modal} from "../../../../modals/Modal";

type AddPackPageType = {
	disable:boolean
}

export const AddPackPage = ({disable}:AddPackPageType) => {
	const dispatch = useDispatch()
	const [active,setActive] = useState<boolean>(false)
	const [addPack, setAddPack] = useState<string>('')
	const onAddPackModule = () => {
		setActive(true)
	}
	const onClosePackModule = () => {
		setActive(false)
	}

	const addPackHandler = () => {
		dispatch(addPackTC(addPack))
		setAddPack('')
	}


	return (
		<>
			<SuperButton disabled={disable} onClick={onAddPackModule}>Add new pack</SuperButton>
			<Modal active={active} setActive={setActive}>
				<div>
					<div className={s.addPackBlockWrapper}>
						<div>
							<h3>Add pack</h3>
						</div>
						<div>
							<SuperInputText placeholder='Name pack' onChangeText={setAddPack} value={addPack}/>
						</div>
						<div>
							<SuperButton onClick={onClosePackModule}>Cansel</SuperButton>
							<SuperButton disabled={disable} onClick={addPackHandler}>Save</SuperButton>
						</div>
					</div>
				</div>
			</Modal>
		</>
	)
}


