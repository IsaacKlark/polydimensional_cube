const HeptagonalPrismVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let basicVertices = [];
  let angle = 0;
  const segments = 7;
  for (let i = 0; i < segments; i++) {
    const radAngle = angle * 0.0175;
    basicVertices.push([70 * Math.sin(radAngle), -70 * Math.cos(radAngle)]);
    angle += 360 / segments;
  }

  let edgeLengthHalf = 50;

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

  if (vertices[0].length < +DimensionOfFigure) {
    vertices = vertices.map((arr, index) => {
      for (let i = +vertices[index].length + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }

  if (+dimensions > +DimensionOfFigure) {
    vertices = vertices.map((arr) => {
      for (let i = +DimensionOfFigure + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }

  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default HeptagonalPrismVertices;
