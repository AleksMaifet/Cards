import React from "react";
import s from "./PaginationComponent.module.css"
import SuperButton from "../c2-SuperButton/SuperButton";

type PaginationPropsType = {
	totalCount: number
	pageCount: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void

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
			{1 !== props.currentPage ? <SuperButton onClick={onPreviousPageCallback}>Previous</SuperButton> : null}
			{pagesForRender.map((p,i) => {
				return <div className={s.Page}><span key={i}
					onClick={() => {
						props.onPageChanged(p)
					}}
					className={props.currentPage === p ? s.selectedPage : s.page}>
                            {p}
                        </span></div>
			})}
			{props.currentPage !== pagesAmount ? <SuperButton onClick={onNextPageCallback}>Next</SuperButton> : null}
		</div>
	)
})