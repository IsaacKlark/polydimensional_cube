import { outhNumberOfCheckboxes } from "./helpers";
import { setVerticesArray } from "./vertices";

const generateFigure = (
  vertices,
  dimension,
  dimensionOfFigure,
  perspective3D,
  perspectiveND,
  shadow,
  shadowValue,
  displayVertices
) => {
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

  if (!newVertices.includes(undefined)) {
    setVerticesArray(newVertices);
  }

  const verticesOnSvg = vertices.map((vertex) => {
    let perspective = perspective3D;

    const copyVertex = [...vertex];

    let x = copyVertex[0];
    let y = copyVertex[1];
    const otherDimensions = [];

    if (shadow) {
      for (let i = 2; i < dimension; i++) {
        otherDimensions.push(copyVertex[i]);
      }
    }

    for (let i = 2; i < dimension; i++) {
      if (copyVertex[i] + perspective < 0) {
        // точка находится за границей холста
        perspective += perspectiveND;
        return { x: null, y: null };
      }
      x = (perspective * x) / ((copyVertex[i] || 0) + perspective);
      y = (perspective * y) / ((copyVertex[i] || 0) + perspective);
      perspective += perspectiveND;
    }
    return { x, y, otherDimensions };
  });

  const width = document.querySelector("svg").clientWidth;
  const height = document.querySelector("svg").clientHeight;
  const setCoordinatesToLines = Array.from(document.querySelectorAll(".line"));
  const coordinatesToCircles = displayVertices
    ? Array.from(document.querySelectorAll(".circle"))
    : [];

  setCoordinatesToLines.map((line) => {
    const index1 = isNaN(line.getAttribute("vertex1"))
      ? 0
      : line.getAttribute("vertex1");
    const index2 = isNaN(line.getAttribute("vertex2"))
      ? 0
      : line.getAttribute("vertex2");

    // точка находится за границей холста
    if (
      verticesOnSvg[index1]?.x === null ||
      verticesOnSvg[index2]?.x === null
    ) {
      line.setAttribute("stroke", "transparent");
      return null;
    }
    let opacityIndex = 1;

    if (shadow) {
      for (let i = 0; i < dimension - 2; i++) {
        opacityIndex +=
          1 -
          ((verticesOnSvg[index1]?.otherDimensions[i] +
            verticesOnSvg[index2]?.otherDimensions[i]) /
            2 +
            shadowValue) /
            450;
      }

      if (dimension >= 3) {
        opacityIndex = opacityIndex / (dimension - 1);
      }
    }
    line.setAttribute("stroke", `rgba(255, 255, 255, ${opacityIndex})`);

    if (line.getAttribute("stroke") === "transparent")
      line.setAttribute("stroke", `rgba(255, 255, 255, ${opacityIndex})`);

    if (+dimensionOfFigure === 1) {
      line.setAttribute("x1", height / 2);
      line.setAttribute("x2", width);
      line.setAttribute("y1", height / 2);
      line.setAttribute("y2", height / 2);
    } else {
      line.setAttribute("x1", width / 2 + verticesOnSvg[+index1]?.x);
      line.setAttribute("y1", height / 2 + verticesOnSvg[+index1]?.y);

      line.setAttribute("x2", width / 2 + verticesOnSvg[+index2]?.x);
      line.setAttribute("y2", height / 2 + verticesOnSvg[+index2]?.y);
    }

    return null;
  });

  if (!displayVertices) return;

  coordinatesToCircles.map((circle, index) => {
    // точка находится за границей холста
    if (verticesOnSvg[index]?.x === null || verticesOnSvg[index]?.y === null) {
      return 0;
    }

    if (verticesOnSvg[index]?.x === null || verticesOnSvg[index]?.y === null) {
      circle.setAttribute("fill", "transparent");
      return null;
    }

    let opacityIndex = 1;

    if (shadow) {
      for (let i = 0; i < dimension - 2; i++) {
        opacityIndex +=
          1 - (verticesOnSvg[index]?.otherDimensions[i] + shadowValue) / 450;
      }

      if (dimension >= 3) {
        opacityIndex = opacityIndex / (dimension - 1);
      }
      circle.setAttribute("r", 2 + 4 * opacityIndex);
    } else {
      circle.setAttribute("r", 2);
    }
    circle.setAttribute("fill", `rgba(255, 255, 255, ${opacityIndex})`);

    if (circle.getAttribute("fill") === "transparent")
      circle.setAttribute("fill", `rgba(255, 255, 255, ${opacityIndex})`);

    circle.setAttribute("cx", width / 2 + verticesOnSvg[index]?.x);
    circle.setAttribute("cy", height / 2 + verticesOnSvg[index]?.y);

    return 0;
  });
};

export default generateFigure;
