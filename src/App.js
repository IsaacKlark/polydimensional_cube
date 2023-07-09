import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import CreateCheckboxes from "./CreateCheckboxes";
import Svg from "./Svg";
import vertices, {
  setModified,
  setPolygonsArray,
  setVerticesArray,
} from "./vertices";
import TextField from "@mui/material/TextField";
import { CustomAutoComplete, CustomInput } from "./styles";
import Button from "@mui/material/Button";
import Instruction from "./Instruction";
import Modificators from "./Modificators";

export let useKeyboard = false;

const specific3D = [
  "3D Icosahedron",
  "3D Truncated Tetrahedron",
  "3D Snub Cube",
  "3D Icosidodecahedron",
  "3D Truncated Icosahedron",
  "3D Rhombicosidodecahedron",
  "3D Truncated Dodecahedron",
  "3D Great Rhombicosidodecahedron",
  "3D Snub Dodecahedron",
  "3D Pentagonal Antiprism",
  "3D Hexagonal Antiprism",
  "3D Heptagonal Antiprism",
  "3D Octagonal Antiprism",
  "3D Decagonal Antiprism",
];

const specific4D = [
  "4D Rectified 5-cell",
  "4D Bitruncated 5-cell",
  "4D Runcinated 5-cell",
  "4D Cantellated 5-cell",
  // "4D Truncated 5-cell",
  "4D Runcitruncated 5-cell",
  "4D Cantitruncated 5-cell",
  "4D Omnitruncated 5-cell",
  "4D Omnitruncated 24-cell",
  "4D Snub 24-cell",
  "4D Rectified 600-cell",
  // "4D Truncated 600-cell",
  "4D Rectified 120-cell",
  // "4D Cantellated 600-cell",
  "4D Bitruncated 120-cell",
  // "4D Cantitruncated 600-cell",
  "4D Runcinated 120-cell",
  "4D Cantellated 120-cell",
  // "4D Runcitruncated 600-cell",
  // "4D Truncated 120-cell",
  "4D Runcitruncated 120-cell",
  "4D Cantitruncated 120-cell",
  // "4D Omnitruncated 120-cell",
  "4D Cube atop Icosahedron",
  "4D Cube atop Cuboctahedron",
  "4D Truncated Tetrahedral Cupoliprism",
  "4D Tetrahedral Canticupola",
  "4D Square Magnabicupolic Ring",
  "4D Octahedron atop Rhombicuboctahedron",
  "4D Cuboctahedron atop Truncated Cube",
  "4D Bilunabirotunda Pseudopyramid",
  "4D Tetrahedral Ursachoron",
  "4D Octahedral Ursachoron",
  // "4D Tetrahedral Magnaursachoron",
  // "4D Klein bottle"
];

const baseFigures = [
  "Symplex",
  "Octahedron",
  "Cube",
  "24-Сell",
  "120-Сell",
  "600-Сell",
  // "Truncated Cube",
  "Rhombicuboctahedron",
  "Truncated Octahedron",
  "Cuboctahedron",
  "Great Rhombicuboctahedron",
  "Triangle Prism",
  "Pentagon Prism",
  "Hexahonal Prism",
  "Heptagonal Prism",
  "Octagonal Prism",
  "Decagonal Prism",
  "Cubinder",
  "Sphere",
  "Clifford Torus",
  "Torus",
  "Cylinder",
  "Cone",
  // "Truncated 16-cell",
  "Runcinated Tesseract",
  "Runcitruncated 16-cell",
  "Runcitruncated Tesseract",
  "Omnitruncated Tesseract",
  "Rectified 24-cell",
  "Bitruncated 24-cell",
  "Runcinated 24-cell",
  "Cantellated 24-cell",
  "Truncated 24-cell",
  "Runcitruncated 24-cell",
  "Cantitruncated 24-cell",
  "Square pyramid",
  "Pentagonal pyramid",
  "Axes",
  "Cube Antiprism",
];

const segmentedFigures = [
  "Sphere",
  "Clifford Torus",
  "Torus",
  "Cubinder",
  "Cylinder",
  "Cone",
];

