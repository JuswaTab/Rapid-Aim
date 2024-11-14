import React from "react";

function Result({ score, onRetry }) {
  return (
    <div className="result-container">
      <div> Your Score is {score} </div>
      <div> Average kill per second : {(score / 15).toFixed(2)} </div>
      <div>
        Your aim is
        {score > 7 ? (
          <span style={{ color: "green" }}> Good </span>
        ) : (
          <span style={{ color: "red" }}> Not Good Enough </span>
        )}
      </div>
      <button className="start-button" onClick={onRetry}>
        Retry
      </button>
      <button className="start-button" onClick={() => window.location.reload()}>
        Go to Home
      </button>
    </div>
  );
}

export default Result;
