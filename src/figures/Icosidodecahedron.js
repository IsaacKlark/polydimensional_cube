import React from "react";

const pentagonalPolygons = [
  [18, 10, 12, 20, 1],
  [4, 13, 29, 28, 12],
  [11, 19, 0, 21, 13],
  [15, 7, 9, 17, 0],
  [21, 17, 25, 2, 29],
  [27, 3, 23, 15, 19],
  [26, 18, 14, 22, 3],
  [4, 10, 26, 27, 11],
  [23, 22, 6, 5, 7],
  [5, 8, 24, 25, 9],
  [6, 14, 1, 16, 8],
  [24, 16, 20, 28, 2],
];
const trianglePolygons = [
  [14, 18, 1],
  [26, 18, 10],
  [10, 4, 12],
  [11, 4, 13],
  [27, 19, 11],
  [15, 19, 0],
  [23, 7, 15],
  [23, 3, 22],
  [14, 6, 22],
  [8, 6, 5],
  [5, 9, 7],
  [25, 9, 17],
  [21, 0, 17],
  [21, 29, 13],
  [28, 29, 2],
  [28, 20, 12],
  [16, 20, 1],
  [16, 24, 8],
  [25, 24, 2],
  [26, 27, 3],
];

const Icosidodecahedron = ({
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
  const edgeLength = 2 * 40;
  const test = new Set();
  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));
        test.add(length);
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
              data-type="triangle"
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
              data-type="pentagon"
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

export default Icosidodecahedron;
