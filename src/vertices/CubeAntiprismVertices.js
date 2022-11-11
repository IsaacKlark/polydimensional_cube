const CubeAntiprismVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  const preGroup1 = [];

  for (let i = 0; i < +DimensionOfFigure - 1; i++) {
    const group1 = [];
    const group2 = [];

    for (let j = 0; j < +DimensionOfFigure - 1; j++) {
      if (i === j) {
        group1.push(Math.sqrt(2));
        group2.push(-Math.sqrt(2));
      } else {
        group1.push(0);
        group2.push(0);
      }
    }

    group1.push(Math.sqrt(2 * Math.sqrt(2) - 1));
    group2.push(Math.sqrt(2 * Math.sqrt(2) - 1));

    preGroup1.push(group1);
    preGroup1.push(group2);
  }
  const baseGroup1 = preGroup1.map((arr) => arr.map((number) => number * 80));

  const signPermutations = (a) => {
    let result = [];
    let fourResults = [];
    for (let i = 0; i < 1 << a.length; i++) {
      let num = 1 << (a.length - 1);

      for (let j = 0; j < a.length; j++) {
        num = num >> 1;
      }

      num = 1 << (a.length - 1);

      for (let j = 0; j < a.length; j++) {
        if ((i & num) > 0) {
          fourResults.push(a[j]);
        } else {
          fourResults.push(a[j] * -1);
        }
        if (fourResults.length === a.length) {
          result.push(fourResults);
          fourResults = [];
        }
        num = num >> 1;
      }
    }

    return result;
  };

  const ones = [];

  for (let i = 0; i < +DimensionOfFigure - 1; i++) {
    ones.push(1);
  }

  const baseGroup2 = signPermutations(ones).map((arr) => {
    const copyArr = [...arr];
    copyArr.push(0);

    return copyArr.map((number) => number * 80);
  });

  let vertices = [...baseGroup1, ...baseGroup2];

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

export default CubeAntiprismVertices;
