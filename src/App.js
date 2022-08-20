import React, { useState, useEffect } from "react";
import "./App.css";
import CreateCheckboxes from "./CreateCheckboxes";
import Svg from "./Svg";
import generateFigure from "./generateFigure";
import generateFigureOrthography from "./generateFigureOrthography";
import { verticesArray } from "./vertices";
import generateMatrixes from "./generateMatrixes";
import vertices from "./vertices";
export let useKeyboard = false;

//The Bitruncated Tesseract
//cantellated tesseract
//truncated tesseract
//Rectified Tesseract
//Cantitruncated Tesseract
const specific3D = [
  "3D Icosahedron",
  "3D Truncated Tetrahedron",
  "3D Snub Cube",
  "3D Icosidodecahedron",
  "3D Truncated Icosahedron",
  "3D Rhombicosidodecahedron",
  "3D Truncated Dodecahedron",
  "3D Great Rhombicosidodecahedron",
  "3D Snub Dodecahedron"
];

const baseFigures = [
  "Symplex",
  "Octahedron",
  "Cube",
  "24-cell-analog",
  "120-cell-analog",
  "600-cell-analog",
  "Truncated Cube",
  "Rhombicuboctahedron",
  "Truncated Octahedron",
  "Cuboctahedron",
  "Great Rhombicuboctahedron"
];

function App() {
  const [numberOfDimensions, setNumberOfDimensions] = useState(2);
  const [amount, setAmount] = useState(1);
  const [dimensionOfFigure, setDimensionOfFigure] = useState(2);
  const [anglesArray, setAnglesArray] = useState([0]);
  const [activeRotations, setActiveRotations] = useState([]);
  const [figure, setFigure] = useState("Cube");
  const [transposeRotation, setTransposeRotation] = useState(false);
  const [orthography, setOrthography] = useState(false);
  const [displayVertices, setDisplayVertices] = useState(false);
  const [displayEdges, setDisplayEdges] = useState(true);
  const [displaySpecific3D, setDisplaySpecific3D] = useState(true);

  useEffect(() => {
    if (+dimensionOfFigure === 2 && specific3D.includes(figure)) {
      setFigure("Cube");
    }
  }, [dimensionOfFigure, figure]);

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
    const matrix = generateMatrixes(
      numberOfDimensions,
      copyAnglesArray,
      transposeRotation
    );
    if (orthography) {
      generateFigureOrthography(verticesArray, matrix, dimensionOfFigure);
    } else {
      generateFigure(
        verticesArray,
        matrix,
        numberOfDimensions,
        dimensionOfFigure
      );
    }
  };

  const dimensionOfCube = (e) => {
    if (!isNaN(e.target.value)) {
      vertices(numberOfDimensions, +e.target.value, figure);
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
        <div className="wrapper">
          <label className="using__mouse">
            <input
              type="checkbox"
              name="checkbox"
              onChange={useKeyboardChange}
            />
            <p>rotate by checking checkboxes and using w/s keys</p>
          </label>

          <label className="using__mouse">
            <input
              type="checkbox"
              name="checkbox 2"
              onChange={() => {
                setActiveRotations([]);
                setTransposeRotation(!transposeRotation);
              }}
              checked={transposeRotation}
            />
            <p>transpose rotation</p>
          </label>
          <label className="using__mouse">
            <input
              type="checkbox"
              name="checkbox 3"
              onChange={() => {
                setOrthography(!orthography);
              }}
              checked={orthography}
            />
            <p>orthography</p>
          </label>
        </div>
        <div className="wrapper">
          <label className="using__mouse">
            <input
              type="checkbox"
              name="checkbox 4"
              onChange={() => {
                setDisplayVertices(!displayVertices);
              }}
              checked={displayVertices}
            />
            <p>display vertices</p>
          </label>
          <label className="using__mouse">
            <input
              type="checkbox"
              name="checkbox 5"
              onChange={() => {
                setDisplayEdges(!displayEdges);
              }}
              checked={displayEdges}
            />
            <p>display edges</p>
          </label>
        </div>

        <div className="wrapper">
          <label className="using__mouse">
            {numberOfDimensions}D
            <select
              onChange={(e) => {
                vertices(numberOfDimensions, dimensionOfFigure, e.target.value);
                setFigure(e.target.value);
              }}
              className="select"
              value={figure}
            >
              {
                baseFigures.map((figure) => (
                  <option key={figure}>{figure}</option>
                ))
              }
              {displaySpecific3D && +numberOfDimensions >= 3
                ? specific3D.map((figure) => (
                    <option key={figure}>{figure}</option>
                  ))
                : null}
            </select>
          </label>

          {numberOfDimensions >= 3 ? (
            <label className="using__mouse">
              <input
                type="checkbox"
                name="specific 3D"
                onChange={() => {
                  setDisplaySpecific3D(!displaySpecific3D);
                }}
                checked={displaySpecific3D}
              />
              <p>display specific 3D figures</p>
            </label>
          ) : null}
        </div>
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
          transposeRotation={transposeRotation}
          orthography={orthography}
          dimensionOfFigure={dimensionOfFigure}
        />
        <Svg
          dimension={numberOfDimensions}
          anglesArray={anglesArray}
          figure={figure}
          dimensionOfFigure={dimensionOfFigure}
          transposeRotation={transposeRotation}
          orthography={orthography}
          displayEdges={displayEdges}
          displayVertices={displayVertices}
        />
      </div>
    </>
  );
}

export default App;
