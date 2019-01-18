import { 
    GET_TODOLOGS_FAILURE,
    GET_TODOLOGS_REQUEST,
    GET_TODOLOGS_SUCCESS
} from './types';
import { todoLogService } from '../_services';

export function getTodoLogs(){
    return dispatch => {
        dispatch(request());
        todoLogService.getTodoLogs()
            .then(todoLogs => {
                dispatch(success(todoLogs));
            })
            .catch(err => {
                dispatch(failure());
                console.log(err);
            })
    }
    function request(){ return { type: GET_TODOLOGS_REQUEST }}
    function success(todoLogs){ return { type: GET_TODOLOGS_SUCCESS, todoLogs }}
    function failure(){ return { type: GET_TODOLOGS_FAILURE }}
}