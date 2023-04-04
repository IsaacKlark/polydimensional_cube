import React, { useMemo } from "react";

let polygons = [];
const polygons3DTriangle = [
  [39, 56, 55],
  [71, 39, 55],
  [71, 73, 55],
  [40, 73, 55],
  [40, 56, 55],
  [39, 56, 72],
  [74, 56, 72],
  [74, 56, 40],
  [74, 42, 40],
  [73, 42, 40],
  [73, 42, 57],
  [73, 71, 57],
  [41, 71, 57],
  [41, 71, 39],
  [41, 72, 39],
  [41, 58, 57],
  [41, 58, 72],
  [42, 57, 58],
  [42, 58, 74],
  [72, 58, 74],
  [53, 19, 20],
  [53, 36, 20],
  [53, 36, 11],
  [53, 35, 11],
  [53, 35, 19],
  [27, 35, 19],
  [27, 61, 19],
  [8, 61, 19],
  [8, 61, 21],
  [29, 61, 21],
  [29, 61, 27],
  [20, 19, 8],
  [20, 36, 28],
  [20, 28, 62],
  [30, 28, 62],
  [20, 8, 62],
  [62, 30, 22],
  [62, 8, 22],
  [21, 8, 22],
  [11, 36, 32],
  [64, 36, 32],
  [64, 36, 28],
  [64, 32, 24],
  [64, 12, 24],
  [64, 12, 28],
  [30, 12, 28],
  [32, 16, 24],
  [35, 11, 31],
  [51, 11, 32],
  [51, 11, 31],
  [51, 15, 31],
  [51, 15, 16],
  [51, 16, 32],
  [23, 15, 31],
  [63, 35, 31],
  [63, 35, 27],
  [63, 13, 27],
  [63, 13, 23],
  [63, 23, 31],
  [27, 29, 13],
  [65, 29, 37],
  [21, 29, 37],
  [13, 29, 65],
  [13, 25, 65],
  [33, 37, 65],
  [25, 33, 65],
  [23, 13, 25],
  [25, 33, 17],
  [59, 25, 17],
  [23, 59, 25],
  [23, 59, 15],
  [9, 59, 17],
  [9, 59, 15],
  [9, 16, 15],
  [9, 17, 18],
  [9, 60, 18],
  [26, 60, 18],
  [26, 60, 24],
  [16, 60, 9],
  [16, 60, 24],
  [24, 26, 12],
  [66, 26, 12],
  [66, 26, 34],
  [18, 26, 34],
  [12, 66, 30],
  [38, 66, 30],
  [38, 22, 30],
  [66, 34, 38],
  [10, 34, 38],
  [52, 34, 18],
  [52, 17, 18],
  [52, 17, 33],
  [52, 10, 33],
  [52, 10, 34],
  [37, 10, 33],
  [37, 54, 10],
  [37, 54, 21],
  [22, 54, 21],
  [22, 54, 38],
  [54, 10, 38],

];


const polygons3DPentagon = [
  [69,7,46,0,70],
  [3,47,49,7,69],
  [47,1,67,5,49],
  [1,43,2,68,67],
  [2,48,50,6,68],
  [48,4,70,0,50],
  [44,3,69,70,4],
  [1,47,3,44,43],
  [2,43,44,4,48],
  [5,67,68,6,45],
  [46,45,6,50,0],
  [49,5,45,46,7],
];


const Cell600Analog = ({
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
  const edgeLength = Math.round((2 / 1.618) * 80);

  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));

        if (+dimensionOfFigure > 2) {
          if (length === edgeLength || length === edgeLength - 1) {
            linesArray.push([i, j]);
          }
        } else if (+dimensionOfFigure === 2) {
          if (length === 94 || length === 98) {
            linesArray.push([i, j]);
          }
        }
      }
    }
  }

  if (+dimensionOfFigure === 2) {
    linesArray = [
      [0, 38],
      [0, 42],
      [1, 37],
      [1, 41],
      [2, 37],
      [2, 42],
      [3, 38],
      [3, 41],
      [4, 15],
      [4, 16],
      [5, 13],
      [5, 14],
      [6, 22],
      [6, 24],
      [7, 21],
      [7, 23],
      [8, 13],
      [8, 14],
      [8, 15],
      [8, 16],
      [8, 21],
      [8, 22],
      [8, 23],
      [8, 24],
      [9, 17],
      [9, 35],
      [10, 18],
      [10, 35],
      [11, 19],
      [11, 36],
      [12, 20],
      [12, 36],
      [13, 14],
      [15, 16],
      [17, 19],
      [17, 43],
      [18, 20],
      [18, 44],
      [19, 43],
      [20, 44],
      [21, 23],
      [22, 24],
      [25, 26],
      [25, 29],
      [25, 31],
      [26, 29],
      [26, 32],
      [27, 28],
      [27, 30],
      [27, 33],
      [28, 30],
      [28, 34],
      [29, 30],
      [29, 39],
      [29, 40],
      [30, 39],
      [30, 40],
      [31, 39],
      [32, 40],
      [33, 39],
      [34, 40],
      [35, 43],
      [35, 44],
      [36, 43],
      [36, 44],
      [43, 44],
    ];
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
      {displayFaces && +dimensionOfFigure >= 4
        ? polygons.map((arr, index) => (
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

      {displayFaces && +dimensionOfFigure === 3
        ? polygons3DTriangle.map((arr, index) => (
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
        {displayFaces && +dimensionOfFigure === 3
        ? polygons3DPentagon.map((arr, index) => (
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

export default Cell600Analog;
