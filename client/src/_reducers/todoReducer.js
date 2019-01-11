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
} from '../_actions/types';

const initialState = { 
    todos:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case ADD_TODO_REQUEST:
            return {
                ...state,
                addingTodo: true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                addingTodo: false,
                todos: action.todos
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                addingTodo: false
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: action.todos
            }
        case CHANGE_TODO_REQUEST:
            return {
                ...state,
                changingTodoId: action.id
            }
        case CHANGE_TODO_SUCCESS:
            return {
                ...state,
                changingTodoId: "",
                todos: action.todos
            }
        case CHANGE_TODO_FAILURE:
            return {
                ...state,
                changingTodoId: ""
            }
        case GET_TODOS_REQUEST:
            return {
                ...state,
                gettingTodos: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                gettingTodos: false,
                todos: action.todos
            }
        case GET_TODOS_FAILURE:
            return {
                ...state,
                gettingTodos: false
            }
        default:
            return state;
    }
}