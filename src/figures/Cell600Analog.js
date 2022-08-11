import React from "react";

const Cell600Analog = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
}) => {
  let linesArray = [];
  const edgeLength = Math.round((2 / 1.618) * 80);
  const mySet = new Set();

  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));
        mySet.add(length);

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

  return (
    <svg width="600" height="400" className="svg">
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
