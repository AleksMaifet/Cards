export const RatingFunction =(num:number)=> {
		const ratingArray:Array<number> = []
		for (let i = 0; i < num; i++) {
			ratingArray.push(i)
		}
		return ratingArray
}