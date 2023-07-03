import React, { useMemo } from "react";

let colors = [];
let polygons = [
  [1, 5, 7, 3],
  [52, 100, 76, 28],
  [36, 60, 108, 84],
  [37, 85, 109, 61],
  [10, 14, 13, 9],
  [105, 81, 33, 57],
  [56, 32, 80, 104],
  [72, 96, 48, 24],
  [40, 88, 112, 64],
  [74, 26, 50, 98],
  [54, 30, 78, 102],
  [118, 70, 46, 94],
  [68, 116, 92, 44],
  [23, 21, 22, 16],
  [45, 93, 117, 69],
  [77, 101, 53, 29],
  [49, 97, 73, 25],
  [113, 89, 41, 65],
  [18, 17, 19, 20],
  [42, 66, 114, 90],
  [58, 106, 82, 34],
  [107, 59, 35, 83],
  [12, 11, 15, 8],
  [38, 86, 110, 62],
  [39, 63, 111, 87],
  [55, 103, 79, 31],
  [119, 95, 47, 71],
  [4, 0, 6, 2],
  [99, 51, 27, 75],
  [43, 91, 115, 67],
  [102, 78, 118, 94, 110, 86],
  [50, 26, 3, 7, 30, 54],
  [106, 90, 114, 74, 98, 82],
  [59, 58, 34, 11, 12, 35],
  [8, 15, 38, 62, 63, 39],
  [79, 103, 87, 111, 95, 119],
  [71, 47, 16, 22, 45, 69],
  [21, 23, 46, 70, 68, 44],
  [108, 92, 116, 76, 100, 84],
  [52, 28, 5, 1, 24, 48],
  [80, 96, 72, 112, 88, 104],
  [40, 64, 66, 42, 19, 17],
  [41, 18, 20, 43, 67, 65],
  [115, 91, 107, 83, 99, 75],
  [4, 27, 51, 55, 31, 0],
  [49, 25, 2, 6, 29, 53],
  [105, 89, 113, 73, 97, 81],
  [32, 56, 57, 33, 10, 9],
  [13, 14, 37, 61, 60, 36],
  [109, 85, 101, 77, 117, 93],
  [77, 29, 6, 0, 31, 79, 119, 71, 69, 117],
  [33, 81, 97, 49, 53, 101, 85, 37, 14, 10],
  [60, 61, 109, 93, 45, 22, 21, 44, 92, 108],
  [76, 116, 68, 70, 118, 78, 30, 7, 5, 28],
  [48, 96, 80, 32, 9, 13, 36, 84, 100, 52],
  [64, 112, 72, 24, 1, 3, 26, 74, 114, 66],
  [82, 98, 50, 54, 102, 86, 38, 15, 11, 34],
  [62, 110, 94, 46, 23, 16, 47, 95, 111, 63],
  [12, 8, 39, 87, 103, 55, 51, 99, 83, 35],
  [115, 75, 27, 4, 2, 25, 73, 113, 65, 67],
  [17, 18, 41, 89, 105, 57, 56, 104, 88, 40],
  [107, 91, 43, 20, 19, 42, 90, 106, 58, 59],
];

const GreatRhombicosidodecahedron = ({
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
        if (length === 37 || length === 35 || length === 28 || length === 45) {
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

export default GreatRhombicosidodecahedron;
