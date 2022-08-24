import React from "react";

const CliffordTorus = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
}) => {
  let linesArray = [];

  for (let i = 0; i < verticesArray.length; i++) {
    const step = Math.ceil(i / (21));
 
    if (i === step * 21 - 1) {
      linesArray.push([i, step * 21 - 20]);
    }

    let distance = 1;

    for (let j = 0; j < Math.ceil(+dimensionOfFigure / 2); j++) {
      if (i+distance < step * distance * 21 && i + distance < verticesArray.length) {
        linesArray.push([i, i + distance]);
      } 
      distance *= 21;
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

export default CliffordTorus;
