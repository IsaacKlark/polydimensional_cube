const KleinBottleVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray,
  segments
) => {
  const _segments = +segments + 1 || 17;
  let basicVertices = [];

  let angle = 0;
  const angleChange = 360 / (_segments - 1);

  // if (+DimensionOfFigure === 2) {
  //   for (let i = 0; i < _segments; i++) {
  //     const radAngle = angle * 0.0175;
  //     basicVertices.push([150 * Math.sin(radAngle), -150 * Math.cos(radAngle)]);
  //     angle += angleChange;
  //   }
  // }

  let angle1 = 0;

  const a = 7;
  const b = 4;

  for (let i = 0; i < _segments; i++) {
    const radAngle1 = angle1 * 0.0175;
    let angle2 = 0;

    for (let j = 0; j < _segments; j++) {
      const radAngle2 = angle2 * 0.0175;
      basicVertices.push([
        (a + b * Math.cos(radAngle2)) * Math.cos(radAngle1) * 20,
        (a + b * Math.cos(radAngle2)) * Math.sin(radAngle1) * 20,
        b * Math.sin(radAngle2) * Math.cos(radAngle1 / 2) * 20,
        b * Math.sin(radAngle2) * Math.sin(radAngle1 / 2) * 20,
      ]);
      angle2 += angleChange;
    }
    angle1 += angleChange;
  }

  // for (let i = 0; i < _segments; i++) {
  //   const radAngle1 = angle1 * 0.0175;
  //   let angle2 = 0;

  //   for (let j = 0; j < _segments; j++) {
  //     const radAngle2 = angle2 * 0.0175;
  //     basicVertices.push([
  //       Math.sin(radAngle1) * Math.cos(radAngle2) * 100,
  //       Math.sin(radAngle2) * Math.cos(radAngle1) * 100,
  //       Math.sin(radAngle1) * Math.cos(radAngle1) * 100,
  //       Math.sin(radAngle2) * Math.cos(radAngle2) * 100,
  //     ]);
  //     angle2 += angleChange;
  //   }
  //   angle1 += angleChange;
  // }

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

export default KleinBottleVertices;
