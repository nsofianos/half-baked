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
  const [currentInput, setCurrentInput] = useState("");
  const [currentDisplay, setCurrentDisplay] = useState("edit");
  const [inputType, setInputType] = useState("link");
  const [convertedRecipe, setConvertedRecipe] = useState("");
  const [loadingRecipe, setLoadingRecipe] = useState("false");

  const inputChangeHandler = (event) => {
    setCurrentInput(event.target.value);
  };

  const displayHandler = (event) => {
    setCurrentDisplay(event.currentTarget.value);
  };

  const inputTypeHandler = (event) => {
    setInputType(event.currentTarget.value);
  };
  //sets the multiplier
  const multiplierChangeHandler = (event) => {
    let multiplier = event.target.value;
    if (multiplier !== null) setMultiplier(multiplier);
  };

  const convertRecipeHandler = (event) => {
    setLoadingRecipe("true");
    if (inputType === "link") {
      getRecipe(currentInput).then((res) => {
        return (
          setConvertedRecipe(res),
          setLoadingRecipe("false"),
          setCurrentDisplay("display")
        );
      });
    } else {
      setTimeout(() => {
        setConvertedRecipe(convertRecipe(currentInput));
        setLoadingRecipe("false");
        setCurrentDisplay("display");
      }, 2000);
    }
  };

  const convertRecipe = (recipe) => {
    let converted = "";
    for (let i = 0; i < recipe.length; i++) {
      parseInt(recipe.charAt(i))
        ? (converted += parseInt(recipe.charAt(i)) * multiplier)
        : (converted += recipe.charAt(i));
    }
    return converted.replace(/\n\s*\n/g, "\n");
  };

  const getDisplay = (currentDisplay) => {
    if (currentDisplay === "edit")
      return (
        <EditRecipe
          inputChangeHandler={inputChangeHandler}
          convertRecipeHandler={convertRecipeHandler}
          displayHandler={displayHandler}
          multiplier={multiplier}
          multiplierChangeHandler={multiplierChangeHandler}
          inputType={inputType}
          inputTypeHandler={inputTypeHandler}
          loadingRecipe={loadingRecipe}
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

  const parseIngredients = (data) => {
    return data.map((ingredient) => ingredient.original).join("\r\n");
  };

  const getRecipe = (link) => {
    return fetch(
      `https://api.spoonacular.com/recipes/extract?apiKey=60784736b42f4252a78b0d93536a96ca&url=${link}`
    )
      .then((res) => res.json())
      .then((data) =>
        convertRecipe(parseIngredients(data.extendedIngredients))
      );
  };

  return (
    <>
      <div className="logo-container">
        <img src="/images/logo/default-monochrome.svg"></img>
      </div>
      {getDisplay(currentDisplay)}
    </>
  );
}

export default App;
