import React from "react";

const trianglePolygons = [
  [16,5,12],
  [20,16,12],
  [16,9,5],
  [9,1,5],
  [5,1,13],
  [1,21,13],
  [13,21,17],
  [13,4,17],
  [8,4,17],
  [21,11,17],
  [21,11,3],
  [7,11,3],
  [7,11,18],
  [7,14,18],
  [22,14,18],
  [22,8,18],
  [22,8,0],
  [4,8,0],
  [4,12,0],
  [20,12,0],
  [20,2,10],
  [20,16,10],
  [2,14,22],
  [2,14,6],
  [2,10,6],
  [19,10,6],
  [19,15,6],
  [19,15,23],
  [3,15,23],
  [3,15,7],
  [9,1,23],
  [9,19,23],
];

const squarePolygons = [
  [16,10,19,9],
  [6,14,7,15],
  [18,8,17,11],
  [4,12,5,13],
  [22,2,20,0],
  [1,23,3,21],
];

const SnubCube = ({
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
  const edgeLength = 97;

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
              data-type="triangle"
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
              data-type="square"
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

export default SnubCube;
