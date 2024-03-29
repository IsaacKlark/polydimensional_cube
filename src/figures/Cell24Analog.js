import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const Cell24Analog = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces,
}) => {
  let linesArray = [];

  if (!modified) {
    let check1 = (array1, array2) => {
      for (let i = 0; i < dimensionOfFigure; i++) {
        if (
          array1[i] - array2[i] !== 50 &&
          array1[i] - array2[i] !== -50 &&
          array2[i] - array1[i] !== 50 &&
          array2[i] - array1[i] !== -50
        ) {
          return false;
        }
      }

      return true;
    };

    let check2 = (array1, array2) => {
      let degree100 = false;
      let equal = 0;
      for (let i = 0; i < dimensionOfFigure; i++) {
        if (
          array1[i] - array2[i] === 100 ||
          array1[i] - array2[i] === -100 ||
          array2[i] - array1[i] === 100 ||
          array2[i] - array1[i] === -100
        ) {
          degree100 = true;
        }

        if (array1[i] === array2[i]) {
          equal += 1;
        }
      }

      return !!(degree100 && equal === array1.length - 1);
    };

    const linesSet = new Set();

    for (let i = 0; i < verticesArray.length; i++) {
      for (let j = 0; j < verticesArray.length; j++) {
        if (
          check1(verticesArray[i], verticesArray[j]) ||
          check2(verticesArray[i], verticesArray[j])
        ) {
          linesSet.add([i, j].sort((a, b) => a - b).join(","));
        }
      }
    }

    linesArray = Array.from(linesSet).map((item) => item.split(","));

    const amountOfLines = linesArray.length;
    let ids = 0;
    const lines = [];

    for (let i = 0; i < amountOfLines; i++) {
      lines.push(ids);
      ids += 1;
    }

    const saveLines = [];

    lines.forEach((el, index) => {
      const vertex1 = linesArray[index][0];
      const vertex2 = linesArray[index][1];
      saveLines.push([vertex1, vertex2]);
    });

    setLinesArray(saveLines);
  }

  useMemo(() => {
    if (!modified) {
      polygons = [];
      if (!displayFaces || verticesArray.length > 300) return;

      linesArray = linesArray.map((arr) => arr.map((val) => +val));

      function getFacesArray(verticesArray, linesArray) {
        const facesArray = [];

        for (let i = 0; i < verticesArray.length; i++) {
          for (let j = i + 1; j < verticesArray.length; j++) {
            for (let k = j + 1; k < verticesArray.length; k++) {
              if (
                linesArray.some(
                  ([a, b]) => (a === i && b === j) || (a === j && b === i)
                ) &&
                linesArray.some(
                  ([a, b]) => (a === j && b === k) || (a === k && b === j)
                ) &&
                linesArray.some(
                  ([a, b]) => (a === k && b === i) || (a === i && b === k)
                )
              ) {
                facesArray.push([i, j, k]);
              }
            }
          }
        }

        return facesArray;
      }

      polygons = getFacesArray(verticesArray, linesArray);
      setPolygonsArray(polygons);
    }
  }, [verticesArray, displayFaces, modified, dimensionOfFigure]);

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces
        ? polygonsArray.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type={arr.length}
            />
          ))
        : null}
      {displayEdges &&
        _linesArray.map((id, index) => {
          let vertex1 = 0;
          let vertex2 = 0;

          vertex1 = id[0];
          vertex2 = id[1];
          return (
            <line
              key={index}
              x1="200"
              y1="200"
              x2="400"
              y2="200"
              stroke="white"
              id={`line${index}`}
              className="line"
              vertex1={vertex1}
              vertex2={vertex2}
            />
          );
        })}

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

export default Cell24Analog;
