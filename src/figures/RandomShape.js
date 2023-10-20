import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];

const RandomShape = ({
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  verticesArray,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces,
}) => {
  if (!modified) {

    function getClosestPoints(point, points, numConnections) {
      // Вычислите расстояния от данной точки до всех остальных точек и сохраните их вместе с индексами точек.
      const distances = points.map((otherPoint, index) => ({
        index,
        distance: distanceBetweenPoints(point, otherPoint),
      }));

      // Отсортируйте точки по расстоянию.
      distances.sort((a, b) => a.distance - b.distance);

      // Выберите первые `numConnections` точек (кроме самой точки).
      const closestPoints = distances.slice(1, numConnections + 1);

      // Верните индексы ближайших точек.
      return closestPoints.map((entry) => entry.index);
    }

    // Создайте функцию для вычисления расстояния между двумя точками.
    function distanceBetweenPoints(point1, point2) {
      let sum = 0;
      for (let i = 0; i < point1.length; i++) {
        const diff = point1[i] - point2[i];
        sum += diff * diff;
      }
      return Math.sqrt(sum);
    }

    // Определите количество ближайших точек, которые вы хотите соединить с каждой точкой.
    const numConnections = verticesArray[0].length;

    // Создайте массив для хранения линий.
    const lines = [];
    const stringVertices = verticesArray.map(el => JSON.stringify(el))
    // Переберите все точки и соедините их с ближайшими точками.
    for (let i = 0; i < verticesArray.length; i++) {
      const startPoint = verticesArray[i];
      const closestPointIndices = getClosestPoints(startPoint, verticesArray, numConnections);

      // Создайте линии, соединяющие текущую точку с ближайшими точками.
      for (const index of closestPointIndices) {
        const endPoint = verticesArray[index];
        lines.push([stringVertices.indexOf(JSON.stringify(startPoint)), stringVertices.indexOf(JSON.stringify(endPoint))]);
      }
    }
    setLinesArray(lines)
  }
  useMemo(() => {
    if (!modified) {
      if (verticesArray.length) {
        function get3FacesArray(verticesArray, linesArray) {
          const facesArray = [];
          const vertexCount = verticesArray.length;

          // Создаем индекс для быстрого поиска связей вершин
          const vertexConnections = {};
          for (const [a, b] of linesArray) {
            if (!vertexConnections[a]) vertexConnections[a] = [];
            if (!vertexConnections[b]) vertexConnections[b] = [];
            vertexConnections[a].push(b);
            vertexConnections[b].push(a);
          }

          let percent = 0;


          for (let i = 0; i < vertexCount; i++) {
            percent += (100 / verticesArray.length);
            console.clear();
            console.log(percent + "% - 5")
            for (let j = i + 1; j < vertexCount; j++) {
              if (hasEdge(i, j)) {
                for (let k = i + 1; k < vertexCount; k++) {
                  if (
                    hasEdge(j, k) &&
                    hasEdge(k, i)
                  ) {
                    facesArray.push([i, j, k]);
                  }
                }
              }
            }
          }

          return facesArray;

          function hasEdge(a, b) {
            return vertexConnections[a]?.includes(b) && vertexConnections[b]?.includes(a);
          }
        }



        function get5FacesArray(verticesArray, linesArray) {
          const facesArray = [];
          const vertexCount = verticesArray.length;

          // Создаем индекс для быстрого поиска связей вершин
          const vertexConnections = {};
          for (const [a, b] of linesArray) {
            if (!vertexConnections[a]) vertexConnections[a] = [];
            if (!vertexConnections[b]) vertexConnections[b] = [];
            vertexConnections[a].push(b);
            vertexConnections[b].push(a);
          }

          let percent = 0;


          // Перебираем все возможные комбинации пяти вершин
          for (let i = 0; i < vertexCount; i++) {
            percent += (100 / verticesArray.length);
            console.clear();
            console.log(percent + "% - 5")
            for (let j = i + 1; j < vertexCount; j++) {
              if (hasEdge(i, j)) {
                for (let k = i + 1; k < vertexCount; k++) {
                  if (hasEdge(j, k)) {
                    for (let l = i + 1; l < vertexCount; l++) {
                      if (hasEdge(k, l)) {
                        for (let m = i + 1; m < vertexCount; m++) {
                          // Проверяем, что все пары вершин связаны в сети
                          if (
                            hasEdge(l, m) &&
                            hasEdge(m, i)
                          ) {
                            facesArray.push([i, j, k, l, m]);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          return facesArray;

          // Функция для проверки наличия ребра между двумя вершинами
          function hasEdge(a, b) {
            return vertexConnections[a]?.includes(b) && vertexConnections[b]?.includes(a);
          }
        }


        function get6FacesArray(verticesArray, linesArray) {
          const facesArray = [];
          const vertexCount = verticesArray.length;

          // Создаем индекс для быстрого поиска связей вершин
          const vertexConnections = {};
          for (const [a, b] of linesArray) {
            if (!vertexConnections[a]) vertexConnections[a] = [];
            if (!vertexConnections[b]) vertexConnections[b] = [];
            vertexConnections[a].push(b);
            vertexConnections[b].push(a);
          }

          let percent = 0;


          // Перебираем все возможные комбинации пяти вершин
          for (let i = 0; i < vertexCount; i++) {
            percent += (100 / verticesArray.length);
            console.clear();
            console.log(percent + "% - 5")
            for (let j = i + 1; j < vertexCount; j++) {
              if (hasEdge(i, j)) {
                for (let k = i + 1; k < vertexCount; k++) {
                  if (hasEdge(j, k)) {
                    for (let l = i + 1; l < vertexCount; l++) {
                      if (hasEdge(k, l)) {
                        for (let m = i + 1; m < vertexCount; m++) {
                          if (hasEdge(l, m)) {
                            for (let n = i + 1; n < vertexCount; n++) {
                              if (
                                hasEdge(m, n) &&
                                hasEdge(n, i)
                              ) {
                                facesArray.push([i, j, k, l, m, n]);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          return facesArray;

          // Функция для проверки наличия ребра между двумя вершинами
          function hasEdge(a, b) {
            return vertexConnections[a]?.includes(b) && vertexConnections[b]?.includes(a);
          }
        }

        function get7FacesArray(verticesArray, linesArray) {
          const facesArray = [];
          const vertexCount = verticesArray.length;

          // Создаем индекс для быстрого поиска связей вершин
          const vertexConnections = {};
          for (const [a, b] of linesArray) {
            if (!vertexConnections[a]) vertexConnections[a] = [];
            if (!vertexConnections[b]) vertexConnections[b] = [];
            vertexConnections[a].push(b);
            vertexConnections[b].push(a);
          }

          let percent = 0;


          // Перебираем все возможные комбинации пяти вершин
          for (let i = 0; i < vertexCount; i++) {
            percent += (100 / verticesArray.length);
            console.clear();
            console.log(percent + "% - 5")
            for (let j = i + 1; j < vertexCount; j++) {
              if (hasEdge(i, j)) {
                for (let k = i + 1; k < vertexCount; k++) {
                  if (hasEdge(j, k)) {
                    for (let l = i + 1; l < vertexCount; l++) {
                      if (hasEdge(k, l)) {
                        for (let m = i + 1; m < vertexCount; m++) {
                          if (hasEdge(l, m)) {
                            for (let n = i + 1; n < vertexCount; n++) {
                              if (hasEdge(m, n)) {
                                for (let o = i + 1; o < vertexCount; o++) {
                                  if (
                                    hasEdge(n, o) &&
                                    hasEdge(o, i)
                                  ) {
                                    facesArray.push([i, j, k, l, m, n, o]);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          return facesArray;

          // Функция для проверки наличия ребра между двумя вершинами
          function hasEdge(a, b) {
            return vertexConnections[a]?.includes(b) && vertexConnections[b]?.includes(a);
          }
        }

        function get4FacesArray(verticesArray, linesArray) {
          const facesArray = [];
          const vertexCount = verticesArray.length;

          // Создаем индекс для быстрого поиска связей вершин
          const vertexConnections = {};
          for (const [a, b] of linesArray) {
            if (!vertexConnections[a]) vertexConnections[a] = [];
            if (!vertexConnections[b]) vertexConnections[b] = [];
            vertexConnections[a].push(b);
            vertexConnections[b].push(a);
          }

          let percent = 0;


          // Перебираем все возможные комбинации пяти вершин
          for (let i = 0; i < vertexCount; i++) {
            percent += (100 / verticesArray.length);
            console.clear();
            console.log(percent + "% - 5")
            for (let j = i + 1; j < vertexCount; j++) {
              if (hasEdge(i, j)) {
                for (let k = i + 1; k < vertexCount; k++) {
                  if (hasEdge(j, k)) {
                    for (let l = i + 1; l < vertexCount; l++) {

                      // Проверяем, что все пары вершин связаны в сети
                      if (
                        hasEdge(k, l) &&
                        hasEdge(l, i)
                      ) {
                        facesArray.push([i, j, k, l]);
                      }
                    }
                  }
                }
              }
            }
          }

          return facesArray;

          // Функция для проверки наличия ребра между двумя вершинами
          function hasEdge(a, b) {
            return vertexConnections[a]?.includes(b) && vertexConnections[b]?.includes(a);
          }
        }


        const clearRepeats = (arr) => {
          const res = [];
          const test = []
          arr.forEach(element => {
            const copyElement = [...element]
            if (!test.includes(JSON.stringify(copyElement.sort((a, b) => a - b)))) {
              let uniq = true;
              element.forEach(el => {
                if (element.indexOf(el) !== element.lastIndexOf(el)) uniq = false;
              })
              if (uniq) {
                res.push(element);
                test.push(JSON.stringify(copyElement));
              }
            }
          });
          return res;
        };


        function get8FacesArray(verticesArray, linesArray) {
          const facesArray = [];
          let percent = 0;

          for (let i = 0; i < verticesArray.length; i++) {
            percent += (100 / verticesArray.length);
            console.clear();
            console.log(percent + "%")
            for (let j = i + 1; j < verticesArray.length; j++) {
              if (linesArray.some(([a, b]) => (a === i && b === j) || (a === j && b === i))) {
                for (let k = i + 1; k < verticesArray.length; k++) {
                  if (linesArray.some(([a, b]) => (a === j && b === k) || (a === k && b === j))) {
                    for (let l = i + 1; l < verticesArray.length; l++) {
                      if (linesArray.some(([a, b]) => (a === k && b === l) || (a === l && b === k))) {
                        for (let m = i + 1; m < verticesArray.length; m++) {
                          if (linesArray.some(([a, b]) => (a === l && b === m) || (a === m && b === l))) {
                            for (let n = i + 1; n < verticesArray.length; n++) {
                              if (linesArray.some(([a, b]) => (a === m && b === n) || (a === n && b === m))) {
                                for (let o = i + 1; o < verticesArray.length; o++) {
                                  if (linesArray.some(([a, b]) => (a === n && b === o) || (a === o && b === n))) {
                                    for (let p = i + 1; p < verticesArray.length; p++) {
                                      if (
                                        linesArray.some(([a, b]) => (a === o && b === p) || (a === p && b === o)) &&
                                        linesArray.some(([a, b]) => (a === p && b === i) || (a === i && b === p))
                                      ) {
                                        facesArray.push([i, j, k, l, m, n, o, p]);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          return facesArray;
        }

        const polygons3 = clearRepeats(get3FacesArray(verticesArray, _linesArray))
        let polygons4 = clearRepeats(get4FacesArray(verticesArray, _linesArray))
        let polygons5 = clearRepeats(get5FacesArray(verticesArray, _linesArray))
        let polygons6 = clearRepeats(get5FacesArray(verticesArray, _linesArray))


        const clearExtra4 = () => {
          let progress = 0;
          const res = polygons4.filter((el, index) => {
            progress += (100 / polygons4.length);
            console.clear();
            console.log(progress + "%")
            let status = true;
            for (let i = 0; i < polygons3.length; i++) {
              if (el.includes(polygons3[i][0]) && el.includes(polygons3[i][1]) && el.includes(polygons3[i][2])) {
                status = false;
                break;
              }
            }

            for (let i = 0; i < polygons4.length; i++) {
              if (el.includes(polygons4[i][0]) && el.includes(polygons4[i][1]) && el.includes(polygons4[i][2]) && el.includes(polygons4[i][3])) {
                status = false;
                break;
              }
            }

            for (let i = 0; i < polygons5.length; i++) {
              if (el.includes(polygons5[i][0]) && el.includes(polygons5[i][1]) && el.includes(polygons5[i][2]) && el.includes(polygons5[i][3]) && el.includes(polygons5[i][4])) {
                status = false;
                break;
              }
            }

            return status;
          })

          return res;
        }


        const clearExtra5 = () => {
          let progress = 0;
          const res = polygons5.filter((el, index) => {
            progress += (100 / polygons5.length);
            console.clear();
            console.log(progress + "%")
            let status = true;
            for (let i = 0; i < polygons3.length; i++) {
              if (el.includes(polygons3[i][0]) && el.includes(polygons3[i][1]) && el.includes(polygons3[i][2])) {
                status = false;
                break;
              }
            }

            for (let i = 0; i < polygons4.length; i++) {
              if (el.includes(polygons4[i][0]) && el.includes(polygons4[i][1]) && el.includes(polygons4[i][2]) && el.includes(polygons4[i][3])) {
                status = false;
                break;
              }
            }
            return status;
          })

          return res;
        }
        const clearExtra6 = () => {
          let progress = 0;
          const res = polygons5.filter((el, index) => {
            progress += (100 / polygons5.length);
            console.clear();
            console.log(progress + "%")
            let status = true;
            for (let i = 0; i < polygons3.length; i++) {
              if (el.includes(polygons3[i][0]) && el.includes(polygons3[i][1]) && el.includes(polygons3[i][2])) {
                status = false;
                break;
              }
            }

            for (let i = 0; i < polygons4.length; i++) {
              if (el.includes(polygons4[i][0]) && el.includes(polygons4[i][1]) && el.includes(polygons4[i][2]) && el.includes(polygons4[i][3])) {
                status = false;
                break;
              }
            }

            for (let i = 0; i < polygons5.length; i++) {
              if (el.includes(polygons5[i][0]) && el.includes(polygons5[i][1]) && el.includes(polygons5[i][2]) && el.includes(polygons5[i][3] && el.includes(polygons5[i][4]))) {
                status = false;
                break;
              }
            }
            return status;
          })

          return res;
        }
        polygons4 = clearExtra4();
        polygons5 = clearExtra5();
        polygons6 = clearExtra6();
        polygons = [...polygons3, ...polygons4, ...polygons5, ...polygons6]
      }

      setPolygonsArray(polygons)
    }
  }, [_linesArray, polygons, verticesArray, modified])
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
        ? polygonsArray.map((arr, index) => {
          return (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type={arr.length}
            />
          )
        })
        : null}

      {displayEdges &&
        _linesArray.map((el, index) => {
          let vertex1 = 0;
          let vertex2 = 0;

          vertex1 = el[0];
          vertex2 = el[1];
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

export default RandomShape;
