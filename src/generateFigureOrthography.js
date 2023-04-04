import { outhNumberOfCheckboxes } from "./helpers";
import { setVerticesArray } from "./vertices";

const generateFigureOrthography = (
  vertices,
  dimensionOfFigure,
  shadow,
  shadowValue,
  displayVertices,
  dimension,
  figureColor,
  displayFaces
) => {
  const checkboxes = document.querySelectorAll(".checkbox");
  const setCoordinatesToPolygons = Array.from(
    document.querySelectorAll(".polygon")
  );

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

    const otherDimensions = [];

    if (shadow) {
      for (let i = 2; i < dimension; i++) {
        otherDimensions.push(copyVertex[i]);
      }
    }

    return { x, y, otherDimensions };
  });

  if (!newVertices.includes(undefined)) {
    setVerticesArray(newVertices);
  }

  const width = document.querySelector("svg").clientWidth;
  const height = document.querySelector("svg").clientHeight;
  const setCoordinatesToLines = Array.from(document.querySelectorAll(".line"));
  const setCoordinatesToCircles = displayVertices
    ? Array.from(document.querySelectorAll(".circle"))
    : [];

  setCoordinatesToLines.map((line) => {
    const index1 = line.getAttribute("vertex1");
    const index2 = line.getAttribute("vertex2");

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
    line.setAttribute(
      "stroke",
      `rgba(${figureColor[0]}, ${figureColor[1]}, ${figureColor[2]}, ${opacityIndex})`
    );

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

  setCoordinatesToCircles.map((circle, index) => {
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
    circle.setAttribute(
      "fill",
      `rgba(${figureColor[0]}, ${figureColor[1]}, ${figureColor[2]}, ${opacityIndex})`
    );

    if (circle.getAttribute("fill") === "transparent")
      circle.setAttribute(
        "fill",
        `rgba(${figureColor[0]}, ${figureColor[1]}, ${figureColor[2]}, ${opacityIndex})`
      );

    circle.setAttribute("cx", width / 2 + verticesOnSvg[index]?.x);
    circle.setAttribute("cy", height / 2 + verticesOnSvg[index]?.y);

    return 0;
  });

  if (displayFaces) {
    setCoordinatesToPolygons.map((polygon) => {
      const indexes = JSON.parse(polygon.getAttribute("data-points"));
      const type = +polygon.getAttribute("data-type");

      const points = [];

      for (let i = 0; i < type; i++) {
        points.push({
          x: width / 2 + verticesOnSvg[indexes[i]]?.x,
          y: height / 2 + verticesOnSvg[indexes[i]]?.y,
        });
      }

      const outhValue = 500;

      for (let i = 0; i < points.length; i++) {
        if (
          points[i].x < -outhValue ||
          points[i].x > width + outhValue ||
          points[i].y < -outhValue ||
          points[i].y > height + outhValue
        ) {
          polygon.style.display = "none";

          return null;
        }
      }

      polygon.style.display = "block";

      let opacityIndex = 1;

      if (shadow) {
        for (let i = 0; i < dimension - 2; i++) {
          let sum = 0;
          let count = 0;
          for (let j = 0; j < indexes.length; j++) {
            const vertex = verticesOnSvg[indexes[j]];
            if (
              vertex &&
              vertex.otherDimensions &&
              vertex.otherDimensions[i] !== undefined
            ) {
              sum += vertex.otherDimensions[i];
              count++;
            }
          }
          if (count > 0) {
            opacityIndex += 1 - (sum / count + shadowValue + 100) / 450;
          }
        }

        if (dimension >= 3) {
          opacityIndex = opacityIndex / (dimension - 1);
        }
      }

      polygon.setAttribute(
        "fill",
        `rgba(${figureColor[0]}, ${figureColor[1]}, ${figureColor[2]}, ${opacityIndex})`
      );

      let coordinates = "";

      for (let i = 0; i < points.length; i++) {
        coordinates += `${points[i].x}, ${points[i].y} `;
      }

      polygon.setAttribute("points", coordinates);
    });
  }
};

export default generateFigureOrthography;
