import React, { useMemo, useState } from "react";
import { polygons3D, polygons4D, polygons5D, polygons6D, polygons7D, polygons8D, polygons9D, polygons10D } from "./CubeAntiprismPolygons";
let polygons = [];

const CubeAntiprism = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces
}) => {
  const [testPolygons, setTestPolygons] = useState([])
  let linesArray = [];

  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));

        if (dimensionOfFigure === 2) {
          if (
            length === 160 ||
            length === 139 ||
            length === 113 ||
            length === 226
          ) {
            linesArray.push([i, j]);
          }
        } else {
          if (
            length === 160 ||
            (length > 160 && length < 160 * +`1.${+dimensionOfFigure - 4}5`) ||
            length === 139
          ) {
            linesArray.push([i, j]);
          }
        }
      }
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
    if (+dimensionOfFigure === 3) {
      polygons = polygons3D
    }

    if (+dimensionOfFigure === 4) {
      polygons = polygons4D
    }

    if (+dimensionOfFigure === 5) {
      polygons = polygons5D
    }

    if (+dimensionOfFigure === 6) {
      polygons = polygons6D
    }

    if (+dimensionOfFigure === 7) {
      polygons = polygons7D
    }

    if (+dimensionOfFigure === 8) {
      polygons = polygons8D
    }

    if (+dimensionOfFigure === 9) {
      polygons = polygons9D
    }

    if (+dimensionOfFigure === 10) {
      polygons = polygons10D
    }

    if (+dimensionOfFigure > 10) {
      polygons = []
    }
    
  }, [dimensionOfFigure])

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
            // onClick={() => {
            //   const newArr = [...testPolygons, arr];
            //   setTestPolygons(newArr)
            //   polygons = polygons.map((el, index2) => index2 !== index ? el : []);
            //   console.clear();
            //   console.log(newArr)
            // }}
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

export default CubeAntiprism;
