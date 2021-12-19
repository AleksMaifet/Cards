import React, {useCallback, useEffect} from "react";
import s from "./Packs.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {
	changeWhoisCardAC,
	deletePackTC, searchByPacksAC,
	setCardTC,
	setPacksPageCount,
	setPacksPageNumber,
	sortPackCardsAmountAC,
	sortPacksLastUpdateAC, updatePackTC
} from "../../Reducers/PacksReducer";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import {SortingComponent} from "../../superComponents/SortingComponent/SortingComponent";
import {PaginationComponent} from "../../superComponents/PaginationComponent/PaginationComponent";
import SuperSelect from "../../superComponents/c5-SuperSelect/SuperSelect";
import {PacksType} from "../../ApiRequests/apiPacks";
import {SearchContainer} from "./SearchContainer/SearchContainer";
import {AddPackPage} from "./AddPackPage/addPackPage";
import {EditableSpan} from "./EditableSpan/EditableSpan";
import {NavLink} from "react-router-dom";
import {PATH} from "../../RoutesBlock/RoutesBlock";


export const Packs = () => {
	const dispatch = useDispatch()
	const totalCount = useSelector<AppStoreType, number>(state => state.packs.cardPacksTotalCount)
	const pageNumber = useSelector<AppStoreType, number>(state => state.packs.page)
	const pageCount = useSelector<AppStoreType, number>(state => state.packs.pageCount)
	const lastUpdate = useSelector<AppStoreType, number>(state => state.packs.lastUpdate)
	const cardsAmount = useSelector<AppStoreType, number>(state => state.packs.cardsAmount)
	const userId = useSelector<AppStoreType, string | null>(state => state.login._id)
	const whoisCard = useSelector<AppStoreType, string | ''>(state => state.packs.whoisCard)
	const searchByValue = useSelector<AppStoreType, string>(state => state.packs.searchByPacks)

	useEffect(() => {
		dispatch(setCardTC())
	}, [dispatch, pageNumber, pageCount, lastUpdate, cardsAmount, whoisCard,searchByValue])

	const packs = useSelector<AppStoreType, Array<PacksType>>(state => state.packs.cardPacks)

	const onCardsAmountSortChange = useCallback((rate: number) => {
		dispatch(sortPackCardsAmountAC(rate))
	}, [dispatch])
	const onLastUpdateSortChange = useCallback((rate: number) => {
		dispatch(sortPacksLastUpdateAC(rate))
	}, [dispatch])
	const onPageChange = useCallback((value: number) => {
		dispatch(setPacksPageNumber(value))
	}, [dispatch])
	const onPageCountChange = useCallback((value: string) => {
		dispatch(setPacksPageCount(+value))
	}, [dispatch])
	const onDeletePackHandler = useCallback((id: string) => {
		dispatch(deletePackTC(id))
	}, [dispatch])
	const myPacks = useCallback((text:string) => {
		if(!text.length){
			dispatch(searchByPacksAC(''))
			userId && dispatch(changeWhoisCardAC(userId))
		}
		userId && dispatch(changeWhoisCardAC(userId))
	}, [dispatch, userId])
	const allPacks = useCallback((text:string) => {
		if(!text.length) {
			dispatch(searchByPacksAC(''))
			dispatch(changeWhoisCardAC(''))
		}
		dispatch(changeWhoisCardAC(''))
	}, [dispatch])

	const changeTitlePack = (id:string,spanTitle:string) => {
			dispatch(updatePackTC(id,spanTitle))
	}

	const renderedPacks = packs.map(item => {
		return (
			<div key={item._id} className={s.divTableRow}>
				<div className={s.divTableCol}>
					<EditableSpan spanTitle={item.name} callback={changeTitlePack} packId={item._id}/>
				</div>
				<div className={s.divTableCol}>{item.cardsCount}</div>
				<div className={s.divTableCol}>{item.updated.slice(0, 10).split('-').reverse().join('.')}</div>
				<div className={s.divTableCol}>
					<NavLink to={PATH.CARDS}>Cards</NavLink>
				</div>
				<div>
					<div className={s.divTableCol}>
						{userId && item.user_id === userId &&
						<SuperButton
							onClick={() => {onDeletePackHandler(item._id)}}>Delete</SuperButton>
						}
					</div>
				</div>
			</div>
		)
	})
	return (
		<div className={s.divTableBlock}>
			<div className={s.divHeaderBlock}>
				<SearchContainer myPacks={myPacks} allPacks={allPacks} whoisCard={whoisCard}/>
			</div>
			<div className={s.divTable}>
				<div className={s.divTableRow}>
					<div className={s.divTableCol}>Name</div>
					<div className={s.divTableCol}>Cards count<SortingComponent onSortChange={onCardsAmountSortChange}/>
					</div>
					<div className={s.divTableCol}>Updated<SortingComponent onSortChange={onLastUpdateSortChange}/>
					</div>
					<div className={s.divTableCol}>Cards</div>
					<div className={s.divTableCol}>Actions</div>
				</div>
				{renderedPacks}
				<AddPackPage/>
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