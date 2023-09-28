import React, { useMemo, useEffect, useState } from "react";

let polygons = [];

const TruncatedOctahedron = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces
}) => {
  const [testPolygon, setTestPolygon] = useState([]);

  useEffect(() => {
    if (testPolygon.length === 6) {
      console.log(testPolygon)
      setTestPolygon([])
    }
  }, [testPolygon]);
  let linesArray = [];
  const edgeLength = 2 * 30;
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
        if (length === edgeLength) {
          linesArray.push([i, j]);
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
    if (+dimensionOfFigure === 2) {
      polygons = [
        [
          0,
          2,
          1,
          3
        ]
      ];
    }
    if (+dimensionOfFigure === 3) {
      polygons = [
        [
          0,
          4,
          2,
          6
        ],
        [
          1,
          5,
          3,
          7
        ],
        [
          8,
          12,
          10,
          15
        ],
        [
          9,
          13,
          11,
          14
        ],
        [
          16,
          20,
          19,
          23
        ],
        [
          17,
          21,
          18,
          22
        ],
        [
          0,
          4,
          16,
          20,
          8,
          12
        ],
        [
          0,
          6,
          18,
          22,
          10,
          12
        ],
        [
          1,
          5,
          17,
          21,
          9,
          13
        ],
        [
          1,
          7,
          19,
          23,
          11,
          13
        ],
        [
          2,
          4,
          16,
          23,
          11,
          14
        ],
        [
          2,
          6,
          18,
          21,
          9,
          14
        ],
        [
          3,
          5,
          17,
          22,
          10,
          15
        ],
        [
          3,
          7,
          19,
          20,
          8,
          15
        ]
      ];
    }
    if (+dimensionOfFigure === 4) {
      polygons = [
        [
          0,
          4,
          8
        ],
        [
          0,
          8,
          4
        ],
        [
          1,
          5,
          9
        ],
        [
          1,
          9,
          5
        ],
        [
          2,
          6,
          10
        ],
        [
          2,
          10,
          6
        ],
        [
          3,
          7,
          11
        ],
        [
          3,
          11,
          7
        ],
        [
          12,
          16,
          20
        ],
        [
          12,
          20,
          16
        ],
        [
          13,
          17,
          21
        ],
        [
          13,
          21,
          17
        ],
        [
          14,
          18,
          22
        ],
        [
          14,
          22,
          18
        ],
        [
          15,
          19,
          23
        ],
        [
          15,
          23,
          19
        ],
        [
          24,
          28,
          68
        ],
        [
          24,
          68,
          28
        ],
        [
          25,
          29,
          69
        ],
        [
          25,
          69,
          29
        ],
        [
          26,
          30,
          70
        ],
        [
          26,
          70,
          30
        ],
        [
          27,
          31,
          71
        ],
        [
          27,
          71,
          31
        ],
        [
          32,
          36,
          64
        ],
        [
          32,
          64,
          36
        ],
        [
          33,
          37,
          65
        ],
        [
          33,
          65,
          37
        ],
        [
          34,
          38,
          66
        ],
        [
          34,
          66,
          38
        ],
        [
          35,
          39,
          67
        ],
        [
          35,
          67,
          39
        ],
        [
          40,
          44,
          60
        ],
        [
          40,
          60,
          44
        ],
        [
          41,
          45,
          61
        ],
        [
          41,
          61,
          45
        ],
        [
          42,
          46,
          62
        ],
        [
          42,
          62,
          46
        ],
        [
          43,
          47,
          63
        ],
        [
          43,
          63,
          47
        ],
        [
          48,
          76,
          80
        ],
        [
          48,
          80,
          76
        ],
        [
          49,
          77,
          81
        ],
        [
          49,
          81,
          77
        ],
        [
          50,
          78,
          82
        ],
        [
          50,
          82,
          78
        ],
        [
          51,
          79,
          83
        ],
        [
          51,
          83,
          79
        ],
        [
          52,
          72,
          92
        ],
        [
          52,
          92,
          72
        ],
        [
          53,
          73,
          93
        ],
        [
          53,
          93,
          73
        ],
        [
          54,
          74,
          94
        ],
        [
          54,
          94,
          74
        ],
        [
          55,
          75,
          95
        ],
        [
          55,
          95,
          75
        ],
        [
          56,
          84,
          88
        ],
        [
          56,
          88,
          84
        ],
        [
          57,
          85,
          89
        ],
        [
          57,
          89,
          85
        ],
        [
          58,
          86,
          90
        ],
        [
          58,
          90,
          86
        ],
        [
          59,
          87,
          91
        ],
        [
          59,
          91,
          87
        ],
        [
          0,
          1,
          48,
          49
        ],
        [
          2,
          4,
          50,
          52
        ],
        [
          3,
          8,
          51,
          56
        ],
        [
          5,
          6,
          53,
          54
        ],
        [
          7,
          9,
          55,
          57
        ],
        [
          10,
          11,
          58,
          59
        ],
        [
          12,
          13,
          60,
          61
        ],
        [
          14,
          16,
          62,
          64
        ],
        [
          15,
          20,
          63,
          68
        ],
        [
          17,
          18,
          65,
          66
        ],
        [
          19,
          21,
          67,
          69
        ],
        [
          22,
          23,
          70,
          71
        ],
        [
          24,
          25,
          72,
          73
        ],
        [
          26,
          28,
          74,
          76
        ],
        [
          27,
          32,
          75,
          80
        ],
        [
          29,
          30,
          77,
          78
        ],
        [
          31,
          33,
          79,
          81
        ],
        [
          34,
          35,
          82,
          83
        ],
        [
          36,
          37,
          84,
          85
        ],
        [
          38,
          40,
          86,
          88
        ],
        [
          39,
          44,
          87,
          92
        ],
        [
          41,
          42,
          89,
          90
        ],
        [
          43,
          45,
          91,
          93
        ],
        [
          46,
          47,
          94,
          95
        ],
        [
          26,
          28,
          24,
          25,
          29,
          30
        ],
        [
          29,
          25,
          72,
          52,
          50,
          78
        ],
        [
          77,
          78,
          50,
          4,
          0,
          49
        ],
        [
          77,
          49,
          48,
          76,
          26,
          30
        ],
        [
          74,
          76,
          48,
          1,
          5,
          54
        ],
        [
          1,
          0,
          4,
          2,
          6,
          5
        ],
        [
          53,
          6,
          2,
          52,
          72,
          73
        ],
        [
          28,
          74,
          54,
          53,
          73,
          24
        ],
        [
          93,
          91,
          59,
          10,
          6,
          53
        ],
        [
          54,
          94,
          47,
          43,
          93,
          53
        ],
        [
          9,
          55,
          95,
          94,
          54,
          5
        ],
        [
          8,
          3,
          7,
          9,
          1,
          0
        ],
        [
          79,
          51,
          8,
          0,
          49,
          81
        ],
        [
          77,
          30,
          70,
          71,
          31,
          81
        ],
        [
          51,
          8,
          4,
          50,
          82,
          83
        ],
        [
          81,
          77,
          78,
          82,
          83,
          79
        ],
        [
          82,
          35,
          67,
          69,
          29,
          78
        ],
        [
          68,
          28,
          74,
          94,
          47,
          63
        ],
        [
          74,
          76,
          80,
          75,
          95,
          94
        ],
        [
          49,
          81,
          31,
          27,
          80,
          48
        ],
        [
          76,
          26,
          70,
          71,
          27,
          80
        ],
        [
          69,
          19,
          23,
          70,
          30,
          29
        ],
        [
          69,
          25,
          24,
          68,
          15,
          19
        ],
        [
          68,
          63,
          43,
          93,
          73,
          24
        ],
        [
          2,
          4,
          8,
          3,
          11,
          10
        ],
        [
          5,
          9,
          7,
          11,
          10,
          6
        ],
        [
          87,
          59,
          10,
          2,
          52,
          92
        ],
        [
          72,
          73,
          93,
          91,
          87,
          92
        ],
        [
          39,
          92,
          52,
          50,
          82,
          35
        ],
        [
          80,
          48,
          1,
          9,
          55,
          75
        ],
        [
          70,
          26,
          28,
          68,
          15,
          23
        ],
        [
          39,
          67,
          69,
          25,
          72,
          92
        ],
        [
          13,
          17,
          66,
          38,
          40,
          60
        ],
        [
          13,
          60,
          44,
          39,
          67,
          21
        ],
        [
          87,
          44,
          40,
          86,
          58,
          59
        ],
        [
          21,
          17,
          66,
          34,
          35,
          67
        ],
        [
          66,
          65,
          33,
          79,
          83,
          34
        ],
        [
          12,
          16,
          14,
          18,
          17,
          13
        ],
        [
          56,
          51,
          79,
          33,
          37,
          84
        ],
        [
          88,
          86,
          58,
          11,
          3,
          56
        ],
        [
          22,
          18,
          65,
          33,
          31,
          71
        ],
        [
          32,
          36,
          37,
          33,
          31,
          27
        ],
        [
          27,
          71,
          22,
          14,
          64,
          32
        ],
        [
          32,
          36,
          85,
          57,
          55,
          75
        ],
        [
          46,
          42,
          41,
          45,
          43,
          47
        ],
        [
          86,
          40,
          60,
          61,
          41,
          90
        ],
        [
          41,
          42,
          62,
          16,
          12,
          61
        ],
        [
          57,
          7,
          3,
          56,
          84,
          85
        ],
        [
          18,
          17,
          21,
          19,
          23,
          22
        ],
        [
          45,
          91,
          59,
          58,
          90,
          41
        ],
        [
          22,
          14,
          16,
          20,
          15,
          23
        ],
        [
          20,
          12,
          61,
          45,
          43,
          63
        ],
        [
          46,
          62,
          64,
          32,
          75,
          95
        ],
        [
          66,
          38,
          88,
          84,
          37,
          65
        ],
        [
          89,
          57,
          55,
          95,
          46,
          42
        ],
        [
          86,
          90,
          89,
          85,
          84,
          88
        ],
        [
          36,
          64,
          62,
          42,
          89,
          85
        ],
        [
          44,
          39,
          35,
          34,
          38,
          40
        ],
        [
          91,
          87,
          44,
          60,
          61,
          45
        ],
        [
          14,
          18,
          65,
          37,
          36,
          64
        ],
        [
          63,
          20,
          16,
          62,
          46,
          47
        ],
        [
          15,
          20,
          12,
          13,
          21,
          19
        ],
        [
          11,
          58,
          90,
          89,
          57,
          7
        ],
        [
          38,
          88,
          56,
          51,
          83,
          34
        ]
      ];

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

    }


    // if (+dimensionOfFigure > 1) {

    //   function getFacesArray(verticesArray, linesArray) {
    //     const facesArray = [];

    //     for (let i = 0; i < verticesArray.length; i++) {
    //       for (let j = i + 1; j < verticesArray.length; j++) {
    //         for (let k = i + 1; k < verticesArray.length; k++) {
    //           if (
    //             linesArray.some(([a, b]) => (a === i && b === j) || (a === j && b === i)) &&
    //             linesArray.some(([a, b]) => (a === j && b === k) || (a === k && b === j)) &&
    //             linesArray.some(([a, b]) => (a === k && b === i) || (a === i && b === k))
    //           ) {
    //             facesArray.push([i, j, k]);
    //           }
    //         }
    //       }
    //     }
    //     return facesArray;
    //   }


    //   function getQuadsArray(verticesArray, linesArray) {
    //     const quadsArray = [];

    //     for (let i = 0; i < verticesArray.length; i++) {
    //       for (let j = i + 1; j < verticesArray.length; j++) {
    //         for (let k = i + 1; k < verticesArray.length; k++) {
    //           for (let l = i + 1; l < verticesArray.length; l++) {
    //             if (
    //               linesArray.some(([a, b]) => (a === i && b === j) || (a === j && b === i)) &&
    //               linesArray.some(([a, b]) => (a === j && b === k) || (a === k && b === j)) &&
    //               linesArray.some(([a, b]) => (a === k && b === l) || (a === l && b === k)) &&
    //               linesArray.some(([a, b]) => (a === l && b === i) || (a === i && b === l))
    //             ) {
    //               quadsArray.push([i, j, k, l]);
    //             }
    //           }
    //         }
    //       }
    //     }

    //     return quadsArray;
    //   }

    //   const clearRepeats = (arr) => {
    //     const res = [];
    //     const test = []
    //     arr.forEach(element => {
    //       const copyElement = [...element]
    //       if (!test.includes(JSON.stringify(copyElement.sort((a, b) => a - b)))) {
    //         let uniq = true;
    //         element.forEach(el => {
    //           if (element.indexOf(el) !== element.lastIndexOf(el)) uniq = false;
    //         })
    //         if (uniq) {
    //           res.push(element);
    //           test.push(JSON.stringify(copyElement));
    //         }
    //       }
    //     });
    //     return res;
    //   };

    //   function getHexFacesArray(verticesArray, linesArray) {
    //     const facesArray = [];

    //     for (let i = 0; i < verticesArray.length; i++) {
    //       for (let j = i + 1; j < verticesArray.length; j++) {
    //         for (let k = i + 1; k < verticesArray.length; k++) {
    //           for (let l = i + 1; l < verticesArray.length; l++) {
    //             for (let m = i + 1; m < verticesArray.length; m++) {
    //               for (let n = i + 1; n < verticesArray.length; n++) {
    //                 if (
    //                   linesArray.some(([a, b]) => (a === i && b === j) || (a === j && b === i)) &&
    //                   linesArray.some(([a, b]) => (a === j && b === k) || (a === k && b === j)) &&
    //                   linesArray.some(([a, b]) => (a === k && b === l) || (a === l && b === k)) &&
    //                   linesArray.some(([a, b]) => (a === l && b === m) || (a === m && b === l)) &&
    //                   linesArray.some(([a, b]) => (a === m && b === n) || (a === n && b === m)) &&
    //                   linesArray.some(([a, b]) => (a === n && b === i) || (a === i && b === n))

    //                 ) {
    //                   facesArray.push([i, j, k, l, m, n]);
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //     return facesArray;
    //   }
    //   // polygons = getFacesArray(verticesArray, linesArray)
    //   // const hexagons = clearRepeats(getHexFacesArray(verticesArray, linesArray));
    //   // console.log(hexagons)
    // }

    // console.log(polygons)
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
              console.log("test");
              setTestPolygon([...testPolygon, index])
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

export default TruncatedOctahedron;
