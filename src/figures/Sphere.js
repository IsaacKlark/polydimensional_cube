import React, { useMemo, useCallback } from "react";

let polygons = [];

const Sphere = ({
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
  const linesArray = useMemo(() => {
    let linesArray = [];
    const verticesLength = verticesArray.length;
    const firstDistance = +segments || 20;
    for (let i = 0; i < verticesLength; i++) {
      if (i + 1 < verticesLength) {
        linesArray.push([i, i + 1]);
      }
      if (i % firstDistance === 0) {
        linesArray.push([i, i + (firstDistance - 1)]);
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
    return linesArray;
  }, [verticesArray, dimensionOfFigure, segments]);

  const lines = useMemo(() => {
    const amountOfLines = linesArray.length;
    let ids = 0;
    const lines = [];
    for (let i = 0; i < amountOfLines; i++) {
      lines.push(ids);
      ids += 1;
    }
    return lines;
  }, [linesArray]);

  const handleContextMenu = useCallback((e) => {
    e.preventDefault();
    e.target.style.display = "none";
  }, []);

  useMemo(() => {
    polygons = [];
    if (displayFaces && +dimensionOfFigure === 2) {
      let points = [];
      for (let i = 0; i < segments; i++) {
        points.push(i);
      }
      polygons.push(points);
    }

    if (displayFaces && +dimensionOfFigure === 3) {
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
    }

    if (displayFaces && +dimensionOfFigure === 4) {
      const dimension3VerticesLength = segments * (segments / 2 + 1) + segments;

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
    }

    if (displayFaces && +dimensionOfFigure === 5) {
      const dimension3VerticesLength = segments * (segments / 2 + 1) + segments;
      const dimension4VerticesLength =
        (segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
        dimension3VerticesLength;
      for (let k = 0; k <= segments / 2; k++) {
        for (let j = 0; j <= segments / 2; j++) {
          for (let i = 0; i <= segments * (segments / 2) + segments - 2; i++) {
            let points = [i, i + segments, i + segments + 1, i + 1]
              .map((el) => el + dimension3VerticesLength * j)
              .map((el) => el + dimension4VerticesLength * k);
            polygons.push(points);
          }

          for (let i = 0; i <= segments * (segments / 2) + segments - 2; i++) {
            let points = [
              i,
              i + dimension3VerticesLength,
              i + dimension3VerticesLength + 1,
              i + 1,
            ]
              .map((el) => el + dimension3VerticesLength * j)
              .map((el) => el + dimension4VerticesLength * k);
            polygons.push(points);
          }

          for (let i = 0; i <= segments * (segments / 2) + segments - 2; i++) {
            let points = [
              i,
              i + dimension4VerticesLength,
              i + dimension4VerticesLength + 1,
              i + 1,
            ]
              .map((el) => el + dimension3VerticesLength * j)
              .map((el) => el + dimension4VerticesLength * k);
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
          );
        }
      }
    }

    if (displayFaces && +dimensionOfFigure === 6) {
      const dimension3VerticesLength = segments * (segments / 2 + 1) + segments;
      const dimension4VerticesLength =
        (segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
        dimension3VerticesLength;
      const dimension5VerticesLength =
        ((segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
          dimension3VerticesLength) *
          (segments / 2 + 1) +
        dimension4VerticesLength;

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
                .map((el) => el + dimension5VerticesLength * w);
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
                .map((el) => el + dimension5VerticesLength * w);
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
                .map((el) => el + dimension5VerticesLength * w);
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
                .map((el) => el + dimension5VerticesLength * w);
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
                .map((el) => el + dimension5VerticesLength * w)
            );
          }
        }
      }
    }

    if (displayFaces && +dimensionOfFigure === 7) {
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

      for (let v = 0; v <= segments / 2; v++) {
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
                  .map((el) => el + dimension5VerticesLength * w)
                  .map((el) => el + dimension6VerticesLength * v);
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
                  .map((el) => el + dimension5VerticesLength * w)
                  .map((el) => el + dimension6VerticesLength * v);
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
                  .map((el) => el + dimension5VerticesLength * w)
                  .map((el) => el + dimension6VerticesLength * v);
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
                  .map((el) => el + dimension5VerticesLength * w)
                  .map((el) => el + dimension6VerticesLength * v);
                polygons.push(points);
              }

              for (
                let i = 0;
                i <= segments * (segments / 2) + segments - 2;
                i++
              ) {
                let points = [
                  i,
                  i + dimension6VerticesLength,
                  i + dimension6VerticesLength + 1,
                  i + 1,
                ]
                  .map((el) => el + dimension3VerticesLength * j)
                  .map((el) => el + dimension4VerticesLength * k)
                  .map((el) => el + dimension5VerticesLength * w)
                  .map((el) => el + dimension6VerticesLength * v);
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
                  .map((el) => el + dimension5VerticesLength * w)
                  .map((el) => el + dimension6VerticesLength * v)
              );
            }
          }
        }
      }
    }

    if (displayFaces && +dimensionOfFigure === 8) {
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

      const dimension7VerticesLength =
        ((((segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
          dimension3VerticesLength) *
          (segments / 2 + 1) +
          dimension4VerticesLength) *
          (segments / 2 + 1) +
          dimension5VerticesLength) *
          (segments / 2 + 1) +
        dimension6VerticesLength;

      for (let n = 0; n <= segments / 2; n++) {
        for (let v = 0; v <= segments / 2; v++) {
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
                    .map((el) => el + dimension5VerticesLength * w)
                    .map((el) => el + dimension6VerticesLength * v)
                    .map((el) => el + dimension7VerticesLength * n);
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
                    .map((el) => el + dimension5VerticesLength * w)
                    .map((el) => el + dimension6VerticesLength * v)
                    .map((el) => el + dimension7VerticesLength * n);
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
                    .map((el) => el + dimension5VerticesLength * w)
                    .map((el) => el + dimension6VerticesLength * v)
                    .map((el) => el + dimension7VerticesLength * n);
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
                    .map((el) => el + dimension5VerticesLength * w)
                    .map((el) => el + dimension6VerticesLength * v)
                    .map((el) => el + dimension7VerticesLength * n);
                  polygons.push(points);
                }

                for (
                  let i = 0;
                  i <= segments * (segments / 2) + segments - 2;
                  i++
                ) {
                  let points = [
                    i,
                    i + dimension6VerticesLength,
                    i + dimension6VerticesLength + 1,
                    i + 1,
                  ]
                    .map((el) => el + dimension3VerticesLength * j)
                    .map((el) => el + dimension4VerticesLength * k)
                    .map((el) => el + dimension5VerticesLength * w)
                    .map((el) => el + dimension6VerticesLength * v)
                    .map((el) => el + dimension7VerticesLength * n);
                  polygons.push(points);
                }

                for (
                  let i = 0;
                  i <= segments * (segments / 2) + segments - 2;
                  i++
                ) {
                  let points = [
                    i,
                    i + dimension7VerticesLength,
                    i + dimension7VerticesLength + 1,
                    i + 1,
                  ]
                    .map((el) => el + dimension3VerticesLength * j)
                    .map((el) => el + dimension4VerticesLength * k)
                    .map((el) => el + dimension5VerticesLength * w)
                    .map((el) => el + dimension6VerticesLength * v)
                    .map((el) => el + dimension7VerticesLength * n);
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
                    .map((el) => el + dimension5VerticesLength * w)
                    .map((el) => el + dimension6VerticesLength * v)
                    .map((el) => el + dimension7VerticesLength * n)
                );
              }
            }
          }
        }
      }
    }

    if (displayFaces && +dimensionOfFigure === 9) {
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

      const dimension7VerticesLength =
        ((((segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
          dimension3VerticesLength) *
          (segments / 2 + 1) +
          dimension4VerticesLength) *
          (segments / 2 + 1) +
          dimension5VerticesLength) *
          (segments / 2 + 1) +
        dimension6VerticesLength;

      const dimension8VerticesLength =
        (((((segments * (segments / 2 + 1) + segments) * (segments / 2 + 1) +
          dimension3VerticesLength) *
          (segments / 2 + 1) +
          dimension4VerticesLength) *
          (segments / 2 + 1) +
          dimension5VerticesLength) *
          (segments / 2 + 1) +
          dimension6VerticesLength) *
          (segments / 2 + 1) +
        dimension7VerticesLength;

      for (let m = 0; m <= segments / 2; m++) {
        for (let n = 0; n <= segments / 2; n++) {
          for (let v = 0; v <= segments / 2; v++) {
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
                      .map((el) => el + dimension5VerticesLength * w)
                      .map((el) => el + dimension6VerticesLength * v)
                      .map((el) => el + dimension7VerticesLength * n)
                      .map((el) => el + dimension8VerticesLength * m);

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
                      .map((el) => el + dimension5VerticesLength * w)
                      .map((el) => el + dimension6VerticesLength * v)
                      .map((el) => el + dimension7VerticesLength * n)
                      .map((el) => el + dimension8VerticesLength * m);
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
                      .map((el) => el + dimension5VerticesLength * w)
                      .map((el) => el + dimension6VerticesLength * v)
                      .map((el) => el + dimension7VerticesLength * n)
                      .map((el) => el + dimension8VerticesLength * m);
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
                      .map((el) => el + dimension5VerticesLength * w)
                      .map((el) => el + dimension6VerticesLength * v)
                      .map((el) => el + dimension7VerticesLength * n)
                      .map((el) => el + dimension8VerticesLength * m);
                    polygons.push(points);
                  }

                  for (
                    let i = 0;
                    i <= segments * (segments / 2) + segments - 2;
                    i++
                  ) {
                    let points = [
                      i,
                      i + dimension6VerticesLength,
                      i + dimension6VerticesLength + 1,
                      i + 1,
                    ]
                      .map((el) => el + dimension3VerticesLength * j)
                      .map((el) => el + dimension4VerticesLength * k)
                      .map((el) => el + dimension5VerticesLength * w)
                      .map((el) => el + dimension6VerticesLength * v)
                      .map((el) => el + dimension7VerticesLength * n)
                      .map((el) => el + dimension8VerticesLength * m);
                    polygons.push(points);
                  }

                  for (
                    let i = 0;
                    i <= segments * (segments / 2) + segments - 2;
                    i++
                  ) {
                    let points = [
                      i,
                      i + dimension7VerticesLength,
                      i + dimension7VerticesLength + 1,
                      i + 1,
                    ]
                      .map((el) => el + dimension3VerticesLength * j)
                      .map((el) => el + dimension4VerticesLength * k)
                      .map((el) => el + dimension5VerticesLength * w)
                      .map((el) => el + dimension6VerticesLength * v)
                      .map((el) => el + dimension7VerticesLength * n)
                      .map((el) => el + dimension8VerticesLength * m);
                    polygons.push(points);
                  }

                  for (
                    let i = 0;
                    i <= segments * (segments / 2) + segments - 2;
                    i++
                  ) {
                    let points = [
                      i,
                      i + dimension8VerticesLength,
                      i + dimension8VerticesLength + 1,
                      i + 1,
                    ]
                      .map((el) => el + dimension3VerticesLength * j)
                      .map((el) => el + dimension4VerticesLength * k)
                      .map((el) => el + dimension5VerticesLength * w)
                      .map((el) => el + dimension6VerticesLength * v)
                      .map((el) => el + dimension7VerticesLength * n)
                      .map((el) => el + dimension8VerticesLength * m);
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
                      .map((el) => el + dimension5VerticesLength * w)
                      .map((el) => el + dimension6VerticesLength * v)
                      .map((el) => el + dimension7VerticesLength * n)
                      .map((el) => el + dimension8VerticesLength * m)
                  );
                }
              }
            }
          }
        }
      }
    }
  }, [displayFaces, dimensionOfFigure, verticesArray, dimension]);

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
              key={index}
              cx="300"
              cy="200"
              r="2"
              fill="white"
              id={`circle${index}`}
              className="circle"
              onContextMenu={handleContextMenu}
              onClick={() => {
                console.log(index);
              }}
            />
          ))
        : null}
    </svg>
  );
};

export default Sphere;
