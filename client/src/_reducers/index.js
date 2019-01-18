import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import todoLogReducer from './todoLogReducer';

export default combineReducers({
    todo: todoReducer,
    todoLog: todoLogReducer
});