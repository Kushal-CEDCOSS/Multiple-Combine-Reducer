import AdditionReducer from "./AdditionReducer";
import SubtractionReducer from "./SubtractionReducer";
import MultiplicationReducer from "./MultiplicationReducer";
import DivisionReducer from "./DivisionReducer";
import ClearReducer from "./ClearReducers"; 
import { combineReducers } from 'redux';


const rootReducer = combineReducers({AdditionReducer, SubtractionReducer, MultiplicationReducer, DivisionReducer, ClearReducer});

export default rootReducer;