type SortingComponentPropsType = {
    onSortChange: (rate: number) => void
}
export const SortingComponent = ({onSortChange}: SortingComponentPropsType) => {
    const onUpSortChangeCallback = () => {
        onSortChange(1)
    }
    const onDownSortChangeCallback = () => {
        onSortChange(0)
    }
    return (
        <>
            <button onClick={onUpSortChangeCallback}> ↑</button>
            <button onClick={onDownSortChangeCallback}> ↓</button>
        </>
    )
}