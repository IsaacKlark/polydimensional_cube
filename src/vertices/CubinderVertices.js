const CubinderVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let basicVertices = [];
  let angle = 0;
  for (let i = 0; i < 20; i++) {
    const radAngle = angle * 0.0175;
    basicVertices.push([70 * Math.sin(radAngle), -70 * Math.cos(radAngle)]);
    angle += 18;
  }

  let edgeLengthHalf = 80;

  for (let i = 0; i < +DimensionOfFigure - 2; i++) {
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

  let vertices = basicVertices;

  if (vertices[0].length < +dimensions) {
    vertices = vertices.map((arr, index) => {
      for (let i = +vertices[index].length + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }

  if (DimensionOfFigure > 2) {
    const radAngle = 90 * 0.0175;
    vertices = vertices.map((arr) => {
      let copyArr = [...arr];
      const prevY = arr[1];
      const prevZ = arr[2];
      copyArr[1] =
        copyArr[1] * Math.cos(radAngle) - copyArr[2] * Math.sin(radAngle);
      copyArr[2] = prevY * Math.sin(radAngle) + prevZ * Math.cos(radAngle);
      return copyArr;
    });
  }
  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default CubinderVertices;
