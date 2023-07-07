import { useState } from "react";
import "./styles.css";
import Square from "./Square";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function Board() {
  return (
    <>
      <div className="board">
        {data.map((value, index) => {
          return (
            <>
              <Square id={index} value={value} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Board;
