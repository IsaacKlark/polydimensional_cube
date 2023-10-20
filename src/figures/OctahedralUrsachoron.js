import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const OctahedralUrsachoron = ({
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
        if (length === 140) {
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
        4
      ],
      [
        0,
        2,
        5
      ],
      [
        0,
        3,
        4
      ],
      [
        0,
        3,
        5
      ],
      [
        1,
        2,
        4
      ],
      [
        1,
        2,
        5
      ],
      [
        1,
        3,
        4
      ],
      [
        1,
        3,
        5
      ],
      [
        6,
        16,
        20
      ],
      [
        6,
        16,
        23
      ],
      [
        6,
        19,
        20
      ],
      [
        6,
        19,
        23
      ],
      [
        7,
        17,
        21
      ],
      [
        7,
        17,
        22
      ],
      [
        7,
        18,
        21
      ],
      [
        7,
        18,
        22
      ],
      [
        8,
        12,
        20
      ],
      [
        8,
        12,
        22
      ],
      [
        8,
        15,
        20
      ],
      [
        8,
        15,
        22
      ],
      [
        9,
        13,
        21
      ],
      [
        9,
        13,
        23
      ],
      [
        9,
        14,
        21
      ],
      [
        9,
        14,
        23
      ],
      [
        10,
        12,
        16
      ],
      [
        10,
        12,
        18
      ],
      [
        10,
        14,
        16
      ],
      [
        10,
        14,
        18
      ],
      [
        11,
        13,
        17
      ],
      [
        11,
        13,
        19
      ],
      [
        11,
        15,
        17
      ],
      [
        11,
        15,
        19
      ],
      [
        12,
        16,
        20
      ],
      [
        12,
        18,
        22
      ],
      [
        13,
        17,
        21
      ],
      [
        13,
        19,
        23
      ],
      [
        14,
        16,
        23
      ],
      [
        14,
        18,
        21
      ],
      [
        15,
        17,
        22
      ],
      [
        15,
        19,
        20
      ],
      [
        0,
        2,
        1,
        3
      ],
      [
        0,
        4,
        1,
        5
      ],
      [
        2,
        4,
        3,
        5
      ],
      [
        12,
        16,
        14,
        18
      ],
      [
        12,
        20,
        15,
        22
      ],
      [
        13,
        17,
        15,
        19
      ],
      [
        13,
        21,
        14,
        23
      ],
      [
        16,
        20,
        19,
        23
      ],
      [
        17,
        21,
        18,
        22
      ],
      [
        0,
        2,
        8,
        20,
        6
      ],
      [
        0,
        3,
        9,
        23,
        6
      ],
      [
        0,
        4,
        10,
        16,
        6
      ],
      [
        0,
        5,
        11,
        19,
        6
      ],
      [
        1,
        2,
        8,
        22,
        7
      ],
      [
        1,
        3,
        9,
        21,
        7
      ],
      [
        1,
        4,
        10,
        18,
        7
      ],
      [
        1,
        5,
        11,
        17,
        7
      ],
      [
        2,
        4,
        10,
        12,
        8
      ],
      [
        2,
        5,
        11,
        15,
        8
      ],
      [
        3,
        4,
        10,
        14,
        9
      ],
      [
        3,
        5,
        11,
        13,
        9
      ]
    ]
    setPolygonsArray(polygons)
  }
  }, [modified]);

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

export default OctahedralUrsachoron;
