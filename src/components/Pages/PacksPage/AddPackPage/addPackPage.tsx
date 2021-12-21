import React, {useState} from "react";
import SuperInputText from "../../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import s from './addPackPage.module.css'
import {useDispatch} from "react-redux";
import {addPackTC} from "../../../Reducers/PacksReducer";



export const AddPackPage = () => {
	const dispatch = useDispatch()
	const [visibility, setVisibility] = useState<boolean>(false)
	const [addPack, setAddPack] = useState<string>('')
	const onAddPackModule = () => {
		setVisibility(true)
	}
	const onClosePackModule = () => {
		setVisibility(false)
	}
	const addPackHandler = () => {
		dispatch(addPackTC(addPack))
		setAddPack('')
	}



	return (
		<div>
			<SuperButton onClick={onAddPackModule}>Add pack</SuperButton>
			{visibility && <div className={s.addPackBlock}>
				<div className={s.addPackBlockWrapper}>
					<div>
						<h3>Add new pack</h3>
					</div>
					<div>
						<SuperInputText placeholder='Name pack' onChangeText={setAddPack} value={addPack}/>
					</div>
					<div>
						<SuperButton onClick={onClosePackModule}>Cansel</SuperButton>
						<SuperButton onClick={addPackHandler}>Save</SuperButton>
					</div>
				</div>
			</div>
			}
		</div>
	)
}


