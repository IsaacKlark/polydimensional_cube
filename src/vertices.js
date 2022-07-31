export let verticesArray = [];

const squareVertices = (dimensions, DimensionOfCube) => {
  const verticesAmount = 2 ** dimensions;

  verticesArray = [];

  for (let i = 0; i < verticesAmount; i++) {
    const vertex = [];

    for (let j = 0; j < dimensions; j++) {
      if (Math.trunc(i / 2 ** j) % 2 === 0 && j < DimensionOfCube) {
        vertex.push(60);
      } else if (j < DimensionOfCube) {
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

  for (let i = 0; i < dimensions; i++) {
    if (i === dimensions - 1) {
      firstDot.push(0);
    } else {
      firstDot.push(60);
    }
  }

  verticesArray.push(firstDot);
  firstDot = firstDot.map((number) => number * -1);

  for (let i = 0; i < dimensions - 1; i++) {
    let copyFirstDot = [...firstDot];
    if (dimensions === 2) copyFirstDot = [...firstDot].reverse();
    copyFirstDot[i] = copyFirstDot[i] * -1;
    verticesArray.push(copyFirstDot);
  }

  const lastDot = [];

  for (let i = 0; i < dimensions; i++) {
    if (i === dimensions - 1) {
      lastDot.push(60 * (5 ** (1 / 2)));
    } else {
      lastDot.push(0);
    }
  }

  verticesArray.push(lastDot);
};

const vertices = (dimensions, DimensionOfCube, figure) => {
  if (figure === "hypercube") {
    squareVertices(dimensions, DimensionOfCube);
  } else if (figure === "polytop") {
    triangleVertices(dimensions, DimensionOfCube)
  }
};

export default vertices;
