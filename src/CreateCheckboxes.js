import React, { useEffect } from "react";
import generateMatrixes from "./generateMatrixes";
import generateFigure from "./generateFigure";
import vertices, { verticesArray } from "./vertices";
import { useKeyboard } from "./App";
import generateFigureOrthography from "./generateFigureOrthography";

const CreateCheckboxes = ({
  dimensions,
  number,
  DimensionOfFigure,
  anglesArray,
  setAnglesArray,
  activeRotations,
  setActiveRotations,
  figure,
  transposeRotation,
  orthography,
  dimensionOfFigure
}) => {
  useEffect(() => {
    const moveByKeyBoard = (e) => {
      if (useKeyboard) {
        let copyAnglesArray = [...anglesArray];

        if (e.key === "w") {
          activeRotations.forEach((index) => {
            if (copyAnglesArray[index] <= 359) {
              copyAnglesArray[index] += 1;
            } else {
              copyAnglesArray[index] = 0;
            }
          });
        }

        if (e.key === "s") {
          activeRotations.forEach((index) => {
            if (copyAnglesArray[index] >= -359) {
              copyAnglesArray[index] -= 1;
            } else {
              copyAnglesArray[index] = 0;
            }
          });
        }
        setAnglesArray(copyAnglesArray);
        const matrix = generateMatrixes(
          number,
          copyAnglesArray,
          transposeRotation
        );
        if (orthography) {
          generateFigureOrthography(verticesArray, matrix, dimensionOfFigure);
        } else {
          generateFigure(verticesArray, matrix, number, dimensionOfFigure);
        }
      }
    };

    document.body.addEventListener("keydown", moveByKeyBoard);
    return () => document.body.removeEventListener("keydown", moveByKeyBoard);
  }, [anglesArray, orthography]);

  useEffect(() => {
    const anglesArray = [];
    for (let i = 0; i < dimensions; i++) {
      anglesArray.push(0);
    }
    setAnglesArray(anglesArray);
  }, [dimensions]);

  useEffect(() => {
    let copyAnglesArray = [...anglesArray];
    if (!useKeyboard) {
      if (copyAnglesArray.length < dimensions) {
        copyAnglesArray = [];
        for (let i = 0; i < dimensions; i++) {
          anglesArray.push(0);
        }
      }
    }

    const interval = setInterval(() => {
      if (!useKeyboard) {
        activeRotations.forEach((index) => {
          if (copyAnglesArray[index] < 359) {
            copyAnglesArray[index]++;
          } else {
            copyAnglesArray[index] = 0;
          }
        });

        setAnglesArray(copyAnglesArray);
        const matrix = generateMatrixes(
          number,
          copyAnglesArray,
          transposeRotation
        );
        if (orthography) {
          generateFigureOrthography(verticesArray, matrix, dimensionOfFigure);
        } else {
          generateFigure(verticesArray, matrix, number, dimensionOfFigure);
        }
      }
    }, 50);

    if (!activeRotations.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, [dimensions, activeRotations, useKeyboard, orthography, dimensionOfFigure]);

  useEffect(() => {
    vertices(number, DimensionOfFigure, figure);
  }, [figure, number, DimensionOfFigure]);

  const numbersOfCheckboxes = new Array(dimensions);
  let subDimensionStart = 2;
  let subDimensionEnd = 1;

  let yRotationArray = [dimensions - 3];
  let addToYRotationInterval = 2;

  for (let i = 1; i < number - 2; i++) {
    yRotationArray.push(
      yRotationArray[yRotationArray.length - 1] - addToYRotationInterval
    );
    addToYRotationInterval++;
  }

  for (let i = 0; i < dimensions; i++) {
    if (subDimensionEnd === subDimensionStart) {
      subDimensionStart++;
      subDimensionEnd = 1;
    }

    numbersOfCheckboxes[i] = `${subDimensionStart}-${subDimensionEnd}`;
    subDimensionEnd++;
  }

  numbersOfCheckboxes.reverse();

  const changeActiveRotation = (index) => {
    let copyActiveRotations = [...activeRotations];
    if (copyActiveRotations.includes(index)) {
      copyActiveRotations = copyActiveRotations.filter(
        (item) => item !== index
      );
    } else {
      copyActiveRotations.push(index);
    }

    setActiveRotations(copyActiveRotations);
  };

  const selectAll = () => {
    let copyActiveRotations = [];

    if (activeRotations.length < numbersOfCheckboxes.length) {
      copyActiveRotations = numbersOfCheckboxes.map((item, index) => index);
    }

    setActiveRotations(copyActiveRotations);
  };

  return (
    <>
      <label className="using__mouse">
        <input
          type="checkbox"
          name="checkbox"
          onChange={selectAll}
          checked={activeRotations.length === numbersOfCheckboxes.length}
        />
        <p>Select All</p>
      </label>
      <section className="checkboxes">
        <div className="angles">angles:</div>
        {numbersOfCheckboxes.map((field, index) => {
          return (
              <label key={index} className="labels">
                <input
                  key={index + "c"}
                  type="checkbox"
                  name="checkbox"
                  onChange={() => changeActiveRotation(index)}
                  checked={activeRotations.includes(index)}
                  className="checkbox"
                />
                {field}
              <input type="number" value={anglesArray[index] || 0} onChange={(e) => {
                const copyAnglesArray = [...anglesArray];
                copyAnglesArray[index] = +e.target.value;
                setAnglesArray(copyAnglesArray);
              }}/>

              </label>
          );
        })}
      </section>
    </>
  );
};

export default CreateCheckboxes;
