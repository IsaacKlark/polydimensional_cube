const cubeVertices = (dimensions, DimensionOfFigure, setVerticesArray, scale) => {
  const verticesAmount = 2 ** dimensions;

  const verticesArray = [];

  for (let i = 0; i < verticesAmount; i++) {
    const vertex = [];

    for (let j = 0; j < dimensions; j++) {
      if (Math.trunc(i / 2 ** j) % 2 === 0 && j < DimensionOfFigure) {
        vertex.push(60 * scale);
      } else if (j < DimensionOfFigure) {
        vertex.push(-65 * scale);
      } else {
        vertex.push(0);
      }
    }

    verticesArray.push(vertex);
  }

  setVerticesArray(verticesArray);
};

export default cubeVertices;
