import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const BilunabirotundaPseudopyramid = ({
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
        14
      ],
      [
        0,
        4,
        10
      ],
      [
        0,
        4,
        14
      ],
      [
        0,
        10,
        14
      ],
      [
        1,
        3,
        15
      ],
      [
        1,
        5,
        8
      ],
      [
        1,
        5,
        15
      ],
      [
        1,
        8,
        15
      ],
      [
        2,
        6,
        9
      ],
      [
        2,
        6,
        14
      ],
      [
        2,
        9,
        14
      ],
      [
        3,
        7,
        11
      ],
      [
        3,
        7,
        15
      ],
      [
        3,
        11,
        15
      ],
      [
        4,
        10,
        14
      ],
      [
        4,
        11,
        12
      ],
      [
        4,
        12,
        14
      ],
      [
        5,
        6,
        13
      ],
      [
        5,
        8,
        15
      ],
      [
        5,
        13,
        15
      ],
      [
        6,
        9,
        14
      ],
      [
        6,
        13,
        14
      ],
      [
        7,
        10,
        13
      ],
      [
        7,
        11,
        15
      ],
      [
        7,
        13,
        15
      ],
      [
        8,
        9,
        12
      ],
      [
        8,
        12,
        15
      ],
      [
        9,
        12,
        14
      ],
      [
        10,
        13,
        14
      ],
      [
        11,
        12,
        15
      ],
      [
        12,
        14,
        15
      ],
      [
        13,
        14,
        15
      ],
      [
        4,
        10,
        7,
        11
      ],
      [
        4,
        11,
        15,
        14
      ],
      [
        5,
        6,
        9,
        8
      ],
      [
        5,
        6,
        14,
        15
      ],
      [
        7,
        10,
        14,
        15
      ],
      [
        8,
        9,
        14,
        15
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

export default BilunabirotundaPseudopyramid;
