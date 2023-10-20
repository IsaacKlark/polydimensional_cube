import React, { useMemo, useState } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const Cantellated5Cell = ({
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
          10
        ],
        [
          0,
          2,
          18
        ],
        [
          0,
          3,
          8
        ],
        [
          0,
          10,
          16
        ],
        [
          0,
          16,
          18
        ],
        [
          1,
          4,
          11
        ],
        [
          1,
          4,
          19
        ],
        [
          1,
          5,
          9
        ],
        [
          1,
          11,
          17
        ],
        [
          1,
          17,
          19
        ],
        [
          2,
          4,
          6
        ],
        [
          2,
          10,
          22
        ],
        [
          2,
          18,
          22
        ],
        [
          3,
          5,
          7
        ],
        [
          3,
          5,
          14
        ],
        [
          3,
          7,
          23
        ],
        [
          3,
          14,
          23
        ],
        [
          4,
          11,
          24
        ],
        [
          4,
          19,
          24
        ],
        [
          5,
          7,
          25
        ],
        [
          5,
          14,
          25
        ],
        [
          6,
          8,
          9
        ],
        [
          6,
          8,
          20
        ],
        [
          6,
          9,
          21
        ],
        [
          6,
          20,
          21
        ],
        [
          7,
          10,
          11
        ],
        [
          7,
          23,
          25
        ],
        [
          8,
          9,
          15
        ],
        [
          8,
          15,
          20
        ],
        [
          9,
          15,
          21
        ],
        [
          10,
          16,
          22
        ],
        [
          11,
          17,
          24
        ],
        [
          12,
          14,
          15
        ],
        [
          12,
          26,
          27
        ],
        [
          12,
          26,
          28
        ],
        [
          12,
          27,
          29
        ],
        [
          12,
          28,
          29
        ],
        [
          13,
          22,
          24
        ],
        [
          13,
          26,
          27
        ],
        [
          13,
          26,
          28
        ],
        [
          13,
          27,
          29
        ],
        [
          13,
          28,
          29
        ],
        [
          14,
          23,
          25
        ],
        [
          15,
          20,
          21
        ],
        [
          16,
          18,
          22
        ],
        [
          16,
          23,
          28
        ],
        [
          17,
          19,
          24
        ],
        [
          17,
          25,
          29
        ],
        [
          18,
          20,
          26
        ],
        [
          19,
          21,
          27
        ],
        [
          0,
          2,
          6,
          8
        ],
        [
          0,
          2,
          22,
          16
        ],
        [
          0,
          3,
          7,
          10
        ],
        [
          0,
          3,
          23,
          16
        ],
        [
          0,
          8,
          20,
          18
        ],
        [
          0,
          10,
          22,
          18
        ],
        [
          1,
          4,
          6,
          9
        ],
        [
          1,
          4,
          24,
          17
        ],
        [
          1,
          5,
          7,
          11
        ],
        [
          1,
          5,
          25,
          17
        ],
        [
          1,
          9,
          21,
          19
        ],
        [
          1,
          11,
          24,
          19
        ],
        [
          2,
          4,
          11,
          10
        ],
        [
          2,
          4,
          24,
          22
        ],
        [
          2,
          6,
          20,
          18
        ],
        [
          2,
          10,
          16,
          18
        ],
        [
          3,
          5,
          9,
          8
        ],
        [
          3,
          5,
          25,
          23
        ],
        [
          3,
          7,
          25,
          14
        ],
        [
          3,
          8,
          15,
          14
        ],
        [
          4,
          6,
          21,
          19
        ],
        [
          4,
          11,
          17,
          19
        ],
        [
          5,
          7,
          23,
          14
        ],
        [
          5,
          9,
          15,
          14
        ],
        [
          6,
          8,
          15,
          21
        ],
        [
          6,
          9,
          15,
          20
        ],
        [
          7,
          10,
          16,
          23
        ],
        [
          7,
          11,
          17,
          25
        ],
        [
          8,
          9,
          21,
          20
        ],
        [
          10,
          11,
          24,
          22
        ],
        [
          12,
          14,
          23,
          28
        ],
        [
          12,
          14,
          25,
          29
        ],
        [
          12,
          15,
          20,
          26
        ],
        [
          12,
          15,
          21,
          27
        ],
        [
          12,
          26,
          13,
          29
        ],
        [
          12,
          27,
          13,
          28
        ],
        [
          13,
          22,
          16,
          28
        ],
        [
          13,
          22,
          18,
          26
        ],
        [
          13,
          24,
          17,
          29
        ],
        [
          13,
          24,
          19,
          27
        ],
        [
          16,
          18,
          26,
          28
        ],
        [
          17,
          19,
          27,
          29
        ],
        [
          20,
          21,
          27,
          26
        ],
        [
          23,
          25,
          29,
          28
        ],
        [
          26,
          27,
          29,
          28
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

export default Cantellated5Cell;
