import React from "react";

const Octahedron = ({
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  verticesArray,
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

  return (
    <svg width="600" height="400" className="svg">
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
