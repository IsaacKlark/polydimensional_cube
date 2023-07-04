import React, { useMemo } from "react";

let polygons = [];
let colors = [];

const PentagonalAntiprism = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces,
}) => {
  let linesArray = [];

  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));
        if (length === 120) {
          linesArray.push([i, j]);
        }
      }
    }
  }
  const amountOfLines = linesArray.length;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  useMemo(() => {
    function getFacesArray(verticesArray, linesArray) {
      const facesArray = [];

      for (let i = 0; i < verticesArray.length; i++) {
        for (let j = i + 1; j < verticesArray.length; j++) {
          for (let k = j + 1; k < verticesArray.length; k++) {
            if (
              linesArray.some(
                ([a, b]) => (a === i && b === j) || (a === j && b === i)
              ) &&
              linesArray.some(
                ([a, b]) => (a === j && b === k) || (a === k && b === j)
              ) &&
              linesArray.some(
                ([a, b]) => (a === k && b === i) || (a === i && b === k)
              )
            ) {
              facesArray.push([i, j, k]);
            }
          }
        }
      }

      return facesArray;
    }

    polygons = getFacesArray(verticesArray, linesArray);
    polygons.push([6, 4, 3, 7, 5]);
    polygons.push([8, 9, 1, 0, 2]);
    polygons.forEach(() => {
      colors.push([
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
      ]);
    });
  }, []);

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces
        ? polygons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type={arr.length}
              data-color={JSON.stringify(colors[index])}
            />
          ))
        : null}
      {displayEdges &&
        lines.map((id, index) => {
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

      {displayVertices
        ? verticesArray.map((item, index) => (
            <circle
              onClick={() => {
                console.log(verticesArray[index], index);
              }}
              key={index}
              cx="300"
              cy="200"
              r="2"
              fill="white"
              id={`circle${index}`}
              className="circle"
              onContextMenu={(e) => {
                e.preventDefault();
                e.target.style.display = "none";
              }}
            />
          ))
        : null}
    </svg>
  );
};

export default PentagonalAntiprism;
