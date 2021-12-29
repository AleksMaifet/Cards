import React, {useCallback, useEffect} from "react";
import s from "../PacksPage/Packs.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {deleteCardTC, setCardsPageNumber, setCardTC, setPackIdAC, updateCardTC} from "../../Reducers/CardsReducer";
import {SortingComponent} from "../../superComponents/SortingComponent/SortingComponent";
import SuperSelect from "../../superComponents/c5-SuperSelect/SuperSelect";
import {PaginationComponent} from "../../superComponents/PaginationComponent/PaginationComponent";
import {useNavigate, useParams} from "react-router-dom";
import {AddCardPage} from "./AddCardPage/addCardPage";
import {setPacksPageCount, setPacksPageNumber, sortPackCardsAC} from "../../Reducers/PacksReducer";
import {EditableSpan} from "../PacksPage/EditableSpan/EditableSpan";
import {SearchCartsContainer} from "./SearchCardsContainer/SearchCartsContainer";
import {AuthLoad} from "../LoadPage/AuthLoad/AuthLoad";
import {DeletePageContainer} from "../DeletePage/DeletePage";
import {EditableSpanPage} from "./EditableSpan/EditableSpan";
import {Rating} from "../../Rating/Rating";
import {getCards} from "../../store/selectors/getCards";
import {getPacks} from "../../store/selectors/getPacks";


export const Cards = () => {
	const dispatch = useDispatch()

	const userId = useSelector<AppStoreType, string | null>(state => state.login._id)
	const cards = useSelector(getCards)

	const isPackLoad = useSelector(getPacks).isPackLoad === 'loading'
	const navigate = useNavigate()

	const goBack = useCallback(() => {
		navigate(-1)
		dispatch(setPacksPageNumber(1))
	},[dispatch,navigate])

	const {packId} = useParams<'packId'>()
	const isYoursCard = cards.cards.every(el => el.user_id === userId)

	useEffect(() => {
		packId && dispatch(setPackIdAC(packId))
		dispatch(setCardTC())
	}, [dispatch, packId, cards.sortPacksCards,cards.page,cards.pageCount, cards.cardQuestion, cards.cardAnswer,])

	const onSortByGrade = useCallback((rate: number) => {
		dispatch(sortPackCardsAC(`${rate}grade`))
	},[dispatch])
	const onSortByLastUpdate = useCallback((rate: number) => {
		dispatch(sortPackCardsAC(`${rate}updated`))
	},[dispatch])
	const onCartChange = useCallback((value: number) => {
		dispatch(setCardsPageNumber(value))
	},[dispatch])
	const onPageCountChange = useCallback((value: string) => {
		dispatch(setPacksPageCount(+value))
	},[dispatch])
	const onDeleteCardHandler = useCallback((id: string) => {
		dispatch(deleteCardTC(id))
	}, [dispatch])
	const changeTitlePack = useCallback((id: string,question:string,answer:string) => {
		dispatch(updateCardTC(id,question,answer))
	}, [dispatch])

	const renderedCards = cards.cards.map(item => {
		const updated = new Date(item.updated).toLocaleDateString()
		return (
			<div key={item._id} className={s.divTableRow}>
				<div className={s.divTableCol}>
					<EditableSpan isMyTitle={item.user_id === userId} spanTitle={item.question} callback={changeTitlePack}
												packId={item._id}/>
				</div>
				<div className={s.divTableCol}>
					<EditableSpanPage isMyTitle={item.user_id === userId} answer={item.answer} callback={changeTitlePack} packId={item._id}/>
				</div>
				<div className={s.divTableCol}>{updated}</div>
				<div className={s.divTableCol}>
					<Rating ratingValue={Math.round(item.grade)}/>
				</div>
				<div className={s.divTableCol}>
					{item.user_id === userId &&
					<DeletePageContainer _id={item._id} onDeletePackHandler={onDeleteCardHandler} title={item.question}/>
					}
				</div>
			</div>
		)
	})
	return (
		<div>
			<div className={s.divTableBlock}>
				<div className={s.divTable}>
					<div style={{display: 'flex'}}>
						<SuperButton onClick={goBack}>Back</SuperButton>
					</div>
					<div className={s.divHeaderBlock}>
						<SearchCartsContainer/>
					</div>
					<div className={s.divTableRow}>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Question</span></div>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Answer</span></div>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Updated</span>
							<SortingComponent
								disable={isPackLoad}
								onSortChange={onSortByLastUpdate}
							/>
						</div>
						<div className={s.divTableCol}><span style={{fontWeight: 'bolder'}}>Grade</span>
							<SortingComponent
								disable={isPackLoad}
								onSortChange={onSortByGrade}
							/></div>
						<div className={s.divTableCol}><span style={{fontWeight: 'bolder'}}>Actions</span></div>
					</div>
					{
						isPackLoad ?
							<AuthLoad/>
							:
							renderedCards
					}
					{isYoursCard && isPackLoad && <AddCardPage disable={false} packId={packId}/>}
				</div>
			</div>
			<div>
				<div className={s.divSelectBlock}>
					<SuperSelect options={[10, 15, 20]} onChangeOption={onPageCountChange}/>
				</div>
				<div style={{margin: '30px'}}>
					{
						cards.cards.length &&
						<PaginationComponent disable={isPackLoad}
																 totalCount={cards.cardsTotalCount}
																 pageCount={cards.pageCount}
																 currentPage={cards.page}
																 onPageChanged={onCartChange}
						/>
					}
				</div>
			</div>
		</div>
	)
}