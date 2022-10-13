const initialState = {
    result: '',
}

const DivisionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'Division' : return {...state, result: action.payload.val1 / action.payload.val2 }
        default : return state
    }
}

export default DivisionReducer;