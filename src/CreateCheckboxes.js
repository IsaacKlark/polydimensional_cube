import React, { useEffect } from "react";
import generateFigure from "./generateFigure";
import vertices, { verticesArray } from "./vertices";
import { useKeyboard } from "./App";
import generateFigureOrthography from "./generateFigureOrthography";
import { useState } from "react";
import { setOuthhNumberOfCheckboxes } from "./helpers";

let startCoords = { x: 0, y: 0 };
let indexes = { x: 2, y: 3 };
let curCoordinates = [];

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
        indexes = { x: 4, y: 5 };
      } else if (e.code === "KeyW" && dimensions >= 5) {
        indexes = { x: 7, y: 8 };
      } else if (e.code === "KeyE" && dimensions >= 6) {
        indexes = { x: 11, y: 12 };
      } else if (e.code === "KeyR" && dimensions >= 7) {
        indexes = { x: 16, y: 17 };
      } else if (e.code === "KeyT" && dimensions >= 8) {
        indexes = { x: 22, y: 23 };
      } else if (e.code === "KeyY" && dimensions >= 9) {
        indexes = { x: 29, y: 30 };
      } else if (e.code === "KeyU" && dimensions >= 10) {
        indexes = { x: 37, y: 38 };
      } else if (e.code === "KeyI" && dimensions >= 11) {
        indexes = { x: 46, y: 47 };
      } else if (e.code === "KeyO" && dimensions >= 12) {
        indexes = { x: 56, y: 57 };
      } else if (e.code === "KeyP" && dimensions >= 13) {
        indexes = { x: 67, y: 68 };
      } else if (e.code === "KeyA" && dimensions >= 14) {
        indexes = { x: 79, y: 80 };
      } else if (e.code === "KeyS" && dimensions >= 15) {
        indexes = { x: 92, y: 93 };
      } else if (e.code === "KeyD" && dimensions >= 16) {
        indexes = { x: 106, y: 107 };
      } else if (e.code === "KeyF" && dimensions >= 17) {
        indexes = { x: 121, y: 122 };
      } else if (e.code === "KeyG" && dimensions >= 18) {
        indexes = { x: 137, y: 138 };
      } else if (e.code === "KeyH" && dimensions >= 19) {
        indexes = { x: 154, y: 155 };
      } else if (e.code === "KeyJ" && dimensions >= 20) {
        indexes = { x: 172, y: 173 };
      } else if (e.code === "KeyK" && dimensions >= 21) {
        indexes = { x: 191, y: 192 };
      } else if (e.code === "KeyL" && dimensions >= 22) {
        indexes = { x: 211, y: 212 };
      } else if (e.code === "KeyZ" && dimensions >= 23) {
        indexes = { x: 232, y: 233 };
      } else if (e.key === "KeyX" && dimensions >= 24) {
        indexes = { x: 254, y: 255 };
      } else if (e.code === "KeyC" && dimensions >= 25) {
        indexes = { x: 277, y: 278 };
      } else if (e.code === "KeyV" && dimensions >= 26) {
        indexes = { x: 301, y: 302 };
      } else if (e.code === "KeyB" && dimensions >= 27) {
        indexes = { x: 326, y: 327 };
      } else if (e.code === "KeyN" && dimensions >= 28) {
        indexes = { x: 352, y: 353 };
      } else if (e.code === "KeyM" && dimensions >= 29) {
        indexes = { x: 379, y: 380 };
      }
    };

    document.onkeyup = () => {
      indexes = { x: 2, y: 3 };
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
        copyAnglesArray[copyAnglesArray.length - 1] -=
          ((Math.PI * motion.x) / bound) * 10;
      } else {
        copyAnglesArray[copyAnglesArray.length - indexes.x] -=
          ((Math.PI * motion.x) / bound) * 20;
        copyAnglesArray[copyAnglesArray.length - indexes.y] +=
          ((Math.PI * motion.y) / bound) * 20;
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
          perspectiveND,
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
            perspectiveND,
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
