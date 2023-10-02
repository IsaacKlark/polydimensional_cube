import React, { useMemo } from "react";

let polygons = [];

const SquareMagnabicupolicRing = ({
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

  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));

        if (length === 100) {
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
    polygons = [
      [
        0,
        7,
        16
      ],
      [
        0,
        8,
        16
      ],
      [
        1,
        2,
        17
      ],
      [
        1,
        9,
        17
      ],
      [
        2,
        10,
        17
      ],
      [
        3,
        5,
        18
      ],
      [
        3,
        12,
        18
      ],
      [
        4,
        6,
        19
      ],
      [
        4,
        11,
        19
      ],
      [
        5,
        13,
        18
      ],
      [
        6,
        14,
        19
      ],
      [
        7,
        15,
        16
      ],
      [
        8,
        15,
        16
      ],
      [
        9,
        10,
        17
      ],
      [
        11,
        14,
        19
      ],
      [
        12,
        13,
        18
      ],
      [
        0,
        5,
        3,
        7
      ],
      [
        0,
        5,
        18,
        16
      ],
      [
        0,
        7,
        15,
        8
      ],
      [
        1,
        2,
        6,
        4
      ],
      [
        1,
        2,
        10,
        9
      ],
      [
        1,
        4,
        19,
        17
      ],
      [
        2,
        6,
        19,
        17
      ],
      [
        3,
        5,
        13,
        12
      ],
      [
        3,
        7,
        16,
        18
      ],
      [
        4,
        6,
        14,
        11
      ],
      [
        8,
        14,
        11,
        15
      ],
      [
        8,
        14,
        19,
        16
      ],
      [
        9,
        10,
        13,
        12
      ],
      [
        9,
        12,
        18,
        17
      ],
      [
        10,
        13,
        18,
        17
      ],
      [
        11,
        15,
        16,
        19
      ],
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

export default SquareMagnabicupolicRing;
