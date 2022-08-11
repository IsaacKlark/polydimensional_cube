import { Matrix } from "./sylvester.src";

const generateFigureOrthography = (vertices, matrix, dimension) => {
  const verticesOnSvg = vertices.map((vertex) => {
    let coordinates = matrix.multiply(Matrix.create(vertex));
    let x = coordinates.e(1, 1);
    let y = coordinates.e(2, 1);

    return { x, y };
  });

  const setCoordinatesToLines = Array.from(document.querySelectorAll(".line"));
  const setCoordinatesToCircles = Array.from(
    document.querySelectorAll(".circle")
  );
  setCoordinatesToLines.map((line) => {
    const index1 = line.getAttribute("vertex1");
    const index2 = line.getAttribute("vertex2");

    line.setAttribute("x1", 300 + verticesOnSvg[+index1]?.x);
    line.setAttribute("x2", 300 + verticesOnSvg[+index2]?.x);
    line.setAttribute("y1", 200 + verticesOnSvg[+index1]?.y);
    line.setAttribute("y2", 200 + verticesOnSvg[+index2]?.y);

    return 0;
  });

  setCoordinatesToCircles.map((line, index) => {
    line.setAttribute("cx", 300 + verticesOnSvg[index]?.x);
    line.setAttribute("cy", 200 + verticesOnSvg[index]?.y);

    return 0;
  });
};

export default generateFigureOrthography;
