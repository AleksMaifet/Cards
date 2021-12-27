import React, {useCallback, useEffect, useRef} from "react";
import s from "./Packs.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../store/store";
import {
	changeWhoisCardAC,
	deletePackTC,
	setPacksPageCount,
	setPacksPageNumber,
	setPacksTC,
	sortPackCardsAC,
	updatePackTC
} from "../../Reducers/PacksReducer";
import {SortingComponent} from "../../superComponents/SortingComponent/SortingComponent";
import SuperSelect from "../../superComponents/c5-SuperSelect/SuperSelect";
import {SearchContainer} from "./SearchContainer/SearchContainer";
import {AddPackPage} from "./AddPackPage/addPackPage";
import {EditableSpan} from "./EditableSpan/EditableSpan";
import {NavLink} from "react-router-dom";
import {PackType} from "../../ApiRequests/apiPacks";
import {IsLoadType} from "../../Reducers/AppReducer";
import {AuthLoad} from "../LoadPage/AuthLoad/AuthLoad";
import {ShowPackBar} from "../ShowPacksBar/ShowPacksBar";
import {DeletePageContainer} from "../DeletePage/DeletePage";
import {PaginationComponent} from "../../superComponents/PaginationComponent/PaginationComponent";


export const Packs =() => {
	const dispatch = useDispatch()
	const totalCount = useSelector<AppStoreType, number>(state => state.packs.cardPacksTotalCount)
	const pageNumber = useSelector<AppStoreType, number>(state => state.packs.page)
	const pageCount = useSelector<AppStoreType, number>(state => state.packs.pageCount)
	const sortPacks = useSelector<AppStoreType, string>(state => state.packs.sortPacksCards)
	const userId = useSelector<AppStoreType, string | null>(state => state.login._id)
	const whoisCard = useSelector<AppStoreType, string | ''>(state => state.packs.whoisCard)
	const searchByValue = useSelector<AppStoreType, string>(state => state.packs.searchByPacks)
	const isPackLoad = useSelector<AppStoreType, IsLoadType>(state => state.packs.isPackLoad)
	const packs = useSelector<AppStoreType, Array<PackType>>(state => state.packs.cardPacks)
	const minCardsCountUser = useSelector<AppStoreType, number>(state => state.packs.minCardsCountUser)
	const maxCardsCountUser = useSelector<AppStoreType, number>(state => state.packs.maxCardsCountUser)


	useEffect(() => {
		dispatch(setPacksTC())
	}, [dispatch, pageNumber, pageCount, sortPacks, whoisCard, searchByValue,minCardsCountUser,maxCardsCountUser])


	const onCardsAmountSortChange = useCallback((rate: number) => {
		dispatch(sortPackCardsAC(`${rate}cardsCount`))
		dispatch(setPacksPageNumber(1))
	}, [dispatch])
	const onLastUpdateSortChange = useCallback((rate: number) => {
		dispatch(sortPackCardsAC(`${rate}updated`))
		dispatch(setPacksPageNumber(1))
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
	const myPacks = useCallback(() => {
		userId && dispatch(changeWhoisCardAC(userId))
		dispatch(setPacksPageNumber(1))
	}, [dispatch, userId])
	const allPacks = useCallback(() => {
		dispatch(changeWhoisCardAC(''))
		dispatch(setPacksPageNumber(1))
	}, [dispatch])

	const changeTitlePack = useCallback((id: string, spanTitle: string) => {
		dispatch(updatePackTC(id, spanTitle))
	}, [dispatch])




	const renderedPacks = packs.map(item => {
		const updated = new Date(item.updated).toLocaleDateString()
		return (
			<div key={item._id} className={s.divTableRow}>
				<div className={s.divTableCol}>
					<EditableSpan isMyTitle={item.user_id === userId} spanTitle={item.name} callback={changeTitlePack}
												packId={item._id}/>
				</div>
				<div className={s.divTableCol}>{item.cardsCount}</div>
				<div className={s.divTableCol}>{updated}</div>
				<div className={s.divTableCol}>
					<NavLink to={`/cards/${item._id}`}>Cards</NavLink>
				</div>
				<div>
					<div className={s.divTableCol}>
						{userId && item.user_id === userId &&
						<DeletePageContainer _id={item._id} onDeletePackHandler={onDeletePackHandler} title={item.name}/>
						}
						<NavLink to={`/learn/${item._id}`}>Learn!</NavLink>
					</div>
				</div>


			</div>
		)
	})
	return (
		<div className={s.divTableBlock}>
			<ShowPackBar myPacks={myPacks} allPacks={allPacks} whoisCard={whoisCard} disabled={isPackLoad === 'loading'}/>
			<div className={s.tableWrapper}>
				<h1 className={s.divPaclTitle}>Packs list</h1>
				<div className={s.divHeaderBlock}>
					<div>
						<SearchContainer/>
					</div>
					<div>
						<AddPackPage disable={isPackLoad === 'loading'}/>
					</div>
				</div>
				<div className={s.divTable}>
					<div className={s.divTableRow}>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Name</span></div>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Cards count</span>
							<SortingComponent disable={isPackLoad === 'loading'}
																onSortChange={onCardsAmountSortChange}
							/>
						</div>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Updated</span>
							<SortingComponent disable={isPackLoad === 'loading'}
																onSortChange={onLastUpdateSortChange}/>
						</div>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Cards</span></div>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Actions</span></div>
					</div>
					{
						isPackLoad === 'loading' ?
							<AuthLoad/>
							:
							renderedPacks
					}
				</div>
				<div>
					<div className={s.divSelectBlock}>
						<SuperSelect options={[10, 15, 20]} onChangeOption={onPageCountChange}/>
					</div>
					<div style={{margin:'30px'}}>
						{
							packs.length &&
							<PaginationComponent disable={isPackLoad === 'loading'} totalCount={totalCount} pageCount={pageCount} currentPage={pageNumber}
																	 onPageChanged={onPageChange}/>
						}
					</div>
				</div>
			</div>
		</div>
	)
}