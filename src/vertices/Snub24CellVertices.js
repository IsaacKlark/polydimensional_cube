const Snub24CellVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  const fi = 1.618;
  const baseGroup1 = [0, 1, fi, fi**2].map((number) => Math.round(number * 50));

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

  const group1 = arrayToSetAndToArray(especialCombinations(baseGroup1));

  let vertices = [...group1,];


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

export default Snub24CellVertices;
