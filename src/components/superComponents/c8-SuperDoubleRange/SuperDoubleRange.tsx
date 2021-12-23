import React, {ChangeEvent} from 'react'
import s from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    onLeftChangeRange?: (value: number) => void
    onRightChangeRange?: (value: number) => void
    min: number
    max: number
    value: [number | undefined, number | undefined]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        onLeftChangeRange,
        onRightChangeRange,
        // min, max, step, disable, ...
        min, max
    }
) => {
    const onLeftChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onLeftChangeRange && onLeftChangeRange(+e.currentTarget.value)
    }
    const onRightChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onRightChangeRange && onRightChangeRange(+e.currentTarget.value)
    }


    return (
      <div>
        <div style={{width:'0'}}>
          <input onChange={onLeftChangeCallback} type="range" min={min} max={max} value={value ? value[0] : 0}
                 className={s.slider} id="lower"/>
          <input onChange={onRightChangeCallback} type="range" min={min} max={max} value={value ? value[1] : 100}
                 className={s.slider} id="higher"/>
        </div>
        <div>
          <div style={{display:'flex',justifyContent:'space-around',width:'182px'}}>
            <div className={s.sliderContainerNumber}><span>{value[0]}</span></div>
            <div className={s.sliderContainerNumber}><span>{value[1]}</span></div>
          </div>
        </div>
      </div>
    )
}

export default SuperDoubleRange
