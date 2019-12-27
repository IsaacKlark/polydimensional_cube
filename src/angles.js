export let anglesArray = [0];

export const reset = () => {
    anglesArray = anglesArray.map(angle => {

    angle = 0;

    return angle;
    })
};

const angles = (arrayLength) => {
    const arrayOfAngles = [];

    for (let i = 0; i < arrayLength; i++) {
            arrayOfAngles.push(0);
    }

    anglesArray = arrayOfAngles;
}

export default angles;