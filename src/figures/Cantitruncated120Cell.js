import React, { useMemo } from "react";

let polygons = [];

const Cantitruncated120Cell = ({
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

        if (
          length === 14 ||
          length === 15 ||
          length === 16 ||
          length === 20
        ) {
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
    if (true) {
      function get3FacesArray(verticesArray, linesArray) {
        const facesArray = [];
        let percent = 0;

        for (let i = 0; i < verticesArray.length; i++) {
          percent += (100 / verticesArray.length);
          console.clear();
          console.log(percent + "% - 3")
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

      function get5FacesArray(verticesArray, linesArray) {
        const facesArray = [];
        let percent = 0;

        for (let i = 0; i < verticesArray.length; i++) {
          percent += (100 / verticesArray.length);
          console.clear();
          console.log(percent + "% - 5")
          for (let j = i + 1; j < verticesArray.length; j++) {
            if (linesArray.some(([a, b]) => (a === i && b === j) || (a === j && b === i))) {
              for (let k = i + 1; k < verticesArray.length; k++) {
                if (linesArray.some(([a, b]) => (a === j && b === k) || (a === k && b === j))) {
                  for (let l = i + 1; l < verticesArray.length; l++) {
                    if (linesArray.some(([a, b]) => (a === k && b === l) || (a === l && b === k))) {
                      for (let m = i + 1; m < verticesArray.length; m++) {
                        if (
                          linesArray.some(([a, b]) => (a === l && b === m) || (a === m && b === l)) &&
                          linesArray.some(([a, b]) => (a === m && b === i) || (a === i && b === m))
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
      }


      function get6FacesArray(verticesArray, linesArray) {
        const hexArray = [];

        let percent = 0;
        for (let i = 0; i < verticesArray.length; i++) {
          percent += (100 / verticesArray.length);
          console.clear();
          console.log(percent + "% - 6")

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
          console.log(percent + "% - 4")
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
        // ...clearRepeats(polygons),
        ...clearRepeats(get3FacesArray(verticesArray, linesArray)),
        ...clearRepeats(get4FacesArray(verticesArray, linesArray)),
        ...clearRepeats(get5FacesArray(verticesArray, linesArray)),
        // ...clearRepeats(get6FacesArray(verticesArray, linesArray)),
        // ...clearRepeats(get8FacesArray(verticesArray, linesArray)),
      ];
    }

    // const clearExtra = () => {
    //   let progress = 0;
    //   const res = polygons4.filter((el, index) => {
    //     progress += (100 / polygons4.length);
    //     console.clear();
    //     console.log(progress + "%")
    //     let status = true;
    //     for (let i = 0; i < polygons3.length; i++) {
    //       if (polygons3[i].length === 3) {
    //         if (el.includes(polygons3[i][0]) && el.includes(polygons3[i][1]) && el.includes(polygons3[i][2])) {
    //           status = false;
    //           break;
    //         }
    //       }
    //     }

    //     return status;
    //   })

    //   return res;
    // }

    console.log(polygons)

  }, []);

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

export default Cantitruncated120Cell;
