const Rectified5CellVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 4 ? 4 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;

  const baseGroup1 = [
    [-3/Math.sqrt(10), -3/Math.sqrt(6), 0, 0],
    [-3/Math.sqrt(10), 1/Math.sqrt(6), -2/Math.sqrt(3), 0],
    [-3/Math.sqrt(10), 1/Math.sqrt(6), 1/Math.sqrt(3), 1],
    [-3/Math.sqrt(10), 1/Math.sqrt(6), 1/Math.sqrt(3), -1],
    [2/Math.sqrt(10), 2/Math.sqrt(6), 2/Math.sqrt(3), 0],
    [2/Math.sqrt(10), -2/Math.sqrt(6), -2/Math.sqrt(3), 0],
    [2/Math.sqrt(10), 2/Math.sqrt(6), -1/Math.sqrt(3), 1],
    [2/Math.sqrt(10), 2/Math.sqrt(6), -1/Math.sqrt(3), -1],
    [2/Math.sqrt(10), -2/Math.sqrt(6), 1/Math.sqrt(3), 1],
    [2/Math.sqrt(10), -2/Math.sqrt(6), 1/Math.sqrt(3), -1],
  ].map((arr) => arr.map((number) => number * 80));

  let vertices = baseGroup1;

  if (+dimensions > +copyDimensionOfFigure) {
    vertices = vertices.map((arr) => {
      for (let i = +copyDimensionOfFigure + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }

  if (+DimensionOfFigure < 4) {
    vertices = vertices.map((el) => el.slice(0, 2));
  }
  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default Rectified5CellVertices;
