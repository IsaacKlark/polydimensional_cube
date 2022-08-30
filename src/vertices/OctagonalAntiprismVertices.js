const OctagonalAntiprismVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 3 ? 3 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;

  const H = 0.860296;

  const baseGroup1 = [
    [1, (1+Math.sqrt(2)), H],
    [-1, (1+Math.sqrt(2)), H],
    [1, -(1+Math.sqrt(2)), H],
    [-1, -(1+Math.sqrt(2)), H],
    [(1+Math.sqrt(2)), 1, H],
    [-(1+Math.sqrt(2)), 1, H],
    [(1+Math.sqrt(2)), -1, H],
    [-(1+Math.sqrt(2)), -1, H],
    [0, Math.sqrt(4+2*Math.sqrt(2)), -H],
    [0, -Math.sqrt(4+2*Math.sqrt(2)), -H],
    [Math.sqrt(4+2*Math.sqrt(2)), 0, -H],
    [-Math.sqrt(4+2*Math.sqrt(2)), 0, -H],
    [Math.sqrt(2+Math.sqrt(2)), Math.sqrt(2+Math.sqrt(2)), -H],
    [-Math.sqrt(2+Math.sqrt(2)), Math.sqrt(2+Math.sqrt(2)), -H],
    [Math.sqrt(2+Math.sqrt(2)), -Math.sqrt(2+Math.sqrt(2)), -H],
    [-Math.sqrt(2+Math.sqrt(2)), -Math.sqrt(2+Math.sqrt(2)), -H]

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

export default OctagonalAntiprismVertices;
