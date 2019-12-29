import React from 'react';
import angles, { anglesArray } from './angles';
import generateMatrixes from './generateMatrixes';
import generateCube from './generateCube';
import vertices, { verticesArray } from './vertices'
import { useMouse } from './App';
import { canRotate, mouseX, mouseY } from './Svg';

const CreateCheckboxes = ({
    dimensions,
    number,
    DimensionOfCube,
}) => {

    const numbersOfCehckboxes = new Array(dimensions);
    let subDimensionStart = 2;
    let subDimensionEnd = 1;

    let yRotationArray = [dimensions - 3];
    let addToYRotationInterval = 2;

    for (let i = 1; i < number - 2; i++) {
        yRotationArray.push(yRotationArray[yRotationArray.length - 1]
            - addToYRotationInterval);
        addToYRotationInterval++;
    }


    angles(dimensions);
    vertices(number, DimensionOfCube);

    for (let i = 0; i < dimensions; i++) {
        if (subDimensionEnd === subDimensionStart) {
            subDimensionStart++;
            subDimensionEnd = 1;
        }

        numbersOfCehckboxes[i] =
            `${subDimensionStart}-${subDimensionEnd}`;
        subDimensionEnd++;
    }

    numbersOfCehckboxes.reverse();

    const chengeAngle = (e) => {
        const index = e.target.getAttribute('index');
        const targ = e.target;
        let interval = setInterval(() => {
            if (!targ.checked || anglesArray.length < index) {
                clearInterval(interval);
            } else if (!useMouse) {
                anglesArray[index]++;
                anglesArray.length = dimensions;
                const matrix = generateMatrixes(number, anglesArray);
                generateCube(verticesArray, matrix, number);
            } else if (useMouse && canRotate) {
                if (mouseX < 0 && !yRotationArray.includes(+index)) {
                    anglesArray[index] -= 2;
                } else if (mouseX > 0 && !yRotationArray.includes(+index)) {
                    anglesArray[index] += 2;
                } else if (mouseX === 0 && !yRotationArray.includes(+index)) {
                    anglesArray[index] += anglesArray[index];
                } else if (mouseY < 0) {
                    anglesArray[index] -= 2;
                } else if (mouseY > 0) {
                    anglesArray[index] += 2;
                } else if (mouseY === 0) {
                    anglesArray[index] = anglesArray[index];
                }

                anglesArray.length = dimensions;
                const matrix = generateMatrixes(number, anglesArray);
                generateCube(verticesArray, matrix, number);
            }
        }, 50);

    }

    return (
        <section className='checkboxes'>
            <div className="angles">angles:</div>
            {
                numbersOfCehckboxes.map((field, index) => {
                    return (
                        <label key={index} className='labels'>
                            <input
                                key={index + 'c'}
                                type='checkbox'
                                name='checkbox'
                                onChange={chengeAngle}
                                index={index}
                                className="checkbox"
                            />
                            {field}
                        </label>
                    );
                })
            }
        </section>
    );
}

export default CreateCheckboxes;