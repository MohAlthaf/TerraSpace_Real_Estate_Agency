import React from "react";
import { useDrop } from "react-dnd";

const RemoveZone = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PROPERTY",
    drop: (item) => onDrop(item.property), // Handle drop event to remove the item
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        border: "2px dashed red",
        height: "200px",
        textAlign: "center",
        lineHeight: "200px",
        backgroundColor: isOver ? "lightcoral" : "white",
        color: "red",
        fontWeight: "bold",
      }}
    >
      Drag here to Remove
    </div>
  );
};

export default RemoveZone;
