import { 
    ADD_TODO_REQUEST, 
    ADD_TODO_SUCCESS, 
    ADD_TODO_FAILURE, 
    REMOVE_TODO, 
    CHANGE_TODO_REQUEST, 
    CHANGE_TODO_SUCCESS, 
    CHANGE_TODO_FAILURE, 
    GET_TODOS_REQUEST, 
    GET_TODOS_SUCCESS, 
    GET_TODOS_FAILURE
} from './types';
import { todoService } from '../_services';

export function addTodo(todo){
    return dispatch => {
        dispatch(request());
        todoService.addTodo(todo)
            .then(todos => {
                dispatch(success(todos));
            })
            .catch(err => {
                dispatch(failure());
                console.log(err);
            })
    }
    function request(){ return { type: ADD_TODO_REQUEST }}
    function success(todos){ return { type:ADD_TODO_SUCCESS, todos }}
    function failure(){ return { type: ADD_TODO_FAILURE }}
}

export function removeTodo(id){
    return dispatch => {
        todoService.removeTodo(id)
            .then(todos => {
                dispatch(success(todos));
            })
            .catch(err => {
                console.log(err);
            });
    }
    function success(todos){ return { type: REMOVE_TODO, todos }}
}

export function changeTodo(id, todo){
    return dispatch => {
        dispatch(request(id));
        todoService.changeTodo(id, todo)
            .then(todos => {
                dispatch(success(todos));
            })
            .catch(err => {
                dispatch(failure());
                console.log(err);
            })
    }
    function request(id){ return { type: CHANGE_TODO_REQUEST, id }}
    function success(todos){ return { type: CHANGE_TODO_SUCCESS, todos }}
    function failure(){ return { type: CHANGE_TODO_FAILURE }}
}

export function getTodos(){
    return dispatch => {
        dispatch(request());
        todoService.getTodos()
            .then((todos) => {
                dispatch(success(todos));
            })
            .catch(err => {
                dispatch(failure());
                console.log(err);
            });
    }
    function request(){ return { type: GET_TODOS_REQUEST }}
    function success(todos){ return { type: GET_TODOS_SUCCESS, todos }}
    function failure(){ return { type: GET_TODOS_FAILURE }}
}