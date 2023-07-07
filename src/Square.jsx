import { useState } from "react";
import "./styles.css";

function selectTile(selectedTile) {
  console.log(selectedTile + " was selected");
}

function Square({ value, id }) {
  const [selectedTile, setSelectedTile] = useState(null);
  const [round, incrementRound] = useState(0);

  return (
    <>
      {
        <div
          className={round % 2 === 0 ? "player-1-Square" : "player-2-Square"}
          onClick={(event) => {
            selectTile(id);
            setSelectedTile(id);
            incrementRound(round + 1);
            //console.log(id);
          }}
        >
          {value}
        </div>
      }{" "}
    </>
  );
}

export default Square;
