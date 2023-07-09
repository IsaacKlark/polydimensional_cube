import React from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";

const pentagonalPolygons = [
  [12, 4, 19, 51, 44],
  [11, 27, 59, 57, 25],
  [33, 1, 29, 37, 41],
  [5, 13, 45, 46, 14],
  [54, 22, 10, 24, 56],
  [48, 47, 15, 6, 16],
  [39, 31, 3, 35, 43],
  [23, 9, 21, 53, 55],
  [17, 7, 18, 50, 49],
  [26, 58, 52, 20, 8],
  [28, 0, 32, 40, 36],
  [42, 38, 30, 2, 34],
];
const hexagonPolygons = [
  [49, 25, 57, 33, 41, 17],
  [49, 50, 26, 8, 11, 25],
  [8, 20, 44, 51, 27, 11],
  [27, 51, 19, 43, 35, 59],
  [59, 35, 3, 1, 33, 57],
  [3, 31, 55, 53, 29, 1],
  [29, 53, 21, 45, 13, 37],
  [41, 37, 13, 5, 7, 17],
  [7, 5, 14, 38, 42, 18],
  [50, 18, 42, 34, 58, 26],
  [58, 34, 2, 0, 28, 52],
  [20, 52, 28, 36, 12, 44],
  [12, 36, 40, 16, 6, 4],
  [19, 4, 6, 15, 39, 43],
  [39, 15, 47, 23, 55, 31],
  [47, 48, 24, 10, 9, 23],
  [48, 16, 40, 32, 56, 24],
  [32, 0, 2, 30, 54, 56],
  [54, 30, 38, 14, 46, 22],
  [9, 10, 22, 46, 45, 21],
];

const TruncatedIcosahedron = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces,
}) => {
  if (!modified) {
    let linesArray = [];
    const edgeLength = 2 * 25;
    for (let i = 0; i < verticesArray.length; i++) {
      for (let j = i; j < verticesArray.length; j++) {
        if (i !== j) {
          let length = 0;
          for (let k = 0; k < dimensionOfFigure; k++) {
            length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
          }
          length = Math.round(length ** (1 / 2));
          if (length === edgeLength) {
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
    const saveLines = [];

    lines.forEach((el, index) => {
      const vertex1 = linesArray[index][0];
      const vertex2 = linesArray[index][1];
      saveLines.push([vertex1, vertex2]);
    });

    setLinesArray(saveLines);
    setPolygonsArray([...pentagonalPolygons, ...hexagonPolygons]);
  }

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
        ? polygonsArray.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type={arr.length}
            />
          ))
        : null}
      {displayEdges &&
        _linesArray.map((id, index) => {
          let vertex1 = 0;
          let vertex2 = 0;

          vertex1 = id[0];
          vertex2 = id[1];
          return (
            <line
              key={index}
              x1="200"
              y1="200"
              x2="400"
              y2="200"
              stroke="white"
              id={`line${index}`}
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

export default TruncatedIcosahedron;
