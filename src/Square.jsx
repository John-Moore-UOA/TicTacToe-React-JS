import { useState } from "react";
import "./styles.css";

function Square({ id, round, onSelectTile }) {
  const [selectedTile, setSelectedTile] = useState(null);

  const [className, setClassName] = useState("square");

  const decideClassName = (round, id) => {
    if (round % 2 === 0) {
      return "playerOneSquare";
    } else {
      return "playerTwoSquare";
    }
  };

  return (
    <>
      {
        <div
          className={className}
          onClick={(event) => {
            setSelectedTile(id);
            onSelectTile(id);
            setClassName(decideClassName(round, id));
          }}
        >
          {/* {className} */}
        </div>
      }{" "}
    </>
  );
}

export default Square;
