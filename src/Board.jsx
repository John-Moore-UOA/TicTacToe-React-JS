import { useState, useRef } from "react";
import "./styles.css";
import Square from "./Square";

function Board() {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [round, incrementRound] = useState(0);

  const handleSelectTile = (id) => {
    if (id === -1) {
      // display error message
      console.log("already selected", round);
    } else {
      console.log("selected", round);
      incrementRound(round + 1);
      togglePlayer(round);
    }
  };

  const togglePlayer = (round) => {
    if (round % 2 === 0) {
      // background colour style tolight primary
    } else {
      // background colour style to light primary
    }
  };

  return (
    <>
      <div className="board">
        {data.map((index) => {
          return (
            <>
              <Square
                id={index}
                round={round}
                onCompleteCheck={handleSelectTile}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Board;
