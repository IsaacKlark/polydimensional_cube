const Cell24AnaologVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray
) => {
  const verticesAmount = 2 ** DimensionOfFigure;

  const verticesArray = [];

  for (let i = 0; i < verticesAmount; i++) {
    const vertex = [];

    for (let j = 0; j < DimensionOfFigure; j++) {
      if (Math.trunc(i / 2 ** j) % 2 === 0 && j < DimensionOfFigure) {
        vertex.push(50);
      } else if (j < DimensionOfFigure) {
        vertex.push(-50);
      } else {
        vertex.push(0);
      }
    }

    verticesArray.push(vertex);
  }

  const verticesAmount2 = 2 * DimensionOfFigure;
  for (let i = 0; i < verticesAmount2 / 2; i++) {
    const vertex = [];

    let prevResult = verticesArray[verticesArray.length - 2];

    if (i === 0) {
      for (let j = 0; j < DimensionOfFigure; j++) {
        if (j === 0) {
          vertex.push(100);
        } else {
          vertex.push(0);
        }
      }
    } else {
      let prevNot0Index = prevResult.indexOf(100);

      if (prevNot0Index === DimensionOfFigure - 1) {
        prevNot0Index = -1;
      }

      for (let j = 0; j < DimensionOfFigure; j++) {
        if (j === prevNot0Index + 1) {
          vertex.push(100);
        } else {
          vertex.push(0);
        }
      }
    }

    verticesArray.push(vertex);
    verticesArray.push(vertex.map((item) => (item ? item * -1 : 0)));
  }

  verticesArray.forEach((vertex, index) => {
    while (vertex.length < dimensions) {
      vertex.push(0);
    }
    verticesArray[index] = vertex;
  });

  setVerticesArray(verticesArray);
};

export default Cell24AnaologVertices;
