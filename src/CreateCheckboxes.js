import React from 'react';
import angles, { anglesArray } from './angles';
import generateMatrixes from './generateMatrixes';
import generateCube from './generateCube';
import vertices, { verticesArray } from './vertices'

const CreateCheckboxes = ({ dimensions, number, DimensionOfCube }) => {

    const numbersOfCehckboxes = new Array(dimensions);
    let subDimensionStart = 2;
    let subDimensionEnd = 1;

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
            } else {
                anglesArray[index]++;
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
                        <label key={ index } className='labels'>
                            <input 
                                key={ index + 'c' }
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