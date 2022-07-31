import React, { useEffect } from "react";
import generateMatrixes from "./generateMatrixes";
import generateFigure from "./generateFigure";
import vertices, { verticesArray } from "./vertices";
import { useKeyboard } from "./App";

const CreateCheckboxes = ({
  dimensions,
  number,
  DimensionOfCube,
  anglesArray,
  setAnglesArray,
  activeRotations,
  setActiveRotations,
  figure
}) => {
  useEffect(() => {
    const moveByKeyBoard = (e) => {
      if (useKeyboard) {
        let copyAnglesArray = [...anglesArray];

        if (e.key === "w") {
          activeRotations.forEach((index) => {
            copyAnglesArray[index] += 2;
          });
        }

        if (e.key === "s") {
          activeRotations.forEach((index) => {
            copyAnglesArray[index] -= 2;
          });
        }
        setAnglesArray(copyAnglesArray);
        const matrix = generateMatrixes(number, copyAnglesArray);
        generateFigure(verticesArray, matrix, number, figure);
      }
    };

    document.body.addEventListener("keydown", moveByKeyBoard);
    return () => document.body.removeEventListener("keydown", moveByKeyBoard);
  }, [anglesArray]);

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
          copyAnglesArray[index]++;
        });

        setAnglesArray(copyAnglesArray);
        const matrix = generateMatrixes(number, copyAnglesArray);
        generateFigure(verticesArray, matrix, number, figure);
      }
    }, 50);

    if (!activeRotations.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, [dimensions, activeRotations, useKeyboard]);

  useEffect(() => {
    vertices(number, DimensionOfCube, figure);

  }, [figure, number, DimensionOfCube,]);

  const numbersOfCehckboxes = new Array(dimensions);
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

    numbersOfCehckboxes[i] = `${subDimensionStart}-${subDimensionEnd}`;
    subDimensionEnd++;
  }

  numbersOfCehckboxes.reverse();

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

  return (
    <section className="checkboxes">
      <div className="angles">angles:</div>
      {numbersOfCehckboxes.map((field, index) => {
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
          </label>
        );
      })}
    </section>
  );
};

export default CreateCheckboxes;
