import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div className="translation-wrapper">
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Do your stuff
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
