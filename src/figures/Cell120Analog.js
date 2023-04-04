import React, { useMemo } from "react";

let polygons = [];

const Cell120Analog = ({
  verticesArray,
  dimensionOfFigure,
  displayEdges,
  displayVertices,
  onWheel,
  onMouseOver,
  onMouseLeave,
  displayFaces,
}) => {
  let linesArray = [];
  const edgeLength =
    +dimensionOfFigure === 3 ? 100 : Math.round((2 / 1.618 ** 2) * 50);

  if (+dimensionOfFigure > 2) {
    for (let i = 0; i < verticesArray.length; i++) {
      for (let j = i; j < verticesArray.length; j++) {
        if (i !== j) {
          let length = 0;
          for (let k = 0; k < dimensionOfFigure; k++) {
            length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
          }
          length = Math.round(length ** (1 / 2));

          if (
            length === edgeLength ||
            length === edgeLength - 1 ||
            length === edgeLength + 1
          ) {
            linesArray.push([i, j]);
          }
        }
      }
    }
  } else if (+dimensionOfFigure === 2) {
    linesArray = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
    ];
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
      polygons = [[0, 1, 2, 3, 4]];
    }

    if (+dimensionOfFigure === 3) {
      polygons = [
        [0, 8, 4, 18, 16],
        [1, 9, 5, 19, 17],
        [1, 17, 3, 14, 13],
        [13, 14, 4, 18, 2],
        [14, 3, 11, 8, 4],
        [1, 13, 2, 10, 9],
        [17, 3, 11, 7, 19],
        [10, 2, 18, 16, 6],
        [6, 16, 0, 12, 15],
        [12, 0, 8, 11, 7],
        [5, 15, 12, 7, 19],
        [10, 6, 15, 5, 9],
      ];
    }

    if (+dimensionOfFigure >= 4) {
      // function getFacesArray(linesArray) {
      //   let facesArray = [];
      //   for (let i = 0; i < linesArray.length; i++) {
      //     let [v1, v2] = linesArray[i];
      //     for (let j = i + 1; j < linesArray.length; j++) {
      //       let [w1, w2] = linesArray[j];
      //       let commonVertices = [v1, v2].filter(x => [w1, w2].includes(x));
      //       if (commonVertices.length === 1) {
      //         let v3 = [v1, v2].filter(x => !commonVertices.includes(x))[0];
      //         let w3 = [w1, w2].filter(x => !commonVertices.includes(x))[0];
      //         if ([v3, w3].some(x => x > commonVertices[0])) {
      //           facesArray.push([v3, w3, commonVertices[0], v2, v1]);
      //         } else {
      //           facesArray.push([v3, w3, commonVertices[0], v1, v2]);
      //         }
      //       }
      //     }
      //   }
      //   return facesArray;
      // }

      polygons = [
        [159, 224, 228, 171, 288],
        [159, 288, 292, 167, 256],
        [159, 256, 258, 163, 224],
        [163, 258, 175, 294, 290],
        [163, 290, 179, 228, 224],
        [167, 226, 175, 258, 256],
        [167, 292, 183, 230, 226],
        [171, 228, 179, 262, 260],
        [171, 260, 183, 292, 288],
        [187, 294, 175, 226, 230],
        [187, 230, 183, 260, 262],
        [187, 262, 179, 290, 294],

        [256, 352, 492, 39, 167],
        [256, 352, 488, 31, 159],
        [31, 552, 384, 288, 159],
        [288, 384, 11, 388, 292],
        [292, 388, 556, 39, 167],
        [352, 488, 94, 98, 492],
        [488, 31, 552, 520, 94],
        [552, 384, 11, 368, 520],
        [368, 11, 388, 556, 524],
        [524, 556, 39, 492, 98],
        [94, 520, 368, 524, 98],

        [288, 384, 560, 43, 171],
        [496, 43, 171, 260, 356],
        [260, 356, 500, 55, 183],
        [183, 55, 564, 388, 292],
        [384, 560, 528, 372, 11],
        [528, 560, 43, 496, 105],
        [105, 496, 356, 500, 117],
        [117, 500, 55, 564, 532],
        [532, 564, 388, 11, 372],
        [384, 560, 43, 171, 288],
        [528, 105, 117, 532, 372],

        [183, 55, 436, 326, 230],
        [230, 326, 19, 322, 226],
        [167, 226, 322, 428, 39],
        [322, 428, 540, 380, 19],
        [380, 548, 436, 326, 19],
        [548, 123, 564, 55, 436],
        [123, 111, 556, 388, 564],
        [39, 556, 111, 540, 428],
        [111, 123, 548, 380, 540],

        [428, 102, 508, 492, 39],
        [508, 362, 8, 352, 492],
        [352, 8, 354, 258, 256],
        [258, 354, 494, 47, 175],
        [226, 175, 47, 430, 322],
        [428, 322, 430, 114, 102],
        [114, 430, 47, 494, 510],
        [510, 494, 354, 8, 362],
        [102, 114, 510, 362, 508],

        [230, 326, 438, 59, 187],
        [59, 566, 390, 294, 187],
        [294, 390, 558, 47, 175],
        [382, 542, 430, 322, 19],
        [542, 135, 558, 47, 430],
        [147, 566, 390, 558, 135],
        [59, 566, 147, 550, 438],
        [326, 438, 550, 382, 19],
        [550, 147, 135, 542, 382],

        [436, 127, 139, 438, 326],
        [139, 518, 502, 59, 438],
        [502, 358, 262, 187, 59],
        [358, 502, 518, 366, 15],
        [516, 366, 518, 139, 127],
        [55, 500, 516, 127, 436],
        [260, 262, 358, 15, 356],
        [356, 15, 366, 516, 500],

        [566, 59, 502, 143, 534],
        [143, 502, 358, 498, 131],
        [131, 498, 51, 562, 530],
        [51, 498, 358, 262, 179],
        [562, 51, 179, 290, 386],
        [390, 23, 386, 290, 294],
        [374, 530, 562, 386, 23],
        [566, 534, 374, 23, 390],
        [143, 131, 530, 374, 534],

        [47, 558, 526, 120, 494],
        [526, 558, 390, 23, 370],
        [370, 23, 386, 554, 522],
        [554, 386, 290, 163, 35],
        [490, 35, 163, 258, 354],
        [494, 120, 108, 490, 354],
        [108, 522, 554, 35, 490],
        [120, 526, 370, 522, 108],

        [8, 354, 490, 506, 360],
        [506, 490, 35, 426, 97],
        [35, 163, 224, 320, 426],
        [320, 224, 159, 31, 424],
        [93, 424, 31, 488, 504],
        [97, 426, 320, 424, 93],
        [360, 504, 488, 352, 8],
        [506, 97, 93, 504, 360],

        [179, 51, 434, 324, 228],
        [228, 324, 10, 320, 224],
        [228, 324, 432, 43, 171],
        [320, 10, 376, 536, 424],
        [10, 324, 432, 544, 376],
        [544, 432, 43, 560, 99],
        [95, 99, 560, 384, 552],
        [31, 424, 536, 95, 552],
        [95, 536, 376, 544, 99],

        [554, 386, 562, 122, 110],
        [35, 554, 110, 538, 426],
        [122, 562, 51, 434, 546],
        [378, 546, 434, 324, 10],
        [538, 110, 122, 546, 378],
        [426, 538, 378, 10, 320],

        [324, 434, 116, 104, 432],
        [51, 498, 514, 116, 434],
        [498, 358, 15, 364, 514],
        [364, 15, 356, 496, 512],
        [104, 512, 496, 43, 432],
        [116, 514, 364, 512, 104],
      ];
    }
  }, [dimensionOfFigure]);
  // console.log(polygons);

  return (
    <svg
      width="600"
      height="400"
      className="svg"
      onWheel={onWheel}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {displayFaces && +dimensionOfFigure >= 2
        ? polygons.map((arr, index) => (
            <polygon
              data-points={JSON.stringify(arr)}
              key={index}
              points="0 0, 0 0, 0 0, 0 0"
              fill={`rgba(255,255, 255, 0.3)`}
              className="polygon"
              data-type="5"
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

export default Cell120Analog;
