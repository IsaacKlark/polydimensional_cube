import React, { useState } from "react";
import "./App.css";
import CreateCheckboxes from "./CreateCheckboxes";
import Svg from "./Svg";
import generateCube from "./generateCube";
import { verticesArray } from "./vertices";
import generateMatrixes from "./generateMatrixes";

export let useMouse = false;

function App() {
  const [numberOfDimensions, setNumberOfDimensions] = useState(2);
  const [amount, setAmount] = useState(1);
  const [cubeWithDimension, setCubeWithDimension] = useState(2);
  const [anglesArray, setAnglesArray] = useState([0]);
  const [activeRotations, setActiveRotations] = useState([]);

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
      setCubeWithDimension(number);
      document.querySelector(".select").value = "select dimension of cube";
    }
  };

  const resetAngles = () => {
    const copyAnglesArray = [...anglesArray].map((angle) => 0);
    
    setAnglesArray(copyAnglesArray);
    setActiveRotations([]);
    const matrix = generateMatrixes(numberOfDimensions, copyAnglesArray);
    generateCube(verticesArray, matrix, numberOfDimensions);
  };

  const dimensionOfCube = (e) => {
    if (!isNaN(e.target.value)) {
      setCubeWithDimension(+e.target.value);
    }
  };

  const useMouseChange = () => {
    if (useMouse) {
      useMouse = false;
    } else {
      useMouse = true;
    }
  };

  return (
    <>
      <div className="using__mouse-wrap">
        <label className="using__mouse">
          <input type="checkbox" name="checkbox" onChange={useMouseChange} />
          rotate by using mouse
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
          <option>select dimension of cube</option>
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
          DimensionOfCube={cubeWithDimension}
          anglesArray={anglesArray}
          setAnglesArray={setAnglesArray}
          activeRotations={activeRotations}
          setActiveRotations={setActiveRotations}
        />
        <Svg dimension={numberOfDimensions} anglesArray={anglesArray} />
      </div>
    </>
  );
}

export default App;
