import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const CliffordTorus = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  segments,
  displayFaces,
}) => {
  if (!modified) {
    let linesArray = [];

    const _segments = +segments + 1 || 21;

    for (let i = 0; i < verticesArray.length; i++) {
      const step = Math.ceil(i / _segments);

      if (i === step * _segments - 1) {
        linesArray.push([i, step * _segments - (_segments - 1)]);
      }

      let distance = 1;

      for (let j = 0; j < Math.ceil(+dimensionOfFigure / 2); j++) {
        if (
          i + distance < step * distance * _segments &&
          i + distance < verticesArray.length
        ) {
          linesArray.push([i, i + distance]);
        }
        distance *= _segments;
      }
    }

    const amountOfLines = linesArray.length;
    let ids = 0;
    const lines = [];

    for (let i = 0; i < amountOfLines; i++) {
      lines.push(ids);
      ids += 1;
    }

    const saveLines = [];

    lines.forEach((el, index) => {
      const vertex1 = linesArray[index][0];
      const vertex2 = linesArray[index][1];
      saveLines.push([vertex1, vertex2]);
    });

    setLinesArray(saveLines);
  }

  useMemo(() => {
    polygons = [];
    if (displayFaces && +dimensionOfFigure === 2) {
      let points = [];
      for (let i = 0; i < segments; i++) {
        points.push(i);
      }
      polygons.push(points);
    }

    if (
      displayFaces &&
      (+dimensionOfFigure === 3 || +dimensionOfFigure === 4)
    ) {
      for (let i = 0; i < segments ** 2 + segments - 1; i += 1) {
        polygons.push([i, i + 1, i + segments + 2, i + segments + 1]);
      }
    }

    if (
      displayFaces &&
      (+dimensionOfFigure === 5 || +dimensionOfFigure === 6)
    ) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;

      for (let j = 0; j < segments; j++) {
        for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
          polygons.push(
            [i, i + 1, i + segments + 1, i + segments].map(
              (el) => el + dimension3ArrLength * j
            )
          );
        }

        for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
          polygons.push(
            [
              i,
              i + 1,
              i + dimension3ArrLength + 1,
              i + dimension3ArrLength,
            ].map((el) => el + dimension3ArrLength * j)
          );
        }
      }
    }

    if (
      displayFaces &&
      (+dimensionOfFigure === 7 || +dimensionOfFigure === 8)
    ) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;
      const dimension4ArrLength =
        (segments ** 2 + segments * 2 + 1) * (segments + 1);

      for (let k = 0; k < segments; k++) {
        for (let j = 0; j < segments; j++) {
          for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
            polygons.push(
              [i, i + 1, i + segments + 1, i + segments]
                .map((el) => el + dimension3ArrLength * j)
                .map((el) => el + dimension4ArrLength * k)
            );
          }

          for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
            polygons.push(
              [i, i + 1, i + dimension3ArrLength + 1, i + dimension3ArrLength]
                .map((el) => el + dimension3ArrLength * j)
                .map((el) => el + dimension4ArrLength * k)
            );
          }

          for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
            polygons.push(
              [i, i + 1, i + dimension4ArrLength + 1, i + dimension4ArrLength]
                .map((el) => el + dimension3ArrLength * j)
                .map((el) => el + dimension4ArrLength * k)
            );
          }
        }
      }
    }

    if (
      displayFaces &&
      (+dimensionOfFigure === 9 || +dimensionOfFigure === 10)
    ) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;
      const dimension4ArrLength = dimension3ArrLength * (segments + 1);
      const dimension5ArrLength = dimension4ArrLength * (segments + 1);

      for (let l = 0; l < segments; l++) {
        for (let k = 0; k < segments; k++) {
          for (let j = 0; j < segments; j++) {
            for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
              polygons.push(
                [i, i + 1, i + segments + 1, i + segments]
                  .map((el) => el + dimension3ArrLength * j)
                  .map((el) => el + dimension4ArrLength * k)
                  .map((el) => el + dimension5ArrLength * l)
              );
            }

            for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
              polygons.push(
                [i, i + 1, i + dimension3ArrLength + 1, i + dimension3ArrLength]
                  .map((el) => el + dimension3ArrLength * j)
                  .map((el) => el + dimension4ArrLength * k)
                  .map((el) => el + dimension5ArrLength * l)
              );
            }

            for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
              polygons.push(
                [i, i + 1, i + dimension4ArrLength + 1, i + dimension4ArrLength]
                  .map((el) => el + dimension3ArrLength * j)
                  .map((el) => el + dimension4ArrLength * k)
                  .map((el) => el + dimension5ArrLength * l)
              );
            }

            for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
              polygons.push(
                [i, i + 1, i + dimension5ArrLength + 1, i + dimension5ArrLength]
                  .map((el) => el + dimension3ArrLength * j)
                  .map((el) => el + dimension4ArrLength * k)
                  .map((el) => el + dimension5ArrLength * l)
              );
            }
          }
        }
      }
    }

    if (
      displayFaces &&
      (+dimensionOfFigure === 11 || +dimensionOfFigure === 12)
    ) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;
      const dimension4ArrLength = dimension3ArrLength * (segments + 1);
      const dimension5ArrLength = dimension4ArrLength * (segments + 1);
      const dimension6ArrLength = dimension5ArrLength * (segments + 1);

      for (let m = 0; m < segments; m++) {
        for (let l = 0; l < segments; l++) {
          for (let k = 0; k < segments; k++) {
            for (let j = 0; j < segments; j++) {
              for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                polygons.push(
                  [i, i + 1, i + segments + 1, i + segments]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                );
              }

              for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                polygons.push(
                  [
                    i,
                    i + 1,
                    i + dimension3ArrLength + 1,
                    i + dimension3ArrLength,
                  ]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                );
              }

              for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                polygons.push(
                  [
                    i,
                    i + 1,
                    i + dimension4ArrLength + 1,
                    i + dimension4ArrLength,
                  ]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                );
              }

              for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                polygons.push(
                  [
                    i,
                    i + 1,
                    i + dimension5ArrLength + 1,
                    i + dimension5ArrLength,
                  ]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                );
              }

              for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                polygons.push(
                  [
                    i,
                    i + 1,
                    i + dimension6ArrLength + 1,
                    i + dimension6ArrLength,
                  ]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                );
              }
            }
          }
        }
      }
    }

    if (
      displayFaces &&
      (+dimensionOfFigure === 13 || +dimensionOfFigure === 14)
    ) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;
      const dimension4ArrLength = dimension3ArrLength * (segments + 1);
      const dimension5ArrLength = dimension4ArrLength * (segments + 1);
      const dimension6ArrLength = dimension5ArrLength * (segments + 1);
      const dimension7ArrLength = dimension6ArrLength * (segments + 1);

      for (let n = 0; n < segments; n++) {
        for (let m = 0; m < segments; m++) {
          for (let l = 0; l < segments; l++) {
            for (let k = 0; k < segments; k++) {
              for (let j = 0; j < segments; j++) {
                for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                  polygons.push(
                    [i, i + 1, i + segments + 1, i + segments]
                      .map((el) => el + dimension3ArrLength * j)
                      .map((el) => el + dimension4ArrLength * k)
                      .map((el) => el + dimension5ArrLength * l)
                      .map((el) => el + dimension6ArrLength * m)
                      .map((el) => el + dimension7ArrLength * n)
                  );
                }

                for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                  polygons.push(
                    [
                      i,
                      i + 1,
                      i + dimension3ArrLength + 1,
                      i + dimension3ArrLength,
                    ]
                      .map((el) => el + dimension3ArrLength * j)
                      .map((el) => el + dimension4ArrLength * k)
                      .map((el) => el + dimension5ArrLength * l)
                      .map((el) => el + dimension6ArrLength * m)
                      .map((el) => el + dimension7ArrLength * n)
                  );
                }

                for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                  polygons.push(
                    [
                      i,
                      i + 1,
                      i + dimension4ArrLength + 1,
                      i + dimension4ArrLength,
                    ]
                      .map((el) => el + dimension3ArrLength * j)
                      .map((el) => el + dimension4ArrLength * k)
                      .map((el) => el + dimension5ArrLength * l)
                      .map((el) => el + dimension6ArrLength * m)
                      .map((el) => el + dimension7ArrLength * n)
                  );
                }

                for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                  polygons.push(
                    [
                      i,
                      i + 1,
                      i + dimension5ArrLength + 1,
                      i + dimension5ArrLength,
                    ]
                      .map((el) => el + dimension3ArrLength * j)
                      .map((el) => el + dimension4ArrLength * k)
                      .map((el) => el + dimension5ArrLength * l)
                      .map((el) => el + dimension6ArrLength * m)
                      .map((el) => el + dimension7ArrLength * n)
                  );
                }

                for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                  polygons.push(
                    [
                      i,
                      i + 1,
                      i + dimension6ArrLength + 1,
                      i + dimension6ArrLength,
                    ]
                      .map((el) => el + dimension3ArrLength * j)
                      .map((el) => el + dimension4ArrLength * k)
                      .map((el) => el + dimension5ArrLength * l)
                      .map((el) => el + dimension6ArrLength * m)
                      .map((el) => el + dimension7ArrLength * n)
                  );
                }

                for (let i = 0; i <= segments ** 2 + segments - 1; i += 1) {
                  polygons.push(
                    [
                      i,
                      i + 1,
                      i + dimension7ArrLength + 1,
                      i + dimension7ArrLength,
                    ]
                      .map((el) => el + dimension3ArrLength * j)
                      .map((el) => el + dimension4ArrLength * k)
                      .map((el) => el + dimension5ArrLength * l)
                      .map((el) => el + dimension6ArrLength * m)
                      .map((el) => el + dimension7ArrLength * n)
                  );
                }
              }
            }
          }
        }
      }
    }

    setPolygonsArray(polygons);
  }, [displayFaces, dimensionOfFigure, verticesArray]);

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces
        ? polygonsArray.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type={arr.length}
            />
          ))
        : null}
      {displayEdges &&
        _linesArray.map((id, index) => {
          let vertex1 = 0;
          let vertex2 = 0;

          vertex1 = id[0];
          vertex2 = id[1];
          return (
            <line
              key={index}
              x1="200"
              y1="200"
              x2="400"
              y2="200"
              stroke="white"
              id={`line${index}`}
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

export default CliffordTorus;
