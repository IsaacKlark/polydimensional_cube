const DecagonalAntiprismVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 3 ? 3 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;

  const H = 0.860296;
  const fi = 1.618;

  const baseGroup1 = [
    [2*fi, 0, H],
    [-2*fi, 0, H],
    [1, Math.sqrt(3 + 4*fi), H],
    [-1, Math.sqrt(3+4*fi), H],
    [1, -Math.sqrt(3+4*fi), H],
    [-1, -Math.sqrt(3+4*fi), H],
    [fi**2, Math.sqrt(2+fi), H],
    [-(fi**2), Math.sqrt(2+fi), H],
    [fi**2, -Math.sqrt(2+fi), H],
    [-(fi**2), -Math.sqrt(2+fi), H],
    [0, 2*fi, -H],
    [0, -2*fi, -H],
    [Math.sqrt(3+4*fi), 1, -H],
    [-Math.sqrt(3+4*fi), 1, -H],
    [Math.sqrt(3+4*fi), -1, -H],
    [-Math.sqrt(3+4*fi), -1, -H],
    [Math.sqrt(2+fi), fi**2, -H],
    [-Math.sqrt(2+fi), fi**2, -H],
    [Math.sqrt(2+fi), -(fi**2), -H],
    [-Math.sqrt(2+fi), -(fi**2), -H],
  ].map((arr) => arr.map((number) => number * 50));
  
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

export default DecagonalAntiprismVertices;
