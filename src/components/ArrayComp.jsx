import React, { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 50 },
  { id: 1, type: "square", x: 150, y: 50 },
  { id: 2, type: "circle", x: 250, y: 50 },
];

const ArrayComp = () => {
  const [shapes, setShapes] = useState(initialShapes);

  const handleClick = () => {
    const moveshape = shapes.map((shap) => {
      if (shap.type === "square") {
        return shap;
      } else {
        return {
          ...shap,
          x: shap.x + 20,
        };
      }
    });
    setShapes(moveshape)
  };

  return (
    <>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 50,
            height: 50,
          }}
        />
      ))}
    </>
  );
};

export default ArrayComp;
