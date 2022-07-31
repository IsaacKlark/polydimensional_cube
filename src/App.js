import React, { useState } from "react";
import "./App.css";
import CreateCheckboxes from "./CreateCheckboxes";
import Svg from "./Svg";
import generateFigure from "./generateFigure";
import { verticesArray } from "./vertices";
import generateMatrixes from "./generateMatrixes";

export let useKeyboard = false;

function App() {
  const [numberOfDimensions, setNumberOfDimensions] = useState(2);
  const [amount, setAmount] = useState(1);
  const [dimensionOfFigure, setDimensionOfFigure] = useState(2);
  const [anglesArray, setAnglesArray] = useState([0]);
  const [activeRotations, setActiveRotations] = useState([]);
  const [figure, setFigure] = useState("hypercube");

  let number = numberOfDimensions;
  const changeNumber = (e) => {
    number = e.target.value;
  };
  const optionList = [];

  for (let i = 0; i < numberOfDimensions; i++) {
    optionList.push(i + 1);
  }

  const generateDimensions = () => {
    if (isNaN(number) || +number < 0 || Math.trunc(+number) - +number !== 0) {
      alert("input positive integer number");
    } else {
      const checkboxes = Array.from(document.querySelectorAll(".checkbox"));

      for (let i in checkboxes) {
        checkboxes[i].checked = false;
      }

      setActiveRotations([]);
      setNumberOfDimensions(number);
      setAmount((number * (number - 1)) / 2);
      setDimensionOfFigure(number);
      document.querySelector(".select").value = `select dimension of ${figure}`;
    }
  };

  const resetAngles = () => {
    const copyAnglesArray = [...anglesArray].map((angle) => 0);

    setAnglesArray(copyAnglesArray);
    setActiveRotations([]);
    const matrix = generateMatrixes(numberOfDimensions, copyAnglesArray);
    generateFigure(verticesArray, matrix, numberOfDimensions, figure);
  };

  const dimensionOfCube = (e) => {
    if (!isNaN(e.target.value)) {
      setDimensionOfFigure(+e.target.value);
    }
  };

  const useKeyboardChange = () => {
    if (useKeyboard) {
      useKeyboard = false;
    } else {
      useKeyboard = true;
    }
  };

  return (
    <>
      <div className="using__mouse-wrap">
        <label className="using__mouse">
          <input type="checkbox" name="checkbox" onChange={useKeyboardChange} />
          rotate by checking checkboxes and using w/s keys
        </label>
        <label className="using__mouse">
          {numberOfDimensions}D
          <select
            onChange={(e) => setFigure(e.target.value)}
            className="select"
            value={figure}
          >
            <option>polytop</option>
            <option>hypercube</option>
            <option>octahedron</option>
          </select>
        </label>
      </div>
      <div className="App">
        <button type="button" className="reset" onClick={resetAngles}>
          Reset angles
        </button>
        <input
          type="text"
          placeholder="input number of dimensions"
          className="input_dimension"
          onChange={changeNumber}

        />
        <button
          type="button"
          className="generate-button"
          onClick={generateDimensions}
        >
          Generate dimensions
        </button>

        <select onChange={dimensionOfCube} className="select">
          <option>select dimension of {figure}</option>
          {optionList.map((number) => {
            return (
              <option key={number} className="option">
                {number}
              </option>
            );
          })}
        </select>
        <CreateCheckboxes
          dimensions={amount}
          number={numberOfDimensions}
          DimensionOfFigure={dimensionOfFigure}
          anglesArray={anglesArray}
          setAnglesArray={setAnglesArray}
          activeRotations={activeRotations}
          setActiveRotations={setActiveRotations}
          figure={figure}
        />
        <Svg
          dimension={numberOfDimensions}
          anglesArray={anglesArray}
          figure={figure}
          dimensionOfFigure={dimensionOfFigure}
        />
      </div>
    </>
  );
}

export default App;
