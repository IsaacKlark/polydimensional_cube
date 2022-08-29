const HexagonalAntiprismVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 3 ? 3 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;
  const baseGroup1 = [
    [1, Math.sqrt(3), Math.sqrt(Math.sqrt(3)-1)],
    [-1, Math.sqrt(3), Math.sqrt(Math.sqrt(3)-1)],
    [1, -Math.sqrt(3), Math.sqrt(Math.sqrt(3)-1)],
    [-1, -Math.sqrt(3), Math.sqrt(Math.sqrt(3)-1)],

    [2, 0, Math.sqrt(Math.sqrt(3)-1)],
    [-2, 0, Math.sqrt(Math.sqrt(3)-1)],

    [Math.sqrt(3), 1, -Math.sqrt(Math.sqrt(3)-1)],
    [-Math.sqrt(3), 1, -Math.sqrt(Math.sqrt(3)-1)],
    [Math.sqrt(3), -1, -Math.sqrt(Math.sqrt(3)-1)],
    [-Math.sqrt(3), -1, -Math.sqrt(Math.sqrt(3)-1)],

    [0, 2, -Math.sqrt(Math.sqrt(3)-1)],
    [0, -2, -Math.sqrt(Math.sqrt(3)-1)],
  ].map((arr) => arr.map((number) => number * 60));
  
  let vertices = baseGroup1;

  if (+dimensions > +copyDimensionOfFigure) {
    vertices = vertices.map((arr) => {
      for (let i = +copyDimensionOfFigure + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }

  if (+DimensionOfFigure < 3) {
    vertices = vertices.map((el) => el.slice(0, 2));
  }
  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default HexagonalAntiprismVertices;
