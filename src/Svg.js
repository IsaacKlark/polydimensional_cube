import generateFigureOrthography from "./generateFigureOrthography";
import React, { useEffect } from "react";
import generateFigure from "./generateFigure";
import { verticesArray } from "./vertices";
import generateMatrixes from "./generateMatrixes";
import Cube from "./figures/Cube";
import Symplex from "./figures/Symplex";
import Octahedron from "./figures/Octahedron";
import Cell24Analog from "./figures/Cell24Analog";
import Cell120Analog from "./figures/Cell120Analog";
export let canRotate = false;
export let mouseX = 0;
export let mouseY = 0;
export let prevX = 0;
export let prevY = 0;

const Svg = ({ dimension, anglesArray, figure, dimensionOfFigure, transposeRotation, orthography }) => {
  useEffect(() => {
    if (dimension > 1) {
      const matrix = generateMatrixes(dimension, anglesArray, transposeRotation);
      if (orthography) {
        generateFigureOrthography(verticesArray, matrix, dimension, orthography);
      } else {
        generateFigure(verticesArray, matrix, dimension, orthography);
      }
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

  if (figure === "cube") {
    return <Cube dimension={dimension} />;
  }

  if (figure === "symplex") {
    return <Symplex dimensionOfFigure={dimensionOfFigure} />
  }

  if (figure === "octahedron") {
    return <Octahedron dimensionOfFigure={dimensionOfFigure} />;
  }

  if (figure === "24-cell-analog") {
    return <Cell24Analog verticesArray={verticesArray} dimensionOfFigure={dimensionOfFigure} />;
  }

  if (figure === "120-cell-analog") {
    return <Cell120Analog verticesArray={verticesArray} dimensionOfFigure={dimensionOfFigure} />;
  }
};

export default Svg;
