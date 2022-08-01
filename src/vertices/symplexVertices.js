const symplexVertices = (dimensions, DimensionOfFigure, setVerticesArray) => {
  let verticesArray = [];
  let firstDot = [];

  if (DimensionOfFigure > 2) {
    for (let i = 0; i < DimensionOfFigure; i++) {
      if (i === DimensionOfFigure - 1) {
        firstDot.push(25);
      } else {
        firstDot.push(56);
      }
    }

    verticesArray.push(firstDot);
    firstDot = firstDot.map((number) => number * -1);

    for (let i = 0; i < DimensionOfFigure - 1; i++) {
      let copyFirstDot = [...firstDot];
      if (DimensionOfFigure === 2) copyFirstDot = [...firstDot].reverse();
      copyFirstDot[i] = copyFirstDot[i] * -1;
      copyFirstDot = copyFirstDot.map((item) => (item === -25 ? 25 : item));
      verticesArray.push(copyFirstDot);
    }

    const lastDot = [];

    for (let i = 0; i < DimensionOfFigure; i++) {
      if (i === DimensionOfFigure - 1) {
        lastDot.push(-100);
      } else {
        lastDot.push(0);
      }
    }

    verticesArray.push(lastDot);
  } else {
    verticesArray = [
      [90, 90],
      [60, -90],
      [-90, 90],
    ];
  }

  verticesArray.forEach((vertex, index) => {
    while (vertex.length < dimensions) {
      vertex.push(0);
    }
    verticesArray[index] = vertex;
  });

  setVerticesArray(verticesArray);
};

export default symplexVertices;
