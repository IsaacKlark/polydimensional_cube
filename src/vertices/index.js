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
import CubinderVertices from "./CubinderVertices";
import SphereVertices from "./SphereVertices";
import CliffordTorusVertices from "./CliffordTorusVertices";
import TorusVertices from "./TorusVertices";

export let verticesArray = [];

const setVerticesArray = (result) => {
  verticesArray = result;
};

const vertices = (
  dimensions,
  DimensionOfFigure,
  figure,
  scale,
  setOriginalVerticesArray,
  segments
) => {
  if (figure === "Cube") {
    cubeVertices(dimensions, DimensionOfFigure, setVerticesArray, scale);
  }

  if (figure === "Symplex") {
    symplexVertices(dimensions, DimensionOfFigure, setVerticesArray, scale);
  }

  if (figure === "Octahedron") {
    octahedronVertices(dimensions, DimensionOfFigure, setVerticesArray, scale);
  }

  if (figure === "24-cell-analog") {
    Cell24AnaologVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "120-cell-analog") {
    Cell120AnalogVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "600-cell-analog") {
    Cell600AnalogVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "3D Icosahedron") {
    IcosahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "3D Truncated Tetrahedron") {
    TruncatedTetrahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "Cuboctahedron") {
    CuboctahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "Truncated Octahedron") {
    TruncatedOctahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "Rhombicuboctahedron") {
    RhombicuboctahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "Truncated Cube") {
    TruncatedCubeVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "Great Rhombicuboctahedron") {
    GreatRhombicuboctahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "3D Snub Cube") {
    SnubCubeVertices(dimensions, DimensionOfFigure, setVerticesArray, scale, setOriginalVerticesArray);
  }

  if (figure === "3D Icosidodecahedron") {
    IcosidodecahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "3D Truncated Icosahedron") {
    TruncatedIcosahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "3D Truncated Dodecahedron") {
    TruncatedDodecahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "3D Rhombicosidodecahedron") {
    RhombicosidodecahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "3D Great Rhombicosidodecahedron") {
    GreatRhombicosidodecahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "3D Snub Dodecahedron") {
    SnubDodecahedronVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "Triangle Prism") {
    TrianglePrismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "Cubinder analog") {
    CubinderVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Sphere") {
    SphereVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Clifford Torus") {
    CliffordTorusVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Torus") {
    TorusVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }
};

export default vertices;
