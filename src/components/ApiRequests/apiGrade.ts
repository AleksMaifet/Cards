import axios from "axios";

const initial = axios.create(
    {
        baseURL:'https://neko-back.herokuapp.com/2.0/cards/grade',
        withCredentials:true,
    }
)
export const setGrade = (grade: string, card_id: string) => {
    return initial.put('', {grade, card_id})
}