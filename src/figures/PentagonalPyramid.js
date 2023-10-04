import React, { useMemo } from "react";

let polygons = [];

const PentagonalPyramid = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces
}) => {
  let linesArray = [];
  const edgeLength = 138;
  const test = new Set();
  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));
        test.add(length);
        if (length === edgeLength || length === 139) {
          linesArray.push([i, j]);
        }
      }
    }
    const step = Math.ceil(i / 5);

    for (let j = 0; j < dimensionOfFigure; j++) {
      if (i === step * 5 - 1) {
        linesArray.push([i, step * 5 - 5]);
      }

      if (i + 1 < step * 5 && i + 1 < verticesArray.length) {
        linesArray.push([i, i + 1]);
      }
    }

    if (i % 5 === 0 && i + 1 < verticesArray.length) {
      linesArray.push([i, i + 1]);
    }
    linesArray.push([i, verticesArray.length - 1]);
  }

  const amountOfLines = linesArray.length;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  const linesAmount = linesArray.length;
  useMemo(() => {
    if (displayFaces) {
      if (+dimensionOfFigure === 2) {
        polygons = [
          [
            0,
            1,
            5
          ],
          [
            0,
            4,
            5
          ],
          [
            1,
            2,
            5
          ],
          [
            2,
            3,
            5
          ],
          [
            3,
            4,
            5
          ]
        ];
      }
      if (+dimensionOfFigure === 3) {
        polygons = [
          [
            0,
            1,
            5
          ],
          [
            0,
            4,
            5
          ],
          [
            1,
            2,
            5
          ],
          [
            2,
            3,
            5
          ],
          [
            3,
            4,
            5
          ]
        ];
      }


      if (+dimensionOfFigure > 3) {
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
            console.log(percent + "% - 3")
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
            console.log(percent + "% - 4")
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

        let polygons3 = clearRepeats(get3FacesArray(verticesArray, linesArray));
        let polygons4 = clearRepeats(get4FacesArray(verticesArray, linesArray));


        const clearExtra = () => {
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


            return status;
          })

          return res;
        }

        polygons = [...polygons3, ...clearExtra()]
      }
    }
  }, [dimensionOfFigure, linesAmount, displayFaces])

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
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

      {displayFaces && +dimensionOfFigure >= 2
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

export default PentagonalPyramid;
