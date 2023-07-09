import "./App.css";
import {
  setVerticesArray,
  verticesArray,
  linesArray,
  setLinesArray,
  setModified,
  setPolygonsArray,
  polygonsArray as _polygons,
  modified,
} from "./vertices";
import Button from "@mui/material/Button";
import { useState } from "react";

const Modificators = ({ setReset, dimension }) => {
  const [truncation, setTruncation] = useState(40);
  const [originalVertices, setOriginalVertices] = useState([]);
  const [originalLines, setOriginalLines] = useState([]);
  const [originalPolygons, setOriginalPolygons] = useState([]);

  const truncationFn = (vertices, lines, polygons) => {
    const copyVertices = [...vertices];
    let newVertices = [];
    let newlines = [];
    let newPolygons = [];

    let trianglesInfo = [];
    polygons.forEach((polygon) => {
      let lines = [];
      let subVertices = [];

      for (let i = 0; i < polygon.length - 1; i++) {
        lines.push([polygon[i], polygon[i + 1]]);
      }

      lines.push([polygon[polygon.length - 1], polygon[0]]);
      lines.forEach((line) => {
        const vertex1 = [];
        const vertex2 = [];

        for (let i = 0; i < +dimension; i++) {
          vertex1.push(
            copyVertices[line[0]][i] +
              (copyVertices[line[1]][i] / 100) * truncation
          );
          vertex2.push(
            copyVertices[line[1]][i] +
              (copyVertices[line[0]][i] / 100) * truncation
          );
        }

        subVertices.push({
          vertex: vertex1,
          parent: line[0],
          index: newlines.length + subVertices.length,
        });
        subVertices.push({
          vertex: vertex2,
          parent: line[1],
          index: newlines.length + subVertices.length,
        });
      });

      const newPolygon = [];

      for (let i = 0; i < subVertices.length; i++) {
        newPolygon.push(newVertices.length + i);
      }

      for (let i = 0; i < newPolygon.length - 1; i++) {
        newlines.push([newPolygon[i], newPolygon[i + 1]]);
      }

      newlines.push([newPolygon[0], newPolygon[newPolygon.length - 1]]);

      newPolygons.push(newPolygon);
      trianglesInfo = [...trianglesInfo, ...subVertices];
      newVertices = [...newVertices, ...subVertices.map((el) => el.vertex)];
    });

    trianglesInfo.sort((a, b) => a.parent - b.parent);

    for (let i = 0; i <= trianglesInfo[trianglesInfo.length - 1].parent; i++) {
      let fragment = trianglesInfo.filter((el) => el.parent === i);
      let subFragmentVertex = fragment.map((el) => JSON.stringify(el.vertex));
      let subFragmentIndex = fragment.map((el) => el.index);

      let filtered = [];
      const vertices = [];
      subFragmentVertex.forEach((el, index) => {
        if (!filtered.includes(el)) {
          filtered.push(el);
          vertices.push(subFragmentIndex[index]);
        }
      });

      if (vertices.length >= 3) {
        function generateCombinations(arr) {
          const combinations = [];

          if (arr.length < 3) {
            console.log("Массив должен содержать по крайней мере 3 элемента.");
            return combinations;
          }

          const length = arr.length;

          for (let i = 0; i < length - 2; i++) {
            for (let j = i + 1; j < length - 1; j++) {
              for (let k = j + 1; k < length; k++) {
                const combination = [arr[i], arr[j], arr[k]];
                combinations.push(combination);
              }
            }
          }

          return combinations;
        }

        const combinations = generateCombinations(vertices);

        combinations.forEach((el) => {
          newPolygons.push(el);
        });
      }
    }

    setVerticesArray(newVertices);
    setPolygonsArray(newPolygons);
    setLinesArray(newlines);
    setReset(true);
  };

  const truncate = (vertices) => {
    setOriginalVertices(vertices);
    setOriginalLines(linesArray);
    setOriginalPolygons(_polygons);
    truncationFn(vertices, linesArray, _polygons);
    setModified(true);
  };

  return (
    <div className="modificatorsWrapper">
      <p className="block">Modificators</p>

      <div className="modificator">
        {_polygons.length && (
          <Button variant="contained" onClick={() => truncate(verticesArray)}>
            Truncate
          </Button>
        )}

        {modified && (
          <label className="rangeWrapper">
            <p>0%</p>
            <input
              min={0}
              max={100}
              step={1}
              value={truncation}
              type="range"
              onChange={(e) => {
                setTruncation(+e.target.value);
                truncationFn(originalVertices, originalLines, originalPolygons);
              }}
            />
            <p>100%</p>
          </label>
        )}
      </div>
    </div>
  );
};

export default Modificators;
