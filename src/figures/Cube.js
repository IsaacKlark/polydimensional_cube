import React from "react";

const Cube = ({ dimension, displayEdges, displayVertices, verticesArray }) => {
  const amountOfLines = 2 ** (dimension - 1) * dimension;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  let cubesRepeats = 4;
  let cube = [0, 1, 2, 3];

  return (
    <svg width="600" height="400" className="svg">
      {displayEdges &&
        lines.map((id, index) => {
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

      {displayVertices ?
        verticesArray.map((item, index) => (
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
        )) : null}
    </svg>
  );
};

export default Cube;
