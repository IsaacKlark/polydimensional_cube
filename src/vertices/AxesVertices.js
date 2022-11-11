const AxesVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let vertices = [];
  const vertex = [];

  for (let i = 0; i < +DimensionOfFigure; i++) {
    vertex.push(0);
  }

  vertices.push(vertex);

  for (let i = 0; i < +DimensionOfFigure; i++) {
    const vertex = [];

    for (let j = 0; j < +DimensionOfFigure; j++) {
      if (i === j) {
        vertex.push(-150);
      } else {
        vertex.push(0);
      }
    }

    vertices.push(vertex);
  }

  if (+dimensions > +DimensionOfFigure) {
    vertices = vertices.map((arr) => {
      for (let i = +DimensionOfFigure + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }

  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default AxesVertices;
