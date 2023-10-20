import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const OctahedronAtopRhombicuboctahedron = ({
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
          0,
          6,
          11
        ],
        [
          0,
          6,
          12
        ],
        [
          0,
          8,
          11
        ],
        [
          0,
          8,
          12
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
          1,
          7,
          9
        ],
        [
          1,
          7,
          10
        ],
        [
          1,
          9,
          13
        ],
        [
          1,
          10,
          13
        ],
        [
          2,
          14,
          19
        ],
        [
          2,
          14,
          21
        ],
        [
          2,
          18,
          19
        ],
        [
          2,
          18,
          21
        ],
        [
          3,
          15,
          16
        ],
        [
          3,
          15,
          17
        ],
        [
          3,
          16,
          20
        ],
        [
          3,
          17,
          20
        ],
        [
          4,
          22,
          28
        ],
        [
          4,
          22,
          29
        ],
        [
          4,
          25,
          28
        ],
        [
          4,
          25,
          29
        ],
        [
          5,
          23,
          24
        ],
        [
          5,
          23,
          26
        ],
        [
          5,
          24,
          27
        ],
        [
          5,
          26,
          27
        ],
        [
          6,
          14,
          22
        ],
        [
          7,
          15,
          23
        ],
        [
          8,
          16,
          24
        ],
        [
          9,
          17,
          25
        ],
        [
          10,
          18,
          26
        ],
        [
          11,
          19,
          27
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
          0,
          2,
          1,
          3
        ],
        [
          0,
          2,
          14,
          6
        ],
        [
          0,
          2,
          19,
          11
        ],
        [
          0,
          3,
          16,
          8
        ],
        [
          0,
          3,
          20,
          12
        ],
        [
          0,
          4,
          1,
          5
        ],
        [
          0,
          4,
          22,
          6
        ],
        [
          0,
          4,
          28,
          12
        ],
        [
          0,
          5,
          24,
          8
        ],
        [
          0,
          5,
          27,
          11
        ],
        [
          1,
          2,
          18,
          10
        ],
        [
          1,
          2,
          21,
          13
        ],
        [
          1,
          3,
          15,
          7
        ],
        [
          1,
          3,
          17,
          9
        ],
        [
          1,
          4,
          25,
          9
        ],
        [
          1,
          4,
          29,
          13
        ],
        [
          1,
          5,
          23,
          7
        ],
        [
          1,
          5,
          26,
          10
        ],
        [
          2,
          4,
          3,
          5
        ],
        [
          2,
          4,
          22,
          14
        ],
        [
          2,
          4,
          29,
          21
        ],
        [
          2,
          5,
          26,
          18
        ],
        [
          2,
          5,
          27,
          19
        ],
        [
          3,
          4,
          25,
          17
        ],
        [
          3,
          4,
          28,
          20
        ],
        [
          3,
          5,
          23,
          15
        ],
        [
          3,
          5,
          24,
          16
        ],
        [
          6,
          11,
          8,
          12
        ],
        [
          6,
          11,
          19,
          14
        ],
        [
          6,
          12,
          28,
          22
        ],
        [
          7,
          9,
          13,
          10
        ],
        [
          7,
          9,
          17,
          15
        ],
        [
          7,
          10,
          26,
          23
        ],
        [
          8,
          11,
          27,
          24
        ],
        [
          8,
          12,
          20,
          16
        ],
        [
          9,
          13,
          29,
          25
        ],
        [
          10,
          13,
          21,
          18
        ],
        [
          14,
          19,
          18,
          21
        ],
        [
          14,
          21,
          29,
          22
        ],
        [
          15,
          16,
          20,
          17
        ],
        [
          15,
          16,
          24,
          23
        ],
        [
          17,
          20,
          28,
          25
        ],
        [
          18,
          19,
          27,
          26
        ],
        [
          22,
          28,
          25,
          29
        ],
        [
          23,
          24,
          27,
          26
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

export default OctahedronAtopRhombicuboctahedron;
