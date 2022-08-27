import React from "react";

const CliffordTorus = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  segments
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
