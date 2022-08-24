import React from "react";

const Sphere = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
}) => {
  let linesArray = [];
  const verticesLength = verticesArray.length;
  const firstDistance = 20;

  for (let i = 0; i < verticesLength; i++) {
    if (i+1 < verticesLength ) {
      linesArray.push([i, i + 1]);
    }

    if (i % 20 === 0) {
      linesArray.push([i, i + (firstDistance - 1)]);
    }

    let distance = 20;

    for (let j = 2; j < +dimensionOfFigure; j++) {
      let step = (Math.ceil(i / (distance * 12)));

      if (i + distance < step * distance * 12 && i + distance < verticesArray.length) {
        linesArray.push([i, i + distance]);
      }

      distance *= 12;
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
    <svg width="600" height="400" className="svg">
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

export default Sphere;