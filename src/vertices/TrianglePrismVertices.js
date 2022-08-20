const TrianglePrismVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray
) => {
  let basicVertices = [];
  let angle = 0;
  for (let i = 0; i < 3; i++) {
    const radAngle = angle * 0.0175;
    basicVertices.push([80 * Math.sin(radAngle), -80 * Math.cos(radAngle)]);
    angle += 120;
  }

  let edgeLengthHalf = 69.2;

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

    basicVertices = [...basicVertices, ...additionalVertices]
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

  setVerticesArray(vertices);
};

export default TrianglePrismVertices;
