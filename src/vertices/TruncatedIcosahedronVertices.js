const TruncatedIcosahedronVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 3 ? 3 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;
  const fi = 1.618;

  const baseGroup1 = [0, 1, 3 * fi].map((number) => number * 25);
  const baseGroup2 = [1, 3 * fi, 0].map((number) => number * 25);
  const baseGroup3 = [3 * fi, 0, 1].map((number) => number * 25);
  const baseGroup4 = [2, 1 + 2 * fi, fi].map((number) => number * 25);
  const baseGroup5 = [1 + 2 * fi, fi, 2].map((number) => number * 25);
  const baseGroup6 = [fi, 2, 1 + 2 * fi].map((number) => number * 25);
  const baseGroup7 = [1, 2 + fi, 2 * fi].map((number) => number * 25);
  const baseGroup8 = [2 + fi, 2 * fi, 1].map((number) => number * 25);
  const baseGroup9 = [2 * fi, 1, 2 + fi].map((number) => number * 25);

  const combinations = (arr, couple) => {
    arr = arr.map((item) => (item === -0 ? 0 : item));
    if (arr.length > 1) {
      const beg = arr[0];
      const arr1 = combinations(arr.slice(1));
      let l = arr1[0].length;
      const arr2 = [];
      for (let i = 0; i < arr1.length; i++)
        for (let j = 0; j <= l; j++) {
          const newArr = arr1[i]
            .slice(0, j)
            .concat(beg, arr1[i].slice(j))
            .slice(0, copyDimensionOfFigure + 1);
          let inversions = 0;
          for (let i = 0; i < newArr.length; i++) {
            for (let j = i + 1; j < newArr.length; j++) {
              if (newArr[i] > newArr[j]) inversions++;
            }
          }
          if (couple) {
            if (inversions % 2 === 0) {
              arr2.push(newArr);
            }
          } else {
            arr2.push(newArr);
          }
        }

      return arr2;
    } else return [arr];
  };

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

  const minusToPlus = (arr, couple) => {
    let result = [];
    const arrays = [arr];

    onesWithAllSignPermutations.forEach((el) => {
      const copyArr = [...arr];
      for (let i = 0; i < copyArr.length; i++) {
        copyArr[i] *= el[i];
      }

      arrays.push(copyArr);
    });

    if (copyDimensionOfFigure > 3) {
      arrays.forEach((array) => {
        result = [...result, ...combinations(array, couple)];
      });
    } else {
      arrays.forEach((array) => {
        result = [
          ...result,
          array.map((number) => (number === -0 ? 0 : number)),
        ];
      });
    }

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
  const group4 = arrayToSetAndToArray(minusToPlus(baseGroup4));
  const group5 = arrayToSetAndToArray(minusToPlus(baseGroup5));
  const group6 = arrayToSetAndToArray(minusToPlus(baseGroup6));
  const group7 = arrayToSetAndToArray(minusToPlus(baseGroup7));
  const group8 = arrayToSetAndToArray(minusToPlus(baseGroup8));
  const group9 = arrayToSetAndToArray(minusToPlus(baseGroup9));

  let vertices = [];

  vertices = [
    ...group1,
    ...group2,
    ...group3,
    ...group4,
    ...group5,
    ...group6,
    ...group7,
    ...group8,
    ...group9,
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

export default TruncatedIcosahedronVertices;
