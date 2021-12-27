export const randomize = <T>(array: Array<T>): Array<T> => {
    const res: Array<T> = [];
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [res[i], res[j]] = [array[j], array[i]];
    }
    return res;
}