const CubeAtopIcosahedronVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  const fi = 1.618;
  const baseGroup1 = [
    [0, 1, fi, 0],
    [0, -1, -fi, 0],
    [0, -1, fi, 0],
    [0, 1, -fi, 0],
    [1, fi, 0, 0],
    [-1, -fi, 0, 0],
    [-1, fi, 0, 0],
    [1, -fi, 0, 0],
    [fi, 0, 1, 0],
    [-fi, 0, -1, 0],
    [-fi, 0, 1, 0],
    [fi, 0, -1, 0],
    [1, 1, 1, fi],
    [-1, -1, -1, fi],
    [-1, -1, 1, fi],
    [1, -1, -1, fi],
    [-1, 1, -1, fi],
    [-1, 1, 1, fi],
    [1, -1, 1, fi],
    [1, 1, -1, fi],
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

export default CubeAtopIcosahedronVertices;
