import React, { useMemo } from "react";

let polygons = [];
let polygonsNGons = [];
let colors = [];
let colorsNGons = [];

const Cylinder = ({
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
  const verticesLength = verticesArray.length;
  const firstDistance = +segments || 20;

  for (let i = 0; i < verticesLength; i++) {
    if (i + 1 < verticesLength && (i + 1) % firstDistance !== 0) {
      linesArray.push([i, i + 1]);
    }

    if (i % firstDistance === 0) {
      linesArray.push([i, i + (firstDistance - 1)]);
      if (i - firstDistance >= 0) linesArray.push([i, i - firstDistance]);
    }

    let distance = firstDistance;

    for (let j = 2; j < +dimensionOfFigure; j++) {
      let step = Math.ceil(i / (distance * (firstDistance / 2 + 2)));

      if (
        i + distance < step * distance * (firstDistance / 2 + 2) &&
        i + distance < verticesArray.length
      ) {
        linesArray.push([i, i + distance]);
      }

      distance *= firstDistance / 2 + 2;
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

    if (+dimension === 2) {
      function findCornerPoints(verticesArray) {
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        for (let i = 0; i < verticesArray.length; i++) {
          const vertex = verticesArray[i];
          const x = vertex[0];
          const y = vertex[1];

          if (x < minX) {
            minX = x;
          }
          if (y < minY) {
            minY = y;
          }
          if (x > maxX) {
            maxX = x;
          }
          if (y > maxY) {
            maxY = y;
          }
        }

        return [
          verticesArray
            .map((el) => JSON.stringify(el))
            .indexOf(JSON.stringify([minX, minY])),
          verticesArray
            .map((el) => JSON.stringify(el))
            .indexOf(JSON.stringify([minX, maxY])),
          verticesArray
            .map((el) => JSON.stringify(el))
            .indexOf(JSON.stringify([maxX, maxY])),
          verticesArray
            .map((el) => JSON.stringify(el))
            .indexOf(JSON.stringify([maxX, minY])),
        ];
      }

      polygons = [findCornerPoints(verticesArray)];
    }

    if (+dimension === 3) {
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
    }

    if (+dimension === 4) {
      const dimension3VerticesLength = segments * (segments / 2 + 1) + segments;
      for (let i = 0; i <= segments * (segments / 2) + segments - 2; i++) {
        let points = [i, i + segments, i + segments + 1, i + 1];
        polygons.push(points);
      }
      polygons.push([
        (segments / 2 + 1) * segments,
        (segments / 2 + 1) * segments - 1,
        (segments / 2 + 1) * segments - 1 + segments,
        (segments / 2 + 1) * segments - 1 + segments,
      ]);

      for (let i = 0; i <= segments * (segments / 2) + segments - 2; i++) {
        let points = [i, i + segments, i + segments + 1, i + 1].map(
          (el) => el + dimension3VerticesLength
        );
        polygons.push(points);
      }

      for (let i = 0; i <= segments * (segments / 2) + segments - 1; i++) {
        let points = [
          i,
          i + segments,
          i + segments + dimension3VerticesLength,
          i + dimension3VerticesLength,
        ];
        polygons.push(points);
      }

      for (let i = 0; i <= segments * (segments / 2) + segments - 1; i++) {
        let points = [
          i,
          i + 1,
          i + dimension3VerticesLength + 1,
          i + dimension3VerticesLength,
        ];
        polygons.push(points);
      }
      polygons.push(
        [
          (segments / 2 + 1) * segments,
          (segments / 2 + 1) * segments - 1,
          (segments / 2 + 1) * segments - 1 + segments,
          (segments / 2 + 1) * segments - 1 + segments,
        ].map((el) => el + dimension3VerticesLength)
      );
    }

    if (+dimension === 5) {
      const dimension3VerticesLength = segments * (segments / 2 + 1) + segments;
      const dimension4VerticesLength =
        (segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
        dimension3VerticesLength;

      for (let j = 0; j <= segments / 2; j++) {
        for (let i = 0; i <= segments * (segments / 2) + segments - 2; i++) {
          let points = [i, i + segments, i + segments + 1, i + 1].map(
            (el) => el + dimension3VerticesLength * j
          );
          polygons.push(points);
        }

        for (let i = 0; i <= segments * (segments / 2) + segments - 2; i++) {
          let points = [
            i,
            i + dimension3VerticesLength,
            i + dimension3VerticesLength + 1,
            i + 1,
          ].map((el) => el + dimension3VerticesLength * j);
          polygons.push(points);
        }

        polygons.push(
          [
            (segments / 2 + 1) * segments,
            (segments / 2 + 1) * segments - 1,
            (segments / 2 + 1) * segments - 1 + segments,
            (segments / 2 + 1) * segments - 1 + segments,
          ].map((el) => el + dimension3VerticesLength * j)
        );
      }

      for (let j = 0; j <= segments / 2; j++) {
        for (let i = 0; i <= segments * (segments / 2) + segments - 2; i++) {
          let points = [i, i + segments, i + segments + 1, i + 1].map(
            (el) => el + dimension3VerticesLength * j + dimension4VerticesLength
          );
          polygons.push(points);
        }

        for (let i = 0; i <= segments * (segments / 2) + segments - 2; i++) {
          let points = [
            i,
            i + dimension3VerticesLength,
            i + dimension3VerticesLength + 1,
            i + 1,
          ].map(
            (el) => el + dimension3VerticesLength * j + dimension4VerticesLength
          );
          polygons.push(points);
        }

        polygons.push(
          [
            (segments / 2 + 1) * segments,
            (segments / 2 + 1) * segments - 1,
            (segments / 2 + 1) * segments - 1 + segments,
            (segments / 2 + 1) * segments - 1 + segments,
          ].map(
            (el) => el + dimension3VerticesLength * j + dimension4VerticesLength
          )
        );
      }

      for (let j = 0; j <= segments / 2; j++) {
        for (let i = 0; i <= segments * (segments / 2) + segments - 1; i++) {
          let points = [
            i + dimension3VerticesLength * j,
            i + segments + dimension3VerticesLength * j,
            i +
              segments +
              dimension4VerticesLength +
              dimension3VerticesLength * j,
            i + dimension4VerticesLength + dimension3VerticesLength * j,
          ];
          polygons.push(points);
        }

        for (let i = 0; i <= segments * (segments / 2) + segments - 1; i++) {
          let points = [
            i + dimension3VerticesLength * j,
            i + 1 + dimension3VerticesLength * j,
            i + dimension4VerticesLength + 1 + dimension3VerticesLength * j,
            i + dimension4VerticesLength + dimension3VerticesLength * j,
          ];
          polygons.push(points);
        }
      }
    }

    if (+dimension === 6) {
      const dimension3VerticesLength = segments * (segments / 2 + 1) + segments;
      const dimension4VerticesLength =
        (segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
        dimension3VerticesLength;

      const dimension5VerticesLength =
        ((segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
          dimension3VerticesLength) *
          (segments / 2 + 1) +
        dimension4VerticesLength;

      for (let n = 0; n < 2; n++) {
        for (let k = 0; k <= segments / 2; k++) {
          for (let j = 0; j <= segments / 2; j++) {
            for (
              let i = 0;
              i <= segments * (segments / 2) + segments - 2;
              i++
            ) {
              let points = [i, i + segments, i + segments + 1, i + 1]
                .map((el) => el + dimension3VerticesLength * j)
                .map(
                  (el) =>
                    el +
                    dimension4VerticesLength * k +
                    dimension5VerticesLength * n
                );
              polygons.push(points);
            }

            for (
              let i = 0;
              i <= segments * (segments / 2) + segments - 2;
              i++
            ) {
              let points = [
                i,
                i + dimension3VerticesLength,
                i + dimension3VerticesLength + 1,
                i + 1,
              ]
                .map((el) => el + dimension3VerticesLength * j)
                .map(
                  (el) =>
                    el +
                    dimension4VerticesLength * k +
                    dimension5VerticesLength * n
                );
              polygons.push(points);
            }

            for (
              let i = 0;
              i <= segments * (segments / 2) + segments - 2;
              i++
            ) {
              let points = [
                i,
                i + dimension4VerticesLength,
                i + dimension4VerticesLength + 1,
                i + 1,
              ]
                .map((el) => el + dimension3VerticesLength * j)
                .map(
                  (el) =>
                    el +
                    dimension4VerticesLength * k +
                    dimension5VerticesLength * (n === 0 ? 0 : 1)
                );
              polygons.push(points);
            }
            polygons.push(
              [
                (segments / 2 + 1) * segments,
                (segments / 2 + 1) * segments - 1,
                (segments / 2 + 1) * segments - 1 + segments,
                (segments / 2 + 1) * segments - 1 + segments,
              ]
                .map((el) => el + dimension3VerticesLength * j)
                .map(
                  (el) =>
                    el +
                    dimension4VerticesLength * k +
                    dimension5VerticesLength * n
                )
            );
          }
        }
      }

      for (let n = 0; n <= segments / 2; n++) {
        for (let j = 0; j <= segments / 2; j++) {
          for (let i = 0; i <= segments * (segments / 2) + segments - 1; i++) {
            let points = [
              i + dimension3VerticesLength * j + dimension4VerticesLength * n,
              i +
                segments +
                dimension3VerticesLength * j +
                dimension4VerticesLength * n,
              i +
                segments +
                dimension5VerticesLength +
                dimension3VerticesLength * j +
                dimension4VerticesLength * n,
              i +
                dimension5VerticesLength +
                dimension3VerticesLength * j +
                dimension4VerticesLength * n,
            ];
            polygons.push(points);
          }

          for (let i = 0; i <= segments * (segments / 2) + segments - 1; i++) {
            let points = [
              i + dimension3VerticesLength * j + dimension4VerticesLength * n,
              i +
                1 +
                dimension3VerticesLength * j +
                dimension4VerticesLength * n,
              i +
                dimension5VerticesLength +
                1 +
                dimension3VerticesLength * j +
                dimension4VerticesLength * n,
              i +
                dimension5VerticesLength +
                dimension3VerticesLength * j +
                dimension4VerticesLength * n,
            ];
            polygons.push(points);
          }
        }
      }
    }

    if (+dimension === 7) {
      const dimension3VerticesLength = segments * (segments / 2 + 1) + segments;
      const dimension4VerticesLength =
        (segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
        dimension3VerticesLength;
      const dimension5VerticesLength =
        ((segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
          dimension3VerticesLength) *
          (segments / 2 + 1) +
        dimension4VerticesLength;

      const dimension6VerticesLength =
        (((segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
          dimension3VerticesLength) *
          (segments / 2 + 1) +
          dimension4VerticesLength) *
          (segments / 2 + 1) +
        dimension5VerticesLength;

      for (let c = 0; c < 2; c++) {
        for (let w = 0; w <= segments / 2; w++) {
          for (let k = 0; k <= segments / 2; k++) {
            for (let j = 0; j <= segments / 2; j++) {
              for (
                let i = 0;
                i <= segments * (segments / 2) + segments - 2;
                i++
              ) {
                let points = [i, i + segments, i + segments + 1, i + 1]
                  .map((el) => el + dimension3VerticesLength * j)
                  .map((el) => el + dimension4VerticesLength * k)
                  .map(
                    (el) =>
                      el +
                      dimension5VerticesLength * w +
                      dimension6VerticesLength * c
                  );
                polygons.push(points);
              }

              for (
                let i = 0;
                i <= segments * (segments / 2) + segments - 2;
                i++
              ) {
                let points = [
                  i,
                  i + dimension3VerticesLength,
                  i + dimension3VerticesLength + 1,
                  i + 1,
                ]
                  .map((el) => el + dimension3VerticesLength * j)
                  .map((el) => el + dimension4VerticesLength * k)
                  .map(
                    (el) =>
                      el +
                      dimension5VerticesLength * w +
                      dimension6VerticesLength * c
                  );
                polygons.push(points);
              }

              for (
                let i = 0;
                i <= segments * (segments / 2) + segments - 2;
                i++
              ) {
                let points = [
                  i,
                  i + dimension4VerticesLength,
                  i + dimension4VerticesLength + 1,
                  i + 1,
                ]
                  .map((el) => el + dimension3VerticesLength * j)
                  .map((el) => el + dimension4VerticesLength * k)
                  .map(
                    (el) =>
                      el +
                      dimension5VerticesLength * w +
                      dimension6VerticesLength * c
                  );
                polygons.push(points);
              }

              for (
                let i = 0;
                i <= segments * (segments / 2) + segments - 2;
                i++
              ) {
                let points = [
                  i,
                  i + dimension5VerticesLength,
                  i + dimension5VerticesLength + 1,
                  i + 1,
                ]
                  .map((el) => el + dimension3VerticesLength * j)
                  .map((el) => el + dimension4VerticesLength * k)
                  .map(
                    (el) =>
                      el +
                      dimension5VerticesLength * w +
                      dimension6VerticesLength * c
                  );
                polygons.push(points);
              }

              polygons.push(
                [
                  (segments / 2 + 1) * segments,
                  (segments / 2 + 1) * segments - 1,
                  (segments / 2 + 1) * segments - 1 + segments,
                  (segments / 2 + 1) * segments - 1 + segments,
                ]
                  .map((el) => el + dimension3VerticesLength * j)
                  .map((el) => el + dimension4VerticesLength * k)
                  .map(
                    (el) =>
                      el +
                      dimension5VerticesLength * w +
                      dimension6VerticesLength * c
                  )
              );
            }
          }
        }
      }

      for (let m = 0; m <= segments / 2; m++) {
        for (let n = 0; n <= segments / 2; n++) {
          for (let j = 0; j <= segments / 2; j++) {
            for (
              let i = 0;
              i <= segments * (segments / 2) + segments - 1;
              i++
            ) {
              let points = [
                i +
                  dimension3VerticesLength * j +
                  dimension4VerticesLength * n +
                  dimension5VerticesLength * m,
                i +
                  segments +
                  dimension3VerticesLength * j +
                  dimension4VerticesLength * n +
                  dimension5VerticesLength * m,
                i +
                  segments +
                  dimension6VerticesLength +
                  dimension3VerticesLength * j +
                  dimension4VerticesLength * n +
                  dimension5VerticesLength * m,
                i +
                  dimension6VerticesLength +
                  dimension3VerticesLength * j +
                  dimension4VerticesLength * n +
                  dimension5VerticesLength * m,
              ];
              polygons.push(points);
            }

            for (
              let i = 0;
              i <= segments * (segments / 2) + segments - 1;
              i++
            ) {
              let points = [
                i + dimension3VerticesLength * j + dimension4VerticesLength * n,
                i +
                  1 +
                  dimension3VerticesLength * j +
                  dimension4VerticesLength * n,
                i +
                  dimension5VerticesLength +
                  1 +
                  dimension3VerticesLength * j +
                  dimension4VerticesLength * n,
                i +
                  dimension5VerticesLength +
                  dimension3VerticesLength * j +
                  dimension4VerticesLength * n,
              ];
              polygons.push(points);
            }
          }
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
      {displayFaces && +dimensionOfFigure === 3
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

      {displayFaces && +dimensionOfFigure >= 2
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

export default Cylinder;
