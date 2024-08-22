interface todo{
    userId:number,
    id:number,
    title: string,
    completed: boolean
}

export interface todos{
    todos:todo[]
}
