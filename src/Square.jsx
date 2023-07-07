import { useState } from "react";
import "./styles.css";

function getTileClassName(id, selectedTile, round) {
  if (selectedTile === id) {
    return round % 2 === 0 ? "playerOneSquare" : "playerTwoSquare";
  }
  return "square";
}

function Square({ value, id, round }) {
  const [selectedTile, setSelectedTile] = useState(null);

  return (
    <>
      {
        <div
          className={getTileClassName(id, selectedTile, round)}
          onClick={(event) => {
            setSelectedTile(id);
            console.log(id, round);
          }}
        >
          {value}
        </div>
      }{" "}
    </>
  );
}

export default Square;
