const PentagonalAntiprismVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 3 ? 3 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;
  const fi = 1.618;
  const baseGroup1 = [
    [Math.sqrt(2*(5+Math.sqrt(5))/5), 0, Math.sqrt((5+Math.sqrt(5))/10)],
    [Math.sqrt((5-Math.sqrt(5))/10), fi, Math.sqrt((5+Math.sqrt(5))/10)],
    [Math.sqrt((5-Math.sqrt(5))/10), -fi, Math.sqrt((5+Math.sqrt(5))/10)],
    [Math.sqrt((5+2*Math.sqrt(5))/5), 1, -Math.sqrt((5+Math.sqrt(5))/10)],
    [Math.sqrt((5+2*Math.sqrt(5))/5), -1, -Math.sqrt((5+Math.sqrt(5))/10)],

    [-Math.sqrt(2*(5+Math.sqrt(5))/5), 0, -Math.sqrt((5+Math.sqrt(5))/10)],
    [-Math.sqrt((5-Math.sqrt(5))/10), -fi, -Math.sqrt((5+Math.sqrt(5))/10)],
    [-Math.sqrt((5-Math.sqrt(5))/10), fi, -Math.sqrt((5+Math.sqrt(5))/10)],
    [-Math.sqrt((5+2*Math.sqrt(5))/5), -1, Math.sqrt((5+Math.sqrt(5))/10)],
    [-Math.sqrt((5+2*Math.sqrt(5))/5), 1, Math.sqrt((5+Math.sqrt(5))/10)],
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

export default PentagonalAntiprismVertices;
