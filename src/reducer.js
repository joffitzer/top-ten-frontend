let defaultState = {
    allLists: []
}

let reducer = (prevState=defaultState, action) => {
    switch(action.type){
        case 'LOADLIST': 
          return {...prevState, allLists: action.payload.lists}
        default: 
          return {...prevState}
    }
}

export default reducer;
