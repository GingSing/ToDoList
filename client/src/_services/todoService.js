export const todoService = {
    addTodo,
    removeTodo,
    changeTodo,
    getTodos
}

function addTodo(todo){
    let fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todo })
    };
    return fetch(`/api/addTodo`, fetchOptions)
        .then(res => res.json())
        .then(data => { return data })
        .catch(err => { throw new Error(err) });
}

function removeTodo(id){
    let fetchOptions = { 
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    };
    return fetch(`/api/removeTodo`, fetchOptions)
        .then(res => res.json())
        .then(data => { return data })
        .catch(err => { throw new Error(err) });
}

function changeTodo(id, newTodo){
    let fetchOptions = { 
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, newTodo })
    };
    return fetch(`/api/changeTodo`, fetchOptions)
        .then(res => res.json())
        .then(data => { return data })
        .catch(err => { throw new Error(err) });
}

function getTodos(){
    return fetch(`/api/getTodos`)
        .then(res => res.json())
        .then(data => { return data })
        .catch(err => { throw new Error(err) });
}