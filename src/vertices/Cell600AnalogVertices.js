const Cell600AnalogVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 4 ? 4 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;
  const fi = 1.618;
  const baseGroup1 = [1, 1, 1, 1].map((number) => Math.round(number * 80));
  const baseGroup2 = [2, 0, 0, 0].map((number) => Math.round(number * 80));
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

  const minusToPlus = (arr, couple) => {
    let result = [];
    const arrays = [arr];

    const combineMinuses = (dimensions) => {
      for (let i1 = -1; i1 <= 1; i1 += 2) {
        for (let i2 = -1; i2 <= 1; i2 += 2) {
          for (let i3 = -1; i3 <= 1; i3 += 2) {
            for (let i4 = -1; i4 <= 1; i4 += 2) {
              const copyArray = [...arr];
              const multiplyArray = [i1, i2, i3, i4];

              for (let i = 0; i < arr.length; i++) {
                copyArray[i] = +copyArray[i] * multiplyArray[i];
              }
              arrays.push(copyArray);
            }
          }
        }
      }
    };

    combineMinuses(+dimensions);

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
      for (let i1 = -1; i1 <= 1; i1 += 2) {
        for (let i2 = -1; i2 <= 1; i2 += 2) {
          for (let i3 = -1; i3 <= 1; i3 += 2) {
            for (let i4 = -1; i4 <= 1; i4 += 2) {
              const copyArray = [...permutations[i]];
              const multiplyArray = [i1, i2, i3, i4];

              for (let i = 0; i < arr.length; i++) {
                copyArray[i] = +copyArray[i] * multiplyArray[i];
              }
              result.push(copyArray);
            }
          }
        }
      }
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

  setVerticesArray(vertices);
};

export default Cell600AnalogVertices;
