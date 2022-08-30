const HeptagonalAntiprismVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 3 ? 3 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;

  const r = 2.304764870962486;
  const A = 1.801937735804838;
  const B = 1.436997392727370;
  const C = 2.246979603717467;
  const D = 0.512858431636277;
  const h = 2.076521396572336;
  const H = 0.858473196494555;

  const baseGroup1 = [
    [0, r, H],
    [A, B, H],
    [-A, B, H],
    [C, -D, H],
    [-C, -D, H],
    [1, -h, H],
    [-1, -h, H],
    [0, -r, -H],
    [A, -B, -H],
    [-A, -B, -H],
    [C, D, -H],
    [-C, D, -H],
    [1, h, -H],
    [-1, h, -H],
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

export default HeptagonalAntiprismVertices;
