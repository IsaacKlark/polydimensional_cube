const TruncatedTetrahedronVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 3 ? 3 : DimensionOfFigure;

  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;

  const baseGroup1 = [1 / Math.sqrt(6), -2 / Math.sqrt(3), 2].map(
    (number) => number * 60
  );
  const baseGroup2 = [1 / Math.sqrt(6), -2 / Math.sqrt(3), -2].map(
    (number) => number * 60
  );
  const baseGroup3 = [1 / Math.sqrt(6), 4 / Math.sqrt(3), 0].map(
    (number) => number * 60
  );
  const baseGroup4 = [-3 / Math.sqrt(6), 0, 2].map((number) => number * 60);
  const baseGroup5 = [-3 / Math.sqrt(6), 0, -2].map((number) => number * 60);
  const baseGroup6 = [-3 / Math.sqrt(6), 3 / Math.sqrt(3), 1].map(
    (number) => number * 60
  );
  const baseGroup7 = [-3 / Math.sqrt(6), -3 / Math.sqrt(3), -1].map(
    (number) => number * 60
  );
  const baseGroup8 = [-3 / Math.sqrt(6), -3 / Math.sqrt(3), 1].map(
    (number) => number * 60
  );
  const baseGroup9 = [-3 / Math.sqrt(6), 3 / Math.sqrt(3), -1].map(
    (number) => number * 60
  );
  const baseGroup10 = [5 / Math.sqrt(6), -1 / Math.sqrt(3), 1].map(
    (number) => number * 60
  );
  const baseGroup11 = [5 / Math.sqrt(6), -1 / Math.sqrt(3), -1].map(
    (number) => number * 60
  );
  const baseGroup12 = [5 / Math.sqrt(6), 2 / Math.sqrt(3), 0].map(
    (number) => number * 60
  );
  let vertices = [];

  vertices = [
    baseGroup1,
    baseGroup2,
    baseGroup3,
    baseGroup4,
    baseGroup5,
    baseGroup6,
    baseGroup7,
    baseGroup8,
    baseGroup9,
    baseGroup10,
    baseGroup11,
    baseGroup12,
  ];

  if (+dimensions > +copyDimensionOfFigure) {
    vertices = vertices.map((arr) => {
      for (let i = +copyDimensionOfFigure + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }

  if (+DimensionOfFigure < 3) {
    vertices = vertices.map((el) => el.slice(0, 2));
  }
  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default TruncatedTetrahedronVertices;
