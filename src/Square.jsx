import { useState } from "react";
import "./styles.css";

function Square({ value, id, round, onSelectTile }) {
  const [selectedTile, setSelectedTile] = useState(null);

  let className = "square";

  const getTileClassName = (id, round) => {
    if (className != "square") return className;

    if (selectedTile === id) {
      className = round % 2 === 0 ? "playerOneSquare" : "playerTwoSquare";
      return className;
    }
    return "square";
  };

  return (
    <>
      {
        <div
          className={getTileClassName(id, round)}
          onClick={(event) => {
            setSelectedTile(id);
            onSelectTile(id);
          }}
        ></div>
      }{" "}
    </>
  );
}

export default Square;
