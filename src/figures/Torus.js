import React, { useMemo } from "react";

let polygons = [];

const Torus = ({
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
  if (displayEdges) {
    const _segments = +segments + 1 || 17;
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
  }

  const amountOfLines = linesArray.length;
  let ids = 0;
  const lines = [];

  useMemo(() => {
    polygons = [];

    if (displayFaces && +dimensionOfFigure === 2) {
      let points = [];
      for (let i = 0; i < segments; i++) {
        points.push(i);
      }
      polygons.push(points);
    }

    if (displayFaces && +dimensionOfFigure >= 3) {
      for (let i = 0; i < verticesArray.length - segments - 2; i++) {
        let points = [i, i + segments + 1, i + segments + 2, i + 1];
        polygons.push(points);
      }
    }

    if (displayFaces && +dimensionOfFigure === 4) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;

      for (let j = 1; j <= segments / 2; j++) {
        for (let i = 0; i < dimension3ArrLength; i++) {
          let points = [
            i,
            i + dimension3ArrLength,
            i + dimension3ArrLength + 1,
            i + 1,
          ].map((el) => el + dimension3ArrLength * j);
          polygons.push(points);
        }
      }
    }

    if (displayFaces && +dimensionOfFigure === 5) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;
      const dimension4ArrLength =
        (segments ** 2 + segments * 2 + 1) * (segments + 2);

      for (let k = 1; k <= segments / 2; k++) {
        for (let j = 1; j <= segments / 2; j++) {
          for (let i = 0; i < dimension3ArrLength; i++) {
            let points = [
              i,
              i + dimension3ArrLength,
              i + dimension3ArrLength + 1,
              i + 1,
            ]
              .map((el) => el + dimension3ArrLength * j)
              .map((el) => el + dimension4ArrLength * k);
            polygons.push(points);
          }

          for (let i = 0; i < dimension3ArrLength; i++) {
            let points = [
              i,
              i + dimension4ArrLength,
              i + dimension4ArrLength + 1,
              i + 1,
            ]
              .map((el) => el + dimension3ArrLength * j)
              .map((el) => el + dimension4ArrLength * k);
            polygons.push(points);
          }
        }
      }
    }

    if (displayFaces && +dimensionOfFigure === 6) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;
      const dimension4ArrLength =
        (segments ** 2 + segments * 2 + 1) * (segments + 2);
      const dimension5ArrLength =
        (segments ** 2 + segments * 2 + 1) * (segments + 2) * (segments + 2);

      for (let l = 1; l <= segments / 2; l++) {
        for (let k = 1; k <= segments / 2; k++) {
          for (let j = 1; j <= segments / 2; j++) {
            for (let i = 0; i < dimension3ArrLength; i++) {
              let points = [
                i,
                i + dimension3ArrLength,
                i + dimension3ArrLength + 1,
                i + 1,
              ]
                .map((el) => el + dimension3ArrLength * j)
                .map((el) => el + dimension4ArrLength * k)
                .map((el) => el + dimension5ArrLength * l);
              polygons.push(points);
            }

            for (let i = 0; i < dimension3ArrLength; i++) {
              let points = [
                i,
                i + dimension4ArrLength,
                i + dimension4ArrLength + 1,
                i + 1,
              ]
                .map((el) => el + dimension3ArrLength * j)
                .map((el) => el + dimension4ArrLength * k)
                .map((el) => el + dimension5ArrLength * l);
              polygons.push(points);
            }

            for (let i = 0; i < dimension3ArrLength; i++) {
              let points = [
                i,
                i + dimension5ArrLength,
                i + dimension5ArrLength + 1,
                i + 1,
              ]
                .map((el) => el + dimension3ArrLength * j)
                .map((el) => el + dimension4ArrLength * k)
                .map((el) => el + dimension5ArrLength * l);
              polygons.push(points);
            }
          }
        }
      }
    }

    if (displayFaces && +dimensionOfFigure === 7) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;
      const dimension4ArrLength =
        (segments ** 2 + segments * 2 + 1) * (segments + 2);
      const dimension5ArrLength =
        (segments ** 2 + segments * 2 + 1) * (segments + 2) * (segments + 2);

      const dimension6ArrLength =
        (segments ** 2 + segments * 2 + 1) *
        (segments + 2) *
        (segments + 2) *
        (segments + 2);

      for (let m = 1; m <= segments / 2; m++) {
        for (let l = 1; l <= segments / 2; l++) {
          for (let k = 1; k <= segments / 2; k++) {
            for (let j = 1; j <= segments / 2; j++) {
              for (let i = 0; i < dimension3ArrLength; i++) {
                let points = [
                  i,
                  i + dimension3ArrLength,
                  i + dimension3ArrLength + 1,
                  i + 1,
                ]
                  .map((el) => el + dimension3ArrLength * j)
                  .map((el) => el + dimension4ArrLength * k)
                  .map((el) => el + dimension5ArrLength * l)
                  .map((el) => el + dimension6ArrLength * m);

                polygons.push(points);
              }

              for (let i = 0; i < dimension3ArrLength; i++) {
                let points = [
                  i,
                  i + dimension4ArrLength,
                  i + dimension4ArrLength + 1,
                  i + 1,
                ]
                  .map((el) => el + dimension3ArrLength * j)
                  .map((el) => el + dimension4ArrLength * k)
                  .map((el) => el + dimension5ArrLength * l)
                  .map((el) => el + dimension6ArrLength * m);
                polygons.push(points);
              }

              for (let i = 0; i < dimension3ArrLength; i++) {
                let points = [
                  i,
                  i + dimension5ArrLength,
                  i + dimension5ArrLength + 1,
                  i + 1,
                ]
                  .map((el) => el + dimension3ArrLength * j)
                  .map((el) => el + dimension4ArrLength * k)
                  .map((el) => el + dimension5ArrLength * l)
                  .map((el) => el + dimension6ArrLength * m);
                polygons.push(points);
              }

              for (let i = 0; i < dimension3ArrLength; i++) {
                let points = [
                  i,
                  i + dimension6ArrLength,
                  i + dimension6ArrLength + 1,
                  i + 1,
                ]
                  .map((el) => el + dimension3ArrLength * j)
                  .map((el) => el + dimension4ArrLength * k)
                  .map((el) => el + dimension5ArrLength * l)
                  .map((el) => el + dimension6ArrLength * m);
                polygons.push(points);
              }
            }
          }
        }
      }
    }

    if (displayFaces && +dimensionOfFigure === 8) {
      const dimension3ArrLength = segments ** 2 + segments * 2 + 1;
      const dimension4ArrLength =
        (segments ** 2 + segments * 2 + 1) * (segments + 2);
      const dimension5ArrLength =
        (segments ** 2 + segments * 2 + 1) * (segments + 2) * (segments + 2);

      const dimension6ArrLength =
        (segments ** 2 + segments * 2 + 1) *
        (segments + 2) *
        (segments + 2) *
        (segments + 2);

      const dimension7ArrLength =
        (segments ** 2 + segments * 2 + 1) *
        (segments + 2) *
        (segments + 2) *
        (segments + 2) *
        (segments + 2);

      for (let o = 1; o <= segments / 2; o++) {
        for (let m = 1; m <= segments / 2; m++) {
          for (let l = 1; l <= segments / 2; l++) {
            for (let k = 1; k <= segments / 2; k++) {
              for (let j = 1; j <= segments / 2; j++) {
                for (let i = 0; i < dimension3ArrLength; i++) {
                  let points = [
                    i,
                    i + dimension3ArrLength,
                    i + dimension3ArrLength + 1,
                    i + 1,
                  ]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                    .map((el) => el + dimension7ArrLength * o);

                  polygons.push(points);
                }

                for (let i = 0; i < dimension3ArrLength; i++) {
                  let points = [
                    i,
                    i + dimension4ArrLength,
                    i + dimension4ArrLength + 1,
                    i + 1,
                  ]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                    .map((el) => el + dimension7ArrLength * o);
                  polygons.push(points);
                }

                for (let i = 0; i < dimension3ArrLength; i++) {
                  let points = [
                    i,
                    i + dimension5ArrLength,
                    i + dimension5ArrLength + 1,
                    i + 1,
                  ]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                    .map((el) => el + dimension7ArrLength * o);
                  polygons.push(points);
                }

                for (let i = 0; i < dimension3ArrLength; i++) {
                  let points = [
                    i,
                    i + dimension6ArrLength,
                    i + dimension6ArrLength + 1,
                    i + 1,
                  ]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                    .map((el) => el + dimension7ArrLength * o);
                  polygons.push(points);
                }

                for (let i = 0; i < dimension3ArrLength; i++) {
                  let points = [
                    i,
                    i + dimension7ArrLength,
                    i + dimension7ArrLength + 1,
                    i + 1,
                  ]
                    .map((el) => el + dimension3ArrLength * j)
                    .map((el) => el + dimension4ArrLength * k)
                    .map((el) => el + dimension5ArrLength * l)
                    .map((el) => el + dimension6ArrLength * m)
                    .map((el) => el + dimension7ArrLength * o);
                  polygons.push(points);
                }
              }
            }
          }
        }
      }
    }
  }, [displayFaces, dimensionOfFigure, verticesArray, dimension, segments]);

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces && +dimensionOfFigure === 2
        ? polygons.map((arr, index) => (
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

      {displayFaces && +dimensionOfFigure >= 3
        ? polygons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type={4}
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

export default Torus;
