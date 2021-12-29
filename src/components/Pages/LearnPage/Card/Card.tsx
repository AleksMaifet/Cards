import React, {useCallback, useState} from "react";
import s from "./Card.module.css";
import {updateGradeTC} from "../../../Reducers/CardsReducer";
import {useDispatch} from "react-redux";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import {ControlRating} from "../../../Rating/ControlRating";
import {isErrorAC} from "../../../Reducers/AppReducer";

type CardPropsType = {
    question: string
    answer: string
    id: string
}
export const Card = React.memo((props: CardPropsType) => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    const [rate, setRate] = useState<number>(0)
    const className = active ? s.selected : s.flipContainer
    const closeCardForLearn = () =>  setActive(false)
    const onSetGrade = useCallback( () => {
        if(rate > 0){
            dispatch(updateGradeTC(`${rate}`, props.id))
            closeCardForLearn()
            return
        }
        dispatch(isErrorAC('Pls choose mark'))
    },[dispatch,props.id,rate])

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
                  <div className={s.back}
                    // onClick={()=>{setActive(false)}}
                  >
                      <div style={{whiteSpace: 'pre-wrap'}}>
                          {props.answer}
                      </div>
                      <div>
                          <div className={s.buttonBlock}>
                              <ControlRating rate={rate} setRate={setRate}/>
                          </div>
                          <div>
                              <SuperButton onClick={closeCardForLearn}>Cansel</SuperButton>
                              <SuperButton onClick={onSetGrade}>Grade</SuperButton>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
})