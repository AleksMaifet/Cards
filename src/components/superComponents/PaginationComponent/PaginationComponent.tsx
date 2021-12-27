import React from "react";
import s from "./PaginationComponent.module.css"
import arrowRight from './../../../images/Path 2 Copy 1.svg'
import arrowLeft from './../../../images/Path 2 Copy 2.svg'

type PaginationPropsType = {
	totalCount: number
	pageCount: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
	disable:boolean

}
export const PaginationComponent: React.FC<PaginationPropsType> = React.memo((props) => {

	const onNextPageCallback = () => {
		props.onPageChanged(props.currentPage + 1)
	}
	const onPreviousPageCallback = () => {
		props.onPageChanged(props.currentPage - 1)
	}
	let pagesAmount = Math.ceil(props.totalCount / props.pageCount);
	let pages = [];
	for (let i = 1; i <= pagesAmount; i++) {
		pages.push(i)
	}
	let pagesForRender = [1];
	for (let i = props.currentPage; i <= props.currentPage + 5; i++) {
		if (pagesForRender[0] === i) continue;
		if (i > pagesAmount) break;
		pagesForRender.push(i)
	}

	if (props.currentPage !== pagesAmount - 1 && props.currentPage !== pagesAmount) {
		pagesForRender = [...pagesForRender, pagesAmount - 1, pagesAmount];
	}

	return (
		<div className={s.selectedPageWrapper}>
			{1 !== props.currentPage ? <img style={{cursor:'pointer',width:'30px',height:'30px'}} src={arrowLeft} onClick={onPreviousPageCallback}/> : null}
			{pagesForRender.map((p,i) => {
				return <div className={s.Page}><button style={{margin:'5px',width:'40px',cursor:'pointer'}} disabled={props.disable} key={i}
					onClick={() => {
						props.onPageChanged(p)
					}}
					className={props.currentPage === p ? s.selectedPage : ''}>
                            {p}
                        </button></div>
			})}
			{props.currentPage !== pagesAmount ? <img style={{cursor:'pointer',width:'30px',height:'30px'}} src={arrowRight} onClick={onNextPageCallback}/> : null}
		</div>
	)
})