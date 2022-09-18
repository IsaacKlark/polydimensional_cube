const Omnitruncated120CellVertices = (
  dimensions,
  DimensionOfFigure,
  setVerticesArray,
  scale,
  setOriginalVerticesArray
) => {
  const fi = 1.618;
  const length = 7;

  const baseGroup1 = [1, 1, 1+6*fi, 7+10*fi].map((number) => Math.trunc(number * length));
  const baseGroup2 = [1, 1, 3+8*fi, 7+8*fi].map((number) => Math.trunc(number * length));
  const baseGroup3 = [1, 1, 1+4*fi, 5+12*fi].map((number) => Math.trunc(number * length));
  const baseGroup4 = [1, 3, fi**6, fi**6].map((number) => Math.trunc(number * length));
  const baseGroup5 = [2, 2, 4*fi**3, 6+8*fi].map((number) => Math.trunc(number * length));
  const baseGroup6 = [2*fi**2, 4+2*fi, 4*fi**3, 4*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup7 = [3+2*fi, 3+2*fi, 3+8*fi, fi**6].map((number) => Math.trunc(number * length));
  const baseGroup8 = [1+4*fi, 3+4*fi, 3+8*fi, 3+8*fi].map((number) => Math.trunc(number * length));
  const baseGroup9 = [2*fi**3, 2*fi**3, 2+8*fi, 4*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup10 = [1, 5*fi**2, 4+7*fi, 6*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup11 = [1, 2*fi**4, 5+7*fi, 6+5*fi].map((number) => Math.trunc(number * length));
  const baseGroup12 = [1, 2, 1+5*fi, 6+11*fi].map((number) => Math.trunc(number * length));
  const baseGroup13 = [1, fi**2, 6+9*fi, 2+8*fi].map((number) => Math.trunc(number * length));
  const baseGroup14 = [1, fi**2, 8+9*fi, 2+6*fi].map((number) => Math.trunc(number * length));
  const baseGroup15 = [1, 2*fi, 7+9*fi, 2+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup16 = [1, fi**3, 5+12*fi, 3+2*fi].map((number) => Math.trunc(number * length));
  const baseGroup17 = [1, 3+fi, 4+9*fi, 4*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup18 = [1, 1+3*fi, 8+9*fi, 4*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup19 = [1, 1+3*fi, 6+11*fi, 4+2*fi].map((number) => Math.trunc(number * length));
  const baseGroup20 = [1, 4*fi, 7+9*fi, 4+5*fi].map((number) => Math.trunc(number * length));
  const baseGroup21 = [1, 3*fi**2, 4+9*fi, 6*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup22 = [1, 2*fi**3, 5+9*fi, 6+5*fi].map((number) => Math.trunc(number * length));
  const baseGroup23 = [2, fi**2, 5+12*fi, fi**4].map((number) => Math.trunc(number * length));
  const baseGroup24 = [2, 2+fi, 5+9*fi, 3+8*fi].map((number) => Math.trunc(number * length));
  const baseGroup25 = [2, fi**3, 8+9*fi, fi**5].map((number) => Math.trunc(number * length));
  const baseGroup26 = [2, 3*fi, 7+9*fi, 3*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup27 = [2, 1+3*fi, 7+10*fi, 4+3*fi].map((number) => Math.trunc(number * length));
  const baseGroup28 = [2, 3+2*fi, 4+9*fi, 5+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup29 = [2, 1+4*fi, 6+9*fi, 5*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup30 = [fi**2, 4+5*fi, 3+8*fi, 6*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup31 = [fi**2, 3*fi**3, 4*fi**3, 6+5*fi].map((number) => Math.trunc(number * length));
  const baseGroup32 = [fi**2, 3, 2*fi**3, 6+11*fi].map((number) => Math.trunc(number * length));
  const baseGroup33 = [fi**2, 3*fi, 5+12*fi, 2*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup34 = [fi**2, 3+2*fi, 4*fi, 6+11*fi].map((number) => Math.trunc(number * length));
  const baseGroup35 = [fi**2, 4+3*fi, fi**6, 6*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup36 = [fi**2, 3+4*fi, 6+8*fi, 6+5*fi].map((number) => Math.trunc(number * length));
  const baseGroup37 = [3, fi**3, 7+10*fi, 3+4*fi].map((number) => Math.trunc(number * length));
  const baseGroup38 = [3, 2*fi**2, 5+9*fi, 4+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup39 = [3, 1+3*fi, 6+9*fi, 2*fi**4].map((number) => Math.trunc(number * length));
  const baseGroup40 = [2*fi, 4*fi**2, 4*fi**3, 6*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup41 = [2*fi, fi**5, fi**6, 6+5*fi].map((number) => Math.trunc(number * length));
  const baseGroup42 = [2*fi, 2+fi, 1+3*fi, 5+12*fi].map((number) => Math.trunc(number * length));
  const baseGroup43 = [2*fi, 3+fi, 1+4*fi, 6+11*fi].map((number) => Math.trunc(number * length));
  const baseGroup44 = [2+fi, 4*fi, 7+10*fi, 3*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup45 = [2+fi, 4+2*fi, fi**6, 5+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup46 = [2+fi, 2*fi**3, 7+8*fi, 5*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup47 = [fi**3, 4+5*fi, 2+8*fi, 5+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup48 = [fi**3, 5*fi**2, 2+7*fi, 4*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup49 = [3+fi, 3*fi, 7+10*fi, 2*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup50 = [3+fi, 3+2*fi, 6+8*fi, 4+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup51 = [3+fi, fi**4, 7+8*fi, 2*fi**4].map((number) => Math.trunc(number * length));
  const baseGroup52 = [3*fi, 4*fi**2, 3+8*fi, 5+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup53 = [3*fi, 2+6*fi, fi**6, 5*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup54 = [2*fi**2, 1+4*fi, 8+9*fi, 3*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup55 = [2*fi**2, 1+5*fi, 7+8*fi, 4+5*fi].map((number) => Math.trunc(number * length));
  const baseGroup56 = [1+3*fi, 1+6*fi, 6+8*fi, 4+5*fi].map((number) => Math.trunc(number * length));
  const baseGroup57 = [1+3*fi, 3*fi**3, 2+8*fi, 4+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup58 = [1+3*fi, 2+7*fi, 3+8*fi, 2*fi**4].map((number) => Math.trunc(number * length));
  const baseGroup59 = [1+3*fi, 3+2*fi, 2*fi**3, 8+9*fi].map((number) => Math.trunc(number * length));
  const baseGroup60 = [1+3*fi, 4+3*fi, 3+8*fi, 4*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup61 = [3+2*fi, 1+4*fi, 7+8*fi, 3*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup62 = [3+2*fi, 2*fi**3, 7+9*fi, 4+3*fi].map((number) => Math.trunc(number * length));
  const baseGroup63 = [3+2*fi, 1+5*fi, 6+9*fi, 4*fi**2].map((number) => Math.trunc(number * length));
  const baseGroup64 = [4*fi, fi**5, 3+8*fi, 4+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup65 = [4*fi, 2+6*fi, 4*fi**3, 2*fi**4].map((number) => Math.trunc(number * length));
  const baseGroup66 = [fi**4, 4*fi**2, 1+6*fi, 5+9*fi].map((number) => Math.trunc(number * length));
  const baseGroup67 = [fi**4, 4+2*fi, 3+4*fi, 7+9*fi].map((number) => Math.trunc(number * length));
  const baseGroup68 = [fi**4, 3*fi**2, 2+8*fi, fi**6].map((number) => Math.trunc(number * length));
  const baseGroup69 = [4+2*fi, 1+4*fi, 6+9*fi, fi**5].map((number) => Math.trunc(number * length));
  const baseGroup70 = [1+4*fi, 1+6*fi, fi**6, 3*fi**3].map((number) => Math.trunc(number * length));
  const baseGroup71 = [1+4*fi, 3*fi**2, 2+7*fi, 6+8*fi].map((number) => Math.trunc(number * length));
  const baseGroup72 = [1+4*fi, 4+3*fi, 2+6*fi, 5+9*fi].map((number) => Math.trunc(number * length));
  const baseGroup73 = [2*fi**3, 1+6*fi, 4+9*fi, fi**5].map((number) => Math.trunc(number * length));
  const baseGroup74 = [2*fi**3, 1+5*fi, fi**6, 2+7*fi].map((number) => Math.trunc(number * length));
  const baseGroup75 = [1+5*fi, 3+4*fi, 2+6*fi, 4+9*fi].map((number) => Math.trunc(number * length));

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
  const group7 = arrayToSetAndToArray(mixAll(baseGroup7));
  const group8 = arrayToSetAndToArray(mixAll(baseGroup8));
  const group9 = arrayToSetAndToArray(mixAll(baseGroup9));
  const group10 = arrayToSetAndToArray(especialCombinations(baseGroup10));
  const group11 = arrayToSetAndToArray(especialCombinations(baseGroup11));
  const group12 = arrayToSetAndToArray(especialCombinations(baseGroup12));
  const group13 = arrayToSetAndToArray(especialCombinations(baseGroup13));
  const group14 = arrayToSetAndToArray(especialCombinations(baseGroup14));
  const group15 = arrayToSetAndToArray(especialCombinations(baseGroup15));
  const group16 = arrayToSetAndToArray(especialCombinations(baseGroup16));
  const group17 = arrayToSetAndToArray(especialCombinations(baseGroup17));
  const group18 = arrayToSetAndToArray(especialCombinations(baseGroup18));
  const group19 = arrayToSetAndToArray(especialCombinations(baseGroup19));
  const group20 = arrayToSetAndToArray(especialCombinations(baseGroup20));
  const group21 = arrayToSetAndToArray(especialCombinations(baseGroup21));
  const group22 = arrayToSetAndToArray(especialCombinations(baseGroup22));
  const group23 = arrayToSetAndToArray(especialCombinations(baseGroup23));
  const group24 = arrayToSetAndToArray(especialCombinations(baseGroup24));
  const group25 = arrayToSetAndToArray(especialCombinations(baseGroup25));
  const group26 = arrayToSetAndToArray(especialCombinations(baseGroup26));
  const group27 = arrayToSetAndToArray(especialCombinations(baseGroup27));
  const group28 = arrayToSetAndToArray(especialCombinations(baseGroup28));
  const group29 = arrayToSetAndToArray(especialCombinations(baseGroup29));
  const group30 = arrayToSetAndToArray(especialCombinations(baseGroup30));
  const group31 = arrayToSetAndToArray(especialCombinations(baseGroup31));
  const group32 = arrayToSetAndToArray(especialCombinations(baseGroup32));
  const group33 = arrayToSetAndToArray(especialCombinations(baseGroup33));
  const group34 = arrayToSetAndToArray(especialCombinations(baseGroup34));
  const group35 = arrayToSetAndToArray(especialCombinations(baseGroup35));
  const group36 = arrayToSetAndToArray(especialCombinations(baseGroup36));
  const group37 = arrayToSetAndToArray(especialCombinations(baseGroup37));
  const group38 = arrayToSetAndToArray(especialCombinations(baseGroup38));
  const group39 = arrayToSetAndToArray(especialCombinations(baseGroup39));
  const group40 = arrayToSetAndToArray(especialCombinations(baseGroup40));
  const group41 = arrayToSetAndToArray(especialCombinations(baseGroup41));
  const group42 = arrayToSetAndToArray(especialCombinations(baseGroup42));
  const group43 = arrayToSetAndToArray(especialCombinations(baseGroup43));
  const group44 = arrayToSetAndToArray(especialCombinations(baseGroup44));
  const group45 = arrayToSetAndToArray(especialCombinations(baseGroup45));
  const group46 = arrayToSetAndToArray(especialCombinations(baseGroup46));
  const group47 = arrayToSetAndToArray(especialCombinations(baseGroup47));
  const group48 = arrayToSetAndToArray(especialCombinations(baseGroup48));
  const group49 = arrayToSetAndToArray(especialCombinations(baseGroup49));
  const group50 = arrayToSetAndToArray(especialCombinations(baseGroup50));
  const group51 = arrayToSetAndToArray(especialCombinations(baseGroup51));
  const group52 = arrayToSetAndToArray(especialCombinations(baseGroup52));
  const group53 = arrayToSetAndToArray(especialCombinations(baseGroup53));
  const group54 = arrayToSetAndToArray(especialCombinations(baseGroup54));
  const group55 = arrayToSetAndToArray(especialCombinations(baseGroup55));
  const group56 = arrayToSetAndToArray(especialCombinations(baseGroup56));
  const group57 = arrayToSetAndToArray(especialCombinations(baseGroup57));
  const group58 = arrayToSetAndToArray(especialCombinations(baseGroup58));
  const group59 = arrayToSetAndToArray(especialCombinations(baseGroup59));
  const group60 = arrayToSetAndToArray(especialCombinations(baseGroup60));
  const group61 = arrayToSetAndToArray(especialCombinations(baseGroup61));
  const group62 = arrayToSetAndToArray(especialCombinations(baseGroup62));
  const group63 = arrayToSetAndToArray(especialCombinations(baseGroup63));
  const group64 = arrayToSetAndToArray(especialCombinations(baseGroup64));
  const group65 = arrayToSetAndToArray(especialCombinations(baseGroup65));
  const group66 = arrayToSetAndToArray(especialCombinations(baseGroup66));
  const group67 = arrayToSetAndToArray(especialCombinations(baseGroup67));
  const group68 = arrayToSetAndToArray(especialCombinations(baseGroup68));
  const group69 = arrayToSetAndToArray(especialCombinations(baseGroup69));
  const group70 = arrayToSetAndToArray(especialCombinations(baseGroup70));
  const group71 = arrayToSetAndToArray(especialCombinations(baseGroup71));
  const group72 = arrayToSetAndToArray(especialCombinations(baseGroup72));
  const group73 = arrayToSetAndToArray(especialCombinations(baseGroup73));
  const group74 = arrayToSetAndToArray(especialCombinations(baseGroup74));
  const group75 = arrayToSetAndToArray(especialCombinations(baseGroup75));

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
    ...group18,
    ...group19,
    ...group20,
    ...group21,
    ...group22,
    ...group23,
    ...group24,
    ...group25,
    ...group26,
    ...group27,
    ...group28,
    ...group29,
    ...group30,
    ...group31,
    ...group32,
    ...group33,
    ...group34,
    ...group35,
    ...group36,
    ...group37,
    ...group38,
    ...group39,
    ...group40,
    ...group41,
    ...group42,
    ...group43,
    ...group44,
    ...group45,
    ...group46,
    ...group47,
    ...group48,
    ...group49,
    ...group50,
    ...group51,
    ...group52,
    ...group53,
    ...group54,
    ...group55,
    ...group56,
    ...group57,
    ...group58,
    ...group59,
    ...group60,
    ...group61,
    ...group62,
    ...group63,
    ...group64,
    ...group65,
    ...group66,
    ...group67,
    ...group68,
    ...group69,
    ...group70,
    ...group71,
    ...group72,
    ...group73,
    ...group74,
    ...group75
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

export default Omnitruncated120CellVertices;
