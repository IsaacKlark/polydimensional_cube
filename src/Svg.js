import React, { useEffect } from "react";
import generateFigure from "./generateFigure";
import { verticesArray } from "./vertices";
import generateMatrixes from "./generateMatrixes";
import Cube from "./figures/Cube";
import Polytop from "./figures/Polytop";
import Octahedron from "./figures/Octahedron";

export let canRotate = false;
export let mouseX = 0;
export let mouseY = 0;
export let prevX = 0;
export let prevY = 0;


const Svg = ({ dimension, anglesArray, figure, dimensionOfFigure }) => {
  useEffect(() => {
    if (dimension > 1) {
      const matrix = generateMatrixes(dimension, anglesArray);
      generateFigure(verticesArray, matrix, dimension);
    }
  });

  if (+dimension === 0) {
    return (
      <svg width="600" height="400" className="svg">
        <circle cx="300" cy="200" r="3" fill="white" />
      </svg>
    );
  }

  if (+dimension === 1) {
    return (
      <svg width="600" height="400" className="svg">
        <line
          id="line1"
          x1="200"
          y1="200"
          x2="400"
          y2="200"
          stroke="white"
          className="line"
        />
      </svg>
    );
  }

  if (figure === "hypercube") {
    return <Cube dimension={dimension} />;
  }

  if (figure === "polytop") {
    return <Polytop dimensionOfFigure={dimensionOfFigure} />
  }

  if (figure === "octahedron") {
    return <Octahedron dimensionOfFigure={dimensionOfFigure} />;
  }
};

export default Svg;
