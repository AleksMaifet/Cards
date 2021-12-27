import React, {useCallback, useState} from "react";
import s from "./Card.module.css";
import {updateGradeTC} from "../../../Reducers/CardsReducer";
import {useDispatch} from "react-redux";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";
import {ControlRating} from "../../../Rating/ControlRating";

type CardPropsType = {
    question: string
    answer: string
    id: string
}
export const Card = React.memo((props: CardPropsType) => {
    const [active, setActive] = useState(false)
    const [rate, setRate] = useState<number>(0)
    const className = active ? s.selected : s.flipContainer
    const dispatch = useDispatch()
    const onSetGrade = useCallback( () => {
        rate !== 0 && dispatch(updateGradeTC(`${rate}`, props.id))
        setActive(false)
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
                          <SuperButton onClick={onSetGrade}>Grade</SuperButton>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
})