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
import SquareAntiprismVertices from "./SquareAntiprismVertices";
import PentagonPrismVertices from "./PentagonPrismVertices";
import CylinderVertices from "./CylinderVertices";
import ConeVertices from "./ConeVertices";
import PentagonalAntiprismVertices from "./PentagonalAntiprismVertices";
import HexagonalPrismVertices from "./HexagonalPrismVertices";
import HexagonalAntiprismVertices from "./HexagonalAntiprismVertices";
import HeptagonalPrismVertices from "./HeptagonalPrismVertices";
import OctagonalPrismVertices from "./OctagonalPrismVertices";
import DecagonalPrismVertices from "./DecagonalPrismVertices";
import HeptagonalAntiprismVertices from "./HeptagonalAntiprismVertices";
import OctagonalAntiprismVertices from "./OctagonalAntiprismVertices";
import DecagonalAntiprismVertices from "./DecagonalAntiprismVertices";
import Rectified5CellVertices from "./Rectified5CellVertices";
import Bitruncated5CellVertices from "./Bitruncated5CellVertices";
import Runcinated5CellVertices from "./Runcinated5CellVertices";
import Cantellated5CellVertices from "./Cantellated5CellVertices";
import Truncated5CellVertices from "./Truncated5CellVertices";
import Runcitruncated5CellVertices from "./Runcitruncated5CellVertices";
import Cantitruncated5CellVertices from "./Cantitruncated5CellVertices";
import Omnitruncated5CellVertices from "./Omnitruncated5CellVertices";
import Truncated16CellVertices from "./Truncated16CellVertices";
import RuncinatedTesseractVertices from "./RuncinatedTesseractVertices";
import Runcitruncated16CellVertices from "./Runcitruncated16CellVertices";
import RuncitruncatedTesseractVertices from "./RuncitruncatedTesseractVertices";
import OmnitruncatedTesseractVertices from "./OmnitruncatedTesseractVertices";
import Rectified24CellVertices from "./Rectified24CellVertices";
import Bitruncated24CellVertices from "./Bitruncated24CellVertices";
import Runcinated24CellVertices from "./Runcinated24CellVertices";
import Cantellated24CellVertices from "./Cantellated24CellVertices";
import Truncated24CellVertices from "./Truncated24CellVertices";
import Runcitruncated24CellVertices from "./Runcitruncated24CellVertices";
import Cantitruncated24CellVertices from "./Cantitruncated24CellVertices";
import Omnitruncated24CellVertices from "./Omnitruncated24CellVertices";
import Snub24CellVertices from "./Snub24CellVertices";
import Rectified600CellVertices from "./Rectified600CellVertices";
import Truncated600CellVertices from "./Truncated600CellVertices";
import Rectified120CellVertices from "./Rectified120CellVertices";
import Cantellated600CellVertices from "./Cantellated600CellVertices";
import Bitruncated120CellVertices from "./Bitruncated120CellVertices";
import Cantitruncated600CellVertices from "./Cantitruncated600CellVertices";
import CaRuncinated120CellVertices from "./CaRuncinated120CellVertices";

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

  if (figure === "24-Сell") {
    Cell24AnaologVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "120-Сell") {
    Cell120AnalogVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
  }

  if (figure === "600-Сell") {
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
    SnubCubeVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray
    );
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

  if (figure === "3D Square Antiprism") {
    SquareAntiprismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Pentagon Prism") {
    PentagonPrismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Cylinder") {
    CylinderVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Cone") {
    ConeVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "3D Pentagonal Antiprism") {
    PentagonalAntiprismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Hexahonal Prism") {
    HexagonalPrismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "3D Hexagonal Antiprism") {
    HexagonalAntiprismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Heptagonal Prism") {
    HeptagonalPrismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Octagonal Prism") {
    OctagonalPrismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Decagonal Prism") {
    DecagonalPrismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "3D Heptagonal Antiprism") {
    HeptagonalAntiprismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "3D Octagonal Antiprism") {
    OctagonalAntiprismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "3D Decagonal Antiprism") {
    DecagonalAntiprismVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Rectified 5-cell") {
    Rectified5CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Bitruncated 5-cell") {
    Bitruncated5CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Runcinated 5-cell") {
    Runcinated5CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Cantellated 5-cell") {
    Cantellated5CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Truncated 5-cell") {
    Truncated5CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Runcitruncated 5-cell") {
    Runcitruncated5CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Cantitruncated 5-cell") {
    Cantitruncated5CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Omnitruncated 5-cell") {
    Omnitruncated5CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Truncated 16-cell") {
    Truncated16CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Runcinated Tesseract") {
    RuncinatedTesseractVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Runcitruncated 16-cell") {
    Runcitruncated16CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Runcitruncated Tesseract") {
    RuncitruncatedTesseractVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Omnitruncated Tesseract") {
    OmnitruncatedTesseractVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Rectified 24-cell") {
    Rectified24CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Bitruncated 24-cell") {
    Bitruncated24CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Runcinated 24-cell") {
    Runcinated24CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Cantellated 24-cell") {
    Cantellated24CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Truncated 24-cell") {
    Truncated24CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Runcitruncated 24-cell") {
    Runcitruncated24CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "Cantitruncated 24-cell") {
    Cantitruncated24CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Omnitruncated 24-cell") {
    Omnitruncated24CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Snub 24-cell") {
    Snub24CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Rectified 600-cell") {
    Rectified600CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Truncated 600-cell") {
    Truncated600CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Rectified 120-cell") {
    Rectified120CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Cantellated 600-cell") {
    Cantellated600CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Bitruncated 120-cell") {
    Bitruncated120CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Cantitruncated 600-cell") {
    Cantitruncated600CellVertices(
      dimensions,
      DimensionOfFigure,
      setVerticesArray,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }

  if (figure === "4D Runcinated 120-cell") {
    CaRuncinated120CellVertices(
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
