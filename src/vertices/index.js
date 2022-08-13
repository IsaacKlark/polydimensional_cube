import cubeVertices from "./cubeVertices";
import octahedronVertices from "./octahedronVertices";
import symplexVertices from "./symplexVertices";
import Cell24AnaologVertices from "./Cell24AnalogVertices";
import Cell120AnalogVertices from "./Cell120AnalogVertices";
import Cell600AnalogVertices from "./Cell600AnalogVertices";
import IcosahedronVertices from "./IcosahedronVertices";
import TruncatedTetrahedronVertices from "./TruncatedTetrahedronVertices";
import CuboctahedronVertices from "./CuboctahedronVertices";

export let verticesArray = [];

const setVerticesArray = (result) => {
  verticesArray = result;
}

const vertices = (dimensions, DimensionOfFigure, figure) => {
  if (figure === "cube") {
    cubeVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "symplex") {
    symplexVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "octahedron") {
    octahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "24-cell-analog") {
    Cell24AnaologVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "120-cell-analog") {
    Cell120AnalogVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "600-cell-analog") {
    Cell600AnalogVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "3D Icosahedron") {
    IcosahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "3D Truncated Tetrahedron") {
    TruncatedTetrahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "3D Cuboctahedron") {
    CuboctahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }
};

export default vertices;
