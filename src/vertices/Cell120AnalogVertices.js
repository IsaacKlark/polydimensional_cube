const Cell120AnaologVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray
) => {
  // const fi = (1 + 5 ** (1 / 2)) / 2;
  const baseGroup1 = +DimensionOfFigure === 3 ? [60, 60, 60].map((number) => number / 1.1) : [0, 0, 120, 120].map((number) => number / 1.1);
  const baseGroup2 = +DimensionOfFigure === 3 ? [0, 97, 37].map((number) => number / 1.1) : [60, 60, 60, 134].map((number) => number / 1.1);
  const baseGroup3 = +DimensionOfFigure === 3 ? [0, 97, 37].map((number) => number / 1.1) : [23, 97, 97, 97].map((number) => number / 1.1);
  const baseGroup4 = +DimensionOfFigure === 3 ? [37, 0, 97].map((number) => number / 1.1) : [37, 37, 37, 157].map((number) => number / 1.1);
  const baseGroup5 = +DimensionOfFigure === 3 ? [97, 37, 0].map((number) => number / 1.1) : [0, 23, 60, 157].map((number) => number / 1.1);
  const baseGroup6 = [0, 37, 97, 134].map((number) => number / 1.1);
  const baseGroup7 = [37, 60, 97, 120].map((number) => number / 1.1);


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
            .slice(0, DimensionOfFigure + 1);
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
      let code = "";
      const arr2 = [];
      for (let i = 0; i < dimensions; i++) {
        code += `for(let i${i}=-1;i${i}<=1;i${i}+=2) {`;
        arr2.push("i" + i);
      }
      code += `
        const copyArray = [...arr];

        const multiplyArray = [${arr2.join(",")}].map((item) => +item); 
          for (let i = 0; i < arr.length; i++) {
            copyArray[i] = +copyArray[i] * multiplyArray[i];
          }
        arrays.push(copyArray)
      `;
      for (let i = 0; i < dimensions; i++) {
        code += `};`;
      }
      eval(code);
    };

    combineMinuses(dimensions);

    if (DimensionOfFigure > 3) {
      arrays.forEach((array) => {
        result = [...result, ...combinations(array, couple)];
      });
    }

    arrays.forEach((array) => {
      result = [...result, array.map((number) => (number === -0 ? 0 : number))];
    });

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

  const group1 = arrayToSetAndToArray(
    +DimensionOfFigure === 3 ? minusToPlus(baseGroup1) : mixAll(baseGroup1)
  );
  const group2 = arrayToSetAndToArray(
    +DimensionOfFigure === 3 ? minusToPlus(baseGroup2) : mixAll(baseGroup2)
  );
  const group3 = arrayToSetAndToArray(
    +DimensionOfFigure === 3 ? minusToPlus(baseGroup3) : mixAll(baseGroup3)
  );
  const group4 = arrayToSetAndToArray(
    +DimensionOfFigure === 3 ? minusToPlus(baseGroup4) : mixAll(baseGroup4)
  );
  const group5 = arrayToSetAndToArray(
    +DimensionOfFigure === 3
      ? minusToPlus(baseGroup5)
      : mixAll(baseGroup5, true)
  );
  const group6 = arrayToSetAndToArray(mixAll(baseGroup6, true));
  const group7 = arrayToSetAndToArray(mixAll(baseGroup7, true));

  const vertices =
    +DimensionOfFigure === 3
      ? [...group1, ...group2, ...group3, ...group4, ...group5]
      : [...group1, ...group2, ...group3, ...group4, ...group5, ...group6, ...group7];

  const lines = [];

  for (let i = 0; i < vertices.length; i++) {
    for (let j = 0; j < vertices.length; j++) {
      let length = 0;

      for (let k = 0; k < vertices[i].length; k++) {
        length += (vertices[i][k] - vertices[j][k]) ** 2;
      }

      if (+Math.sqrt(length).toFixed(3) === 0.764) {
        lines.push(`${i}, ${j}`);
      }
    }
  }

  setVerticesArray(vertices);
};

export default Cell120AnaologVertices;
