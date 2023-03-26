import { outhNumberOfCheckboxes } from "./helpers";
import { setVerticesArray } from "./vertices";

const generateFigureOrthography = (vertices, dimensionOfFigure) => {
  const checkboxes = document.querySelectorAll(".checkbox");

  const newVertices = vertices.map((vertex) => {
    const copyVertex = [...vertex];

    outhNumberOfCheckboxes.forEach((el, index) => {
      if (checkboxes[index].checked) {
        const checkboxIndex1 = +el.split("-")[0] - 1;
        const checkboxIndex2 = +el.split("-")[1] - 1;

        const cos1 = Math.cos(0.02);
        const sin1 = Math.sin(0.02);
        const tmp1 =
          cos1 * copyVertex[checkboxIndex1] + sin1 * copyVertex[checkboxIndex2];
        copyVertex[checkboxIndex2] =
          -sin1 * copyVertex[checkboxIndex1] +
          cos1 * copyVertex[checkboxIndex2];
        copyVertex[checkboxIndex1] = tmp1;
      }
    });

    return copyVertex;
  });

  const verticesOnSvg = vertices.map((vertex) => {
    const copyVertex = [...vertex];

    let x = copyVertex[0];
    let y = copyVertex[1];

    return { x, y };
  });

  if (!newVertices.includes(undefined)) {
    setVerticesArray(newVertices);
  }

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
