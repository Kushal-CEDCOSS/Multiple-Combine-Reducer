const initialState = {
    result: '',
}

const AdditionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'Addition' : return {...state, result: Number(action.payload.val1 + action.payload.val2) }
        default : return state
    }
}

export default AdditionReducer;