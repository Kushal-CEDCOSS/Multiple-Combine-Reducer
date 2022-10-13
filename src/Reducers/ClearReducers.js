const initialState = {
    result: '',
}

const ClearReducer = (state = initialState, action) => {
    switch(action.type){
        case 'Clear' : return {...state, result: '' }
        default : return state
    }
}

export default ClearReducer;