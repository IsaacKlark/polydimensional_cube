import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const Symplex = ({
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  verticesArray,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces,
}) => {
  if (!modified) {
    const amountOfLines = ((+dimensionOfFigure + 1) * dimensionOfFigure) / 2;
    let ids = 0;
    const lines = [];

    for (let i = 0; i < amountOfLines; i++) {
      lines.push(ids);
      ids += 1;
    }

    let minsAmount = dimensionOfFigure;
    let xDots = [];
    let yDots = [];
    let currentMinX = 0;
    let currentMinY = 1;
    let currentY = 0;

    for (let i = 0; i < lines.length; i++) {
      let copyCurrentMinx = currentMinX;
      if (
        xDots.filter((value) => value === copyCurrentMinx).length < minsAmount
      ) {
        xDots.push(currentMinX);
      } else {
        currentMinX += 1;
        minsAmount -= 1;
        xDots.push(currentMinX);
      }

      if (currentY > dimensionOfFigure - 1) {
        currentMinY += 1;
        currentY = currentMinY;
        yDots.push(currentY);
      } else {
        currentY += 1;
        yDots.push(currentY);
      }
    }

    const saveLines = [];

    lines.forEach((el, index) => {
      const vertex1 = xDots[index];
      const vertex2 = yDots[index];
      saveLines.push([vertex1, vertex2]);
    });

    setLinesArray(saveLines);
  }

  useMemo(() => {
    if (!modified) {
      polygons = [];
      if (dimensionOfFigure < 2 || !displayFaces) return;

      let x = 0;
      let y = 1;
      let z = 2;

      while (x <= +dimensionOfFigure - 2) {
        polygons.push([x, y, z]);

        if (+dimensionOfFigure === 2) break;

        z += 1;

        if (z === +dimensionOfFigure + 1) {
          y += 1;
          z = y + 1;
        }

        if (y === +dimensionOfFigure) {
          x += 1;
          y = x + 1;
          z = y + 1;
        }
      }

      setPolygonsArray(polygons);
    }
  }, [dimensionOfFigure, displayFaces, modified]);

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
        _linesArray.map((el, index) => {
          let vertex1 = 0;
          let vertex2 = 0;

          vertex1 = el[0];
          vertex2 = el[1];
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

export default Symplex;
