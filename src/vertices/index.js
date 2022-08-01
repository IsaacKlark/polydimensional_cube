import cubeVertices from "./cubeVertices";
import octahedronVertices from "./octahedronVertices";
import symplexVertices from "./symplexVertices";
import Cell24AnaologVertices from "./Cell24AnalogVertices";
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
};

export default vertices;
