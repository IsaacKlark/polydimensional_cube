const SquarePyramidVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray,
) => {
  let basicVertices = [];
  const verticesAmount = 2 ** +DimensionOfFigure;

  for (let i = 0; i < verticesAmount; i++) {
    const vertex = [];

    for (let j = 0; j < +DimensionOfFigure; j++) {
      if (Math.trunc(i / 2 ** j) % 2 === 0 && j < DimensionOfFigure) {
        vertex.push(80 * scale);
      } else if (j < DimensionOfFigure) {
        vertex.push(-80 * scale);
      } else {
        vertex.push(0);
      }
    }

    basicVertices.push(vertex);
  }


  basicVertices = basicVertices.map((arr) => {
      const copyArr = [...arr];
      copyArr[copyArr.length - 1] = -80;
      return copyArr;
    });

  const lastVertex = [];

  for (let i = 0; i < +DimensionOfFigure; i++) {
    if (i === +DimensionOfFigure - 1) {
      lastVertex.push(80)
    } else {
      lastVertex.push(0);
    }
  }

  basicVertices.push(lastVertex);

  let vertices = basicVertices;

  if (+DimensionOfFigure > 2) {
    const radAngle = 90 * 0.0175;
    vertices = vertices.map((arr) => {
      let copyArr = [...arr];
      const prevY = arr[1];
      const prevZ = arr[arr.length - 1];
      copyArr[1] =
        copyArr[1] * Math.cos(radAngle) - copyArr[arr.length - 1] * Math.sin(radAngle);
      copyArr[arr.length - 1] = prevY * Math.sin(radAngle) + prevZ * Math.cos(radAngle);
      return copyArr;
    });
  } else {
    const radAngle = 180 * 0.0175;
    vertices = vertices.map((arr) => {
      let copyArr = [...arr];
      const prevY = arr[1];
      const prevZ = arr[arr.length - 1];
      copyArr[1] =
        copyArr[1] * Math.cos(radAngle) - copyArr[arr.length - 1] * Math.sin(radAngle);
      copyArr[arr.length - 1] = prevY * Math.sin(radAngle) + prevZ * Math.cos(radAngle);
      return copyArr;
    });
  }
  
  if (vertices[0].length < +dimensions) {
    vertices = vertices.map((arr, index) => {
      for (let j = +vertices[index].length + 1; j <= +dimensions; j++) {
        arr.push(0);
      }
      return arr;
    });
  }
  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default SquarePyramidVertices;
