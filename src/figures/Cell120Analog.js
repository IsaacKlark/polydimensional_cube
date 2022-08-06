import React from "react";

const Cell120Analog = ({ verticesArray, dimensionOfFigure }) => {
  console.log("vertices length", verticesArray.length);
  const linesSet = new Set();
  let test = new Set();

  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let length = 0;

        for (let k = 0; k < dimensionOfFigure; k++) {
          length += (verticesArray[j][k] - verticesArray[i][k]) ** 2;
        }

        const needLength = +dimensionOfFigure === 3 ? 74 : 46;
        test.add(+Math.round(Math.sqrt(length)));

        if (+Math.round(Math.sqrt(length)) === needLength) {
          linesSet.add(`${i}, ${j}`);
        }
      }
    }
  }

  // let length = 0;

  // for (let i = 0; i < 4; i++) {
  //   length += (verticesArray[265][i] - verticesArray[301][i]) ** 2;
  // }

  // console.log("length", Math.round(Math.sqrt(length)))

  const linesArray = Array.from(linesSet).map((item) => item.split(","));
  console.log("lines length", linesArray.length);
  console.log(
    "test",
    Array.from(test).sort((a, b) => a - b)
  );
  // console.log(linesArray.length)
  // const vars = Array.from(test).sort((a, b) => a-b)
  // const find = [];
  // const lengths = new Set();
  // vars.forEach(item => {
  //   const linesSet = new Set();
  //   for (let i = 0; i < verticesArray.length; i++) {
  //     for (let j = i; j < verticesArray.length; j++) {
  //       let length = 0;

  //       for (let k = 0; k < verticesArray[i].length; k++) {
  //           length += (verticesArray[i][k] - verticesArray[j][k])**2;
  //       }

  //       if (Math.round(Math.sqrt(length)) === +item) {
  //         linesSet.add(`${i}, ${j}`)
  //       }
  //     }
  //   }
  //   lengths.add(Array.from(linesSet).length);
  //   if (Array.from(linesSet).length === 72) {
  //     find.push({length: Array.from(linesSet).length, item})
  //   };
  // })
  // console.log("lengths", Array.from(lengths).sort((a, b) => a - b));
  // console.log("find", find);
  const amountOfLines = linesArray.length;
  let ids = 0;
  const lines = [];

  for (let i = 0; i < amountOfLines; i++) {
    lines.push(ids);
    ids += 1;
  }

  return (
    <svg width="600" height="400" className="svg">
      {lines.slice(0).map((id, index) => {
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

      {verticesArray.map((item, index) => (
        <circle
          onClick={() => {
            console.log(index);
          }}
          key={index}
          cx="300"
          cy="200"
          r="2"
          fill="white"
          id={`circle${index}`}
          className="circle"
        />
      ))}
    </svg>
  );
};

export default Cell120Analog;
