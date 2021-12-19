import React, {useState} from "react";
import s from "./Packs.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {addPackAC, deletePackAC, packType} from "../../Reducers/PacksReducer";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import {searchByPacksAC} from "../../Reducers/SearchByReducer";
import {SortingComponent} from "../../superComponents/SortingComponent/SortingComponent";
import {
    sortPackCardsAmountAC,
    sortPackCreatedByAC,
    sortPackLastUpdateAC,
} from "../../Reducers/SortByReducer";
import {packsAndCardsPaginationType, setPacksPageCount, setPacksPageNumber} from "../../Reducers/PaginationReducer";
import {PaginationComponent} from "../../superComponents/PaginationComponent/PaginationComponent";
import SuperSelect from "../../superComponents/c5-SuperSelect/SuperSelect";
import SuperDoubleRange from "../../superComponents/c8-SuperDoubleRange/SuperDoubleRange";
import {rangeReducerStateType, setMaxUserValue, setMinUserValue} from "../../Reducers/RangeReducer";
import {PATH} from "../../RoutesBlock/RoutesBlock";
import {NavLink} from "react-router-dom";


export const Packs = () => {
    const packs = useSelector<AppStoreType, Array<packType>>(state => state.packs.cardPacks)
    const searchByValue = useSelector<AppStoreType, string>(state => state.searchBy.searchByPacks)
    const packsPagination = useSelector<AppStoreType, packsAndCardsPaginationType>(state => state.pagination.packs)
    const {totalCount, pageCount, pageNumber} = packsPagination;

    const rangeState = useSelector<AppStoreType, rangeReducerStateType>(state => state.range)
    const {minServer, maxServer, minUser, maxUser} = rangeState

    const dispatch = useDispatch()

    const onSearchChange = (text: string) => {
        dispatch(searchByPacksAC(text))
    }
    const onCClickChange = () => {
        dispatch(searchByPacksAC(""))
    }
    const onCardsAmountSortChange = (rate: number) => {
        dispatch(sortPackCardsAmountAC(rate))
    }
    const onLastUpdateSortChange = (rate: number) => {
        dispatch(sortPackLastUpdateAC(rate))
    }
    const onCreatedBySortChange = (rate: number) => {
        dispatch(sortPackCreatedByAC(rate))
    }
    const onPageChange = (value: number) => {
        dispatch(setPacksPageNumber(value))
    }
    const onPageCountChange = (value: string) => {
        dispatch(setPacksPageCount(+value))
    }
    const onAddPackHandler = () => {
        dispatch(addPackAC())
    }
    const onDeletePackHandler = (id: string) => {
        dispatch(deletePackAC(id))
    }

    const renderedPacks = packs.map(item => {
        return (
            <div className={s.divTableRow}>
                <div className={s.divTableCol}><NavLink to={PATH.CARDS}>{item.name}</NavLink></div>
                <div className={s.divTableCol}>{item.cardsCount}</div>
                <div className={s.divTableCol}>{item.updated}</div>
                <div className={s.divTableCol}>{item.user_id}</div>
                <div className={s.divTableCol}><SuperButton onClick={() => {
                    onDeletePackHandler(item._id)
                }}>Delete</SuperButton></div>
            </div>
        )
    })
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onLeftChangeRange = (value: number) => {
        dispatch(setMinUserValue(value))
    }
    const onRightChangeRange = (value: number) => {
        dispatch(setMaxUserValue(value))
    }
    return (
        <div>
            <div className={s.settings}>
                <SuperDoubleRange min={minServer}
                                  max={maxServer}
                                  value={[minUser, maxUser]}
                                  onLeftChangeRange={onLeftChangeRange}
                                  onRightChangeRange={onRightChangeRange}
                />
                <div>
                    <SuperInputText value={searchByValue} onChangeText={onSearchChange}/><SuperButton
                    onClick={onCClickChange}>Search</SuperButton>
                </div>
            </div>

            <div className={s.divTable}>
                <div className={s.divTableRow}>
                    <div className={s.divTableCol}>Name</div>
                    <div className={s.divTableCol}>Cards count<SortingComponent
                        onSortChange={onCardsAmountSortChange}/>
                    </div>
                    <div className={s.divTableCol}>Updated<SortingComponent onSortChange={onLastUpdateSortChange}/>
                    </div>
                    <div className={s.divTableCol}>Created By<SortingComponent
                        onSortChange={onCreatedBySortChange}/>
                    </div>
                    <div className={s.divTableCol}>Actions</div>
                </div>
                {renderedPacks}
                <SuperButton onClick={onAddPackHandler}>Add pack</SuperButton>
            </div>

            <div>
                <SuperSelect options={[pageCount, 10, 15, 20]} onChangeOption={onPageCountChange}/>
                <PaginationComponent totalCount={totalCount} pageCount={pageCount} currentPage={pageNumber}
                                     onPageChanged={onPageChange}/>
            </div>
        </div>
    )
}