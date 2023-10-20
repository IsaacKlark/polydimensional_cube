import React, { useMemo } from "react";
import {
    linesArray as _linesArray,
    setLinesArray,
    modified,
    polygonsArray,
    setPolygonsArray,
} from "../vertices";
let polygons = []
const CubeAtopCuboctahedron = ({
    verticesArray,
    dimensionOfFigure,
    displayEdges,
    displayVertices,
    onWheel,
    onMouseOver,
    onMouseLeave,
    displayFaces
}) => {
    if (!modified) {
        let linesArray = [];

        for (let i = 0; i < verticesArray.length; i++) {
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
        }

        const amountOfLines = linesArray.length;
        let ids = 0;
        const lines = [];

        for (let i = 0; i < amountOfLines; i++) {
            lines.push(ids);
            ids += 1;
        }
        setLinesArray(linesArray)
    }

    useMemo(() => {
        if (!modified) {

            polygons = [
                [
                    0,
                    5,
                    8
                ],
                [
                    0,
                    6,
                    12
                ],
                [
                    0,
                    7,
                    16
                ],
                [
                    0,
                    8,
                    12
                ],
                [
                    0,
                    8,
                    16
                ],
                [
                    0,
                    12,
                    16
                ],
                [
                    1,
                    2,
                    17
                ],
                [
                    1,
                    3,
                    9
                ],
                [
                    1,
                    4,
                    13
                ],
                [
                    1,
                    9,
                    13
                ],
                [
                    1,
                    9,
                    17
                ],
                [
                    1,
                    13,
                    17
                ],
                [
                    2,
                    5,
                    14
                ],
                [
                    2,
                    6,
                    10
                ],
                [
                    2,
                    10,
                    14
                ],
                [
                    2,
                    10,
                    17
                ],
                [
                    2,
                    14,
                    17
                ],
                [
                    3,
                    6,
                    19
                ],
                [
                    3,
                    7,
                    15
                ],
                [
                    3,
                    9,
                    15
                ],
                [
                    3,
                    9,
                    19
                ],
                [
                    3,
                    15,
                    19
                ],
                [
                    4,
                    5,
                    18
                ],
                [
                    4,
                    7,
                    11
                ],
                [
                    4,
                    11,
                    13
                ],
                [
                    4,
                    11,
                    18
                ],
                [
                    4,
                    13,
                    18
                ],
                [
                    5,
                    8,
                    14
                ],
                [
                    5,
                    8,
                    18
                ],
                [
                    5,
                    14,
                    18
                ],
                [
                    6,
                    10,
                    12
                ],
                [
                    6,
                    10,
                    19
                ],
                [
                    6,
                    12,
                    19
                ],
                [
                    7,
                    11,
                    15
                ],
                [
                    7,
                    11,
                    16
                ],
                [
                    7,
                    15,
                    16
                ],
                [
                    8,
                    12,
                    16
                ],
                [
                    8,
                    14,
                    18
                ],
                [
                    9,
                    13,
                    17
                ],
                [
                    9,
                    15,
                    19
                ],
                [
                    10,
                    12,
                    19
                ],
                [
                    10,
                    14,
                    17
                ],
                [
                    11,
                    13,
                    18
                ],
                [
                    11,
                    15,
                    16
                ],
                [
                    0,
                    5,
                    2,
                    6
                ],
                [
                    0,
                    5,
                    4,
                    7
                ],
                [
                    0,
                    6,
                    3,
                    7
                ],
                [
                    1,
                    2,
                    5,
                    4
                ],
                [
                    1,
                    2,
                    6,
                    3
                ],
                [
                    1,
                    3,
                    7,
                    4
                ],
                [
                    8,
                    12,
                    10,
                    14
                ],
                [
                    8,
                    16,
                    11,
                    18
                ],
                [
                    9,
                    13,
                    11,
                    15
                ],
                [
                    9,
                    17,
                    10,
                    19
                ],
                [
                    12,
                    16,
                    15,
                    19
                ],
                [
                    13,
                    17,
                    14,
                    18
                ]
            ]
            setPolygonsArray(polygons)
        }
    }, [modified])

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
                _linesArray.map((id, index) => {
                    let vertex1 = 0;
                    let vertex2 = 0;

                    vertex1 = _linesArray[index][0];
                    vertex2 = _linesArray[index][1];
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
                ? polygonsArray.map((arr, index) => (
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

export default CubeAtopCuboctahedron;
