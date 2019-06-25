import * as actionType from './actionType';

export const mortgage = (item) => {
    return{
        type : actionType.MORTGAGE_DATA,
        item
    }
}
export const personalData = (item) => {
    return{
        type : actionType.PERSONAL_DATA,
        item
    }
}