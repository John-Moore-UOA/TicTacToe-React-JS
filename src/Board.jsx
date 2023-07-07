import { useState } from "react";
import "./styles.css";
import Square from "./Square";

function Board() {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [round, incrementRound] = useState(0);

  const handleSelectTile = (id) => {
    console.log(id + " selected");
    incrementRound(round + 1);
  };

  return (
    <>
      <div className="board">
        {data.map((value, index) => {
          return (
            <>
              <Square
                id={index}
                value={value}
                round={round}
                onSelectTile={handleSelectTile}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Board;
