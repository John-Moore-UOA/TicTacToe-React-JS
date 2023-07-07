import { useState } from "react";
import "./styles.css";

function Square({ id, round, onCompleteCheck }) {
  const [selectedTile, setSelectedTile] = useState(null);

  const [className, setClassName] = useState("square");

  const decideClassName = (round, id) => {
    if (round % 2 === 0) {
      return "playerOneSquare";
    } else {
      return "playerTwoSquare";
    }
  };

  const onSelectTile = (id) => {
    // select tile
    setSelectedTile(id);

    // check if tile is already selected
    if (className !== "square") {
      return onCompleteCheck(-1);
    }

    // decide on new class name
    setClassName(decideClassName(round, id));

    // send data back to board
    onCompleteCheck(id);
  };

  return (
    <>
      {
        <div
          className={className}
          onClick={(event) => {
            onSelectTile(id);
          }}
        >
          {/* {className} */}
        </div>
      }{" "}
    </>
  );
}

export default Square;
