import React from "react";

const Instruction = ({ numberOfDimensions }) => {
  const instructions = [
    { dimension: 4, char: "q" },
    { dimension: 5, char: "w" },
    { dimension: 6, char: "e" },
    { dimension: 7, char: "r" },
    { dimension: 8, char: "t" },
    { dimension: 9, char: "y" },
    { dimension: 10, char: "u" },
    { dimension: 11, char: "i" },
    { dimension: 12, char: "o" },
    { dimension: 13, char: "p" },
    { dimension: 14, char: "a" },
    { dimension: 15, char: "s" },
    { dimension: 16, char: "d" },
    { dimension: 17, char: "f" },
    { dimension: 18, char: "g" },
    { dimension: 19, char: "h" },
    { dimension: 20, char: "j" },
    { dimension: 21, char: "k" },
    { dimension: 22, char: "l" },
    { dimension: 23, char: "z" },
    { dimension: 24, char: "x" },
    { dimension: 25, char: "c" },
    { dimension: 26, char: "v" },
    { dimension: 27, char: "b" },
    { dimension: 28, char: "n" },
    { dimension: 29, char: "m" },
  ];
  return (
    <table id="instructions">
      <tbody>
        {numberOfDimensions === 2 ? (
          <tr>
            <td>Right mouse down + drag left/right</td>
            <td>
              <strong>1-1</strong> rotation
            </td>
          </tr>
        ) : null}
        {numberOfDimensions >= 3 ? (
          <>
            <tr>
              <td>Right mouse down + drag left/right</td>
              <td>
                <strong>3-1</strong> rotation
              </td>
            </tr>
            <tr>
              <td>Right mouse down + drag up/down</td>
              <td>
                <strong>3-2</strong> rotation
              </td>
            </tr>
          </>
        ) : null}
        {instructions.map((instruction) => {
          if (numberOfDimensions >= instruction.dimension) {
            return (
              <React.Fragment key={instruction.char}>
                <tr>
                  <td>
                    <span className="key">{instruction.char}</span>+ right mouse down + drag
                    left/right
                  </td>
                  <td>
                    <strong>{instruction.dimension}-1</strong> rotation
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="key">{instruction.char}</span>+ right mouse down + drag
                    up/down
                  </td>
                  <td>
                    <strong>{instruction.dimension}-2</strong> rotation
                  </td>
                </tr>
              </React.Fragment>
            );
          }
        })}
        
      </tbody>
    </table>
  );
};

export default Instruction;
