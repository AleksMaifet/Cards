import React, {useCallback, useEffect} from "react";
import s from "../PacksPage/Packs.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {deleteCardTC, setCardTC, updateCardTC} from "../../Reducers/CardsReducer";
import {SortingComponent} from "../../superComponents/SortingComponent/SortingComponent";
import SuperSelect from "../../superComponents/c5-SuperSelect/SuperSelect";
import {PaginationComponent} from "../../superComponents/PaginationComponent/PaginationComponent";
import {useParams} from "react-router-dom";
import {CardType} from "../../ApiRequests/apiCards";
import {IsLoadType} from "../../Reducers/AppReducer";
import {AddCardPage} from "./AddCardPage/addCardPage";
import {setPacksPageCount, setPacksPageNumber, sortPackCardsAC} from "../../Reducers/PacksReducer";
import {EditableSpan} from "../PacksPage/EditableSpan/EditableSpan";
import {SearchCartsContainer} from "./SearchCardsContainer/SearchCartsContainer";


export const Cards = () => {
	const totalCount = useSelector<AppStoreType, number>(state => state.cards.cardsTotalCount)
	const pageNumber = useSelector<AppStoreType, number>(state => state.cards.page)
	const pageCount = useSelector<AppStoreType, number>(state => state.cards.pageCount)
	const sortCards = useSelector<AppStoreType, string>(state => state.cards.sortPacksCards)
	const userId = useSelector<AppStoreType, string | null>(state => state.login._id)
	const isYoursCard = useSelector<AppStoreType, boolean>(state => state.cards.cards.every(el => el.user_id === userId))
	const cards = useSelector<AppStoreType, Array<CardType>>(state => state.cards.cards)
	const statusLoad = useSelector<AppStoreType, IsLoadType>(state => state.app.isLoad)
	const searchQuestion = useSelector<AppStoreType, string>(state => state.cards.cardQuestion)
	const searchAnswer = useSelector<AppStoreType, string>(state => state.cards.cardAnswer)
	const dispatch = useDispatch()

	const {packId} = useParams<'packId'>()

	useEffect(() => {
		packId && dispatch(setCardTC(packId))
	}, [dispatch, packId, sortCards, pageNumber, pageCount,searchQuestion,searchAnswer])

	const onSortByGrade = useCallback((rate: number) => {
		dispatch(sortPackCardsAC(`${rate}grade`))
	},[dispatch])
	const onSortByLastUpdate = useCallback((rate: number) => {
		dispatch(sortPackCardsAC(`${rate}updated`))
	},[dispatch])
	const onPageChange = useCallback((value: number) => {
		dispatch(setPacksPageNumber(value))
	},[dispatch])
	const onPageCountChange = useCallback((value: string) => {
		dispatch(setPacksPageCount(+value))
	},[dispatch])
	const onDeleteCardHandler = useCallback((id: string) => {
		packId && dispatch(deleteCardTC(id,packId))
	},[dispatch,packId])
	const changeTitlePack = useCallback((id:string,spanTitle:string) => {
		packId && dispatch(updateCardTC(id,spanTitle,packId))
	},[dispatch,packId])

	const renderedCards = cards.map(item => {
		return (
			<div key={item._id} className={s.divTableRow}>
				<div className={s.divTableCol}>
					<EditableSpan spanTitle={item.question} callback={changeTitlePack} packId={item._id}/>
				</div>
				<div className={s.divTableCol}>{item.answer}</div>
				<div className={s.divTableCol}>{item.updated.slice(0, 10).split('-').reverse().join('.')}</div>
				<div className={s.divTableCol}>{Math.round(item.grade)}</div>
				<div className={s.divTableCol}>
					{item.user_id === userId &&
					<SuperButton
						onClick={() => {onDeleteCardHandler(item._id)}}>Delete</SuperButton>
					}
				</div>
			</div>
		)
	})
	return (
		<div className={s.divTableBlock}>
			<div className={s.divHeaderBlock}>
				<SearchCartsContainer disable={statusLoad === 'loading'} searchQuestion={searchQuestion} searchAnswer={searchAnswer}/>
			</div>
			<div className={s.divTable}>
				<div className={s.divTableRow}>
					<div className={s.divTableCol}>Question</div>
					<div className={s.divTableCol}>Answer</div>
					<div className={s.divTableCol}>Updated<SortingComponent disable={statusLoad === 'loading'}
																																	onSortChange={onSortByLastUpdate}/></div>
					<div className={s.divTableCol}>Grade<SortingComponent disable={statusLoad === 'loading'}
																																onSortChange={onSortByGrade}/></div>
					<div className={s.divTableCol}>Actions</div>
				</div>
				{renderedCards}
				{isYoursCard && <AddCardPage packId={packId}/>}
			</div>
			<div>
				<div className={s.divSelectBlock}>
					<SuperSelect options={[5, 10, 15, 20]} onChangeOption={onPageCountChange}/>
				</div>
				<div>
					<PaginationComponent totalCount={totalCount} pageCount={pageCount} currentPage={pageNumber}
															 onPageChanged={onPageChange}/>
				</div>
			</div>
		</div>
	)
}