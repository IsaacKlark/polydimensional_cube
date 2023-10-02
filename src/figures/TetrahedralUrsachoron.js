import React, { useMemo } from "react";

let polygons = []
const TetrahedralUrsachoron = ({
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
        if (length === 198) {
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
        1,
        2
      ],
      [
        0,
        1,
        3
      ],
      [
        0,
        2,
        3
      ],
      [
        1,
        2,
        3
      ],
      [
        4,
        8,
        10
      ],
      [
        4,
        8,
        12
      ],
      [
        4,
        10,
        12
      ],
      [
        5,
        8,
        11
      ],
      [
        5,
        8,
        13
      ],
      [
        5,
        11,
        13
      ],
      [
        6,
        9,
        10
      ],
      [
        6,
        9,
        13
      ],
      [
        6,
        10,
        13
      ],
      [
        7,
        9,
        11
      ],
      [
        7,
        9,
        12
      ],
      [
        7,
        11,
        12
      ],
      [
        8,
        10,
        12
      ],
      [
        8,
        10,
        13
      ],
      [
        8,
        11,
        12
      ],
      [
        8,
        11,
        13
      ],
      [
        9,
        10,
        12
      ],
      [
        9,
        10,
        13
      ],
      [
        9,
        11,
        12
      ],
      [
        9,
        11,
        13
      ],
      [
        8,
        10,
        9,
        11
      ],
      [
        8,
        12,
        9,
        13
      ],
      [
        10,
        12,
        11,
        13
      ],
      [
        0,
        1,
        5,
        8,
        4
      ],
      [
        0,
        2,
        6,
        10,
        4
      ],
      [
        0,
        3,
        7,
        12,
        4
      ],
      [
        1,
        2,
        6,
        13,
        5
      ],
      [
        1,
        3,
        7,
        11,
        5
      ],
      [
        2,
        3,
        7,
        9,
        6
      ]
    ]

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

export default TetrahedralUrsachoron;
