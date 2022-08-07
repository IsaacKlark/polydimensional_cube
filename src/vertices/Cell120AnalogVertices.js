const Cell120AnalogVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray
) => {
  let copyDimensionOfFigure = DimensionOfFigure > 4 ? 4 : DimensionOfFigure;
  if (DimensionOfFigure > dimensions) copyDimensionOfFigure = dimensions;
  const fi = 1.618;
  const baseGroup1 =
    +copyDimensionOfFigure === 3 ? [60, 60, 60] : [0, 0, 2, 2].map((number) => Math.round(number * 50));
  const baseGroup2 =
    +copyDimensionOfFigure === 3 ? [0, 97, 37] : [1, 1, 1, 5**(1/2)].map((number) => Math.round(number * 50));
  const baseGroup3 =
    +copyDimensionOfFigure === 3 ? [0, 97, 37] : [fi**-2, fi, fi, fi].map((number) => Math.round(number * 50));
  const baseGroup4 =
    +copyDimensionOfFigure === 3 ? [37, 0, 97] : [fi**-1, fi**-1, fi**-1, fi**2].map((number) => Math.round(number * 50));
  const baseGroup5 =
    +copyDimensionOfFigure === 3 ? [97, 37, 0] : [0, fi**-2, 1, fi**2].map((number) => Math.round(number * 50));
  const baseGroup6 = [0, fi**-1, fi, 5**(1/2)].map((number) => Math.round(number * 50));
  const baseGroup7 = [fi**-1, 1, fi, 2].map((number) => Math.round(number * 50));

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
      : mixAll(baseGroup5)
  );
  const group6 = arrayToSetAndToArray(mixAll(baseGroup6, true));
  const group7 = arrayToSetAndToArray(mixAll(baseGroup7));

  let vertices =
    +copyDimensionOfFigure === 3
      ? [...group1, ...group2, ...group3, ...group4, ...group5]
      : [
          ...group1,
          ...group2,
          ...group3,
          ...group4,
          ...group5,
          ...group6,
          ...group7,
        ];

  if (dimensions > copyDimensionOfFigure) {
    vertices = vertices.map((arr) => {
      for (let i = copyDimensionOfFigure + 1; i <= dimensions; i++) {
        arr.push(0);
      }
      return arr;
    });
  }
  setVerticesArray(vertices);
};

export default Cell120AnalogVertices;
