export const todoLogService = {
    getTodoLogs
}

function getTodoLogs(){
    return fetch('/logs/getTodoLogs')
        .then(res => res.json())
        .then(data => { return data })
        .catch(err => { throw new Error(err)});
}
