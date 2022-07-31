import initMatrix from "./initMatrix";
import { Matrix } from "./sylvester.src";

const toRadians = (angle) => (angle * Math.PI) / 180;

const generateMatrixes = (dimensions, anglesArr, transposeRotation) => {
  let cosinus1 = dimensions - 1;
  let cosinus2 = dimensions - 2;
  let sinus1 = dimensions - 1;
  let sinus2 = dimensions - 2;
  let variants = (dimensions * (dimensions - 1)) / 2;
  const matrixes = [];
  for (let i = 0; i < variants; i++) {
    matrixes.push(
      Matrix.create(
        initMatrix(
          dimensions,
          cosinus1,
          cosinus2,
          sinus1,
          sinus2,
          toRadians(anglesArr[i])
        )
      )
    );

    if (cosinus2 === 0) {
      cosinus1--;
      cosinus2 = cosinus1;
      sinus1--;
      sinus2 = sinus1;
    }

    cosinus2--;
    sinus2--;
  }

  let matrixMultiply = matrixes[0];

  for (let i = 1; i < variants; i++) {
    matrixMultiply = matrixMultiply.multiply(matrixes[i]);
  }

  if (transposeRotation) {
    return matrixMultiply.transpose();
  }

  return matrixMultiply;
};

export default generateMatrixes;
