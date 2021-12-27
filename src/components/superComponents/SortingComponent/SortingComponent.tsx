import React from "react";
type SortingComponentPropsType = {
    onSortChange: (rate: number) => void
    disable:boolean
}
export const SortingComponent = React.memo(({onSortChange,disable}: SortingComponentPropsType) => {
    const onUpSortChangeCallback = () => {
        onSortChange(1)
    }
    const onDownSortChangeCallback = () => {
        onSortChange(0)
    }
    return (
        <>
            <button disabled={disable} onClick={onUpSortChangeCallback}> ↑</button>
            <button disabled={disable} onClick={onDownSortChangeCallback}> ↓</button>
        </>
    )
})