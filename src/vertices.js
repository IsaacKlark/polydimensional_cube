export let verticesArray = [];

const vertices =  (dimensions, DimensionOfCube) => {
    const verticesAmount = 2 ** dimensions;

    verticesArray = [];

    for (let i = 0; i < verticesAmount; i++) {
        const vertex = [];

        for(let j = 0; j < dimensions; j++) {

            if(Math.trunc(i / (2 ** j)) % 2 === 0
            && j < DimensionOfCube) {
                vertex.push(60);
            } else if (j < DimensionOfCube) {
                vertex.push(-65);
            } else {
                vertex.push(0);
            }
        }

        verticesArray.push(vertex);
    }

}

export default vertices;