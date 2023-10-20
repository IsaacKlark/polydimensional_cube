const RandomShapeVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let vertices = [];
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumber = getRandomNumber(4, 500);
  for (let i = 0; i < randomNumber; i++) {
    const coordinates = [];
    for (let i = 0; i < +dimensions; i ++) {
      coordinates.push(i < +DimensionOfFigure ? getRandomNumber(-100, 100) : 0)
    }

    vertices.push(coordinates)
  };
  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));

  setVerticesArray(vertices);
};

export default RandomShapeVertices;
