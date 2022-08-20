import cubeVertices from "./cubeVertices";
import octahedronVertices from "./octahedronVertices";
import symplexVertices from "./symplexVertices";
import Cell24AnaologVertices from "./Cell24AnalogVertices";
import Cell120AnalogVertices from "./Cell120AnalogVertices";
import Cell600AnalogVertices from "./Cell600AnalogVertices";
import IcosahedronVertices from "./IcosahedronVertices";
import TruncatedTetrahedronVertices from "./TruncatedTetrahedronVertices";
import CuboctahedronVertices from "./CuboctahedronVertices";
import TruncatedOctahedronVertices from "./TruncatedOctahedronVertices";
import RhombicuboctahedronVertices from "./RhombicuboctahedronVertices";
import TruncatedCubeVertices from "./TruncatedCubeVertices";
import GreatRhombicuboctahedronVertices from "./GreatRhombicuboctahedronVertices";
import SnubCubeVertices from "./SnubCubeVertices";
import IcosidodecahedronVertices from "./IcosidodecahedronVertices";
import TruncatedIcosahedronVertices from "./TruncatedIcosahedronVertices";
import RhombicosidodecahedronVertices from "./RhombicosidodecahedronVertices";
import TruncatedDodecahedronVertices from "./TruncatedDodecahedronVertices";
import GreatRhombicosidodecahedronVertices from "./GreatRhombicosidodecahedronVertices";
import SnubDodecahedronVertices from "./SnubDodecahedronVertices";
import TrianglePrismVertices from "./TrianglePrismVertices";

export let verticesArray = [];

const setVerticesArray = (result) => {
  verticesArray = result;
}

const vertices = (dimensions, DimensionOfFigure, figure) => {
  if (figure === "Cube") {
    cubeVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "Symplex") {
    symplexVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "Octahedron") {
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

  if (figure === "Cuboctahedron") {
    CuboctahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "Truncated Octahedron") {
    TruncatedOctahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "Rhombicuboctahedron") {
    RhombicuboctahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "Truncated Cube") {
    TruncatedCubeVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "Great Rhombicuboctahedron") {
    GreatRhombicuboctahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "3D Snub Cube") {
    SnubCubeVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "3D Icosidodecahedron") {
    IcosidodecahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "3D Truncated Icosahedron") {
    TruncatedIcosahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "3D Truncated Dodecahedron") {
    TruncatedDodecahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }
  
  if (figure === "3D Rhombicosidodecahedron") {
    RhombicosidodecahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "3D Great Rhombicosidodecahedron") {
    GreatRhombicosidodecahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "3D Snub Dodecahedron") {
    SnubDodecahedronVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }

  if (figure === "Triangle Prism") {
    TrianglePrismVertices(dimensions, DimensionOfFigure, setVerticesArray);
  }
};

export default vertices;
