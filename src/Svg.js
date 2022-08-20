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
import Cell600Analog from "./figures/Cell600Analog";
import Icosahedron from "./figures/Icosahedron";
import TruncatedTetrahedron from "./figures/TruncatedTetrahedron";
import Cuboctahedron from "./figures/Cuboctahedron";
import TruncatedOctahedron from "./figures/TruncatedOctahedron";
import Rhombicuboctahedron from "./figures/Rhombicuboctahedron";
import TruncatedCube from "./figures/TruncatedCube";
import GreatRhombicuboctahedron from "./figures/GreatRhombicuboctahedron";
import SnubCube from "./figures/SnubCube";
import Icosidodecahedron from "./figures/Icosidodecahedron";
import TruncatedIcosahedron from "./figures/TruncatedIcosahedron";
import Rhombicosidodecahedron from "./figures/Rhombicosidodecahedron";
import TruncatedDodecahedron from "./figures/TruncatedDodecahedron";
import GreatRhombicosidodecahedron from "./figures/GreatRhombicosidodecahedron";
import SnubDodecahedron from "./figures/SnubDodecahedron";
import TrianglePrism from "./figures/TrianglePrism";

export let canRotate = false;
export let mouseX = 0;
export let mouseY = 0;
export let prevX = 0;
export let prevY = 0;

const Svg = ({
  dimension,
  anglesArray,
  figure,
  dimensionOfFigure,
  transposeRotation,
  orthography,
  displayEdges,
  displayVertices,
}) => {
  useEffect(() => {
    if (dimension > 1) {
      const matrix = generateMatrixes(
        dimension,
        anglesArray,
        transposeRotation
      );
      if (orthography) {
        generateFigureOrthography(
          verticesArray,
          matrix,
          dimensionOfFigure
        );
      } else {
        generateFigure(verticesArray, matrix, dimension, dimensionOfFigure);
      }
    }
  });

  if (+dimensionOfFigure === 0) {
    return (
      <svg width="600" height="400" className="svg">
        <circle cx="300" cy="200" r="3" fill="white" />
      </svg>
    );
  }

  if (+dimensionOfFigure === 1) {
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

  if (figure === "Cube") {
    return (
      <Cube
        dimension={dimension}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        verticesArray={verticesArray}
      />
    );
  }

  if (figure === "Symplex") {
    return (
      <Symplex
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        verticesArray={verticesArray}
      />
    );
  }

  if (figure === "Octahedron") {
    return (
      <Octahedron
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        verticesArray={verticesArray}
      />
    );
  }

  if (figure === "24-cell-analog") {
    return (
      <Cell24Analog
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "120-cell-analog") {
    return (
      <Cell120Analog
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "600-cell-analog") {
    return (
      <Cell600Analog
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "3D Icosahedron") {
    return (
      <Icosahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "3D Truncated Tetrahedron") {
    return (
      <TruncatedTetrahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "Cuboctahedron") {
    return (
      <Cuboctahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "Truncated Octahedron") {
    return (
      <TruncatedOctahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "Rhombicuboctahedron") {
    return (
      <Rhombicuboctahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "Truncated Cube") {
    return (
      <TruncatedCube
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "Great Rhombicuboctahedron") {
    return (
      <GreatRhombicuboctahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }
  
  if (figure === "3D Snub Cube") {
    return (
      <SnubCube
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "3D Icosidodecahedron") {
    return (
      <Icosidodecahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "3D Truncated Icosahedron") {
    return (
      <TruncatedIcosahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "3D Rhombicosidodecahedron") {
    return (
      <Rhombicosidodecahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "3D Truncated Dodecahedron") {
    return (
      <TruncatedDodecahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "3D Great Rhombicosidodecahedron") {
    return (
      <GreatRhombicosidodecahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "3D Snub Dodecahedron") {
    return (
      <SnubDodecahedron
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }

  if (figure === "Triangle Prism") {
    return (
      <TrianglePrism
        verticesArray={verticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
      />
    );
  }
};



export default Svg;
