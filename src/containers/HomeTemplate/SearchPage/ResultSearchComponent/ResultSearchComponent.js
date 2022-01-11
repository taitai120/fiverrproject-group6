import React from "react";
import "./ResultSearchComponent.scss";

function ResultSearchComponent(props) {
  const { result, results } = props;
  return (
    <div className="result__container">
      <h1>Results for "{result}"</h1>
      <p>{results} services available</p>
    </div>
  );
}

export default ResultSearchComponent;
