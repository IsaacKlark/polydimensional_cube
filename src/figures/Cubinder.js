import React, { useMemo } from "react";
import {
  linesArray as _linesArray,
  setLinesArray,
  modified,
  polygonsArray,
  setPolygonsArray,
} from "../vertices";
let polygons = [];
let polygonsNGons = [];

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
  if (!modified) {
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

    const saveLines = [];

    lines.forEach((el, index) => {
      const vertex1 = linesArray[index][0];
      const vertex2 = linesArray[index][1];
      saveLines.push([vertex1, vertex2]);
    });

    setLinesArray(saveLines);
  }

  useMemo(() => {
    if (!modified) {
      polygons = [];
      polygonsNGons = [];

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

      if (!modified) {
        polygons = get4FacesArray(verticesArray, _linesArray);
      }
      
      setPolygonsArray([...polygons, ...polygonsNGons]);
    }
  }, [
    displayFaces,
    dimensionOfFigure,
    verticesArray,
    dimension,
    segments,
    modified,
  ]);

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

export default Cubinder;
