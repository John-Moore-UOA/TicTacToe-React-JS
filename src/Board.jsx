import { useState } from "react";
import "./styles.css";
import Square from "./Square";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const round = 0;

function Board() {
  return (
    <>
      <div className="board">
        {data.map((value, index) => {
          return (
            <>
              <Square id={index} value={value} round={round} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Board;
