import React from "react";
import s from "../PacksPage/Packs.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {addCardAC, cardType, deleteCardAC} from "../../Reducers/CardsReducer";
import {searchByCardsAC} from "../../Reducers/SearchByReducer";
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import {sortCardsGradeAC, sortCardsLastUpdateAC} from "../../Reducers/SortByReducer";
import {SortingComponent} from "../../superComponents/SortingComponent/SortingComponent";
import {
    packsAndCardsPaginationType, setCardsPageCount,
    setCardsPageNumber,
} from "../../Reducers/PaginationReducer";
import SuperSelect from "../../superComponents/c5-SuperSelect/SuperSelect";
import {PaginationComponent} from "../../superComponents/PaginationComponent/PaginationComponent";

export const Cards = () => {
    const searchByValue = useSelector<AppStoreType, string>(state => state.searchBy.searchByCards)

    const cardsPagination = useSelector<AppStoreType, packsAndCardsPaginationType>(state => state.pagination.cards)
    const {totalCount, pageCount, pageNumber} = cardsPagination;

    const cards = useSelector<AppStoreType, Array<cardType>>(state => state.cards.cards)

    const dispatch = useDispatch()

    const onSearchChange = (text: string) => {
        dispatch(searchByCardsAC(text))
    }
    const onClickChange = () => {
        dispatch(searchByCardsAC(""))
    }
    const onSortByGrade = (rate: number) => {
        dispatch(sortCardsGradeAC(rate))
    }
    const onSortByLastUpdate = (rate: number) => {
        dispatch(sortCardsLastUpdateAC(rate))
    }
    const onPageChange = (value: number) => {
        dispatch(setCardsPageNumber(value))
    }
    const onPageCountChange = (value: string) => {
        dispatch(setCardsPageCount(+value))
    }
    const onAddCard = () => {
        dispatch(addCardAC())
    }
    const onDeleteCard = (id: string) => {
        dispatch(deleteCardAC(id))
    }

    const renderedCards = cards.map(item => {
        return (
            <div className={s.divTableRow}>
                <div className={s.divTableCol}>{item.question}</div>
                <div className={s.divTableCol}>{item.answer}</div>
                <div className={s.divTableCol}>{item.updated}</div>
                <div className={s.divTableCol}>{item.grade}</div>
                <div className={s.divTableCol}><SuperButton onClick={()=> {onDeleteCard(item._id)}}>Delete</SuperButton></div>
            </div>
        )
    })
    return (
        <div>
            <SuperInputText value={searchByValue} onChangeText={onSearchChange}/><SuperButton onClick={onClickChange}>Search</SuperButton>
            <div className={s.divTable}>
                <div className={s.divTableRow}>
                    <div className={s.divTableCol} >Question</div>
                    <div className={s.divTableCol}>Answer</div>
                    <div className={s.divTableCol}>Updated<SortingComponent onSortChange={onSortByLastUpdate}/></div>
                    <div className={s.divTableCol}>Grade<SortingComponent onSortChange={onSortByGrade}/></div>
                    <div className={s.divTableCol}>Actions</div>
                </div>
                {renderedCards}
                <SuperButton onClick={onAddCard}>Add card</SuperButton>
            </div>
            <div>
                <SuperSelect options={[pageCount, 10, 15, 20]} onChangeOption={onPageCountChange}/>
                <PaginationComponent totalCount={totalCount} pageCount={pageCount} currentPage={pageNumber}
                                     onPageChanged={onPageChange}/>
            </div>
        </div>
    )
}