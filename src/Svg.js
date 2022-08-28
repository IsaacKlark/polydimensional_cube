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
import Cubinder from "./figures/Cubinder";
import Sphere from "./figures/Sphere";
import CliffordTorus from "./figures/CliffordTorus";
import Torus from "./figures/Torus";
import SquareAntiprism from "./figures/SquareAntiprism";
import PentagonPrism from "./figures/PentagonPrism";
import Cylinder from "./figures/Cylinder";
import Cone from "./figures/Cone";
import PentagonalAntiprism from "./figures/PentagonalAntiprism";
import HexagonPrism from "./figures/HexagonPrism";

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
  perspective3D,
  perspectiveND,
  setScale,
  segments,
  originalVerticesArray
}) => {
  useEffect(() => {
    if (dimension > 1) {
      const matrix = generateMatrixes(
        dimension,
        anglesArray,
        transposeRotation
      );
      if (orthography) {
        generateFigureOrthography(verticesArray, matrix, dimensionOfFigure);
      } else {
        generateFigure(
          verticesArray,
          matrix,
          dimension,
          dimensionOfFigure,
          perspective3D,
          perspectiveND
        );
      }
    }
  });

  const onWheel = (e) => {
    if (e.deltaY > 0) {
      setScale((value) => value - 0.1)
    } else {
      setScale((value) => value + 0.1)
    };
  }

  const onMouseEnter = () => {
    document.body.style.overflow = "hidden";
  }

  const onMouseLeave = () => {
    document.body.style.overflow = "auto";
  }

  if (+dimensionOfFigure === 0) {
    return (
      <svg width="600" height="400" className="svg" onScroll={onWheel}>
        <circle cx="300" cy="200" r="3" fill="white" />
      </svg>
    );
  }

  if (+dimensionOfFigure === 1) {
    return (
      <svg width="600" height="400" className="svg" onScroll={onWheel}>
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
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "24-cell-analog") {
    return (
      <Cell24Analog
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "120-cell-analog") {
    return (
      <Cell120Analog
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "600-cell-analog") {
    return (
      <Cell600Analog
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "3D Icosahedron") {
    return (
      <Icosahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "3D Truncated Tetrahedron") {
    return (
      <TruncatedTetrahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "Cuboctahedron") {
    return (
      <Cuboctahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "Truncated Octahedron") {
    return (
      <TruncatedOctahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "Rhombicuboctahedron") {
    return (
      <Rhombicuboctahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "Truncated Cube") {
    return (
      <TruncatedCube
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "Great Rhombicuboctahedron") {
    return (
      <GreatRhombicuboctahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "3D Snub Cube") {
    return (
      <SnubCube
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "3D Icosidodecahedron") {
    return (
      <Icosidodecahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "3D Truncated Icosahedron") {
    return (
      <TruncatedIcosahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "3D Rhombicosidodecahedron") {
    return (
      <Rhombicosidodecahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "3D Truncated Dodecahedron") {
    return (
      <TruncatedDodecahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "3D Great Rhombicosidodecahedron") {
    return (
      <GreatRhombicosidodecahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "3D Snub Dodecahedron") {
    return (
      <SnubDodecahedron
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "Triangle Prism") {
    return (
      <TrianglePrism
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  if (figure === "Cubinder analog") {
    return (
      <Cubinder
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }

  if (figure === "Sphere") {
    return (
      <Sphere
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }

  if (figure === "Clifford Torus") {
    return (
      <CliffordTorus
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }

  if (figure === "Torus") {
    return (
      <Torus
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }

  if (figure === "3D Square Antiprism") {
    return (
      <SquareAntiprism
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }

  if (figure === "Pentagon Prism") {
    return (
      <PentagonPrism
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }

  if (figure === "Cylinder") {
    return (
      <Cylinder
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }

  if (figure === "Cone") {
    return (
      <Cone
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }

  if (figure === "3D Pentagonal Antiprism") {
    return (
      <PentagonalAntiprism
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }

  if (figure === "Hexahonal Prism") {
    return (
      <HexagonPrism
        verticesArray={originalVerticesArray}
        dimensionOfFigure={dimensionOfFigure}
        displayEdges={displayEdges}
        displayVertices={displayVertices}
        onWheel={onWheel}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
        segments={segments}
      />
    );
  }
};

export default Svg;
