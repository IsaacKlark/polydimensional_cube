const TorusVertices = (dimensions, DimensionOfFigure, setVerticesArray) => {
  let basicVertices = [];

  let angle = 0;

  if (+DimensionOfFigure === 2) {
    for (let i = 0; i < 16; i++) {
      const radAngle = angle * 0.0175;
      basicVertices.push([150 * Math.sin(radAngle), -150 * Math.cos(radAngle)]);
      angle += 24;
    }
  }

  if (+DimensionOfFigure >= 3) {
    let angle1 = 0;

    for (let i = 0; i < 16; i++) {
      const radAngle1 = angle1 * 0.0175;
      let angle2 = 0;

      for (let j = 0; j < 16; j++) {
        const radAngle2 = angle2 * 0.0175;
        basicVertices.push([
          (120 + 50 * Math.cos(radAngle1)) * Math.cos(radAngle2),
          (120 + 50 * Math.cos(radAngle1)) * Math.sin(radAngle2),
          50 * Math.sin(radAngle1),
        ]);
        angle2 += 24;
      }
      angle1 += 24;
    }
  }


  for (let i = 3; i < +DimensionOfFigure; i++) {
    let currentVertices = [...basicVertices];
    currentVertices = currentVertices.map((arr, index) => {
      for (let j = +currentVertices[index].length + 1; j <= i + 1; j++) {
        arr.push(0);
      }
      return arr;
    })
    let angle = 0;

    for (let j = 0; j < 16; j++) {
      for (let k = 0; k < currentVertices.length; k++) {
        const radAngle = angle * 0.0175;
        const arrLength = basicVertices[k].length;
        const copyArr = [...currentVertices[k]];
        const prevX = basicVertices[k][arrLength - 1];
        const prevLast = basicVertices[k][arrLength - 2];
        copyArr[arrLength - 2] = prevX * Math.cos(radAngle) + prevLast * Math.sin(radAngle);
        copyArr[arrLength - 1] =
          -prevX * Math.sin(radAngle) + prevLast * Math.cos(radAngle);

        currentVertices[k] = copyArr;
      }

      basicVertices = [...basicVertices, ...currentVertices];
      angle += 24;
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
  setVerticesArray(vertices);
};

export default TorusVertices;
