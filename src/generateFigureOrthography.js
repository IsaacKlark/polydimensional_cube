import { Matrix } from "./sylvester.src";

const generateFigureOrthography = (vertices, matrix, dimensionOfFigure) => {
  const verticesOnSvg = vertices.map((vertex) => {
    let coordinates = matrix.multiply(Matrix.create(vertex));
    let x = coordinates?.e(1, 1) || 0;
    let y = coordinates?.e(2, 1) || 0;

    return { x, y };
  });
  const width = document.querySelector("svg").clientWidth;
  const height = document.querySelector("svg").clientHeight;
  const setCoordinatesToLines = Array.from(document.querySelectorAll(".line"));
  const setCoordinatesToCircles = Array.from(
    document.querySelectorAll(".circle")
  );
  setCoordinatesToLines.map((line) => {
    const index1 = line.getAttribute("vertex1");
    const index2 = line.getAttribute("vertex2");

    if (+dimensionOfFigure === 1) {
      line.setAttribute("x1", height / 2);
      line.setAttribute("x2", width);
      line.setAttribute("y1", height / 2);
      line.setAttribute("y2", height / 2);
    } else {
      line.setAttribute("x1", width / 2 + verticesOnSvg[+index1]?.x);
      line.setAttribute("x2", width / 2 + verticesOnSvg[+index2]?.x);
      line.setAttribute("y1", height / 2 + verticesOnSvg[+index1]?.y);
      line.setAttribute("y2", height / 2 + verticesOnSvg[+index2]?.y);
    }

    return 0;
  });

  setCoordinatesToCircles.map((line, index) => {
    line.setAttribute("cx", width / 2 + verticesOnSvg[index]?.x);
    line.setAttribute("cy", height / 2 + verticesOnSvg[index]?.y);

    return 0;
  });
};

export default generateFigureOrthography;
