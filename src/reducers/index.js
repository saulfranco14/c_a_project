import testReducer from './test_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    test: testReducer
});

export default rootReducer;