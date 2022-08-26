const CliffordTorusVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray
) => {
  let basicVertices = [];

  let angle = 0;
  const segments = 21;
  const segmentAngle = 360 / (segments - 1);

  for (let i = 0; i < segments; i++) {
    const radAngle1 = angle * 0.0175;
    basicVertices.push(
      [Math.cos(radAngle1), Math.sin(radAngle1)].map((number) => number * 100)
    );
    angle += segmentAngle;
  }

  for (let i = 2; i < +DimensionOfFigure; i++) {
    const copyArray = [];

    if (i % 2 === 0) {

      basicVertices.forEach((arr) => {
        let angle = 0;

        for (let i = 0; i < segments; i++) {
          const copyArr = [...arr];
          const radAngle = angle * 0.0175;
          copyArr.push(100 * Math.cos(radAngle));
          copyArray.push(copyArr);
          angle += segmentAngle;
        }
      });

    } else {
      let angle = 0;

      basicVertices.forEach((arr) => {
        const copyArr = [...arr];
        const radAngle = angle * 0.0175;
        copyArr.push(100 * Math.sin(radAngle));
        copyArray.push(copyArr);
        angle += segmentAngle;
        if (Math.trunc(angle) === Math.trunc(360 + segmentAngle)) {
          angle = 0;
        }
      });
    }
    basicVertices = copyArray;
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

export default CliffordTorusVertices;
