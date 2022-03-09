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
    else return <DisplayRecipe displayHandler={displayHandler} />;
  };
  return (
    <>
      <div className="logo-container">
        <img src="/images/RiceCup-logo/vector/logo2.svg"></img>
      </div>
      {getDisplay(currentDisplay)}
    </>
  );
}

export default App;
