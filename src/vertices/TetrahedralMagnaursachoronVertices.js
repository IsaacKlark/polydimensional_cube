const TetrahedralMagnaursachoronVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  const fi = 1.618;

  const baseGroup1 = [
    [fi ** 2, fi ** 2, 1 + 3 * fi, 0],
    [fi ** 2, 1 + 3 * fi, fi ** 2, 0],
    [1 + 3 * fi, fi ** 2, fi ** 2, 0],
    [0, 2, 2, -3 * fi ** 2],
    [0, -2, -2, -3 * fi ** 2],
    [0, -2, 2, -3 * fi ** 2],
    [0, 2, -2, -3 * fi ** 2],
    [2, 0, 2, -3 * fi ** 2],
    [-2, 0, -2, -3 * fi ** 2],
    [-2, 0, 2, -3 * fi ** 2],
    [2, 0, -2, -3 * fi ** 2],
    [2, 2, 0, -3 * fi ** 2],
    [-2, -2, 0, -3 * fi ** 2],
    [-2, 2, 0, -3 * fi ** 2],
    [2, -2, 0, -3 * fi ** 2],
    [-fi, fi ** 2, 3 + fi, 2 * fi],
    [-fi, -(fi ** 2), -3 + fi, 2 * fi],
    [-1 / fi, fi ** 2, -3 + fi, 2 * fi],
    [-1 / fi, -(fi ** 2), 3 + fi, 2 * fi],
    [-fi, 3 + fi, fi ** 2, 2 * fi],
    [-fi, -3 + fi, -(fi ** 2), 2 * fi],
    [-1 / fi, 3 + fi, -(fi ** 2), 2 * fi],
    [-1 / fi, -3 + fi, fi ** 2, 2 * fi],
    [fi ** 2, -fi, 3 + fi, 2 * fi],
    [fi ** 2, -1 / fi, -3 + fi, 2 * fi],
    [-(fi ** 2), -fi, -3 + fi, 2 * fi],
    [-(fi ** 2), -1 / fi, 3 + fi, 2 * fi],
    [fi ** 2, 3 + fi, -fi, 2 * fi],
    [fi ** 2, -3 + fi, -1 / fi, 2 * fi],
    [-(fi ** 2), 3 + fi, -1 / fi, 2 * fi],
    [-(fi ** 2), -3 + fi, -fi, 2 * fi],
    [3 + fi, -fi, fi ** 2, 2 * fi],
    [3 + fi, -1 / fi, -(fi ** 2), 2 * fi],
    [-3 + fi, -fi, -(fi ** 2), 2 * fi],
    [-3 + fi, -1 / fi, fi ** 2, 2 * fi],
    [3 + fi, fi ** 2, -fi, 2 * fi],
    [3 + fi, -(fi ** 2), -1 / fi, 2 * fi],
    [-3 + fi, fi ** 2, -1 / fi, 2 * fi],
    [-3 + fi, -(fi ** 2), -fi, 2 * fi],
    [1, 1, 3, 3 * fi],
    [1, -1, -3, 3 * fi],
    [-1, 1, -3, 3 * fi],
    [-1, -1, 3, 3 * fi],
    [1, 3, 1, 3 * fi],
    [1, -3, -1, 3 * fi],
    [-1, 3, -1, 3 * fi],
    [-1, -3, 1, 3 * fi],
    [3, 1, 1, 3 * fi],
    [3, -1, -1, 3 * fi],
    [-3, 1, -1, 3 * fi],
    [-3, -1, 1, 3 * fi],
    [1, 1, fi**3, -(fi ** 4)],
    [1, -1, -(fi**3), -(fi ** 4)],
    [-1, 1, -(fi**3), -(fi ** 4)],
    [-1, -1, fi**3, -(fi ** 4)],
    [1, fi**3, 1, -(fi ** 4)],
    [1, -(fi**3), -1, -(fi ** 4)],
    [-1, fi**3, -1, -(fi ** 4)],
    [-1, -(fi**3), 1, -(fi ** 4)],
    [fi**3, 1, 1, -(fi ** 4)],
    [fi**3, -1, -1, -(fi ** 4)],
    [-(fi**3), 1, -1, -(fi ** 4)],
    [-(fi**3), -1, 1, -(fi ** 4)],
    [1, 1, 3 + 2 * fi, fi],
    [1, -1, -(3 + 2 * fi), fi],
    [-1, 1, -(3 + 2 * fi), fi],
    [-1, -1, 3 + 2 * fi, fi],
    [1, 3 + 2 * fi, 1, fi],
    [1, -(3 + 2 * fi), -1, fi],
    [-1, 3 + 2 * fi, -1, fi],
    [-1, -(3 + 2 * fi), 1, fi],
    [3 + 2 * fi, 1, 1, fi],
    [3 + 2 * fi, -1, -1, fi],
    [-(3 + 2 * fi), 1, -1, fi],
    [-(3 + 2 * fi), -1, 1, fi],
    [fi, fi, -2 + fi, fi ** 3],
    [fi, -fi, 2 + fi, fi ** 3],
    [-fi, fi, 2 + fi, fi ** 3],
    [-fi, -fi, -2 + fi, fi ** 3],
    [fi, 2 + fi, -fi, fi ** 3],
    [fi, -2 + fi, fi, fi ** 3],
    [-fi, 2 + fi, fi, fi ** 3],
    [-fi, -2 + fi, -fi, fi ** 3],
    [2 + fi, fi, -fi, fi ** 3],
    [2 + fi, -fi, fi, fi ** 3],
    [-2 + fi, fi, fi, fi**3],
    [-2 + fi, -fi, -fi, fi ** 3],
    [Math.sqrt(5), fi ** 3, fi ** 3, fi],
    [Math.sqrt(5), -(fi ** 3), -(fi ** 3), fi],
    [-Math.sqrt(5), fi ** 3, -(fi ** 3), fi],
    [-Math.sqrt(5), -(fi ** 3), fi ** 3, fi],
    [fi ** 3, Math.sqrt(5), fi ** 3, fi],
    [fi ** 3, -Math.sqrt(5), -(fi ** 3), fi],
    [-(fi ** 3), Math.sqrt(5), -(fi ** 3), fi],
    [-(fi ** 3), -Math.sqrt(5), fi ** 3, fi],
    [fi ** 3, fi ** 3, Math.sqrt(5), fi],
    [fi ** 3, -(fi ** 3), -Math.sqrt(5), fi],
    [-(fi ** 3), fi ** 3, -Math.sqrt(5), fi],
    [-(fi ** 3), -(fi ** 3), Math.sqrt(5), fi],
    [fi ** 2, fi ** 2, 3 + fi, -2 * fi ** 2],
    [fi ** 2, -(fi ** 2), -3 + fi, -2 * fi ** 2],
    [-(fi ** 2), fi ** 2, -3 + fi, -2 * fi ** 2],
    [-(fi ** 2), -(fi ** 2), 3 + fi, -2 * fi ** 2],
    [fi ** 2, 3 + fi, fi ** 2, -2 * fi ** 2],
    [fi ** 2, -3 + fi, -(fi ** 2), -2 * fi ** 2],
    [-(fi ** 2), 3 + fi, -(fi ** 2), -2 * fi ** 2],
    [-(fi ** 2), -3 + fi, fi ** 2, -2 * fi ** 2],
    [3 + fi, fi ** 2, fi ** 2, -2 * fi ** 2],
    [3 + fi, -(fi ** 2), -(fi ** 2), -2 * fi ** 2],
    [-3 + fi, fi ** 2, -(fi ** 2), -2 * fi ** 2],
    [-3 + fi, -(fi ** 2), fi ** 2, -2 * fi ** 2],
    [2 * fi, 2 * fi, 2 * fi ** 2, -(fi ** 2)],
    [2 * fi, -2 * fi, -2 * fi ** 2, -(fi ** 2)],
    [-2 * fi, 2 * fi, -2 * fi ** 2, -(fi ** 2)],
    [-2 * fi, -2 * fi, 2 * fi ** 2, -(fi ** 2)],
    [2 * fi, 2 * fi ** 2, 2 * fi, -(fi ** 2)],
    [2 * fi, -2 * fi ** 2, -2 * fi, -(fi ** 2)],
    [-2 * fi, 2 * fi ** 2, -2 * fi, -(fi ** 2)],
    [-2 * fi, -2 * fi ** 2, 2 * fi, -(fi ** 2)],
    [2 * fi ** 2, 2 * fi, 2 * fi, -(fi ** 2)],
    [2 * fi ** 2, -2 * fi, -2 * fi, -(fi ** 2)],
    [-2 * fi ** 2, 2 * fi, -2 * fi, -(fi ** 2)],
    [-2 * fi ** 2, -2 * fi, 2 * fi, -(fi ** 2)],
  ].map((arr) => arr.map((number) => number * 70));

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

export default TetrahedralMagnaursachoronVertices;