function App() {
  const [numberOfDimensions, setNumberOfDimensions] = useState(4);
  const [amount, setAmount] = useState(6);
  const [dimensionOfFigure, setDimensionOfFigure] = useState(4);
  const [activeRotations, setActiveRotations] = useState([]);
  const [figure, setFigure] = useState("Cube");
  const [orthography, setOrthography] = useState(false);
  const [displayVertices, setDisplayVertices] = useState(false);
  const [displayFaces, setDisplayFaces] = useState(true);
  const [displayEdges, setDisplayEdges] = useState(true);
  const [displaySpecific3D, setDisplaySpecific3D] = useState(true);
  const [displaySpecific4D, setDisplaySpecific4D] = useState(true);
  const [perspective3D, setPerspective3D] = useState(350);
  const [perspectiveND, setPerspectiveND] = useState(150);
  const [scale, setScale] = useState(1);
  const [originalVerticesArray, setOriginalVerticesArray] = useState([]);
  const [originalLinesArray, setOriginalLinesArray] = useState([]);
  const [originalPolygonsArray, setOriginalPolygonsArray] = useState([]);
  const [segments, setSegments] = useState(21);
  const [optionsFigures, setOptionsFigures] = useState([...baseFigures]);
  const [numberValue, setNumberValue] = useState(4);
  const [figureDimension, setFigureDimension] = useState(4);
  const [reset, setReset] = useState(false);
  const [shadow, setShadow] = useState(true);
  const [shadowValue, setShadowValue] = useState(520);
  const [figureColor, setFigureColor] = useState([255, 255, 255]);
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  useEffect(() => {
    if (+dimensionOfFigure < 3 && specific3D.includes(figure)) {
      setFigure("Cube");
    }
    if (+dimensionOfFigure < 4 && specific4D.includes(figure)) {
      setFigure("Cube");
    }
  }, [dimensionOfFigure, figure]);

  const optionList = [];

  for (let i = 0; i < numberOfDimensions; i++) {
    optionList.push(i + 1);
  }

  const generateDimensions = useCallback(() => {
    setModified(false);
    if (
      isNaN(numberValue) ||
      +numberValue < 0 ||
      Math.trunc(+numberValue) - +numberValue !== 0
    ) {
      alert("input positive integer number");
    } else {
      const checkboxes = Array.from(document.querySelectorAll(".checkbox"));

      for (let i in checkboxes) {
        checkboxes[i].checked = false;
      }

      setActiveRotations([]);
      setNumberOfDimensions(numberValue);
      setAmount((numberValue * (numberValue - 1)) / 2);
      setDimensionOfFigure(numberValue);
      if (document.querySelector(".select")) {
        document.querySelector(
          ".select"
        ).value = `select dimension of ${figure}`;
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [figure, numberValue]);

  const resetAngles = useCallback(() => {
    setReset(true);
    setActiveRotations([]);
    setModified(false);

    vertices(
      numberOfDimensions,
      dimensionOfFigure,
      figure,
      scale,
      setOriginalVerticesArray,
      segments
    );

    setTimeout(() => {
      const svg = document.querySelector(".svg");
      svg.style.backgroundColor = backgroundColor;
    }, 0);
  }, [
    numberOfDimensions,
    dimensionOfFigure,
    figure,
    scale,
    segments,
    backgroundColor,
  ]);

  const dimension = useCallback(
    (value) => {
      if (!isNaN(value)) {
        vertices(
          numberOfDimensions,
          +value,
          figure,
          scale,
          setOriginalVerticesArray,
          segments
        );
        setDimensionOfFigure(+value);
      }
    },
    [figure, numberOfDimensions, scale, segments]
  );

  const changeFigure = useCallback(
    (value) => {
      setPolygonsArray([]);
      setModified(false);
      if (!segmentedFigures.includes(value)) {
        vertices(
          numberOfDimensions,
          dimensionOfFigure,
          value,
          scale,
          setOriginalVerticesArray,
          segments
        );
        setFigure(value);
      } else {
        let segments = +prompt("Please, input amount of segments", 14) || 4;
        if (value === "Sphere" && segments % 2 !== 0) segments += 1;
        vertices(
          numberOfDimensions,
          dimensionOfFigure,
          value,
          scale,
          setOriginalVerticesArray,
          segments
        );
        setSegments(segments);
        setFigure(value);
      }
      resetAngles();
    },
    [
      dimensionOfFigure,
      numberOfDimensions,
      resetAngles,
      scale,
      segments,
      backgroundColor,
    ]
  );

  useEffect(() => {
    let copyOptions = [...baseFigures];
    if (displaySpecific3D && +numberOfDimensions >= 3) {
      copyOptions = [...copyOptions, ...specific3D];
    }
    if (displaySpecific4D && +numberOfDimensions >= 4) {
      copyOptions = [...copyOptions, ...specific4D];
    }

    setOptionsFigures(copyOptions);
  }, [displaySpecific3D, numberOfDimensions, displaySpecific4D]);

  return (
    <>
      <div className="checkboxWrapper-wrap">
        <div className="instructionWrapper">
          <Instruction numberOfDimensions={numberOfDimensions} />
          <div className="wrapper">
            <label className="checkboxWrapper">
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

            <label className="checkboxWrapper">
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
            <label className="checkboxWrapper">
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
            <label className="checkboxWrapper">
              <input
                type="checkbox"
                name="checkbox faces"
                onChange={() => {
                  setDisplayFaces(!displayFaces);
                }}
                checked={displayFaces}
              />
              <p>display faces</p>
            </label>
          </div>
        </div>
        <div className="wrapperOfRanges">
          <div className="rangesWrapper">
            <div>
              <label className="rangeWrapper">
                <p>0</p>
                <input
                  min={0}
                  max={1200}
                  step={10}
                  value={perspective3D}
                  type="range"
                  onChange={(e) => setPerspective3D(+e.target.value)}
                />
                <p>1200</p>
              </label>
              <div className="rangeDescription">
                <p>3D perspective:</p>
                <p className="rangeValue">{perspective3D}</p>
              </div>
            </div>
          </div>

          <div className="rangesWrapper">
            <div>
              <label className="rangeWrapper">
                <p>0</p>
                <input
                  min={0}
                  max={2400}
                  step={10}
                  value={perspectiveND}
                  type="range"
                  onChange={(e) => setPerspectiveND(+e.target.value)}
                />
                <p>2400</p>
              </label>
              <div className="rangeDescription">
                <p>ND perspective:</p>
                <p className="rangeValue">{perspectiveND}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <label className="checkboxWrapper">
            {numberOfDimensions}D
            <CustomAutoComplete
              disablePortal
              id="combo-box-demo"
              options={optionsFigures}
              value={figure}
              onChange={(e, value) => {
                if (value) changeFigure(value);
              }}
              sx={{
                width: 300,
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#00ffaf",
                  },
                },
              }}
              renderInput={(params) => {
                return (
                  <TextField
                    id={params.id}
                    InputLabelProps={params.InputLabelProps}
                    inputProps={params.inputProps}
                    InputProps={{
                      id: params.InputProps.id,
                      className: params.InputProps.className,
                      startAdornment: params.InputProps.startAdornment,
                      ref: params.InputProps.ref,
                      disabled: params.InputProps.disabled,
                      fullWidth: params.InputProps.fullWidth,
                    }}
                    fullWidth={true}
                    label="Figure"
                  />
                );
              }}
            />
          </label>

          {numberOfDimensions >= 3 ? (
            <label className="checkboxWrapper">
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

          {numberOfDimensions >= 4 ? (
            <label className="checkboxWrapper">
              <input
                type="checkbox"
                name="specific 4D"
                onChange={() => {
                  setDisplaySpecific4D(!displaySpecific4D);
                }}
                checked={displaySpecific4D}
              />
              <p>display specific 4D figures</p>
            </label>
          ) : null}
        </div>
      </div>
      <div className="App">
        <div className="flexWrapper">
          <Button variant="contained" onClick={resetAngles}>
            Reset
          </Button>
          <CustomInput
            id="outlined-name"
            sx={{
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#00ffaf",
                },
              },
            }}
            label="Input number of dimensions"
            value={numberValue}
            onChange={(e) => {
              if (!/\D/g.test(e.target.value)) {
                setNumberValue(e.target.value);
                setFigureDimension(e.target.value);
              }
            }}
          />
          <Button variant="contained" onClick={generateDimensions}>
            Generate dimensions
          </Button>

          <label className="selectWrapper">
            {numberOfDimensions}D
            <CustomAutoComplete
              disablePortal
              id="combo-box-demo"
              options={optionList.map((el) => el.toString())}
              value={figureDimension.toString()}
              onChange={(e, value) => {
                dimension(value);
                setFigureDimension(value);
              }}
              sx={{
                width: 300,
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#00ffaf",
                  },
                },
              }}
              renderInput={(params) => {
                return (
                  <TextField
                    id={params.id}
                    InputLabelProps={params.InputLabelProps}
                    inputProps={params.inputProps}
                    InputProps={{
                      id: params.InputProps.id,
                      className: params.InputProps.className,
                      startAdornment: params.InputProps.startAdornment,
                      ref: params.InputProps.ref,
                      disabled: params.InputProps.disabled,
                      fullWidth: params.InputProps.fullWidth,
                    }}
                    fullWidth={true}
                    label="Dimension of figure"
                  />
                );
              }}
            />
          </label>
        </div>

        <CreateCheckboxes
          reset={reset}
          setReset={setReset}
          amountOfAngles={amount}
          dimensions={numberOfDimensions}
          activeRotations={activeRotations}
          setActiveRotations={setActiveRotations}
          figure={figure}
          orthography={orthography}
          dimensionOfFigure={dimensionOfFigure}
          perspective3D={perspective3D}
          perspectiveND={perspectiveND}
          scale={scale}
          setOriginalVerticesArray={setOriginalVerticesArray}
          segments={segments}
          shadow={shadow}
          shadowValue={shadowValue}
          setShadow={setShadow}
          setShadowValue={setShadowValue}
          displayVertices={displayVertices}
          figureColor={figureColor}
          setFigureColor={setFigureColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          displayFaces={displayFaces}
        />
        <Modificators setReset={setReset} dimension={numberOfDimensions} />
        <div id="svgWrapper">
          <Svg
            dimension={numberOfDimensions}
            figure={figure}
            dimensionOfFigure={dimensionOfFigure}
            orthography={orthography}
            displayEdges={displayEdges}
            displayVertices={displayVertices}
            perspective3D={perspective3D}
            perspectiveND={perspectiveND}
            setScale={setScale}
            originalVerticesArray={originalVerticesArray}
            segments={segments}
            shadow={shadow}
            shadowValue={shadowValue}
            figureColor={figureColor}
            displayFaces={displayFaces}
          />
        </div>
      </div>
    </>
  );
}

export default App;
