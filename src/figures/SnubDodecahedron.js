import { useMemo } from "react";
import React from "react";
let colors = [];
let polygons = [
  [31, 32, 48],
  [32, 41, 48],
  [32, 40, 41],
  [32, 33, 40],
  [33, 38, 40],
  [38, 44, 40],
  [37, 38, 33],
  [34, 37, 33],
  [55, 34, 30],
  [55, 56, 34],
  [56, 37, 34],
  [56, 36, 37],
  [57, 36, 56],
  [57, 6, 36],
  [6, 35, 36],
  [6, 7, 35],
  [5, 6, 57],
  [58, 5, 57],
  [28, 5, 58],
  [28, 9, 5],
  [29, 9, 28],
  [29, 3, 9],
  [3, 8, 9],
  [8, 11, 7],
  [11, 12, 7],
  [7, 12, 35],
  [12, 39, 35],
  [12, 13, 39],
  [13, 44, 39],
  [39, 44, 38],
  [13, 43, 44],
  [13, 14, 43],
  [43, 16, 42],
  [14, 16, 43],
  [14, 15, 16],
  [10, 15, 14],
  [10, 0, 15],
  [15, 0, 19],
  [4, 0, 10],
  [11, 4, 10],
  [8, 4, 11],
  [8, 3, 4],
  [29, 2, 3],
  [29, 25, 2],
  [25, 20, 2],
  [2, 20, 1],
  [20, 21, 1],
  [1, 21, 19],
  [0, 1, 19],
  [21, 18, 19],
  [21, 22, 18],
  [22, 46, 18],
  [22, 45, 46],
  [18, 46, 17],
  [17, 46, 47],
  [17, 47, 42],
  [16, 17, 42],
  [42, 47, 41],
  [47, 48, 41],
  [48, 49, 31],
  [49, 54, 31],
  [31, 54, 30],
  [54, 50, 30],
  [30, 50, 55],
  [50, 59, 55],
  [59, 27, 58],
  [27, 28, 58],
  [51, 27, 59],
  [50, 51, 59],
  [51, 26, 27],
  [52, 26, 51],
  [52, 24, 26],
  [24, 25, 26],
  [24, 20, 25],
  [23, 24, 52],
  [53, 23, 52],
  [45, 23, 53],
  [45, 22, 23],
  [49, 45, 53],
  [49, 53, 54],
  [6, 5, 9, 8, 7],
  [0, 4, 3, 2, 1],
  [21, 20, 24, 23, 22],
  [46, 45, 49, 48, 47],
  [32, 31, 30, 34, 33],
  [54, 53, 52, 51, 50],
  [26, 25, 29, 28, 27],
  [59, 58, 57, 56, 55],
  [37, 36, 35, 39, 38],
  [13, 12, 11, 10, 14],
  [16, 15, 19, 18, 17],
  [40, 44, 43, 42, 41],
];

const SnubDodecahedron = ({
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
        if (length === 64 || length === 79 || length === 75) {
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
      {displayFaces &&
        polygons.map((arr, index) => (
          <polygon
            data-points={JSON.stringify(arr)}
            key={index}
            points="0 0, 0 0, 0 0, 0 0"
            fill={`rgba(255,255, 255, 0.3)`}
            className="polygon"
            data-type={arr.length}
            data-color={JSON.stringify(colors[index])}
          />
        ))}
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

export default SnubDodecahedron;
