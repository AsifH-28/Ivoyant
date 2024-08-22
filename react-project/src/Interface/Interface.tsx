export interface todo{
    userId:number,
    id:number,
    title: string,
    completed: boolean
}

export interface todos{
    todos:todo[]
}

export const url ="https://jsonplaceholder.typicode.com/todos/";