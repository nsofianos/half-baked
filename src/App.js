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
var Fraction = require("fractional").Fraction;

function App() {
  //console.log(new Fraction(1).multiply(6).toString());

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
      }, 20);
    }
  };

  const convertRecipe = (recipe) => {
    let parsedRecipe = parseUnicodeFractions(recipe);
    let parsedConverted = "";
    for (let i = 0; i < parsedRecipe.length; i++) {
      //if character is number & not part of a fraction, multiply by current multiplier
      parseInt(parsedRecipe.charAt(i)) &&
      !parseInt(parsedRecipe.charAt(i + 2)) &&
      parsedRecipe.charAt(i - 1) !== "/"
        ? (parsedConverted += parseInt(parsedRecipe.charAt(i)) * multiplier)
        : (parsedConverted += parsedRecipe.charAt(i));
    }
    let parsedConvertedWithFractions = convertFractions(parsedConverted);
    return parsedConvertedWithFractions.replace(/\n\s*\n/g, "\n");
  };

  const parseUnicodeFractions = (recipe) => {
    return recipe
      .replaceAll("½", "1/2")
      .replaceAll("¼", "1/4")
      .replaceAll("⅛", "1/8")
      .replaceAll("⅓", "1/3")
      .replaceAll("⅔", "2/3")
      .replaceAll("¾", "3/4");
  };

  const convertFractions = (recipe) => {
    let converted = "";
    for (let i = 0; i < recipe.length; i++) {
      let curIndex = recipe.charAt(i);
      let indexp1 = recipe.charAt(i + 1);
      let indexp2 = recipe.charAt(i + 2);
      if (
        //if mixed fraction, multiply and skip index forward
        parseInt(curIndex) &&
        /\s/g.test(indexp1) &&
        parseInt(indexp2)
      ) {
        converted += new Fraction(parseInt(curIndex))
          .add(
            new Fraction(parseInt(indexp2), parseInt(recipe.charAt([i + 4])))
          )
          .multiply(multiplier)
          .toString();
        i += 4;
      } else if (parseInt(curIndex) && indexp1 === "/" && parseInt(indexp2)) {
        converted += new Fraction(parseInt(curIndex), parseInt(indexp2))
          .multiply(multiplier)
          .toString();
        i += 2;
      } else {
        converted += curIndex;
      }
    }
    return converted;
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
