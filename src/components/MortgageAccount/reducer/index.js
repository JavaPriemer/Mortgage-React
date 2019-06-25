import {combineReducers} from 'redux';
import {mortgageScreenOne ,mortgageScreenTwo} from './mortgageReducer';

const rootReducer = combineReducers({
    mortgageScreenOneData :mortgageScreenOne,
    mortgageScreenTwoData : mortgageScreenTwo
})

export default rootReducer;