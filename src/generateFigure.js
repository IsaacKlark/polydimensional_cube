import { Matrix } from "./sylvester.src";

const generateFigure = (vertices, matrix, dimension, dimensionOfFigure) => {
  const verticesOnSvg = vertices.map((vertex) => {
    let perspective = 350;
    let coordinates = matrix.multiply(Matrix.create(vertex));
    let x = coordinates?.e(1, 1) || 0;
    let y = coordinates?.e(2, 1) || 0;

    for (let i = 2; i < dimension; i++) {
      x = (perspective * x) / ((coordinates?.e(i + 1, 1) || 0) + perspective);
      y = (perspective * y) / ((coordinates?.e(i + 1, 1) || 0) + perspective);

      perspective += 150;
    }

    return { x, y };
  });

  const setCoordinatesToLines = Array.from(document.querySelectorAll(".line"));
  const coordinatesToCircles = Array.from(document.querySelectorAll(".circle"));

  setCoordinatesToLines.map((line) => {
    const index1 = isNaN(line.getAttribute("vertex1"))
      ? 0
      : line.getAttribute("vertex1");
    const index2 = isNaN(line.getAttribute("vertex2"))
      ? 0
      : line.getAttribute("vertex2");

    if (+dimensionOfFigure === 1) {
      line.setAttribute("x1", 200);
      line.setAttribute("x2", 400);
      line.setAttribute("y1", 200);
      line.setAttribute("y2", 200);
    } else {
      line.setAttribute("x1", 300 + verticesOnSvg[+index1]?.x);
      line.setAttribute("x2", 300 + verticesOnSvg[+index2]?.x);
      line.setAttribute("y1", 200 + verticesOnSvg[+index1]?.y);
      line.setAttribute("y2", 200 + verticesOnSvg[+index2]?.y);
    }

    return null;
  });

  coordinatesToCircles.map((line, index) => {
    line.setAttribute("cx", 300 + verticesOnSvg[index]?.x);
    line.setAttribute("cy", 200 + verticesOnSvg[index]?.y);

    return 0;
  });
};

export default generateFigure;
