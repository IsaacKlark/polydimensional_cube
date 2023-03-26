import React, { useEffect } from "react";
import generateFigure from "./generateFigure";
import vertices, { setVerticesArray, verticesArray } from "./vertices";
import { useKeyboard } from "./App";
import generateFigureOrthography from "./generateFigureOrthography";
import { useState } from "react";
import { setOuthhNumberOfCheckboxes } from "./helpers";

let startCoords = { x: 0, y: 0 };
let indexes = [
  [2, 0],
  [1, 2],
];

let curCoordinates = [];

const rotateFigure = (indexes, angle) => {
  const newVertices = verticesArray.map((vertex) => {
    const copyVertex = [...vertex];

    const checkboxIndex1 = indexes[0];
    const checkboxIndex2 = indexes[1];

    const cos1 = Math.cos(angle);
    const sin1 = Math.sin(angle);
    const tmp1 =
      cos1 * copyVertex[checkboxIndex1] + sin1 * copyVertex[checkboxIndex2];
    copyVertex[checkboxIndex2] =
      -sin1 * copyVertex[checkboxIndex1] + cos1 * copyVertex[checkboxIndex2];
    copyVertex[checkboxIndex1] = tmp1;

    return copyVertex;
  });

  if (!newVertices.includes(undefined)) {
    setVerticesArray(newVertices);
  }
};

