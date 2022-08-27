import React from "react";

const Symplex = ({
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  verticesArray,
  onWheel,
  onMouseOver,
  onMouseLeave,
}) => {
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

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
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

export default Symplex;
