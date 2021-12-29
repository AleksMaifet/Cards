import React, {useCallback, useEffect} from "react";
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
import {AuthLoad} from "../LoadPage/AuthLoad/AuthLoad";
import {ShowPackBar} from "../ShowPacksBar/ShowPacksBar";
import {DeletePageContainer} from "../DeletePage/DeletePage";
import {PaginationComponent} from "../../superComponents/PaginationComponent/PaginationComponent";
import {getPacks} from "../../store/selectors/getPacks";
import {PATH} from "../../RoutesBlock/RoutesBlock";


export const Packs =() => {
	const dispatch = useDispatch()
	const userId = useSelector<AppStoreType, string | null>(state => state.login._id)
	const packs = useSelector(getPacks)
	const isPackLoad = packs.isPackLoad === 'loading'


	useEffect(() => {
		dispatch(setPacksTC())
	}, [dispatch, packs.page, packs.pageCount, packs.sortPacksCards ,packs.whoisCard, packs.searchByPacks, packs.minCardsCountUser,packs.maxCardsCount,])


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




	const renderedPacks = packs.cardPacks.map(item => {
		const updated = new Date(item.updated).toLocaleDateString()
		const learn = item.cardsCount > 0
		return (
			<div key={item._id} className={s.divTableRow}>
				<div className={s.divTableCol}>
					<EditableSpan isMyTitle={item.user_id === userId} spanTitle={item.name} callback={changeTitlePack}
												packId={item._id}/>
				</div>
				<div className={s.divTableCol}>{item.cardsCount}</div>
				<div className={s.divTableCol}>{updated}</div>
				<div className={s.divTableCol}>
					<NavLink to={`${PATH.CARDS}/${item._id}`}>Cards</NavLink>
				</div>
				<div>
					<div className={s.divTableCol}>
						{userId && item.user_id === userId &&
						<DeletePageContainer _id={item._id} onDeletePackHandler={onDeletePackHandler} title={item.name}/>
						}
						{learn && <NavLink to={`/learn/${item._id}`}>Learn!</NavLink>}
					</div>
				</div>
			</div>
		)
	})

	return (
		<div className={s.divTableBlock}>
			<ShowPackBar myPacks={myPacks} allPacks={allPacks} whoisCard={packs.whoisCard} disabled={isPackLoad}/>
			<div className={s.tableWrapper}>
				<h1 className={s.divPaclTitle}>Packs list</h1>
				<div className={s.divHeaderBlock}>
					<div>
						<SearchContainer/>
					</div>
					<div>
						<AddPackPage disable={isPackLoad}/>
					</div>
				</div>
				<div className={s.divTable}>
					<div className={s.divTableRow}>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Name</span></div>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Cards count</span>
							<SortingComponent disable={isPackLoad}
																onSortChange={onCardsAmountSortChange}
							/>
						</div>
						<div className={s.divTableCol}><span style={{fontWeight:'bolder'}}>Updated</span>
							<SortingComponent disable={isPackLoad}
																onSortChange={onLastUpdateSortChange}/>
						</div>
						<div className={s.divTableCol}><span style={{fontWeight: 'bolder'}}>Cards</span></div>
						<div className={s.divTableCol}><span style={{fontWeight: 'bolder'}}>Actions</span></div>
					</div>
					{
						isPackLoad ?
							<AuthLoad/>
							:
							renderedPacks
					}
				</div>
				<div>
					<div className={s.divSelectBlock}>
						<SuperSelect options={[10, 15, 20]} onChangeOption={onPageCountChange}/>
					</div>
					<div style={{margin: '30px'}}>
						{
							packs.cardPacks.length &&
							<PaginationComponent disable={isPackLoad}
																	 totalCount={packs.cardPacksTotalCount}
																	 pageCount={packs.pageCount}
																	 currentPage={packs.page}
																	 onPageChanged={onPageChange}
							/>
						}
					</div>
				</div>
			</div>
		</div>
	)
}