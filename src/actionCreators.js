const LOADLIST = "LOADLIST"

const listLoader = (lists) =>({type: LOADLIST, payload: { lists }})


export { listLoader }