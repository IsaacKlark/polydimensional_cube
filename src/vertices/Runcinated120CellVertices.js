const Runcinated120CellVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  const fi = 1.618;
  const length = 16;
  const baseGroup1 = [1, 1, fi**3, 3+4*fi].map((number) => Math.trunc(number * length));
  const baseGroup2 = [fi, fi, fi, 2+5*fi].map((number) => Math.trunc(number * length));
  const baseGroup3 = [fi, 2+fi, fi**4, fi**4].map((number) => Math.trunc(number * length));
  const baseGroup4 = [fi**2, fi**2, 1+3*fi, 3*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup5 = [fi**2, 1+3*fi, 1+3*fi, 1+3*fi].map((number) => Math.trunc(number * length));
  const baseGroup6 = [fi**3, fi**3, fi**3, 1+4*fi].map((number) => Math.trunc(number * length));
  const baseGroup7 = [0, 1, fi**4, 3*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup8 = [0, 1, 2+5*fi, fi**2].map((number) => Math.trunc(number * length));
  const baseGroup9 = [0, 2*fi, 2*fi**3, 2*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup10 = [0, fi**2, 1+4*fi, fi**4].map((number) => Math.trunc(number * length));
  const baseGroup11 = [0, fi**2, 3+4*fi, 2+fi].map((number) => Math.trunc(number * length));
  const baseGroup12 = [1, fi, 2*fi**3, 1+3*fi].map((number) => Math.trunc(number * length));
  const baseGroup13 = [1, 2*fi**2, 1+3*fi, fi**4].map((number) => Math.trunc(number * length));
  const baseGroup14 = [fi, fi**2, 2*fi, 3+4*fi].map((number) => Math.trunc(number * length));
  const baseGroup15 = [fi, fi**3, 3*fi**2, 2*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup16 = [fi**2, 2+fi, fi**3, 2*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup17 = [2*fi, fi**3, fi**4, 1+3*fi].map((number) => Math.trunc(number * length));

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
            .slice(0, +DimensionOfFigure + 1);
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

    if (+DimensionOfFigure > 3) {
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

  const mixAll = (array, couple) => {
    let variants = [];
    combinations(array, false).forEach((array) => {
      variants = [...variants, ...minusToPlus(array, couple)];
    });

    const mySet = new Set();
    variants.forEach((element) => {
      mySet.add(element.join(","));
    });

    return Array.from(mySet).map((item) => item.split(","));
  };

  const arrayToSetAndToArray = (array) => {
    const mySet = new Set();
    array.forEach((item) => mySet.add(item.join(",")));

    return Array.from(mySet).map((item) =>
      item.split(",").map((item) => +item)
    );
  };

  const especialCombinations = (arr) => {
    const permutations = combinations(arr, true);
    const result = [];
    for (let i = 0; i < permutations.length; i++) {
      onesWithAllSignPermutations.forEach((el) => {
        const copyArr = [...permutations[i]];
        for (let i = 0; i < copyArr.length; i++) {
          copyArr[i] *= el[i];
        }

        result.push(copyArr);
      });
    }

    const resultSet = new Set();
    result.forEach((el) => {
      resultSet.add(JSON.stringify(el));
    });
    return Array.from(resultSet).map((el) => JSON.parse(el));
  };

  const group1 = arrayToSetAndToArray(mixAll(baseGroup1));
  const group2 = arrayToSetAndToArray(mixAll(baseGroup2));
  const group3 = arrayToSetAndToArray(mixAll(baseGroup3));
  const group4 = arrayToSetAndToArray(mixAll(baseGroup4));
  const group5 = arrayToSetAndToArray(mixAll(baseGroup5));
  const group6 = arrayToSetAndToArray(mixAll(baseGroup6));
  const group7 = arrayToSetAndToArray(especialCombinations(baseGroup7));
  const group8 = arrayToSetAndToArray(especialCombinations(baseGroup8));
  const group9 = arrayToSetAndToArray(especialCombinations(baseGroup9));
  const group10 = arrayToSetAndToArray(especialCombinations(baseGroup10));
  const group11 = arrayToSetAndToArray(especialCombinations(baseGroup11));
  const group12 = arrayToSetAndToArray(especialCombinations(baseGroup12));
  const group13 = arrayToSetAndToArray(especialCombinations(baseGroup13));
  const group14 = arrayToSetAndToArray(especialCombinations(baseGroup14));
  const group15 = arrayToSetAndToArray(especialCombinations(baseGroup15));
  const group16 = arrayToSetAndToArray(especialCombinations(baseGroup16));
  const group17 = arrayToSetAndToArray(especialCombinations(baseGroup17));

  let vertices = [
    ...group1,
    ...group2,
    ...group3,
    ...group4,
    ...group5,
    ...group6,
    ...group7,
    ...group8,
    ...group9,
    ...group10,
    ...group11,
    ...group12,
    ...group13,
    ...group14,
    ...group15,
    ...group16,
    ...group17,
  ];

  if (+dimensions > 4) {
    vertices = vertices.map((arr) => {
      for (let i = 5; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }
  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default Runcinated120CellVertices;