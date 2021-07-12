import React from "react";

function RecipeSteps(props) {
  const recipeSteps = props.steps.map((step, i) => {
    return (
      <li key={i}>{step}</li>
    )
  });

  return <ol>{recipeSteps}</ol>
}

export default RecipeSteps;