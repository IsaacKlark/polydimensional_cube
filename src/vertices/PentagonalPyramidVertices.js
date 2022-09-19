const PentagonalPyramidVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let basicVertices = [];
  let angle = 0;
  for (let i = 0; i < 5; i++) {
    const radAngle = angle * 0.0175;
    basicVertices.push([80 * Math.sin(radAngle), -80 * Math.cos(radAngle)]);
    angle += 72;
  }

  let edgeLengthHalf = 69.2;

  for (let i = 0; i < +DimensionOfFigure - 3; i++) {
    const additionalVertices = [];

    basicVertices.forEach((arr, index) => {
      const copyArr = [...arr];
      const copyArr2 = [...arr];
      copyArr.push(edgeLengthHalf);
      copyArr2.push(edgeLengthHalf * -1);
      basicVertices[index] = copyArr;
      additionalVertices.push(copyArr2);
    });

    basicVertices = [...basicVertices, ...additionalVertices];
  }


  if (basicVertices[0].length < +dimensions) {
    basicVertices = basicVertices.map((arr, index) => {
      for (let i = +basicVertices[index].length + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
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


  if (+DimensionOfFigure > 2) {
    const radAngle = 90 * 0.0175;
    basicVertices = basicVertices.map((arr) => {
      let copyArr = [...arr];
      const prevY = arr[1];
      const prevZ = arr[arr.length - 1];
      copyArr[1] =
        copyArr[1] * Math.cos(radAngle) - copyArr[arr.length - 1] * Math.sin(radAngle);
      copyArr[arr.length - 1] = prevY * Math.sin(radAngle) + prevZ * Math.cos(radAngle);
      return copyArr;
    });
  }
  let vertices = basicVertices;

  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default PentagonalPyramidVertices;
