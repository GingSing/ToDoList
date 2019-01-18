import { 
    GET_TODOLOGS_REQUEST,
    GET_TODOLOGS_SUCCESS,
    GET_TODOLOGS_FAILURE
} from '../_actions/types';

const initialState = { 
    todoLogs:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_TODOLOGS_REQUEST:
            return {
                ...state,
                gettingTodoLogs: true
            }
        case GET_TODOLOGS_SUCCESS:
            return {
                ...state,
                todoLogs: action.todoLogs,
                gettingTodoLogs: false
            }
        case GET_TODOLOGS_FAILURE:
            return {
                ...state,
                gettingTodoLogs: false
            }
        default:
            return state;
    }
}