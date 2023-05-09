import React, {useMemo} from "react";

let polygons = [];
let colors = [];

const CliffordTorus = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  segments,
  displayFaces
}) => {
  let linesArray = [];

  const _segments = +segments + 1 || 21;

  for (let i = 0; i < verticesArray.length; i++) {
    const step = Math.ceil(i / _segments);

    if (i === step * _segments - 1) {
      linesArray.push([i, step * _segments - (_segments - 1)]);
    }

    let distance = 1;

    for (let j = 0; j < Math.ceil(+dimensionOfFigure / 2); j++) {
      if (
        i + distance < step * distance * _segments &&
        i + distance < verticesArray.length
      ) {
        linesArray.push([i, i + distance]);
      }
      distance *= _segments;
    }
  }

  const amountOfLines = linesArray.length;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  useMemo(() => {
    if (displayFaces && dimensionOfFigure >= 3) {
      for (let i = 0; i < segments ** 2 + segments - 1; i += 1) {
        polygons.push([i, i + 1,  i + segments + 2, i + segments + 1])
      }
    }

    polygons.forEach(() => {
      colors.push([
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
      ]);
    });
  }, [displayFaces, dimensionOfFigure, verticesArray]);

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces && +dimensionOfFigure >= 3
        ? polygons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type="4"
              data-color={JSON.stringify(colors[index])}
            />
          ))
        : null}
      {displayEdges &&
        lines.map((id, index) => {
          let vertex1 = 0;
          let vertex2 = 0;

          vertex1 = linesArray[index][0];
          vertex2 = linesArray[index][1];
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

export default CliffordTorus;
