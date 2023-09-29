import React, { useMemo } from "react";

let polygons = [];

const Bitruncated5Cell = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces
}) => {
  let linesArray = [];
  const edgeLength = 80;
  const test = new Set();

  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));
        test.add(length)
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

  const amountOfLines = linesArray.length;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  useMemo(() => {
    polygons = [
      [
        0,
        6,
        12
      ],
      [
        0,
        26,
        28
      ],
      [
        1,
        7,
        13
      ],
      [
        1,
        23,
        25
      ],
      [
        2,
        8,
        14
      ],
      [
        2,
        20,
        27
      ],
      [
        3,
        9,
        15
      ],
      [
        3,
        21,
        29
      ],
      [
        4,
        10,
        16
      ],
      [
        4,
        18,
        22
      ],
      [
        5,
        11,
        17
      ],
      [
        5,
        19,
        24
      ],
      [
        6,
        22,
        24
      ],
      [
        7,
        27,
        29
      ],
      [
        8,
        18,
        23
      ],
      [
        9,
        19,
        25
      ],
      [
        10,
        20,
        26
      ],
      [
        11,
        21,
        28
      ],
      [
        12,
        14,
        15
      ],
      [
        13,
        16,
        17
      ],
      [
        0,
        6,
        22,
        4,
        10,
        26
      ],
      [
        0,
        6,
        24,
        5,
        11,
        28
      ],
      [
        0,
        12,
        14,
        2,
        20,
        26
      ],
      [
        0,
        12,
        15,
        3,
        21,
        28
      ],
      [
        1,
        7,
        27,
        2,
        8,
        23
      ],
      [
        1,
        7,
        29,
        3,
        9,
        25
      ],
      [
        1,
        13,
        16,
        4,
        18,
        23
      ],
      [
        1,
        13,
        17,
        5,
        19,
        25
      ],
      [
        2,
        8,
        18,
        4,
        10,
        20
      ],
      [
        2,
        14,
        15,
        3,
        29,
        27
      ],
      [
        3,
        9,
        19,
        5,
        11,
        21
      ],
      [
        4,
        16,
        17,
        5,
        24,
        22
      ],
      [
        6,
        12,
        14,
        8,
        18,
        22
      ],
      [
        6,
        12,
        15,
        9,
        19,
        24
      ],
      [
        7,
        13,
        16,
        10,
        20,
        27
      ],
      [
        7,
        13,
        17,
        11,
        21,
        29
      ],
      [
        8,
        14,
        15,
        9,
        25,
        23
      ],
      [
        10,
        16,
        17,
        11,
        28,
        26
      ],
      [
        18,
        22,
        24,
        19,
        25,
        23
      ],
      [
        20,
        26,
        28,
        21,
        29,
        27
      ]
    ]

  }, [])

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
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

      {displayFaces && +dimensionOfFigure >= 2
        ? polygons.map((arr, index) => (
          <polygon
            data-points={JSON.stringify(arr)}
            key={index}
            points="0 0, 0 0, 0 0, 0 0"
            fill={`rgba(255,255, 255, 0.3)`}
            className="polygon"
            data-type={arr.length}
          // onClick={() => {
          //   const newArr = [...testPolygons, arr];
          //   setTestPolygons(newArr)
          //   polygons = polygons.map((el, index2) => index2 !== index ? el : []);
          //   console.clear();
          //   console.log(newArr)
          // }}
          />
        ))
        : null}

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

export default Bitruncated5Cell;
