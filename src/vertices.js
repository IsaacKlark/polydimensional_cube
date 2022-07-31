export let verticesArray = [];

const squareVertices = (dimensions, DimensionOfFigure) => {
  const verticesAmount = 2 ** dimensions;

  verticesArray = [];

  for (let i = 0; i < verticesAmount; i++) {
    const vertex = [];

    for (let j = 0; j < dimensions; j++) {
      if (Math.trunc(i / 2 ** j) % 2 === 0 && j < DimensionOfFigure) {
        vertex.push(60);
      } else if (j < DimensionOfFigure) {
        vertex.push(-65);
      } else {
        vertex.push(0);
      }
    }

    verticesArray.push(vertex);
  }

};

const triangleVertices = (dimensions, DimensionOfFigure) => {
  verticesArray = [];
  let firstDot = [];

  for (let i = 0; i < DimensionOfFigure; i++) {
    if (i === DimensionOfFigure - 1) {
      firstDot.push(0);
    } else {
      firstDot.push(60);
    }
  }

  verticesArray.push(firstDot);
  firstDot = firstDot.map((number) => number * -1);

  for (let i = 0; i < DimensionOfFigure - 1; i++) {
    let copyFirstDot = [...firstDot];
    if (DimensionOfFigure === 2) copyFirstDot = [...firstDot].reverse();
    copyFirstDot[i] = copyFirstDot[i] * -1;
    verticesArray.push(copyFirstDot);
  }

  const lastDot = [];

  for (let i = 0; i < DimensionOfFigure; i++) {
    if (i === DimensionOfFigure - 1) {
      lastDot.push(60 * (5 ** (1 / 2)));
    } else {
      lastDot.push(0);
    }
  }

  verticesArray.push(lastDot);
  verticesArray.forEach((vertex, index) => {
    while (vertex.length < dimensions) {
      vertex.push(0);
    };
    verticesArray[index] = vertex;
  })
};

const vertices = (dimensions, DimensionOfFigure, figure) => {
  if (figure === "hypercube") {
    squareVertices(dimensions, DimensionOfFigure);
  } else if (figure === "polytop") {
    triangleVertices(dimensions, DimensionOfFigure)
  }
};

export default vertices;
