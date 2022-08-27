const SphereVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let basicVertices = [];
  const segments = 22;
  const segmentAngle = 360 / segments;

  let angle = 0;
  for (let i = 0; i < segments; i++) {
    const radAngle = angle * 0.0175;
    basicVertices.push([150 * Math.sin(radAngle), -150 * Math.cos(radAngle)]);
    angle += segmentAngle;
  }

  basicVertices = basicVertices.map((arr, index) => {
    for (
      let j = +basicVertices[index].length + 1;
      j <= +DimensionOfFigure;
      j++
    ) {
      arr.push(0);
    }
    return arr;
  });

  for (let i = 2; i < +DimensionOfFigure; i++) {
    const currentVertices = [...basicVertices];
    let angle = 0;

    for (let j = 0; j < segments / 2 + 1; j++) {
      for (let k = 0; k < currentVertices.length; k++) {
        const radAngle = angle * 0.0175;

        const copyArr = [...currentVertices[k]];
        const prevX = basicVertices[k][0];
        const prevLast = basicVertices[k][i];
        copyArr[0] = prevX * Math.cos(radAngle) + prevLast * Math.sin(radAngle);
        copyArr[i] =
          -prevX * Math.sin(radAngle) + prevLast * Math.cos(radAngle);

        currentVertices[k] = copyArr;
      }

      basicVertices = [...basicVertices, ...currentVertices];
      angle += segmentAngle;
    }
  }

  let vertices = basicVertices;
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

export default SphereVertices;