const CreateCheckboxes = ({
  amountOfAngles,
  dimensions,
  anglesArray,
  setAnglesArray,
  activeRotations,
  setActiveRotations,
  figure,
  orthography,
  dimensionOfFigure,
  perspective3D,
  perspectiveND,
  scale,
  setOriginalVerticesArray,
  segments,
  reset,
  setReset,
}) => {
  const [clicked, setClicked] = useState(false);

  const svg = document.querySelector("svg");

  if (svg) {
    const mouseCoords = (e) => {
      let x;
      let y;
      if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
      } else {
        x =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        y =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      const svgWrapper = document.getElementById("svgWrapper");

      x -= svgWrapper.offsetLeft;
      y -= svgWrapper.offsetTop;

      return { x: x, y: y };
    };

    const bound =
      Math.min(
        document.querySelector("svg").clientWidth,
        document.querySelector("svg").clientHeight
      ) / 2;

    document.onmouseup = function () {
      if (curCoordinates.length) setAnglesArray(curCoordinates);
      setClicked(false);
    };

    svg.onmousedown = function (e) {
      if (!startCoords.length) startCoords = anglesArray;
      startCoords = mouseCoords(e);
      startCoords.x -= Math.floor(svg.clientWidth / 2);
      startCoords.y = Math.floor(svg.clientHeight / 2) - startCoords.y;
      setClicked(true);
    };

    document.onkeydown = (e) => {
      if (e.code === "KeyQ" && dimensions >= 4) {
        indexes = [
          [3, 0],
          [1, 3],
        ];
      } else if (e.code === "KeyW" && dimensions >= 5) {
        indexes = [
          [4, 0],
          [1, 4],
        ];
      } else if (e.code === "KeyE" && dimensions >= 6) {
        indexes = [
          [5, 0],
          [1, 5],
        ];
      } else if (e.code === "KeyR" && dimensions >= 7) {
        indexes = [
          [6, 0],
          [1, 6],
        ];
      } else if (e.code === "KeyT" && dimensions >= 8) {
        indexes = [
          [7, 0],
          [1, 7],
        ];
      } else if (e.code === "KeyY" && dimensions >= 9) {
        indexes = [
          [8, 0],
          [1, 8],
        ];
      } else if (e.code === "KeyU" && dimensions >= 10) {
        indexes = [
          [9, 0],
          [1, 9],
        ];
      } else if (e.code === "KeyI" && dimensions >= 11) {
        indexes = [
          [10, 0],
          [1, 10],
        ];
      } else if (e.code === "KeyO" && dimensions >= 12) {
        indexes = [
          [11, 0],
          [1, 11],
        ];
      } else if (e.code === "KeyP" && dimensions >= 13) {
        indexes = [
          [12, 0],
          [1, 12],
        ];
      } else if (e.code === "KeyA" && dimensions >= 14) {
        indexes = [
          [13, 0],
          [1, 13],
        ];
      } else if (e.code === "KeyS" && dimensions >= 15) {
        indexes = [
          [14, 0],
          [1, 14],
        ];
      } else if (e.code === "KeyD" && dimensions >= 16) {
        indexes = [
          [15, 0],
          [1, 15],
        ];
      } else if (e.code === "KeyF" && dimensions >= 17) {
        indexes = [
          [16, 0],
          [1, 16],
        ];
      } else if (e.code === "KeyG" && dimensions >= 18) {
        indexes = [
          [17, 0],
          [1, 17],
        ];
      } else if (e.code === "KeyH" && dimensions >= 19) {
        indexes = [
          [18, 0],
          [1, 18],
        ];
      } else if (e.code === "KeyJ" && dimensions >= 20) {
        indexes = [
          [19, 0],
          [1, 19],
        ];
      } else if (e.code === "KeyK" && dimensions >= 21) {
        indexes = [
          [20, 0],
          [1, 20],
        ];
      } else if (e.code === "KeyL" && dimensions >= 22) {
        indexes = [
          [21, 0],
          [1, 21],
        ];
      } else if (e.code === "KeyZ" && dimensions >= 23) {
        indexes = [
          [22, 0],
          [1, 22],
        ];
      } else if (e.key === "KeyX" && dimensions >= 24) {
        indexes = [
          [23, 0],
          [1, 23],
        ];
      } else if (e.code === "KeyC" && dimensions >= 25) {
        indexes = [
          [24, 0],
          [1, 24],
        ];
      } else if (e.code === "KeyV" && dimensions >= 26) {
        indexes = [
          [25, 0],
          [1, 25],
        ];
      } else if (e.code === "KeyB" && dimensions >= 27) {
        indexes = [
          [26, 0],
          [1, 26],
        ];
      } else if (e.code === "KeyN" && dimensions >= 28) {
        indexes = [
          [27, 0],
          [1, 27],
        ];
      } else if (e.code === "KeyM" && dimensions >= 29) {
        indexes = [
          [28, 0],
          [1, 28],
        ];
      }
    };

    document.onkeyup = () => {
      indexes = [
        [2, 0],
        [1, 2],
      ];
    };

    document.onmousemove = function (e) {
      if (!clicked) {
        return;
      }

      const copyAnglesArray =
        curCoordinates.length === amountOfAngles
          ? curCoordinates
          : [...anglesArray];
      var currCoords = mouseCoords(e);
      currCoords.x -= Math.floor(svg.clientWidth / 2);
      currCoords.y = Math.floor(svg.clientHeight / 2) - currCoords.y;

      var motion = {
        x: currCoords.x - startCoords.x,
        y: currCoords.y - startCoords.y,
      };

      if (dimensions === 2) {
        rotateFigure([0, 1], (Math.PI * motion.x) / bound / 5);
      } else {
        rotateFigure(indexes[0], (Math.PI * motion.x) / bound / 2);
        rotateFigure(indexes[1], (Math.PI * motion.y) / bound / 2);
      }

      startCoords = currCoords;
      curCoordinates = copyAnglesArray;

      if (orthography) {
        generateFigureOrthography(verticesArray, dimensionOfFigure);
      } else {
        generateFigure(
          verticesArray,
          dimensions,
          dimensionOfFigure,
          perspective3D,
          perspectiveND
        );
      }
    };
  }

  useEffect(() => {
    if (reset) {
      curCoordinates = anglesArray;
      setReset(false);
    }
  }, [reset]);

  useEffect(() => {
    const anglesArray = [];
    for (let i = 0; i < amountOfAngles; i++) {
      anglesArray.push(0);
    }
    setAnglesArray(anglesArray);
    //eslint-disable-next-line
  }, [amountOfAngles]);

  useEffect(() => {
    let copyAnglesArray = curCoordinates.length
      ? curCoordinates
      : [...anglesArray];
    if (!useKeyboard) {
      if (copyAnglesArray.length < amountOfAngles) {
        copyAnglesArray = [];
        for (let i = 0; i < amountOfAngles; i++) {
          anglesArray.push(0);
        }
      }
    }

    const interval = setInterval(() => {
      if (!useKeyboard) {
        activeRotations.forEach((index) => {
          if (copyAnglesArray[index] < 359) {
            copyAnglesArray[index]++;
          } else {
            copyAnglesArray[index] = 0;
          }
        });

        setAnglesArray(copyAnglesArray);

        if (orthography) {
          generateFigureOrthography(verticesArray, dimensionOfFigure);
        } else {
          generateFigure(
            verticesArray,
            dimensions,
            dimensionOfFigure,
            perspective3D,
            perspectiveND
          );
        }
      }
    }, 50);

    if (!activeRotations.length) clearInterval(interval);

    return () => clearInterval(interval);

    //eslint-disable-next-line
  }, [
    amountOfAngles,
    activeRotations,
    useKeyboard,
    orthography,
    dimensionOfFigure,
    curCoordinates,
  ]);

  useEffect(() => {
    vertices(
      dimensions,
      dimensionOfFigure,
      figure,
      scale,
      setOriginalVerticesArray,
      segments
    );
  }, [figure, dimensions, dimensionOfFigure]);

  const numbersOfCheckboxes = new Array(amountOfAngles);
  let subDimensionStart = 2;
  let subDimensionEnd = 1;

  let yRotationArray = [amountOfAngles - 3];
  let addToYRotationInterval = 2;

  for (let i = 1; i < dimensions - 2; i++) {
    yRotationArray.push(
      yRotationArray[yRotationArray.length - 1] - addToYRotationInterval
    );
    addToYRotationInterval++;
  }

  for (let i = 0; i < amountOfAngles; i++) {
    if (subDimensionEnd === subDimensionStart) {
      subDimensionStart++;
      subDimensionEnd = 1;
    }

    numbersOfCheckboxes[i] = `${subDimensionStart}-${subDimensionEnd}`;
    subDimensionEnd++;
  }

  numbersOfCheckboxes.reverse();

  const changeActiveRotation = (index) => {
    let copyActiveRotations = [...activeRotations];
    if (copyActiveRotations.includes(index)) {
      copyActiveRotations = copyActiveRotations.filter(
        (item) => item !== index
      );
    } else {
      copyActiveRotations.push(index);
    }

    setActiveRotations(copyActiveRotations);
  };

  const selectAll = () => {
    let copyActiveRotations = [];

    if (activeRotations.length < numbersOfCheckboxes.length) {
      copyActiveRotations = numbersOfCheckboxes.map((item, index) => index);
    }

    setActiveRotations(copyActiveRotations);
  };

  setOuthhNumberOfCheckboxes(numbersOfCheckboxes);

  return (
    <>
      <label className="checkboxWrapper">
        <input
          type="checkbox"
          name="checkbox"
          onChange={selectAll}
          checked={activeRotations.length === numbersOfCheckboxes.length}
        />
        <p>Select All</p>
      </label>
      <section className="checkboxes">
        <div className="angles">angles:</div>
        {numbersOfCheckboxes.map((field, index) => {
          return (
            <label key={index} className="labels">
              <input
                key={index + "c"}
                type="checkbox"
                name="checkbox"
                onChange={() => changeActiveRotation(index)}
                checked={activeRotations.includes(index)}
                className="checkbox"
              />
              {field}
            </label>
          );
        })}
      </section>
    </>
  );
};

export default CreateCheckboxes;
