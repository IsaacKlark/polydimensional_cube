import React from "react";
let canRotate = false;
let mouseX = 0;
let mouseY = 0;
let prevX = 0;
let prevY = 0;

const Square = ({ dimension }) => {
  const amountOfLines = 2 ** (dimension - 1) * dimension;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  let cubesRepeats = 4;
  let hypercube = [0, 1, 2, 3];

  const enableCanRotate = () => {
    canRotate = true;
  };

  const disableCanRotate = () => {
    canRotate = false;
  };

  const mouseMoving = (e) => {
    mouseX = prevX - e.clientX > 0 ? 1 : -1;
    mouseY = prevY - e.clientY > 0 ? 1 : -1;
    prevX = e.clientX;
    prevY = e.clientY;
  };

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onMouseDown={enableCanRotate}
      onMouseUp={disableCanRotate}
      onMouseMove={mouseMoving}
      onMouseLeave={disableCanRotate}
    >
      {lines.map((id, index) => {
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
          for (let i = 0; i < hypercube.length; i++) {
            if (index % cubesRepeats === i) {
              vertex1 = hypercube[i];
              vertex2 = hypercube[i] + cubesRepeats;

              if (index % cubesRepeats === cubesRepeats - 1) {
                const doubleRepeats = cubesRepeats * 2;
                hypercube = hypercube.map((dot) => dot + doubleRepeats);
              }
            }
          }

          if (hypercube[0] > 2 ** dimension - 1) {
            cubesRepeats *= 2;
            const twoLength = hypercube.length * 2;

            for (let i = 0; i < twoLength; i++) {
              hypercube[i] = i;
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
    </svg>
  );
};

export default Square;
