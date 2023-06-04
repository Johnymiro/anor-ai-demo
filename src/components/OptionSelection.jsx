import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">Anor demo</h1>

      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption({ option: item.option })}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
