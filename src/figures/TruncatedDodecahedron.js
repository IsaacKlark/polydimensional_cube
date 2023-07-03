import React, { useMemo,  } from "react";

let colors = [];
let colorsNGons = [];
let polygons = [];
let polygonsNGons = [
  [16, 40, 56, 32, 34, 58, 42, 18, 2, 0],
  [14, 18, 42, 50, 26, 7, 5, 22, 46, 38],
  [12, 0, 2, 14, 38, 54, 30, 28, 52, 36],
  [8, 30, 54, 46, 22, 23, 47, 55, 31, 9],
  [47, 23, 5, 7, 27, 51, 43, 19, 15, 39],
  [51, 27, 26, 50, 58, 34, 10, 11, 35, 59],
  [11, 10, 32, 56, 48, 24, 25, 49, 57, 33],
  [48, 40, 16, 12, 36, 44, 20, 4, 6, 24],
  [20, 44, 52, 28, 8, 9, 29, 53, 45, 21],
  [53, 29, 31, 55, 39, 15, 3, 1, 13, 37],
  [41, 17, 1, 3, 19, 43, 59, 35, 33, 57],
  [21, 45, 37, 13, 17, 41, 49, 25, 6, 4]
];

const TruncatedDodecahedron = ({
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
  const edgeLength = 2 * 20;
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

  useMemo(() => {
    colors = [];
    colorsNGons = [];

    if (displayFaces) {
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
      polygons.forEach(() => {
        colors.push([
          Math.trunc(Math.random() * 255),
          Math.trunc(Math.random() * 255),
          Math.trunc(Math.random() * 255),
        ]);
      });
      polygonsNGons.forEach(() => {
        colorsNGons.push([
          Math.trunc(Math.random() * 255),
          Math.trunc(Math.random() * 255),
          Math.trunc(Math.random() * 255),
        ]);
      });
    }
  }, [displayFaces, verticesArray, linesArray]);

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
      {displayFaces &&
        polygonsNGons.map((arr, index) => (
          <polygon
            data-points={JSON.stringify(arr)}
            key={index}
            points="0 0, 0 0, 0 0, 0 0"
            fill={`rgba(255,255, 255, 0.3)`}
            className="polygon"
            data-type={arr.length}
            data-color={JSON.stringify(colorsNGons[index])}
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

export default TruncatedDodecahedron;
