import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const Runcinated5Cell = ({
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
    const edgeLength = 120;
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
          16
        ],
        [
          0,
          4,
          11
        ],
        [
          0,
          4,
          19
        ],
        [
          0,
          8,
          16
        ],
        [
          0,
          11,
          19
        ],
        [
          1,
          3,
          9
        ],
        [
          1,
          3,
          17
        ],
        [
          1,
          5,
          10
        ],
        [
          1,
          5,
          18
        ],
        [
          1,
          9,
          17
        ],
        [
          1,
          10,
          18
        ],
        [
          2,
          5,
          7
        ],
        [
          2,
          5,
          15
        ],
        [
          2,
          7,
          15
        ],
        [
          2,
          8,
          16
        ],
        [
          3,
          4,
          6
        ],
        [
          3,
          4,
          14
        ],
        [
          3,
          6,
          14
        ],
        [
          3,
          9,
          17
        ],
        [
          4,
          6,
          14
        ],
        [
          4,
          11,
          19
        ],
        [
          5,
          7,
          15
        ],
        [
          5,
          10,
          18
        ],
        [
          6,
          8,
          10
        ],
        [
          6,
          8,
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
          13
        ],
        [
          9,
          11,
          12
        ],
        [
          12,
          14,
          16
        ],
        [
          12,
          14,
          18
        ],
        [
          12,
          16,
          18
        ],
        [
          13,
          15,
          17
        ],
        [
          13,
          15,
          19
        ],
        [
          13,
          17,
          19
        ],
        [
          14,
          16,
          18
        ],
        [
          15,
          17,
          19
        ],
        [
          0,
          2,
          7,
          11
        ],
        [
          0,
          2,
          8,
          16
        ],
        [
          0,
          2,
          15,
          19
        ],
        [
          0,
          4,
          6,
          8
        ],
        [
          0,
          4,
          11,
          19
        ],
        [
          0,
          4,
          14,
          16
        ],
        [
          0,
          8,
          13,
          19
        ],
        [
          0,
          11,
          12,
          16
        ],
        [
          1,
          3,
          6,
          10
        ],
        [
          1,
          3,
          9,
          17
        ],
        [
          1,
          3,
          14,
          18
        ],
        [
          1,
          5,
          7,
          9
        ],
        [
          1,
          5,
          10,
          18
        ],
        [
          1,
          5,
          15,
          17
        ],
        [
          1,
          9,
          12,
          18
        ],
        [
          1,
          10,
          13,
          17
        ],
        [
          2,
          5,
          7,
          15
        ],
        [
          2,
          5,
          10,
          8
        ],
        [
          2,
          5,
          18,
          16
        ],
        [
          2,
          7,
          12,
          16
        ],
        [
          2,
          8,
          13,
          15
        ],
        [
          3,
          4,
          6,
          14
        ],
        [
          3,
          4,
          11,
          9
        ],
        [
          3,
          4,
          19,
          17
        ],
        [
          3,
          6,
          13,
          17
        ],
        [
          3,
          9,
          12,
          14
        ],
        [
          4,
          6,
          13,
          19
        ],
        [
          4,
          11,
          12,
          14
        ],
        [
          5,
          7,
          12,
          18
        ],
        [
          5,
          10,
          13,
          15
        ],
        [
          6,
          8,
          10,
          13
        ],
        [
          6,
          8,
          16,
          14
        ],
        [
          6,
          10,
          18,
          14
        ],
        [
          7,
          9,
          11,
          12
        ],
        [
          7,
          9,
          17,
          15
        ],
        [
          7,
          11,
          19,
          15
        ],
        [
          8,
          10,
          18,
          16
        ],
        [
          9,
          11,
          19,
          17
        ],
        [
          12,
          14,
          16,
          18
        ],
        [
          13,
          15,
          17,
          19
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

export default Runcinated5Cell;
