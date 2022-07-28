import React, { useEffect } from "react";
import generateMatrixes from "./generateMatrixes";
import generateCube from "./generateCube";
import vertices, { verticesArray } from "./vertices";
import { useMouse } from "./App";
import { canRotate, mouseX, mouseY } from "./Svg";

const CreateCheckboxes = ({
  dimensions,
  number,
  DimensionOfCube,
  anglesArray,
  setAnglesArray,
  activeRotations, 
  setActiveRotations
}) => {

  useEffect(() => {
    const anglesArray = [];
    for (let i = 0; i < dimensions; i++) {
      anglesArray.push(0);
    }
    setAnglesArray(anglesArray);
  }, [dimensions]);

  useEffect(() => {
    let copyAnglesArray = [...anglesArray];

    if (copyAnglesArray.length < dimensions) {
      copyAnglesArray = [];
      for (let i = 0; i < dimensions; i++) {
        anglesArray.push(0);
      }
    }

    let interval = setInterval(() => {
      activeRotations.forEach((index) => {
        if (!useMouse) {
          copyAnglesArray[index]++;
        } else if (useMouse && canRotate) {
          if (mouseX < 0 && !yRotationArray.includes(+index)) {
            copyAnglesArray[index] -= 2;
          } else if (mouseX > 0 && !yRotationArray.includes(+index)) {
            copyAnglesArray[index] += 2;
          } else if (mouseX === 0 && !yRotationArray.includes(+index)) {
            copyAnglesArray[index] += copyAnglesArray[index];
          } else if (mouseY < 0) {
            copyAnglesArray[index] -= 2;
          } else if (mouseY > 0) {
            copyAnglesArray[index] += 2;
          }
        }
        setAnglesArray(copyAnglesArray)
        const matrix = generateMatrixes(number, copyAnglesArray);
        generateCube(verticesArray, matrix, number);
      });
    }, 50);

    if (!activeRotations.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, [dimensions, activeRotations]);

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

  vertices(number, DimensionOfCube);

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
