import React, { useMemo, useState } from "react";

let polygons = [];

const Omnitruncated5Cell = ({
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
  const edgeLength = 60;
  const test = new Set();

  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }
        length = Math.round(length ** (1 / 2));
        test.add(length)
        if (+dimensionOfFigure > 2) {
          if (length === edgeLength || length === edgeLength - 1) {
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
    polygons = [
      [
        7,
        79,
        94,
        9,
        81,
        90
      ],
      [
        6,
        78,
        92,
        8,
        80,
        88
      ],
      [
        5,
        77,
        91,
        11,
        83,
        95
      ],
      [
        4,
        76,
        89,
        10,
        82,
        93
      ],
      [
        1,
        73,
        85,
        3,
        75,
        87
      ],
      [
        0,
        72,
        84,
        2,
        74,
        86
      ],
      [
        11,
        23,
        119,
        69,
        47,
        83
      ],
      [
        10,
        22,
        117,
        67,
        45,
        82
      ],
      [
        9,
        21,
        114,
        60,
        42,
        81
      ],
      [
        8,
        20,
        112,
        56,
        40,
        80
      ],
      [
        5,
        17,
        115,
        63,
        34,
        77
      ],
      [
        4,
        16,
        113,
        59,
        32,
        76
      ],
      [
        1,
        13,
        109,
        51,
        26,
        73
      ],
      [
        0,
        12,
        108,
        48,
        24,
        72
      ],
      [
        7,
        19,
        118,
        71,
        39,
        79
      ],
      [
        6,
        18,
        116,
        61,
        37,
        78
      ],
      [
        3,
        15,
        111,
        55,
        31,
        75
      ],
      [
        2,
        14,
        110,
        52,
        29,
        74
      ],
      [
        27,
        31,
        55,
        69,
        47,
        35
      ],
      [
        26,
        30,
        38,
        42,
        60,
        51
      ],
      [
        25,
        29,
        52,
        67,
        45,
        33
      ],
      [
        24,
        28,
        36,
        40,
        56,
        48
      ],
      [
        75,
        79,
        94,
        103,
        99,
        87
      ],
      [
        74,
        78,
        92,
        102,
        98,
        86
      ],
      [
        27,
        31,
        39,
        43,
        66,
        54
      ],
      [
        25,
        29,
        37,
        41,
        57,
        49
      ],
      [
        73,
        77,
        91,
        101,
        97,
        85
      ],
      [
        72,
        76,
        89,
        100,
        96,
        84
      ],
      [
        26,
        30,
        53,
        68,
        46,
        34
      ],
      [
        24,
        28,
        50,
        62,
        44,
        32
      ],
      [
        15,
        97,
        101,
        23,
        119,
        111
      ],
      [
        14,
        96,
        100,
        22,
        117,
        110
      ],
      [
        13,
        99,
        103,
        21,
        114,
        109
      ],
      [
        12,
        98,
        102,
        20,
        112,
        108
      ],
      [
        15,
        19,
        105,
        65,
        53,
        97
      ],
      [
        14,
        18,
        104,
        58,
        50,
        96
      ],
      [
        3,
        7,
        90,
        38,
        30,
        85
      ],
      [
        2,
        6,
        88,
        36,
        28,
        84
      ],
      [
        13,
        17,
        107,
        70,
        54,
        99
      ],
      [
        12,
        16,
        106,
        64,
        49,
        98
      ],
      [
        1,
        5,
        95,
        35,
        27,
        87
      ],
      [
        0,
        4,
        93,
        33,
        25,
        86
      ],
      [
        108,
        112,
        114,
        109,
        115,
        113
      ],
      [
        80,
        81,
        90,
        105,
        104,
        88
      ],
      [
        48,
        56,
        60,
        51,
        63,
        59
      ],
      [
        36,
        40,
        42,
        38,
        65,
        58
      ],
      [
        20,
        21,
        103,
        66,
        57,
        102
      ],
      [
        8,
        9,
        94,
        43,
        41,
        92
      ],
      [
        82,
        83,
        95,
        107,
        106,
        93
      ],
      [
        37,
        41,
        43,
        39,
        71,
        61
      ],
      [
        33,
        45,
        47,
        35,
        70,
        64
      ],
      [
        32,
        44,
        46,
        34,
        63,
        59
      ],
      [
        16,
        106,
        107,
        17,
        115,
        113
      ],
      [
        50,
        58,
        65,
        53,
        68,
        62
      ],
      [
        22,
        23,
        101,
        68,
        62,
        100
      ],
      [
        10,
        11,
        91,
        46,
        44,
        89
      ],
      [
        49,
        57,
        66,
        54,
        70,
        64
      ],
      [
        18,
        104,
        105,
        19,
        118,
        116
      ],
      [
        110,
        116,
        118,
        111,
        119,
        117
      ],
      [
        52,
        61,
        71,
        55,
        69,
        67
      ],
      [
        0,
        4,
        16,
        12
      ],
      [
        0,
        4,
        76,
        72
      ],
      [
        0,
        12,
        98,
        86
      ],
      [
        1,
        5,
        17,
        13
      ],
      [
        1,
        5,
        77,
        73
      ],
      [
        1,
        13,
        99,
        87
      ],
      [
        2,
        6,
        18,
        14
      ],
      [
        2,
        6,
        78,
        74
      ],
      [
        2,
        14,
        96,
        84
      ],
      [
        3,
        7,
        19,
        15
      ],
      [
        3,
        7,
        79,
        75
      ],
      [
        3,
        15,
        97,
        85
      ],
      [
        4,
        16,
        106,
        93
      ],
      [
        5,
        17,
        107,
        95
      ],
      [
        6,
        18,
        104,
        88
      ],
      [
        7,
        19,
        105,
        90
      ],
      [
        8,
        9,
        21,
        20
      ],
      [
        8,
        9,
        81,
        80
      ],
      [
        8,
        20,
        102,
        92
      ],
      [
        9,
        21,
        103,
        94
      ],
      [
        10,
        11,
        23,
        22
      ],
      [
        10,
        11,
        83,
        82
      ],
      [
        10,
        22,
        100,
        89
      ],
      [
        11,
        23,
        101,
        91
      ],
      [
        12,
        16,
        113,
        108
      ],
      [
        13,
        17,
        115,
        109
      ],
      [
        14,
        18,
        116,
        110
      ],
      [
        15,
        19,
        118,
        111
      ],
      [
        20,
        21,
        114,
        112
      ],
      [
        22,
        23,
        119,
        117
      ],
      [
        24,
        28,
        84,
        72
      ],
      [
        24,
        32,
        59,
        48
      ],
      [
        24,
        32,
        76,
        72
      ],
      [
        25,
        29,
        74,
        86
      ],
      [
        25,
        33,
        64,
        49
      ],
      [
        25,
        49,
        98,
        86
      ],
      [
        26,
        30,
        85,
        73
      ],
      [
        26,
        34,
        63,
        51
      ],
      [
        26,
        34,
        77,
        73
      ],
      [
        27,
        31,
        75,
        87
      ],
      [
        27,
        35,
        70,
        54
      ],
      [
        27,
        54,
        99,
        87
      ],
      [
        28,
        36,
        58,
        50
      ],
      [
        28,
        50,
        96,
        84
      ],
      [
        29,
        37,
        61,
        52
      ],
      [
        29,
        37,
        78,
        74
      ],
      [
        30,
        38,
        65,
        53
      ],
      [
        30,
        53,
        97,
        85
      ],
      [
        31,
        39,
        71,
        55
      ],
      [
        31,
        39,
        79,
        75
      ],
      [
        32,
        44,
        89,
        76
      ],
      [
        33,
        45,
        82,
        93
      ],
      [
        33,
        64,
        106,
        93
      ],
      [
        34,
        46,
        91,
        77
      ],
      [
        35,
        47,
        83,
        95
      ],
      [
        35,
        70,
        107,
        95
      ],
      [
        36,
        40,
        80,
        88
      ],
      [
        36,
        58,
        104,
        88
      ],
      [
        37,
        41,
        92,
        78
      ],
      [
        38,
        42,
        81,
        90
      ],
      [
        38,
        65,
        105,
        90
      ],
      [
        39,
        43,
        94,
        79
      ],
      [
        40,
        42,
        60,
        56
      ],
      [
        40,
        42,
        81,
        80
      ],
      [
        41,
        43,
        66,
        57
      ],
      [
        41,
        57,
        102,
        92
      ],
      [
        43,
        66,
        103,
        94
      ],
      [
        44,
        46,
        68,
        62
      ],
      [
        44,
        62,
        100,
        89
      ],
      [
        45,
        47,
        69,
        67
      ],
      [
        45,
        47,
        83,
        82
      ],
      [
        46,
        68,
        101,
        91
      ],
      [
        48,
        56,
        112,
        108
      ],
      [
        48,
        59,
        113,
        108
      ],
      [
        49,
        57,
        102,
        98
      ],
      [
        50,
        62,
        100,
        96
      ],
      [
        51,
        60,
        114,
        109
      ],
      [
        51,
        63,
        115,
        109
      ],
      [
        52,
        61,
        116,
        110
      ],
      [
        52,
        67,
        117,
        110
      ],
      [
        53,
        68,
        101,
        97
      ],
      [
        54,
        66,
        103,
        99
      ],
      [
        55,
        69,
        119,
        111
      ],
      [
        55,
        71,
        118,
        111
      ],
      [
        56,
        60,
        114,
        112
      ],
      [
        58,
        65,
        105,
        104
      ],
      [
        59,
        63,
        115,
        113
      ],
      [
        61,
        71,
        118,
        116
      ],
      [
        64,
        70,
        107,
        106
      ],
      [
        67,
        69,
        119,
        117
      ]
    ]
    if (false) {
      function get3FacesArray(verticesArray, linesArray) {
        const facesArray = [];

        for (let i = 0; i < verticesArray.length; i++) {
          for (let j = i + 1; j < verticesArray.length; j++) {
            if (linesArray.some(([a, b]) => (a === i && b === j) || (a === j && b === i))) {
              for (let k = i + 1; k < verticesArray.length; k++) {
                if (
                  linesArray.some(([a, b]) => (a === j && b === k) || (a === k && b === j)) &&
                  linesArray.some(([a, b]) => (a === k && b === i) || (a === i && b === k))
                ) {
                  facesArray.push([i, j, k]);
                }
              }
            }
          }
        }
        return facesArray;
      }


      function get6FacesArray(verticesArray, linesArray) {
        const hexArray = [];

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
                            if (
                              linesArray.some(([a, b]) => (a === m && b === n) || (a === n && b === m)) &&
                              linesArray.some(([a, b]) => (a === n && b === i) || (a === i && b === n))
                            ) {
                              hexArray.push([i, j, k, l, m, n]);
                            }
                          }
                        } else { continue }
                      }
                    } else { continue }
                  }
                } else { continue }
              }
            } else { continue }
          }
        }

        return hexArray;
      }

      function get4FacesArray(verticesArray, linesArray) {
        const quadsArray = [];

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
                    if (
                      linesArray.some(([a, b]) => (a === k && b === l) || (a === l && b === k)) &&
                      linesArray.some(([a, b]) => (a === l && b === i) || (a === i && b === l))
                    ) {
                      quadsArray.push([i, j, k, l]);
                    }
                  }
                }
              }
            }
          }
        }

        return quadsArray;
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

      polygons = [
        ...clearRepeats(polygons),
        // ...clearRepeats(get3FacesArray(verticesArray, linesArray)),
        ...clearRepeats(get4FacesArray(verticesArray, linesArray)),
        // ...clearRepeats(get6FacesArray(verticesArray, linesArray)),
        // ...clearRepeats(get8FacesArray(verticesArray, linesArray)),
      ];
    }

    console.log(polygons)
  }, [])

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

export default Omnitruncated5Cell;
