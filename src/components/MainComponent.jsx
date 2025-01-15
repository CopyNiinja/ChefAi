import { useRef, useState } from "react";
import { getRecipeFromMistral } from "../AI.js";

import Recipe from "./Recipe";
// Code for MainComponent goes here

export default function MainComponent() {
  const [input, setInput] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const getRecipe = async () => {
    setLoading(true);
    let resp = await getRecipeFromMistral(ingredient);
    setLoading(false);
    executeScroll();
    setRecipe(resp);
  };
  return (
    <main className="container">
      <div className="container-input">
        <input
          type="text"
          placeholder="e.g. oregano"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="button-ingredient"
          onClick={() => {
            if (input.trim() === "") return;
            setIngredient([...ingredient, input]);
            setRecipe("");
            setInput("");
          }}
        >
          +Add Ingredient
        </button>
      </div>
      {/*  */}
      <div className="ingredient">
        {ingredient.length === 0 ? (
          <p className="ingredient-title" style={{ textAlign: "center" }}>
            Atleast add 3 ingredients to get a Recipe
          </p>
        ) : (
          <p className="ingredient-title">Ingredients on hand:</p>
        )}
        <ul className="ul-item">
          {ingredient.map((item) => (
            <li key={Math.random()} className="li-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      {ingredient.length > 2 && (
        <div className="container-recipe">
          <div className="recipe-button">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate ra recipe from your list of ingredients.</p>
            </div>
            <div>
              {loading ? (
                <div className="loader"></div>
              ) : (
                <button onClick={getRecipe}>Get a recipe</button>
              )}
            </div>
          </div>
        </div>
      )}
      <div ref={myRef}>{<Recipe recipe={recipe} />}</div>
    </main>
  );
}
