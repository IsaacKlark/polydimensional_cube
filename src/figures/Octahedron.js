import React, { useMemo } from "react";

let polygons = [];
let colors = [];

const Octahedron = ({
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  verticesArray,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces,
}) => {
  const amountOfLines = dimensionOfFigure * (dimensionOfFigure - 1) * 2;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  let startXDotRepeatAmount = (dimensionOfFigure - 1) * 2;
  let startXDotRepeatAmount2 = (dimensionOfFigure - 1) * 2;

  let repeat = 0;
  let startX = 0;
  let startY = 2;
  let startY2 = 2;
  let xDots = [];
  let yDots = [];

  for (let i = 0; i < lines.length; i++) {
    if (startXDotRepeatAmount2 > 1) {
      startXDotRepeatAmount2 -= 1;
      xDots.push(startX);
      yDots.push(startY2);
      startY2 += 1;
    } else if (startXDotRepeatAmount2 === 1 && repeat === 0) {
      repeat = 1;
      startXDotRepeatAmount2 = startXDotRepeatAmount;
      xDots.push(startX);
      yDots.push(startY2);
      startY2 = startY;
      startX += 1;
    } else if (startXDotRepeatAmount2 === 1 && repeat === 1) {
      repeat = 0;
      startXDotRepeatAmount -= 2;
      startXDotRepeatAmount2 = startXDotRepeatAmount;
      xDots.push(startX);
      yDots.push(startY2);
      startY += 2;
      startY2 = startY;
      startX += 1;
    }
  }

  useMemo(() => {
    polygons = [];
    if (dimensionOfFigure < 2 || !displayFaces) return;
    const polySet = new Set();

    for (let k = 3; k <= +dimensionOfFigure; k++) {

      const amountOfLines = k * (k - 1) * 2;

      let ids = 0;
      const lines = [];

      for (let i = 0; i < amountOfLines; i++) {
        lines.push(ids);
        ids += 1;
      }

      for (let i = 0; i < lines.length; i++) {
        let vertex1 = 0;
        let vertex2 = 0;

        vertex1 = xDots[i];
        vertex2 = yDots[i];

        const initIndex = [vertex1, vertex2];

        if (
          initIndex.includes(k * 2 - 1) ||
          initIndex.includes(k * 2 - 2)
        ) {
          continue;
        }

        polySet.add(JSON.stringify([...initIndex, k * 2 - 2].sort((a,b) => a -b)));
        polySet.add(JSON.stringify([...initIndex, k * 2 - 1].sort((a,b) => a -b)));
      }
    }

    polygons = Array.from(polySet);

    polygons.forEach(() => {
      colors.push([
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
      ]);
    });
  }, [dimensionOfFigure, displayFaces]);

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces && +dimensionOfFigure > 2
        ? polygons.map((arr, index) => (
            <polygon
              data-points={arr}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type="3"
              data-color={JSON.stringify(colors[index])}
            />
          ))
        : null}

      {displayFaces && +dimensionOfFigure === 2 ? (
        <polygon
          data-points={JSON.stringify([3, 0, 2, 1])}
          points="0 0, 0 0, 0 0, 0 0"
          fill={`rgba(255,255, 255, 0.3)`}
          className="polygon"
          data-type="4"
        />
      ) : null}

      {displayEdges
        ? lines.map((id, index) => {
            let vertex1 = 0;
            let vertex2 = 0;

            vertex1 = xDots[index];
            vertex2 = yDots[index];

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
          })
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

export default Octahedron;
