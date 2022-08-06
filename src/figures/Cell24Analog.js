import React from "react";

const Cell24Analog = ({ verticesArray, dimensionOfFigure }) => {
  let check1 = (array1, array2) => {
    for (let i = 0; i < dimensionOfFigure; i++) {
      if (
        array1[i] - array2[i] !== 50 &&
        array1[i] - array2[i] !== -50 &&
        array2[i] - array1[i] !== 50 &&
        array2[i] - array1[i] !== -50
      ) {
        return false;
      }
    }

    return true;
  };

  let check2 = (array1, array2) => {
    let degree100 = false;
    let equal = 0;
    for (let i = 0; i < dimensionOfFigure; i++) {
      if (
        array1[i] - array2[i] === 100 ||
        array1[i] - array2[i] === -100 ||
        array2[i] - array1[i] === 100 ||
        array2[i] - array1[i] === -100
      ) {
        degree100 = true;
      }

      if (array1[i] === array2[i]) {
        equal += 1;
      }
    }

    return !!(degree100 && equal === array1.length - 1);
  };

  const linesSet = new Set();
  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = 0; j < verticesArray.length; j++) {
      if (
        check1(verticesArray[i], verticesArray[j]) ||
        check2(verticesArray[i], verticesArray[j])
      ) {
        linesSet.add([i, j].sort((a, b) => a - b).join(","));
      }
    }
  }

  const linesArray = Array.from(linesSet).map((item) => item.split(","));

  const amountOfLines = linesArray.length;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  return (
    <svg width="600" height="400" className="svg">
      {lines.map((id, index) => {
        let vertex1 = 0;
        let vertex2 = 0;

        vertex1 = linesArray[index][0];
        vertex2 = linesArray[index][1];

        return (
          <line
            key={id}
            x1="200"
            y1="200"
            x2="400"
            y2="200"
            stroke="white"
            id={`line${id}`}
            className="line"
            vertex1={vertex1}
            vertex2={vertex2}
          />
        );
      })}
    </svg>
  );
};

export default Cell24Analog;
