const Cell120AnalogVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 4 ? 4 : DimensionOfFigure;
  if (+DimensionOfFigure > +dimensions) copyDimensionOfFigure = dimensions;
  const fi = 1.618;
  const baseGroup1 =
    +copyDimensionOfFigure === 3
      ? [fi, fi, fi].map((number) => Math.round(number * 50))
      : [2, 2, 0, 0].map((number) => Math.round(number * 50));
  const baseGroup2 =
    +copyDimensionOfFigure === 3
      ? [0, fi ** 2, 1].map((number) => Math.round(number * 50))
      : [5 ** (1 / 2), 1, 1, 1].map((number) => Math.round(number * 50));
  const baseGroup3 =
    +copyDimensionOfFigure === 3
      ? [fi ** 2, 1, 0].map((number) => Math.round(number * 50))
      : [fi, fi, fi, fi ** -2].map((number) => Math.round(number * 50));
  const baseGroup4 =
    +copyDimensionOfFigure === 3
      ? [1, 0, fi ** 2].map((number) => Math.round(number * 50))
      : [fi ** 2, fi ** -1, fi ** -1, fi ** -1].map((number) =>
          Math.round(number * 50)
        );
  const baseGroup5 =
    +copyDimensionOfFigure === 3
      ? [97, 37, 0]
      : [fi ** 2, fi ** -2, 1, 0].map((number) => Math.round(number * 50));
  const baseGroup6 = [5 ** (1 / 2), fi ** -1, fi, 0].map((number) =>
    Math.round(number * 50)
  );
  const baseGroup7 = [2, 1, fi, fi ** -1].map((number) =>
    Math.round(number * 50)
  );

  const vertices2D = [];
  let angle = 0;
  for (let i = 0; i < 5; i++) {
    const radAngle = angle * 0.0175;
    vertices2D.push([100 * Math.sin(radAngle), -100 * Math.cos(radAngle)]);
    angle += 72;
  }

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
  };

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

    onesWithAllSignPermutations.forEach((el) => {
      const copyArr = [...arr];
      for(let i = 0; i < copyArr.length; i++) {
        copyArr[i] *= el[i];
      }

      arrays.push(copyArr);
    })

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
        for(let i = 0; i < copyArr.length; i++) {
          copyArr[i] *= el[i];
        }
  
        result.push(copyArr);
      })
    }


    const resultSet = new Set();
    result.forEach((el) => {
      resultSet.add(JSON.stringify(el));
    });
    return Array.from(resultSet).map((el) => JSON.parse(el));
  };

  const group1 = arrayToSetAndToArray(
    +copyDimensionOfFigure === 3 ? minusToPlus(baseGroup1) : mixAll(baseGroup1)
  );
  const group2 = arrayToSetAndToArray(
    +copyDimensionOfFigure === 3 ? minusToPlus(baseGroup2) : mixAll(baseGroup2)
  );
  const group3 = arrayToSetAndToArray(
    +copyDimensionOfFigure === 3 ? minusToPlus(baseGroup3) : mixAll(baseGroup3)
  );
  const group4 = arrayToSetAndToArray(
    +copyDimensionOfFigure === 3 ? minusToPlus(baseGroup4) : mixAll(baseGroup4)
  );
  const group5 = arrayToSetAndToArray(
    +copyDimensionOfFigure === 3
      ? minusToPlus(baseGroup5)
      : especialCombinations(baseGroup5)
  );
  const group6 = arrayToSetAndToArray(especialCombinations(baseGroup6));
  const group7 = arrayToSetAndToArray(especialCombinations(baseGroup7));

  let vertices = [];

  if (+copyDimensionOfFigure === 2) {
    vertices = vertices2D;
  }

  if (+copyDimensionOfFigure === 3) {
    vertices = [...group1, ...group2, ...group3, ...group4];
  }

  if (+copyDimensionOfFigure > 3) {
    vertices = [
      ...group1,
      ...group2,
      ...group3,
      ...group4,
      ...group5,
      ...group6,
      ...group7,
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

export default Cell120AnalogVertices;
