import React from "react";

const trianglePolygons = [
  [1, 57, 5],
  [45, 37, 29],
  [21, 22, 55],
  [46, 38, 30],
  [58, 2, 6],
  [0, 4, 56],
  [24, 40, 32],
  [48, 8, 14],
  [13, 15, 51],
  [39, 47, 31],
  [52, 16, 23],
  [19, 20, 54],
  [44, 28, 36],
  [12, 50, 10],
  [26, 42, 34],
  [53, 18, 17],
  [33, 41, 25],
  [11, 9, 49],
  [35, 27, 43],
  [59, 3, 7],
];

const squarePolygons = [
  [1, 5, 7, 3],
  [7, 31, 47, 59],
  [47, 39, 52, 23],
  [52, 32, 40, 16],
  [8, 48, 24, 32],
  [15, 13, 14, 8],
  [14, 38, 30, 48],
  [55, 22, 46, 38],
  [37, 45, 21, 55],
  [51, 29, 37, 13],
  [5, 57, 45, 29],
  [1, 25, 41, 57],
  [41, 33, 53, 17],
  [53, 34, 42, 18],
  [42, 26, 2, 58],
  [58, 6, 30, 46],
  [2, 4, 0, 6],
  [0, 56, 40, 24],
  [4, 28, 44, 56],
  [44, 36, 54, 20],
  [54, 35, 43, 19],
  [20, 19, 23, 16],
  [10, 9, 11, 12],
  [11, 49, 27, 35],
  [27, 3, 59, 43],
  [9, 33, 25, 49],
  [26, 34, 10, 50],
  [28, 50, 12, 36],
  [22, 21, 17, 18],
  [15, 39, 31, 51],
];

const pentagonalPolygons = [
  [7, 5, 29, 51, 31],
  [37, 13, 14, 38, 55],
  [57, 41, 17, 21, 45],
  [18, 42, 58, 46, 22],
  [26, 50, 28, 4, 2],
  [44, 20, 16, 40, 56],
  [32, 52, 39, 15, 8],
  [3, 27, 49, 25, 1],
  [35, 54, 36, 12, 11],
  [59, 47, 23, 19, 43],
  [48, 30, 6, 0, 24],
  [53, 33, 9, 10, 34],
];

const Rhombicosidodecahedron = ({
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

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces && +dimensionOfFigure > 2
        ? trianglePolygons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type="3"
            />
          ))
        : null}
      {displayFaces && +dimensionOfFigure > 2
        ? squarePolygons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type="4"
            />
          ))
        : null}
      {displayFaces && +dimensionOfFigure > 2
        ? pentagonalPolygons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type="5"
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

export default Rhombicosidodecahedron;
