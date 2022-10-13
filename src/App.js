import "./App.css";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./CommonMaps";
import { useEffect, useState } from "react";

const defaultReducerStates = {
  AdditionReducer: false,
  SubtractionReducer: false,
  MultiplicationReducer: false,
  DivisionReducer: false,
  ClearReducer: false,
};

function App(props) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [elements, setElements] = useState(defaultReducerStates);
  const [res, setRes] = useState("");

  useEffect(()=>{
    Object.keys(elements).map(item => elements[item] ? setRes(props[item].result) : null)
  },[elements])

  return (
    <div className="App">
      <span>
        <input
          type="number"
          onChange={(e) => {
            setNumber1(Number(e.target.value));
          }}
        />
        <input
          type="number"
          onChange={(e) => {
            setNumber2(Number(e.target.value));
          }}
        />
      </span>
      <div className="buttonGroup">
        <button
          onClick={() => {
            props.Adding(number1, number2);
            setElements({ ...defaultReducerStates, AdditionReducer: true });
            setNumber1('');
            setNumber2('');
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            props.Subtracting(number1, number2);
            setElements({ ...defaultReducerStates, SubtractionReducer: true });
            setNumber1('');
            setNumber2('');
          }}
        >
          Subtract
        </button>
        <button
          onClick={() => {
            props.Multiplying(number1, number2);
            setElements({ ...defaultReducerStates, MultiplicationReducer: true });
            setNumber1('');
            setNumber2('');
          }}
        >
          Multiply
        </button>
        <button
          onClick={() => {
            props.Dividing(number1, number2);
            setElements({ ...defaultReducerStates, DivisionReducer: true });
            setNumber1('');
            setNumber2('');
          }}
        >
          Divide
        </button>
        <button
          onClick={() => {
            props.Clearing(number1, number2);
            setElements({ ...defaultReducerStates });
            setRes('');
            setNumber1('');
            setNumber2('');
          }}
        >
          Clear
        </button>
      </div>
      <h1>Answer : {res}</h1>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
