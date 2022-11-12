const CubeAtopCuboctahedronVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  const baseGroup1 = [
    [1, 1, 1, Math.sqrt(4 * Math.sqrt(2) - 3)],
    [-1, -1, -1, Math.sqrt(4 * Math.sqrt(2) - 3)],
    [-1, -1, 1, Math.sqrt(4 * Math.sqrt(2) - 3)],
    [1, -1, -1, Math.sqrt(4 * Math.sqrt(2) - 3)],
    [-1, 1, -1, Math.sqrt(4 * Math.sqrt(2) - 3)],
    [-1, 1, 1, Math.sqrt(4 * Math.sqrt(2) - 3)],
    [1, -1, 1, Math.sqrt(4 * Math.sqrt(2) - 3)],
    [1, 1, -1, Math.sqrt(4 * Math.sqrt(2) - 3)],
    [0, Math.sqrt(2), Math.sqrt(2), 0],
    [0, -Math.sqrt(2), -Math.sqrt(2), 0],
    [0, -Math.sqrt(2), Math.sqrt(2), 0],
    [0, Math.sqrt(2), -Math.sqrt(2), 0],
    [Math.sqrt(2), 0, Math.sqrt(2), 0],
    [-Math.sqrt(2), 0, -Math.sqrt(2), 0],
    [-Math.sqrt(2), 0, Math.sqrt(2), 0],
    [Math.sqrt(2), 0, -Math.sqrt(2), 0],
    [Math.sqrt(2), Math.sqrt(2), 0, 0],
    [-Math.sqrt(2), -Math.sqrt(2), 0, 0],
    [-Math.sqrt(2), Math.sqrt(2), 0, 0],
    [Math.sqrt(2), -Math.sqrt(2), 0, 0],
  ].map((arr) => arr.map((number) => number * 80));

  let vertices = baseGroup1;

  if (+dimensions > +DimensionOfFigure) {
    vertices = vertices.map((arr) => {
      for (let i = +DimensionOfFigure + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }

  if (+dimensions > 4) {
    vertices = vertices.map((arr) => {
      for (let i = 5; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }

  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default CubeAtopCuboctahedronVertices;
