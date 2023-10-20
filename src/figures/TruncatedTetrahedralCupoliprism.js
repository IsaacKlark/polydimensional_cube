import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const TruncatedTetrahedralCupoliprism = ({
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
        1,
        2
      ],
      [
        0,
        3,
        15
      ],
      [
        0,
        3,
        16
      ],
      [
        0,
        15,
        16
      ],
      [
        1,
        4,
        13
      ],
      [
        1,
        4,
        17
      ],
      [
        1,
        13,
        17
      ],
      [
        2,
        5,
        12
      ],
      [
        2,
        5,
        14
      ],
      [
        2,
        12,
        14
      ],
      [
        3,
        9,
        10
      ],
      [
        3,
        15,
        16
      ],
      [
        4,
        7,
        11
      ],
      [
        4,
        13,
        17
      ],
      [
        5,
        6,
        8
      ],
      [
        5,
        12,
        14
      ],
      [
        6,
        10,
        18
      ],
      [
        6,
        10,
        21
      ],
      [
        6,
        18,
        21
      ],
      [
        7,
        9,
        20
      ],
      [
        7,
        9,
        23
      ],
      [
        7,
        20,
        23
      ],
      [
        8,
        11,
        19
      ],
      [
        8,
        11,
        22
      ],
      [
        8,
        19,
        22
      ],
      [
        9,
        20,
        23
      ],
      [
        10,
        18,
        21
      ],
      [
        11,
        19,
        22
      ],
      [
        12,
        16,
        18
      ],
      [
        13,
        15,
        20
      ],
      [
        14,
        17,
        19
      ],
      [
        21,
        22,
        23
      ],
      [
        0,
        1,
        13,
        15
      ],
      [
        0,
        2,
        12,
        16
      ],
      [
        1,
        2,
        14,
        17
      ],
      [
        3,
        9,
        20,
        15
      ],
      [
        3,
        10,
        18,
        16
      ],
      [
        4,
        7,
        20,
        13
      ],
      [
        4,
        11,
        19,
        17
      ],
      [
        5,
        6,
        18,
        12
      ],
      [
        5,
        8,
        19,
        14
      ],
      [
        6,
        8,
        22,
        21
      ],
      [
        7,
        11,
        22,
        23
      ],
      [
        9,
        10,
        21,
        23
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
          //   polygons = polygons.filter((el, index2) => index2 !== index);
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

export default TruncatedTetrahedralCupoliprism;
