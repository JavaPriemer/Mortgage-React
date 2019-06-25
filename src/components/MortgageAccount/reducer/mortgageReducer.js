import * as actionType from '../action/actionType';

const initialState = [];

export const mortgageScreenOne = (state=initialState , action) => {
    switch(action.type){
        case actionType.MORTGAGE_DATA :
            return action.item;
        default : 
            return state;
    }
}

export const mortgageScreenTwo = (state=initialState , action) => {
    switch(action.type){
        case actionType.PERSONAL_DATA :
            return action.item;
        default : 
            return state;
    }
}