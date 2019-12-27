import React, { useState } from 'react';
import './App.css';
import CreateCheckboxes from './CreateCheckboxes';
import Svg from './Svg';
import { reset } from './angles';
import generateCube from './generateCube';
import { verticesArray } from './vertices';
import { anglesArray } from './angles';
import generateMatrixes from './generateMatrixes';


function App() {
  const [numberOfDimensions, setNumberOfDimensions] = useState(2);
  const [amount, setAmount] = useState(1);
  const [cubeWithDimension, setCubeWithDimension] = useState(2);

  let number = numberOfDimensions;
  const changeNumber = (e) => {
    number = e.target.value;
  }
  const optionList = [];

  for (let i = 0; i < numberOfDimensions; i++) {
    optionList.push(i + 1);
  }

  const generateDimensions = () => {
    if (isNaN(number) 
    || +number < 0 
    || Math.trunc(+number) - +number !== 0) {
      alert('input positive integer number')
    } else {
      const checkboxes = Array.from(
        document.querySelectorAll('.checkbox')
      );

      for (let i in checkboxes) {
        checkboxes[i].checked = false;
      }

      setNumberOfDimensions(number);
      setAmount(number * (number - 1) / 2);
      setCubeWithDimension(number);
      document.querySelector(".select").value = "select dimension of cube";
    }
  }

  const resetAngles = () => {
    reset();
    const matrix = generateMatrixes(numberOfDimensions, anglesArray);
    generateCube(verticesArray, matrix, numberOfDimensions);
  }

  const dimensionOfCube = (e) => {
    if (!isNaN(e.target.value)) {
      setCubeWithDimension(+e.target.value);
    }
  }
  
  return (
    <div className="App">
      <button type='button' className="reset" onClick={resetAngles}>
        Reset angles
      </button>
      <input 
        type="text" 
        placeholder='input number of dimensions'
        className="input_dimension"
        onChange={changeNumber}
      />
      <button type='button' 
        className="generate-button" 
        onClick={generateDimensions}
      >
        Generate dimensions
      </button>

      <select onChange={ dimensionOfCube } className="select">
        <option>
          select dimension of cube
        </option>
        {
          optionList.map(number => {
            return (
            <option key={number} className="option">
              {number}
            </option>);
          })
        }
      </select>
      <CreateCheckboxes 
        dimensions={ amount } 
        number={ numberOfDimensions }
        DimensionOfCube={ cubeWithDimension }
      />
      <Svg 
        dimension={ numberOfDimensions } 
      />
    </div>
  );
}

export default App;
