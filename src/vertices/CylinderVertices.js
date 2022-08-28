const CylinderVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray,
  segments
) => {
  let basicVertices = [];
  const _segments = +segments || 20;
  const segmentAngle = 360 / _segments;

  let angle = 0;
  for (let i = 0; i < _segments; i++) {
    const radAngle = angle * 0.0175;
    basicVertices.push([80 * Math.sin(radAngle), -80 * Math.cos(radAngle)]);
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

  for (let i = 2; i < +DimensionOfFigure - 1; i++) {
    const currentVertices = [...basicVertices];
    let angle = 0;

    for (let j = 0; j < _segments / 2 + 1; j++) {
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

  basicVertices = [
    ...basicVertices.map((arr) => {
      const copyArr = [...arr];
      copyArr[copyArr.length - 1] = 80;
      return copyArr;
    }),
    ...basicVertices.map((arr) => {
      const copyArr = [...arr];
      copyArr[copyArr.length - 1] = -80;
      return copyArr;
    }),
  ];

  

  let vertices = basicVertices;

  if (DimensionOfFigure > 2) {
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

export default CylinderVertices;
