import React, {useEffect, useState} from "react";
import s from "./Card.module.css";
import {setGrade} from "../../../ApiRequests/apiGrade";
import {updateGradeTC} from "../../../Reducers/CardsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../store/store";
import {IsLoadType} from "../../../Reducers/AppReducer";
import {randomize} from "../../../../utils/randomize";

type CardPropsType = {
    question: string
    answer: string
    id: string
}
export const Card = (props: CardPropsType) => {
    const isLoading = useSelector<AppStoreType, IsLoadType>(state => state.app.isLoad)
    const [active, setActive] = useState(false)
    const className = active ? s.selected : s.flipContainer
    const dispatch = useDispatch()
    const onSetGrade = (grade: string) => {
        dispatch(updateGradeTC(grade, props.id))
    }
    // useEffect(()=> {
    //         setActive(false)
    // }, [props.id, props.question, props.answer])

    return (
        <div className={s.vertical}>
            <div className={className}>
                <div className={s.flipper}>
                    <div className={s.front} onClick={() => {
                        setActive(true)
                    }}>
                        {props.question}
                    </div>
                    <div className={s.back }
                         //onClick={()=>{setActive(false)}}
                    >
                        {props.answer}
                        <div >
                            <div className={s.buttonBlock}>
                            <button disabled={isLoading === "loading"} onClick={()=>{onSetGrade("1")}}>Didn't know</button>
                            <button disabled={isLoading === "loading"} onClick={()=>{onSetGrade("2")}}>Forgot</button>
                            </div>
                            <button disabled={isLoading === "loading"} onClick={()=>{onSetGrade("3")}}>Thought too much time</button>
                            <button disabled={isLoading === "loading"} onClick={()=>{onSetGrade("4")}}>Confused</button>
                            <button disabled={isLoading === "loading"} onClick={()=>{onSetGrade("5")}}>Know</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}