import React, { useEffect } from 'react';
import generateCube from './generateCube';
import { verticesArray } from './vertices';
import generateMatrixes from './generateMatrixes';

export let canRotate = false;
export let mouseX = 0;
export let mouseY = 0;
let prevX = 0;
let prevY = 0;

const Svg = ({ dimension, anglesArray }) => {

    useEffect(() => {
        if (dimension > 1) {
            const matrix = generateMatrixes(dimension, anglesArray);
            generateCube(verticesArray, matrix, dimension);
        }
    });

    if (+dimension === 0) {
        return (
            <svg width="600" height="400" className="svg">
                <circle cx="300" cy="200" r="3" fill="white" />
            </svg>
        );
    }

    if (+dimension === 1) {
        return (
            <svg width="600" height="400" className="svg">
                <line
                    id="line1"
                    x1="200"
                    y1="200"
                    x2="400"
                    y2="200"
                    stroke="white"
                    className="line"
                />
            </svg>
        );
    }

    const amountOfLines = (2 ** (dimension - 1)) * dimension;
    let ids = 0;
    const lines = [];

    for (let i = 0; i < amountOfLines; i++) {
        lines.push(ids);
        ids += 1;
    }

    let cubesRepeats = 4;
    let square = [0, 1, 2, 3];

    const enableCanRotate = () => {
        canRotate = true;
    }

    const disableCanRotate = () => {
        canRotate = false;

    }

    const mouseMoving = (e) => {
        mouseX = prevX - e.clientX > 0 ? 1 : -1;
        mouseY = prevY - e.clientY > 0 ? 1 : -1;
        prevX = e.clientX;
        prevY = e.clientY;
    }

    return (
        <svg
            width="600"
            height="400"
            className="svg"
            onMouseDown={enableCanRotate}
            onMouseUp={disableCanRotate}
            onMouseMove={mouseMoving}
            onMouseLeave={disableCanRotate}
        >
            {
                lines.map((id, index) => {
                    let vertex1 = 0;
                    let vertex2 = 0;

                    if (index % 4 === 0 && index < 2 ** dimension) {
                        vertex1 = 0 + (Math.trunc(index / 4)) * 4;
                        vertex2 = 1 + (Math.trunc(index / 4)) * 4;
                    }

                    if (index % 4 === 1 && index < 2 ** dimension) {
                        vertex1 = 1 + (Math.trunc(index / 4)) * 4;
                        vertex2 = 3 + (Math.trunc(index / 4)) * 4;
                    }

                    if (index % 4 === 2 && index < 2 ** dimension) {
                        vertex1 = 3 + (Math.trunc(index / 4)) * 4;
                        vertex2 = 2 + (Math.trunc(index / 4)) * 4;
                    }

                    if (index % 4 === 3 && index < 2 ** dimension) {
                        vertex1 = 0 + (Math.trunc(index / 4)) * 4;
                        vertex2 = 2 + (Math.trunc(index / 4)) * 4;
                    }

                    if (index >= (2 ** dimension)) {

                        for (let i = 0; i < square.length; i++) {
                            if (index % cubesRepeats === i) {
                                vertex1 = square[i];
                                vertex2 = square[i] + cubesRepeats;

                                if (index % cubesRepeats === cubesRepeats - 1) {
                                    const doubleRepeats = cubesRepeats * 2;
                                    square = square.map(dot => dot + doubleRepeats);
                                }
                            }
                        }

                        if (square[0] > (2 ** dimension - 1)) {
                            cubesRepeats *= 2;
                            const twoLength = square.length * 2;

                            for (let i = 0; i < twoLength; i++) {
                                square[i] = i;
                            }
                        }
                    }

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
                })
            }
        </svg>
    );
}

export default Svg;