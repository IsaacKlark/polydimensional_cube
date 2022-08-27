const IcosahedronVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 3 ? 3 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;
  const fi = 1.618;
  const baseGroup1 = [0, 1, fi].map((number) => number * 70);
  const baseGroup2 = [1, fi, 0].map((number) => number * 70);
  const baseGroup3 = [fi, 0, 1].map((number) => number * 70);

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

  for (let i = 0; i < DimensionOfFigure; i++) {
    ones.push(1);
  }

  const onesWithAllSignPermutations = signPermutations(ones);

  const minusToPlus = (arr) => {
    let result = [];
    const arrays = [arr];

    onesWithAllSignPermutations.forEach((el) => {
      const copyArr = [...arr];
      for (let i = 0; i < copyArr.length; i++) {
        copyArr[i] *= el[i];
      }

      arrays.push(copyArr);
    });

    arrays.forEach((array) => {
      result = [...result, array.map((number) => (number === -0 ? 0 : number))];
    });

    return result;
  };

  const arrayToSetAndToArray = (array) => {
    const mySet = new Set();
    array.forEach((item) => mySet.add(item.join(",")));

    return Array.from(mySet).map((item) =>
      item.split(",").map((item) => +item)
    );
  };

  const group1 = arrayToSetAndToArray(minusToPlus(baseGroup1));
  const group2 = arrayToSetAndToArray(minusToPlus(baseGroup2));
  const group3 = arrayToSetAndToArray(minusToPlus(baseGroup3));

  let vertices = [];

  vertices = [...group1, ...group2, ...group3];

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

export default IcosahedronVertices;
