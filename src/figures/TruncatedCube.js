import React, { useMemo, useState } from "react";

let trianglePolygons = [];
let octagonalPolygons = [];
let triangleColors = [];
let octagonalColors = [];

const TruncatedCube = ({
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
  const [polygon, setPolygon] = useState([]);
  const edgeLength = 2 * 30;
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

  useMemo(() => {
    trianglePolygons = [];
    octagonalPolygons = [];
    if (!displayFaces || verticesArray.length > 300) return;

    linesArray = linesArray.map((arr) => arr.map((val) => +val));

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

    trianglePolygons = getFacesArray(verticesArray, linesArray);

    if (+dimensionOfFigure === 2) {
      octagonalPolygons = [[1, 3, 7, 4, 0, 2, 6, 5]];
    }
    if (+dimensionOfFigure === 3) {
      octagonalPolygons = [
        [1, 5, 13, 15, 7, 3, 11, 9],
        [2, 6, 14, 8, 0, 4, 12, 10],
        [22, 21, 13, 15, 23, 16, 8, 14],
        [19, 20, 12, 10, 18, 17, 9, 11],
        [16, 23, 7, 3, 19, 20, 4, 0],
        [17, 18, 2, 6, 22, 21, 5, 1],
      ];
    }

    if (+dimensionOfFigure === 4) {
      for (let i = 0; i < 3; i++) {
        octagonalPolygons.push(
          [1, 9, 25, 29, 13, 5, 21, 17].map((el) => el + i)
        );
      }

      octagonalPolygons.push([4, 12, 28, 16, 0, 8, 24, 20]);

      octagonalPolygons = [
        ...octagonalPolygons,
        [35, 33, 17, 21, 37, 39, 23, 19],
        [36, 34, 18, 22, 38, 40, 24, 20],
        [44, 42, 26, 30, 46, 32, 16, 28],
        [27, 43, 41, 25, 29, 45, 47, 31],
        [32, 46, 14, 6, 38, 40, 8, 0],
        [39, 7, 15, 47, 45, 13, 5, 37],
        [36, 4, 12, 44, 42, 10, 2, 34],
        [11, 43, 41, 9, 1, 33, 35, 3],
        [62, 61, 13, 5, 53, 54, 6, 14],
        [0, 48, 63, 15, 7, 55, 56, 8],
        [60, 59, 27, 31, 63, 48, 16, 28],
        [20, 52, 51, 19, 23, 55, 56, 24],
        [58, 57, 25, 29, 61, 62, 30, 26],
        [50, 49, 17, 21, 53, 54, 22, 18],
        [63, 47, 45, 61, 62, 46, 32, 48],
        [40, 56, 55, 39, 37, 53, 54, 38],
        [60, 59, 43, 41, 57, 58, 42, 44],
        [51, 35, 33, 49, 50, 34, 36, 52],
        [11, 3, 51, 52, 4, 12, 60, 59],
        [58, 57, 9, 1, 49, 50, 2, 10],
      ];
    }

    if (+dimensionOfFigure === 5) {
      for (let i = 0; i < 7; i++) {
        octagonalPolygons.push(
          [1, 17, 49, 57, 25, 9, 41, 33].map((el) => el + i)
        );
      }

      octagonalPolygons = [
        ...octagonalPolygons,
        [8, 24, 56, 32, 0, 16, 48, 40],

        [88, 84, 52, 60, 92, 64, 32, 56],
        [87, 83, 51, 59, 91, 95, 63, 55],
        [86, 82, 50, 58, 90, 94, 62, 54],
        [68, 72, 40, 48, 80, 76, 44, 36],
        [72, 68, 36, 44, 76, 80, 48, 40],
        [85, 81, 49, 57, 89, 93, 61, 53],
        [67, 71, 39, 47, 79, 75, 43, 35],
        [38, 70, 66, 34, 42, 74, 78, 46],
        [69, 65, 33, 41, 73, 77, 45, 37],
        [92, 28, 12, 76, 80, 16, 0, 64],
        [95, 91, 27, 11, 75, 79, 15, 31],
        [30, 94, 90, 26, 10, 74, 78, 14],
        [24, 88, 84, 20, 4, 68, 72, 8],
        [29, 93, 89, 25, 9, 73, 77, 13],
        [23, 87, 83, 19, 3, 67, 71, 7],
        [22, 86, 82, 18, 2, 66, 70, 6],
        [21, 85, 81, 17, 1, 65, 69, 5]

      ];
    }

    // for (let i = 0; i < octagonalPolygons.length; i++) {
    //   for (let j = i + 1; j < octagonalPolygons.length; j++) {
    //     if (
    //       octagonalPolygons[j].includes(octagonalPolygons[i][0]) &&
    //       octagonalPolygons[j].includes(octagonalPolygons[i][1]) &&
    //       octagonalPolygons[j].includes(octagonalPolygons[i][2]) &&
    //       octagonalPolygons[j].includes(octagonalPolygons[i][3]) &&
    //       octagonalPolygons[j].includes(octagonalPolygons[i][4]) &&
    //       octagonalPolygons[j].includes(octagonalPolygons[i][5]) &&
    //       octagonalPolygons[j].includes(octagonalPolygons[i][6]) &&
    //       octagonalPolygons[j].includes(octagonalPolygons[i][7])
    //     ) {
    //       octagonalPolygons.splice(j, 1);
    //     }
    //   }
    // }

    // console.log(octagonalPolygons);

    trianglePolygons.forEach(() => {
      triangleColors.push([
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
      ]);
    });
    octagonalPolygons.forEach(() => {
      octagonalColors.push([
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
      ]);
    });

  }, [verticesArray, displayFaces, dimensionOfFigure]);

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
              data-color={JSON.stringify(triangleColors[index])}
            />
          ))
        : null}
      {displayFaces && +dimensionOfFigure > 1
        ? octagonalPolygons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type="8"
              data-color={JSON.stringify(octagonalColors[index])}
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
                const copyPolygon = [...polygon];
                copyPolygon.push(index);

                if (copyPolygon.length === 8) {
                  setPolygon([]);
                  console.log("polygon", copyPolygon);
                } else {
                  setPolygon(copyPolygon);
                }
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

export default TruncatedCube;
