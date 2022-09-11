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
import HexagonalAntiprism from "./figures/HexagonalAntiprism";
import HeptagonPrism from "./figures/HeptagonPrism";
import OctagonalPrism from "./figures/OctagonalPrism";
import DecagonalPrism from "./figures/DecagonalPrism";
import HeptagonalAntiprism from "./figures/HeptagonalAntiprism";
import OctagonalAntiprism from "./figures/OctagonalAntiprism";
import DecagonalAntiprism from "./figures/DecagonalAntiprism";
import Rectified5Cell from "./figures/Rectified5Cell";
import Bitruncated5Cell from "./figures/Bitruncated5Cell";
import Runcinated5Cell from "./figures/Runcinated5Cell";
import Cantellated5Cell from "./figures/Cantellated5Cell";
import Truncated5Cell from "./figures/Truncated5Cell";
import Runcitruncated5Cell from "./figures/Runcitruncated5Cell";
import Cantitruncated5Cell from "./figures/Cantitruncated5Cell";
import Omnitruncated5Cell from "./figures/Omnitruncated5Cell";
import Truncated16Cell from "./figures/Truncated16Cell";
import RuncinatedTesseract from "./figures/RuncinatedTesseract";
import Runcitruncated16Cell from "./figures/Runcitruncated16Cell";
import RuncitruncatedTesseract from "./figures/RuncitruncatedTesseract";
import OmnitruncatedTesseract from "./figures/OmnitruncatedTesseract";
import Rectified24Сell from "./figures/Rectified24Сell";
import Bitruncated24Cell from "./figures/Bitruncated24Cell";
import Cantellated24Cell from "./figures/Cantellated24Cell";
import Runcinated24Cell from "./figures/Runcinated24Cell";
import Truncated24Cell from "./figures/Truncated24Cell";
import Runcitruncated24Cell from "./figures/Runcitruncated24Cell";
import Cantitruncated24Cell from "./figures/Cantitruncated24Cell";
import Omnitruncated24Cell from "./figures/Omnitruncated24Cell";
import Snub24Cell from "./figures/Snub24Cell";

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

  if (figure === "24-Сell") {
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

  if (figure === "120-Сell") {
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

  if (figure === "600-Сell") {
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

  if (figure === "3D Hexagonal Antiprism") {
    return (
      <HexagonalAntiprism
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

  if (figure === "Heptagonal Prism") {
    return (
      <HeptagonPrism
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
  
  if (figure === "Octagonal Prism") {
    return (
      <OctagonalPrism
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

  if (figure === "Decagonal Prism") {
    return (
      <DecagonalPrism
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

  if (figure === "3D Heptagonal Antiprism") {
    return (
      <HeptagonalAntiprism
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

  if (figure === "3D Octagonal Antiprism") {
    return (
      <OctagonalAntiprism
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

  if (figure === "3D Decagonal Antiprism") {
    return (
      <DecagonalAntiprism
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

  if (figure === "4D Rectified 5-cell") {
    return (
      <Rectified5Cell
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

  if (figure === "4D Bitruncated 5-cell") {
    return (
      <Bitruncated5Cell
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

  if (figure === "4D Bitruncated 5-cell") {
    return (
      <Bitruncated5Cell
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

  if (figure === "4D Runcinated 5-cell") {
    return (
      <Runcinated5Cell
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

  if (figure === "4D Cantellated 5-cell") {
    return (
      <Cantellated5Cell
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

  if (figure === "4D Truncated 5-cell") {
    return (
      <Truncated5Cell
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

  if (figure === "4D Runcitruncated 5-cell") {
    return (
      <Runcitruncated5Cell
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

  if (figure === "4D Cantitruncated 5-cell") {
    return (
      <Cantitruncated5Cell
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

  if (figure === "4D Omnitruncated 5-cell") {
    return (
      <Omnitruncated5Cell
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

  if (figure === "Truncated 16-cell") {
    return (
      <Truncated16Cell
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

  if (figure === "Runcinated Tesseract") {
    return (
      <RuncinatedTesseract
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

  if (figure === "Runcitruncated 16-cell") {
    return (
      <Runcitruncated16Cell
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

  if (figure === "Runcitruncated Tesseract") {
    return (
      <RuncitruncatedTesseract
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

  if (figure === "Omnitruncated Tesseract") {
    return (
      <OmnitruncatedTesseract
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
  
  if (figure === "Rectified 24-cell") {
    return (
      <Rectified24Сell
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
  
  if (figure === "Bitruncated 24-cell") {
    return (
      <Bitruncated24Cell
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

  if (figure === "Runcinated 24-cell") {
    return (
      <Runcinated24Cell
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

  if (figure === "Cantellated 24-cell") {
    return (
      <Cantellated24Cell
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

  if (figure === "Truncated 24-cell") {
    return (
      <Truncated24Cell
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

  if (figure === "Runcitruncated 24-cell") {
    return (
      <Runcitruncated24Cell
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

  if (figure === "Cantitruncated 24-cell") {
    return (
      <Cantitruncated24Cell
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

  if (figure === "4D Omnitruncated 24-cell") {
    return (
      <Omnitruncated24Cell
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

  if (figure === "4D Snub 24-cell") {
    return (
      <Snub24Cell
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
