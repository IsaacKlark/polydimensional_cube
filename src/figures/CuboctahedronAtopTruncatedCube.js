import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = []

const CuboctahedronAtopTruncatedCube = ({
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
    setLinesArray(linesArray)
  }

  useMemo(() => {
    if (!modified) {

    polygons = [
      [
        0,
        4,
        8
      ],
      [
        0,
        6,
        10
      ],
      [
        0,
        12,
        17
      ],
      [
        1,
        5,
        9
      ],
      [
        1,
        7,
        11
      ],
      [
        1,
        13,
        15
      ],
      [
        2,
        4,
        11
      ],
      [
        2,
        6,
        9
      ],
      [
        2,
        14,
        18
      ],
      [
        3,
        5,
        10
      ],
      [
        3,
        7,
        8
      ],
      [
        3,
        16,
        19
      ],
      [
        4,
        20,
        26
      ],
      [
        5,
        21,
        24
      ],
      [
        6,
        22,
        25
      ],
      [
        7,
        23,
        27
      ],
      [
        8,
        28,
        35
      ],
      [
        9,
        29,
        30
      ],
      [
        10,
        32,
        33
      ],
      [
        11,
        31,
        34
      ],
      [
        12,
        20,
        28
      ],
      [
        13,
        21,
        29
      ],
      [
        14,
        22,
        30
      ],
      [
        15,
        23,
        31
      ],
      [
        16,
        24,
        32
      ],
      [
        17,
        25,
        33
      ],
      [
        18,
        26,
        34
      ],
      [
        19,
        27,
        35
      ],
      [
        0,
        4,
        2,
        6
      ],
      [
        0,
        4,
        20,
        12
      ],
      [
        0,
        6,
        25,
        17
      ],
      [
        0,
        8,
        3,
        10
      ],
      [
        0,
        8,
        28,
        12
      ],
      [
        0,
        10,
        33,
        17
      ],
      [
        1,
        5,
        3,
        7
      ],
      [
        1,
        5,
        21,
        13
      ],
      [
        1,
        7,
        23,
        15
      ],
      [
        1,
        9,
        2,
        11
      ],
      [
        1,
        9,
        29,
        13
      ],
      [
        1,
        11,
        31,
        15
      ],
      [
        2,
        4,
        26,
        18
      ],
      [
        2,
        6,
        22,
        14
      ],
      [
        2,
        9,
        30,
        14
      ],
      [
        2,
        11,
        34,
        18
      ],
      [
        3,
        5,
        24,
        16
      ],
      [
        3,
        7,
        27,
        19
      ],
      [
        3,
        8,
        35,
        19
      ],
      [
        3,
        10,
        32,
        16
      ],
      [
        4,
        8,
        7,
        11
      ],
      [
        4,
        8,
        28,
        20
      ],
      [
        4,
        11,
        34,
        26
      ],
      [
        5,
        9,
        6,
        10
      ],
      [
        5,
        9,
        29,
        21
      ],
      [
        5,
        10,
        32,
        24
      ],
      [
        6,
        9,
        30,
        22
      ],
      [
        6,
        10,
        33,
        25
      ],
      [
        7,
        8,
        35,
        27
      ],
      [
        7,
        11,
        31,
        23
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

export default CuboctahedronAtopTruncatedCube;
