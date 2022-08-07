import React from "react";

const Cell120Analog = ({ verticesArray, dimensionOfFigure }) => {
  console.log("vertices length", verticesArray.length);
  const linesSet = new Set();
  const test = [];
  for (let i = 0; i < verticesArray.length; i++) {
    for (let j = i; j < verticesArray.length; j++) {
      if (i !== j) {
        let differences2 = [0, 31, 19, 12];
        let allDifference19 = true;
        let case3Access = true;
        let differences3 = [69, 19, 19, 19];

        for (let k = 0; k < dimensionOfFigure; k++) {
          let difference =
            ((verticesArray[j][k] - verticesArray[i][k]) ** 2) ** (1 / 2);
          if (difference !== 19 && difference !== 20) allDifference19 = false;
          const index = differences2.indexOf(difference);
          if (index === -1) break;
          differences2.splice(index, 1);
        }

        for (let k = 0; k < dimensionOfFigure; k++) {
          let difference =
            ((verticesArray[j][k] - verticesArray[i][k]) ** 2) ** (1 / 2);
          const index = differences3.indexOf(difference);
          if (index === -1) break;
          differences3.splice(index, 1);
        }

        if (allDifference19) {
          for (let k = 0; k < dimensionOfFigure; k++) {
            let difference =
              ((verticesArray[j][k] - verticesArray[i][k]) ** 2) ** (1 / 2);
            if (difference !== 19 && difference !== 20) {
              allDifference19 = false;
              break;
            }
          }
        }

        let repeats = 0;
        for (let k = 0; k < dimensionOfFigure; k++) {
          let difference =
            ((verticesArray[j][k] - verticesArray[i][k]) ** 2) ** (1 / 2);
          if (difference === 0) {
            repeats++;
          } else if (difference !== 38) {
            case3Access = false;
            break;
          }
        }

        if (repeats !== 3) case3Access = false;

        if (!differences3.length) {
          test.push(`${i}, ${j}`);
        }
    

        if (allDifference19 || !differences2.length || case3Access) {
          linesSet.add(`${i}, ${j}`);
        }
      }
    }
  }

  // for (let i = 0; i < test.length; i++) {
  //   if (i % 7 === 0) linesSet.add(test[i]);
  // }

  // linesSet.add(test[0])
  // let control = false;
  // document.body.addEventListener("keydown", (e) => {
  //   if (e.key === "Control") control = true;
  // })

  // document.body.addEventListener("keyup", (e) => {
  //   if (e.key === "Control") control = false;
  // })

  console.log(test);
  const linesArray = Array.from(linesSet).map((item) => item.split(","));
  console.log("lines length", linesArray.length);

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
            // onMouseOver={(e) => {
            //   e.preventDefault();
            //   if (control) {
            //     e.target.style.display = "none"
            //   }
            // }}
          />
        );
      })}

      {verticesArray.map((item, index) => (
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
            e.target.style.display = "none"
          }}
        />
      ))}
    </svg>
  );
};

export default Cell120Analog;
