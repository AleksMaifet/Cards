import React, {useState} from "react";
import s from "./Card.module.css";
import {updateGradeTC} from "../../../Reducers/CardsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../store/store";
import {IsLoadType} from "../../../Reducers/AppReducer";
import SuperButton from "../../../superComponents/c2-SuperButton/SuperButton";

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
                  <div className={s.back}
                    // onClick={()=>{setActive(false)}}
                  >
                      <div style={{whiteSpace:'pre-wrap'}}>
                          {props.answer}
                      </div>
                      <div>
                          <div className={s.buttonBlock}>
                              <div>
                                  <SuperButton disabled={isLoading === "loading"} onClick={() => {
                                      onSetGrade("1")
                                      setActive(false)
                                  }}>Didn't know
                                  </SuperButton>
                                  <SuperButton disabled={isLoading === "loading"} onClick={() => {
                                      onSetGrade("2")
                                      setActive(false)
                                  }}>Forgot
                                  </SuperButton>
                              </div>
                              <div>
                                  <SuperButton disabled={isLoading === "loading"} onClick={() => {
                                      onSetGrade("3")
                                      setActive(false)
                                  }}>Too much time
                                  </SuperButton>
                                  <SuperButton disabled={isLoading === "loading"} onClick={() => {
                                      onSetGrade("4")
                                      setActive(false)
                                  }}>Confused
                                  </SuperButton>
                              </div>
                              <div>
                                  <SuperButton disabled={isLoading === "loading"} onClick={() => {
                                      onSetGrade("5")
                                      setActive(false)
                                  }}>Know
                                  </SuperButton>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}