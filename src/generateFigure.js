import { Matrix } from './sylvester.src';

const generateFigure = (vertices, matrix, dimension) => {
    const verticesOnSvg = vertices.map(vertex => {
        let perspective = 550;
        let coordinates = matrix.multiply(Matrix.create(vertex));
        let x = coordinates.e(1, 1);
        let y = coordinates.e(2, 1);

        for (let i = 2; i < dimension; i++) {
            x = perspective * x / (coordinates.e(i + 1, 1) + perspective);
            y = perspective * y / (coordinates.e(i + 1, 1) + perspective);
            perspective += 100;
        }

        return {x, y};
    });

    const setCoordinatesToLines = Array.from(document.querySelectorAll('.line'));
    setCoordinatesToLines.map(line => {
        const index1 = line.getAttribute('vertex1');
        const index2 = line.getAttribute('vertex2');
        
        line.setAttribute("x1", 300 + verticesOnSvg[index1]?.x);
        line.setAttribute("x2", 300 + verticesOnSvg[index2]?.x);
        line.setAttribute("y1", 200 + verticesOnSvg[index1]?.y);
        line.setAttribute("y2", 200 + verticesOnSvg[index2]?.y);
        
        return 0;
    })

    return setCoordinatesToLines;
}

export default generateFigure;