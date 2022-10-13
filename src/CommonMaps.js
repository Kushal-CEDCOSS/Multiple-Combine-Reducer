import { addition, clear, division, multiplication, subtraction } from "./Actions"

export const mapDispatchToProps = (dispatch) => {
    return{
        Adding: (value1, value2) => dispatch(addition(value1, value2)),
        Subtracting: (value1, value2) => dispatch(subtraction(value1, value2)),
        Multiplying: (value1, value2) => dispatch(multiplication(value1, value2)),
        Dividing: (value1, value2) => dispatch(division(value1, value2)),
        Clearing: () => dispatch(clear()),
    }
}


export const mapStateToProps = (state) => {
    return {
        ...state,
    }
}