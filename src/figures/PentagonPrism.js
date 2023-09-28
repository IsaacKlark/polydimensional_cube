import React, { useMemo } from "react";

let polygons = [];

const PentagonPrism = ({
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

      if (
        i + 1 < step * 5 &&
        i + 1 < verticesArray.length
      ) {
        linesArray.push([i, i + 1]);
      }
    }

    if (i % 5 === 0 && i + 1 < verticesArray.length) {
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
    if (+dimensionOfFigure === 2) {
      polygons = [
        [
          0,
          1,
          2,
          3,
          4
        ],

      ]
    }
    if (+dimensionOfFigure === 3) {
      polygons = [
        [
          0,
          1,
          2,
          3,
          4
        ],
        [
          5,
          6,
          7,
          8,
          9
        ],
        [
          0,
          1,
          6,
          5
        ],
        [
          0,
          4,
          9,
          5
        ],
        [
          1,
          2,
          7,
          6
        ],
        [
          2,
          3,
          8,
          7
        ],
        [
          3,
          4,
          9,
          8
        ]
      ]
    }
    if (+dimensionOfFigure === 4) {
      polygons = [
        [
          0,
          1,
          2,
          3,
          4
        ],
        [
          5,
          6,
          7,
          8,
          9
        ],
        [
          10,
          11,
          12,
          13,
          14
        ],
        [
          15,
          16,
          17,
          18,
          19
        ],
        [
          0,
          1,
          6,
          5
        ],
        [
          0,
          1,
          11,
          10
        ],
        [
          0,
          4,
          9,
          5
        ],
        [
          0,
          4,
          14,
          10
        ],
        [
          0,
          5,
          15,
          10
        ],
        [
          1,
          2,
          7,
          6
        ],
        [
          1,
          2,
          12,
          11
        ],
        [
          1,
          6,
          16,
          11
        ],
        [
          2,
          3,
          8,
          7
        ],
        [
          2,
          3,
          13,
          12
        ],
        [
          2,
          7,
          17,
          12
        ],
        [
          3,
          4,
          9,
          8
        ],
        [
          3,
          4,
          14,
          13
        ],
        [
          3,
          8,
          18,
          13
        ],
        [
          4,
          9,
          19,
          14
        ],
        [
          5,
          6,
          16,
          15
        ],
        [
          5,
          9,
          19,
          15
        ],
        [
          6,
          7,
          17,
          16
        ],
        [
          7,
          8,
          18,
          17
        ],
        [
          8,
          9,
          19,
          18
        ],
        [
          10,
          11,
          16,
          15
        ],
        [
          10,
          14,
          19,
          15
        ],
        [
          11,
          12,
          17,
          16
        ],
        [
          12,
          13,
          18,
          17
        ],
        [
          13,
          14,
          19,
          18
        ]
      ]
    }
    if (+dimensionOfFigure === 5) {
      polygons = [
        [
          0,
          1,
          2,
          3,
          4
        ],
        [
          5,
          6,
          7,
          8,
          9
        ],
        [
          10,
          11,
          12,
          13,
          14
        ],
        [
          15,
          16,
          17,
          18,
          19
        ],
        [
          20,
          21,
          22,
          23,
          24
        ],
        [
          25,
          26,
          27,
          28,
          29
        ],
        [
          30,
          31,
          32,
          33,
          34
        ],
        [
          35,
          36,
          37,
          38,
          39
        ],
        [
          0,
          1,
          6,
          5
        ],
        [
          0,
          1,
          11,
          10
        ],
        [
          0,
          1,
          21,
          20
        ],
        [
          0,
          4,
          9,
          5
        ],
        [
          0,
          4,
          14,
          10
        ],
        [
          0,
          4,
          24,
          20
        ],
        [
          0,
          5,
          15,
          10
        ],
        [
          0,
          5,
          25,
          20
        ],
        [
          0,
          10,
          30,
          20
        ],
        [
          1,
          2,
          7,
          6
        ],
        [
          1,
          2,
          12,
          11
        ],
        [
          1,
          2,
          22,
          21
        ],
        [
          1,
          6,
          16,
          11
        ],
        [
          1,
          6,
          26,
          21
        ],
        [
          1,
          11,
          31,
          21
        ],
        [
          2,
          3,
          8,
          7
        ],
        [
          2,
          3,
          13,
          12
        ],
        [
          2,
          3,
          23,
          22
        ],
        [
          2,
          7,
          17,
          12
        ],
        [
          2,
          7,
          27,
          22
        ],
        [
          2,
          12,
          32,
          22
        ],
        [
          3,
          4,
          9,
          8
        ],
        [
          3,
          4,
          14,
          13
        ],
        [
          3,
          4,
          24,
          23
        ],
        [
          3,
          8,
          18,
          13
        ],
        [
          3,
          8,
          28,
          23
        ],
        [
          3,
          13,
          33,
          23
        ],
        [
          4,
          9,
          19,
          14
        ],
        [
          4,
          9,
          29,
          24
        ],
        [
          4,
          14,
          34,
          24
        ],
        [
          5,
          6,
          16,
          15
        ],
        [
          5,
          6,
          26,
          25
        ],
        [
          5,
          9,
          19,
          15
        ],
        [
          5,
          9,
          29,
          25
        ],
        [
          5,
          15,
          35,
          25
        ],
        [
          6,
          7,
          17,
          16
        ],
        [
          6,
          7,
          27,
          26
        ],
        [
          6,
          16,
          36,
          26
        ],
        [
          7,
          8,
          18,
          17
        ],
        [
          7,
          8,
          28,
          27
        ],
        [
          7,
          17,
          37,
          27
        ],
        [
          8,
          9,
          19,
          18
        ],
        [
          8,
          9,
          29,
          28
        ],
        [
          8,
          18,
          38,
          28
        ],
        [
          9,
          19,
          39,
          29
        ],
        [
          10,
          11,
          16,
          15
        ],
        [
          10,
          11,
          31,
          30
        ],
        [
          10,
          14,
          19,
          15
        ],
        [
          10,
          14,
          34,
          30
        ],
        [
          10,
          15,
          35,
          30
        ],
        [
          11,
          12,
          17,
          16
        ],
        [
          11,
          12,
          32,
          31
        ],
        [
          11,
          16,
          36,
          31
        ],
        [
          12,
          13,
          18,
          17
        ],
        [
          12,
          13,
          33,
          32
        ],
        [
          12,
          17,
          37,
          32
        ],
        [
          13,
          14,
          19,
          18
        ],
        [
          13,
          14,
          34,
          33
        ],
        [
          13,
          18,
          38,
          33
        ],
        [
          14,
          19,
          39,
          34
        ],
        [
          15,
          16,
          36,
          35
        ],
        [
          15,
          19,
          39,
          35
        ],
        [
          16,
          17,
          37,
          36
        ],
        [
          17,
          18,
          38,
          37
        ],
        [
          18,
          19,
          39,
          38
        ],
        [
          20,
          21,
          26,
          25
        ],
        [
          20,
          21,
          31,
          30
        ],
        [
          20,
          24,
          29,
          25
        ],
        [
          20,
          24,
          34,
          30
        ],
        [
          20,
          25,
          35,
          30
        ],
        [
          21,
          22,
          27,
          26
        ],
        [
          21,
          22,
          32,
          31
        ],
        [
          21,
          26,
          36,
          31
        ],
        [
          22,
          23,
          28,
          27
        ],
        [
          22,
          23,
          33,
          32
        ],
        [
          22,
          27,
          37,
          32
        ],
        [
          23,
          24,
          29,
          28
        ],
        [
          23,
          24,
          34,
          33
        ],
        [
          23,
          28,
          38,
          33
        ],
        [
          24,
          29,
          39,
          34
        ],
        [
          25,
          26,
          36,
          35
        ],
        [
          25,
          29,
          39,
          35
        ],
        [
          26,
          27,
          37,
          36
        ],
        [
          27,
          28,
          38,
          37
        ],
        [
          28,
          29,
          39,
          38
        ],
        [
          30,
          31,
          36,
          35
        ],
        [
          30,
          34,
          39,
          35
        ],
        [
          31,
          32,
          37,
          36
        ],
        [
          32,
          33,
          38,
          37
        ],
        [
          33,
          34,
          39,
          38
        ]
      ]
    }
   
    if (+dimensionOfFigure > 5) {
      // function getFacesArray(verticesArray, linesArray) {
      //   const facesArray = [];

      //   for (let i = 0; i < verticesArray.length; i++) {
      //     for (let j = i + 1; j < verticesArray.length; j++) {
      //       for (let k = i + 1; k < verticesArray.length; k++) {
      //         for (let l = i + 1; l < verticesArray.length; l++) {
      //           for (let m = i + 1; m < verticesArray.length; m++) {
      //             if (
      //               linesArray.some(([a, b]) => (a === i && b === j) || (a === j && b === i)) &&
      //               linesArray.some(([a, b]) => (a === j && b === k) || (a === k && b === j)) &&
      //               linesArray.some(([a, b]) => (a === k && b === l) || (a === l && b === k)) &&
      //               linesArray.some(([a, b]) => (a === l && b === m) || (a === m && b === l)) &&
      //               linesArray.some(([a, b]) => (a === m && b === i) || (a === i && b === m))
      //             ) {
      //               facesArray.push([i, j, k, l, m]);
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      //   return facesArray;
      // }


      // function getQuadsArray(verticesArray, linesArray) {
      //   const quadsArray = [];

      //   for (let i = 0; i < verticesArray.length; i++) {
      //     for (let j = i + 1; j < verticesArray.length; j++) {
      //       for (let k = i + 1; k < verticesArray.length; k++) {
      //         for (let l = i + 1; l < verticesArray.length; l++) {
      //           if (
      //             linesArray.some(([a, b]) => (a === i && b === j) || (a === j && b === i)) &&
      //             linesArray.some(([a, b]) => (a === j && b === k) || (a === k && b === j)) &&
      //             linesArray.some(([a, b]) => (a === k && b === l) || (a === l && b === k)) &&
      //             linesArray.some(([a, b]) => (a === l && b === i) || (a === i && b === l))
      //           ) {
      //             quadsArray.push([i, j, k, l]);
      //           }
      //         }
      //       }
      //     }
      //   }

      //   return quadsArray;
      // }

      // const quadPolygons = getQuadsArray(verticesArray, linesArray);

      // const clearRepeats = (arr) => {
      //   const res = [];
      //   const test = []
      //   arr.forEach(element => {
      //     const copyElement = [...element]
      //     if (!test.includes(JSON.stringify(copyElement.sort((a, b) => a - b)))) {
      //       let uniq = true;
      //       element.forEach(el => {
      //         if (element.indexOf(el) !== element.lastIndexOf(el)) uniq = false;
      //       })
      //       if (uniq) {
      //         res.push(element);
      //         test.push(JSON.stringify(copyElement));
      //       }
      //     }
      //   });
      //   return res;
      // };

      // polygons = [...polygons, ...clearRepeats(quadPolygons)]
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

export default PentagonPrism;
