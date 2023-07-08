import React, { useEffect } from "react";
import { linesArray, setLinesArray } from "../vertices";
const Cube = ({
  dimension,
  displayEdges,
  displayVertices,
  verticesArray,
  onWheel,
  onMouseOver,
  onMouseLeave,
  dimensionOfFigure,
  displayFaces,
  originalPolygonsArray,
  setOriginalPolygonsArray,
}) => {
  useEffect(() => {
    let polygons = [];
    if (!displayFaces) return;

    let group1 = [0, 1, 3, 2];

    for (let i = 0; i < 2 ** (+dimensionOfFigure - 2); i++) {
      polygons.push(group1);
      group1 = group1.map((num) => num + 4);
    }

    if (dimensionOfFigure >= 3) {
      let group2 = [
        [0, 1, 5, 4],
        [0, 2, 6, 4],
        [1, 3, 7, 5],
        [2, 3, 7, 6],
      ];
      let index = 8;

      for (let i = 3; i < +dimensionOfFigure; i++) {
        const addPart = [...group2].map((arr) =>
          arr.map((value) => value + index)
        );
        index *= 2;

        group2 = [...group2, ...addPart];
      }
      polygons = [...polygons, ...group2];
    }

    if (dimensionOfFigure >= 4) {
      let group3 = [
        [0, 1, 9, 8],
        [0, 2, 10, 8],
        [1, 3, 11, 9],
        [2, 3, 11, 10],

        [4, 5, 13, 12],
        [4, 6, 14, 12],
        [5, 7, 15, 13],
        [6, 7, 15, 14],

        [0, 4, 12, 8],
        [1, 5, 13, 9],
        [2, 6, 14, 10],
        [3, 7, 15, 11],
      ];

      let groupNext = [...group3];
      let arr = [0, 8, 24, 16];
      let nextArr = [...arr];

      let outhIndex = 16;
      let nextOuthIndex = 16;
      let addIndex = 8;

      for (let k = 4; k <= +dimensionOfFigure; k++) {
        if (dimensionOfFigure >= k) {
          for (let i = k; i < +dimensionOfFigure; i++) {
            const addPart = [...group3].map((arr) =>
              arr.map((value) => value + outhIndex)
            );
            outhIndex *= 2;

            group3 = [...group3, ...addPart];
          }
          polygons = [...polygons, ...group3];
          nextOuthIndex *= 2;
          outhIndex = nextOuthIndex;

          const subGroup1 = groupNext.map((arr) =>
            arr.map((number, index) => (index > 1 ? number + addIndex : number))
          );
          const subGroup2 = subGroup1.map((arr) =>
            arr.map((number) => number + addIndex)
          );

          const subGroup3 = [];

          for (let i = 0; i < nextArr[1]; i++) {
            subGroup3.push(arr);
            arr = arr.map((num) => num + 1);
          }
          groupNext = [...subGroup1, ...subGroup2, ...subGroup3];
          group3 = [...subGroup1, ...subGroup2, ...subGroup3];

          addIndex *= 2;
          arr = nextArr.map((num) => num * 2);
          nextArr = [...arr];
        }
      }
    }

    setOriginalPolygonsArray(polygons);
  }, [dimensionOfFigure, displayFaces]);

  useEffect(() => {
    const finalLines = [];

    const amountOfLines = 2 ** (dimension - 1) * dimension;
    let ids = 0;
    const lines = [];

    for (let i = 0; i < amountOfLines; i++) {
      lines.push(ids);
      ids += 1;
    }

    const lengths = new Set();

    for (let i = 0; i < verticesArray.length; i++) {
      for (let j = i; j < verticesArray.length; j++) {
        if (i !== j) {
          let length = 0;
          for (let k = 0; k < dimensionOfFigure; k++) {
            length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
          }
          length = Math.round(length ** (1 / 2));

          lengths.add(length);
          // if (length === edgeLength) {
          //   linesArray.push([i, j]);
          // }
        }
      }
    }

    let cubesRepeats = 4;
    let cube = [0, 1, 2, 3];
    lines.forEach((id, index) => {
      let vertex1 = 0;
      let vertex2 = 0;

      if (index % 4 === 0 && index < 2 ** dimension) {
        vertex1 = 0 + Math.trunc(index / 4) * 4;
        vertex2 = 1 + Math.trunc(index / 4) * 4;
      }

      if (index % 4 === 1 && index < 2 ** dimension) {
        vertex1 = 1 + Math.trunc(index / 4) * 4;
        vertex2 = 3 + Math.trunc(index / 4) * 4;
      }

      if (index % 4 === 2 && index < 2 ** dimension) {
        vertex1 = 3 + Math.trunc(index / 4) * 4;
        vertex2 = 2 + Math.trunc(index / 4) * 4;
      }

      if (index % 4 === 3 && index < 2 ** dimension) {
        vertex1 = 0 + Math.trunc(index / 4) * 4;
        vertex2 = 2 + Math.trunc(index / 4) * 4;
      }

      if (index >= 2 ** dimension) {
        for (let i = 0; i < cube.length; i++) {
          if (index % cubesRepeats === i) {
            vertex1 = cube[i];
            vertex2 = cube[i] + cubesRepeats;

            if (index % cubesRepeats === cubesRepeats - 1) {
              const doubleRepeats = cubesRepeats * 2;
              cube = cube.map((dot) => dot + doubleRepeats);
            }
          }
        }

        if (cube[0] > 2 ** dimension - 1) {
          cubesRepeats *= 2;
          const twoLength = cube.length * 2;

          for (let i = 0; i < twoLength; i++) {
            cube[i] = i;
          }
        }
      }

      finalLines.push([vertex1, vertex2]);
    });

    setLinesArray(finalLines);
  }, [dimension, dimensionOfFigure]);

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces && originalPolygonsArray.map((arr, index) => (
        <polygon
          data-points={JSON.stringify(arr)}
          key={index}
          points="0 0, 0 0, 0 0, 0 0"
          fill={`rgba(255,255, 255, 0.3)`}
          className="polygon"
          data-type={arr.length}
        />
      ))}

      {displayEdges &&
        linesArray.map((el, index) => (
          <line
            key={index}
            x1="200"
            y1="200"
            x2="400"
            y2="200"
            stroke="white"
            id={`line${index}`}
            className="line"
            vertex1={el[0]}
            vertex2={el[1]}
            // strokeWidth={4}
          />
        ))}

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

export default Cube;
