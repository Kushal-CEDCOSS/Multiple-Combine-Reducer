const initialState = {
    result: '',
}

const MultiplicationReducer = (state = initialState, action) => {
    switch(action.type){
        case 'Multiplication' : return {...state, result: action.payload.val1 * action.payload.val2 }
        default : return state
    }
}

export default MultiplicationReducer;