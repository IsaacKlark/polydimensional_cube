const initMatrix = (
    dimension, 
    cos1, 
    cos2, 
    sin1, 
    sin2, 
    angle
    ) => {
    const matrix = [];
    let row = [];
    let ones = 0;
    let multiplyByMinusOne = false;
    
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            if ((j === cos1 && i === cos1)
            || (j === cos2 && i === cos2)) {
                row.push(Math.cos(+angle));
            } else if ((j === sin1 && i === sin2)
            || (j === sin2 && i === sin1)) {
                !multiplyByMinusOne 
                    ? row.push(Math.sin(+angle)) 
                    : row.push(Math.sin(+angle) * -1);
            multiplyByMinusOne = true;
            } else if (j === ones) {
                row.push(1);
            } else {
                row.push(0);
            }
        }

        matrix.push(row);
        row = [];
        ones++;
    }

    return matrix;
}

export default initMatrix;