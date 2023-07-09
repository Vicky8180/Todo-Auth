

export const FetchUserTask=(data)=>{

    return {
        type:"FETCH",
        payload:data
    }
}
export const AddTaskInExisting=(data)=>{

    return {
        type:"ADD",
        payload:data
    }
}