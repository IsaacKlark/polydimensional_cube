const TorusVertices = (dimensions, DimensionOfFigure, setVerticesArray) => {
  let basicVertices = [];

  let angle = 0;
  const segments = 16;
  const angleChange = 360 / (segments - 1);

  if (+DimensionOfFigure === 2) {
    for (let i = 0; i < segments ; i++) {
      const radAngle = angle * 0.0175;
      basicVertices.push([150 * Math.sin(radAngle), -150 * Math.cos(radAngle)]);
      angle += angleChange;
    }
  }

  if (+DimensionOfFigure >= 3) {
    let angle1 = 0;

    for (let i = 0; i < segments ; i++) {
      const radAngle1 = angle1 * 0.0175;
      let angle2 = 0;

      for (let j = 0; j < segments ; j++) {
        const radAngle2 = angle2 * 0.0175;
        basicVertices.push([
          (120 + 50 * Math.cos(radAngle1)) * Math.cos(radAngle2),
          (120 + 50 * Math.cos(radAngle1)) * Math.sin(radAngle2),
          50 * Math.sin(radAngle1),
        ]);
        angle2 += angleChange;
      }
      angle1 += angleChange;
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

    for (let j = 0; j < segments ; j++) {
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
      angle += angleChange;
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
