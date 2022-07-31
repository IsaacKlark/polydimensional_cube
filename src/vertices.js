export let verticesArray = [];

const cubeVertices = (dimensions, DimensionOfFigure) => {
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

const octahedronVertices = (dimensions, DimensionOfFigure) => {
  const verticesAmount = 2 * DimensionOfFigure;

  verticesArray = [];

  for (let i = 0; i < verticesAmount / 2; i++) {
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
};

const polytopVertices = (dimensions, DimensionOfFigure) => {
  verticesArray = [];
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
};

const vertices = (dimensions, DimensionOfFigure, figure) => {
  if (figure === "hypercube") {
    cubeVertices(dimensions, DimensionOfFigure);
  }

  if (figure === "polytop") {
    polytopVertices(dimensions, DimensionOfFigure);
  }

  if (figure === "octahedron") {
    octahedronVertices(dimensions, DimensionOfFigure);
  }
};

export default vertices;
