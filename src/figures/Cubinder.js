import React, { useMemo } from "react";

let polygons = [];
let polygonsNGons = [];
let colors = [];
let colorsNGons = [];

const Cubinder = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  segments,
  displayFaces,
  dimension,
}) => {
  let linesArray = [];
  for (let i = 0; i < verticesArray.length; i++) {
    const step = Math.ceil(i / segments);

    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));
        if (length === 160) {
          linesArray.push([i, j]);
        }
      }
    }

    for (let j = 0; j < dimensionOfFigure; j++) {
      if (i === step * segments - 1) {
        linesArray.push([i, step * segments - segments]);
      }

      if (i + 1 < step * segments && i + 1 < verticesArray.length) {
        linesArray.push([i, i + 1]);
      }
    }

    if (i % segments === 0 && i + 1 < verticesArray.length) {
      linesArray.push([i, i + 1]);
    }
  }

  const amountOfLines = linesArray.length;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  useMemo(() => {
    polygons = [];
    polygonsNGons = [];
    colors = [];
    colorsNGons = [];

    if (displayFaces && +dimensionOfFigure >= 2) {
      let circlesAmount = 1;
      for (let j = 2; j < dimension; j++) {
        circlesAmount *= 2;
      }

      for (let k = 0; k < circlesAmount; k++) {
        let points = [];
        for (let i = 0; i < segments; i++) {
          points.push(i);
        }
        points = points.map((el) => el + segments * k);
        polygonsNGons.push(points);
      }

      for (let j = 0; j < circlesAmount / 2; j++) {
        for (let i = 0; i < segments - 1; i++) {
          let points = [i, i + 1, segments + 1 + i, segments + i].map(
            (el) => el + segments * 2 * j
          );

          polygons.push(points);
        }

        let points = [0, segments - 1, segments * 2 - 1, segments].map(
          (el) => el + segments * 2 * j
        );

        polygons.push(points);
      }

      let iteration = 2;

      for (let i = 4; i < +dimension; i++) {
        iteration *= 2;
      }

      if (+dimension >= 4) {
        for (let j = 0; j < circlesAmount / 2; j++) {
          for (let i = 0; i < segments - 1; i++) {
            let points = [
              i,
              i + 1,
              segments * iteration + 1 + i,
              segments * iteration + i,
            ].map((el) => el + segments * j);

            polygons.push(points);
          }

          let points = [
            0,
            segments - 1,
            segments * (iteration + 1) - 1,
            segments * iteration,
          ].map((el) => el + segments * j);

          polygons.push(points);
        }

        let iteration2 = 2;

        for (let j = 0; j < dimension - 3; j++) {
          for (let i = 0; i < segments - 1; i++) {
            let points = [
              i,
              i + segments * iteration2,
              segments * (iteration2 + 1) + i,
              segments + i,
            ];

            polygons.push(points);
          }

          iteration2 *= 2;
        }
      }

      if (+dimension === 5) {
        for (let j = 0; j < iteration / 2; j++) {
          for (let i = 0; i < segments - 1; i++) {
            let points = [
              i + segments * iteration,
              i + segments * iteration + 1,
              segments * (iteration + 2) + 1 + i,
              segments * (iteration + 2) + i,
            ].map((el) => el + segments * j);
            polygons.push(points);
          }

          let points = [
            segments * iteration,
            segments * (iteration + 2),
            segments * (iteration + 3) - 1,
            segments * (iteration + 1) - 1,
          ].map((el) => el + segments * j);
          polygons.push(points);
        }

        for (let i = 0; i < segments - 1; i++) {
          let points = [
            i + segments * 2,
            i + segments * 3,
            segments * 7 + i,
            segments * 6 + i,
          ];
          polygons.push(points);
        }

        for (let i = 0; i < segments - 1; i++) {
          let points = [i, i + 1, segments * 2 + i + 1, segments * 2 + i];
          polygons.push(points);
        }

        for (let i = 0; i < segments - 1; i++) {
          let points = [
            i + segments * 5,
            i + segments * 5 + 1,
            segments * 7 + 1 + i,
            segments * 7 + i,
          ];
          polygons.push(points);
        }

        for (let i = 0; i < segments - 1; i++) {
          let points = [
            i + segments,
            i + segments * 3,
            segments * 7 + i,
            segments * 5 + i,
          ];
          polygons.push(points);
        }

        for (let i = 0; i < segments - 1; i++) {
          let points = [
            i + segments * 5,
            i + segments * 7,
            segments * 6 + i,
            segments * 4 + i,
          ];
          polygons.push(points);
        }

        for (let i = 0; i < segments - 1; i++) {
          let points = [
            i + segments * 4,
            i + segments * 6,
            segments * 2 + i,
            i,
          ];
          polygons.push(points);
        }

      }
    }

    polygons.forEach(() => {
      colors.push([
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
      ]);
    });
    polygonsNGons.forEach(() => {
      colorsNGons.push([
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
        Math.trunc(Math.random() * 255),
      ]);
    });
  }, [displayFaces, dimensionOfFigure, verticesArray, dimension, segments]);

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces && +dimensionOfFigure >= 2
        ? polygonsNGons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type={arr.length}
              data-color={JSON.stringify(colorsNGons[index])}
            />
          ))
        : null}

      {displayFaces && +dimensionOfFigure >= 3
        ? polygons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type={4}
              data-color={JSON.stringify(colors[index])}
            />
          ))
        : null}
      {displayEdges &&
        lines.map((id, index) => {
          let vertex1 = 0;
          let vertex2 = 0;

          vertex1 = linesArray[index][0];
          vertex2 = linesArray[index][1];
          return (
            <line
              key={id}
              x1="200"
              y1="200"
              x2="400"
              y2="200"
              stroke="white"
              id={`line${id}`}
              className="line"
              vertex1={vertex1}
              vertex2={vertex2}
            />
          );
        })}

      {displayVertices
        ? verticesArray.map((item, index) => (
            <circle
              onClick={() => {
                console.log(verticesArray[index], index);
              }}
              key={index}
              cx="300"
              cy="200"
              r="2"
              fill="white"
              id={`circle${index}`}
              className="circle"
              onContextMenu={(e) => {
                e.preventDefault();
                e.target.style.display = "none";
              }}
            />
          ))
        : null}
    </svg>
  );
};

export default Cubinder;
