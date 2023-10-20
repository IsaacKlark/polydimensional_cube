import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";

let polygons = []
const CubeAtopIcosahedron = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces
}) => {
  if (!modified) {
    let linesArray = [];

    for (let i = 0; i < verticesArray.length; i++) {
      for (let j = i; j < verticesArray.length; j++) {
        if (i !== j) {
          let length = 0;
          for (let k = 0; k < dimensionOfFigure; k++) {
            length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
          }
          length = Math.round(length ** (1 / 2));

          if (length === 160) {
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
    setLinesArray(linesArray)
  }

  useMemo(() => {
    if (!modified) {

    polygons = [
      [
        0,
        2,
        8
      ],
      [
        0,
        2,
        10
      ],
      [
        0,
        4,
        6
      ],
      [
        0,
        4,
        8
      ],
      [
        0,
        4,
        12
      ],
      [
        0,
        6,
        10
      ],
      [
        0,
        6,
        17
      ],
      [
        0,
        8,
        12
      ],
      [
        0,
        10,
        17
      ],
      [
        0,
        12,
        17
      ],
      [
        1,
        3,
        9
      ],
      [
        1,
        3,
        11
      ],
      [
        1,
        5,
        7
      ],
      [
        1,
        5,
        9
      ],
      [
        1,
        5,
        13
      ],
      [
        1,
        7,
        11
      ],
      [
        1,
        7,
        15
      ],
      [
        1,
        9,
        13
      ],
      [
        1,
        11,
        15
      ],
      [
        1,
        13,
        15
      ],
      [
        2,
        5,
        7
      ],
      [
        2,
        5,
        10
      ],
      [
        2,
        5,
        14
      ],
      [
        2,
        7,
        8
      ],
      [
        2,
        7,
        18
      ],
      [
        2,
        8,
        18
      ],
      [
        2,
        10,
        14
      ],
      [
        2,
        14,
        18
      ],
      [
        3,
        4,
        6
      ],
      [
        3,
        4,
        11
      ],
      [
        3,
        4,
        19
      ],
      [
        3,
        6,
        9
      ],
      [
        3,
        6,
        16
      ],
      [
        3,
        9,
        16
      ],
      [
        3,
        11,
        19
      ],
      [
        3,
        16,
        19
      ],
      [
        4,
        8,
        11
      ],
      [
        4,
        8,
        12
      ],
      [
        4,
        11,
        19
      ],
      [
        4,
        12,
        19
      ],
      [
        5,
        9,
        10
      ],
      [
        5,
        9,
        13
      ],
      [
        5,
        10,
        14
      ],
      [
        5,
        13,
        14
      ],
      [
        6,
        9,
        10
      ],
      [
        6,
        9,
        16
      ],
      [
        6,
        10,
        17
      ],
      [
        6,
        16,
        17
      ],
      [
        7,
        8,
        11
      ],
      [
        7,
        8,
        18
      ],
      [
        7,
        11,
        15
      ],
      [
        7,
        15,
        18
      ],
      [
        8,
        12,
        18
      ],
      [
        9,
        13,
        16
      ],
      [
        10,
        14,
        17
      ],
      [
        11,
        15,
        19
      ],
      [
        0,
        2,
        14,
        17
      ],
      [
        0,
        2,
        18,
        12
      ],
      [
        1,
        3,
        16,
        13
      ],
      [
        1,
        3,
        19,
        15
      ],
      [
        4,
        6,
        16,
        19
      ],
      [
        4,
        6,
        17,
        12
      ],
      [
        5,
        7,
        15,
        13
      ],
      [
        5,
        7,
        18,
        14
      ],
      [
        8,
        11,
        15,
        18
      ],
      [
        8,
        11,
        19,
        12
      ],
      [
        9,
        10,
        14,
        13
      ],
      [
        9,
        10,
        17,
        16
      ],
      [
        12,
        17,
        14,
        18
      ],
      [
        12,
        17,
        16,
        19
      ],
      [
        12,
        18,
        15,
        19
      ],
      [
        13,
        14,
        17,
        16
      ],
      [
        13,
        14,
        18,
        15
      ],
      [
        13,
        15,
        19,
        16
      ],
      [
        0,
        2,
        14,
        17
      ],
      [
        0,
        2,
        18,
        12
      ],
      [
        1,
        3,
        16,
        13
      ],
      [
        1,
        3,
        19,
        15
      ],
      [
        4,
        6,
        16,
        19
      ],
      [
        4,
        6,
        17,
        12
      ],
      [
        5,
        7,
        15,
        13
      ],
      [
        5,
        7,
        18,
        14
      ],
      [
        8,
        11,
        15,
        18
      ],
      [
        8,
        11,
        19,
        12
      ],
      [
        9,
        10,
        14,
        13
      ],
      [
        9,
        10,
        17,
        16
      ],
      [
        12,
        17,
        14,
        18
      ],
      [
        12,
        17,
        16,
        19
      ],
      [
        12,
        18,
        15,
        19
      ],
      [
        13,
        14,
        17,
        16
      ],
      [
        13,
        14,
        18,
        15
      ],
      [
        13,
        15,
        19,
        16
      ]
    ]
    setPolygonsArray(polygons)
  }
  }, [modified])

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
        _linesArray.map((id, index) => {
          let vertex1 = 0;
          let vertex2 = 0;

          vertex1 = _linesArray[index][0];
          vertex2 = _linesArray[index][1];
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
        ? polygonsArray.map((arr, index) => (
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

export default CubeAtopIcosahedron;
