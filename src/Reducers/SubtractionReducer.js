const initialState = {
    result: '',
}

const SubtractionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'Subtraction' : return {...state, result: action.payload.val1 - action.payload.val2 }
        default : return state
    }
}

export default SubtractionReducer;