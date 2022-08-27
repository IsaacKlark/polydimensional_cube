const Cell600AnalogVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 4 ? 4 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;
  const fi = 1.618;
  const baseGroup1 = [80, 80, 80, 80];
  const baseGroup2 = [160, 0, 0, 0];
  const baseGroup3 = [fi, 1, fi ** -1, 0].map((number) =>
    Math.round(number * 80)
  );

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
  const group3 = arrayToSetAndToArray(especialCombinations(baseGroup3));

  let vertices = [];

  vertices = [...group1, ...group2, ...group3];

  const lowDimensionSet = new Set();
  if (+DimensionOfFigure === 3) {
    vertices = vertices.forEach((arr) => {
      lowDimensionSet.add(JSON.stringify(arr.slice(0, DimensionOfFigure)));
    });

    vertices = Array.from(lowDimensionSet).map((arr) =>
      JSON.parse(arr).map((el) => +el)
    );
  }

  if (+DimensionOfFigure === 2) {
    vertices = [
      [80, 80],
      [-80, -80],
      [-80, 80],
      [80, -80],
      [160, 0],
      [-160, 0],
      [0, 160],
      [0, -160],
      [0, 0],
      [-129, -80],
      [-129, 80],
      [129, -80],
      [129, 80],
      [-80, -49],
      [-80, 49],
      [80, -49],
      [80, 49],
      [-49, -129],
      [-49, 129],
      [49, -129],
      [49, 129],
      [-49, -80],
      [-49, 80],
      [49, -80],
      [49, 80],
      [-129, -49],
      [-129, 49],
      [129, -49],
      [129, 49],
      [-49, 0],
      [49, 0],
      [-80, -129],
      [-80, 129],
      [80, -129],
      [80, 129],
      [-80, 0],
      [80, 0],
      [-129, 0],
      [129, 0],
      [0, -80],
      [0, 80],
      [0, -129],
      [0, 129],
      [0, -49],
      [0, 49],
    ];
  }

  if (+dimensions > +copyDimensionOfFigure) {
    vertices = vertices.map((arr) => {
      for (let i = +copyDimensionOfFigure + 1; i <= +dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }
  
  setOriginalVerticesArray(vertices);
  vertices = vertices.map((arr) => arr.map((item) => item * scale));
  setVerticesArray(vertices);
};

export default Cell600AnalogVertices;
