import Adjuster from "./components/Adjuster";
import DisplayRecipe from "./components/DisplayRecipe";
import Textarea from "./components/UI/Textarea";
import "./App.css";
import Button from "./components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Paper,
  Grid,
  Container,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import EditRecipe from "./components/EditRecipe";

function App() {
  const [multiplier, setMultiplier] = useState(0.5);
  const [convertedRecipe, setConvertedRecipe] = useState("");
  const [currentDisplay, setCurrentDisplay] = useState("edit");

  const displayHandler = (event) => {
    setCurrentDisplay(event.currentTarget.value);
  };

  const recipeChangeHandler = (event) => {
    setConvertedRecipe(convertRecipe(event.target.value));
  };

  //sets the multiplier
  const multiplierChangeHandler = (event) => {
    let multiplier = event.target.value;
    if (multiplier !== null) setMultiplier(multiplier);
  };

  const convertRecipe = (recipe) => {
    let convertedRecipe = "";
    for (let i = 0; i < recipe.length; i++) {
      parseInt(recipe.charAt(i))
        ? (convertedRecipe += parseInt(recipe.charAt(i)) * multiplier)
        : (convertedRecipe += recipe.charAt(i));
    }
    return convertedRecipe;
  };

  const getDisplay = (currentDisplay) => {
    if (currentDisplay === "edit")
      return (
        <EditRecipe
          recipeChangeHandler={recipeChangeHandler}
          displayHandler={displayHandler}
          multiplier={multiplier}
          multiplierChangeHandler={multiplierChangeHandler}
        />
      );
    else
      return (
        <DisplayRecipe
          convertedRecipe={convertedRecipe}
          displayHandler={displayHandler}
        />
      );
  };

  const getRecipe = () => {
    fetch(
      "https://api.spoonacular.com/recipes/extract?apiKey=60784736b42f4252a78b0d93536a96ca&url=https://www.allrecipes.com/recipe/231030/braised-corned-beef-brisket/"
    )
      .then((res) => res.json())
      .then((data) => console.log(parseIngredients(data.extendedIngredients)));
  };

  const parseIngredients = (data) => {
    return data.map((ingredient) => ingredient.original).join("\r\n");
  };

  return (
    <>
      <button onClick={getRecipe}></button>
      <div className="logo-container">
        <img src="/images/logo/default-monochrome.svg"></img>
      </div>
      {getDisplay(currentDisplay)}
    </>
  );
}

export default App;
